"use client";
import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
const Scene = dynamic(() => import("./IdentityScene"), { ssr: false });
class SceneBoundary extends Component<
  { children: ReactNode; onFailure: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onFailure();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
export default function IdentityCard() {
  const stage = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(motion.matches);
    motion.addEventListener("change", update);
    let started = false;
    let frame = 0;
    let inView = false;
    const updateVisibility = () => setVisible(inView && !document.hidden);
    const preload = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        let supported = false;
        try {
          const c = document.createElement("canvas");
          const gl = c.getContext("webgl2");
          supported = !!gl;
          gl?.getExtension("WEBGL_lose_context")?.loseContext();
        } catch {}
        frame = requestAnimationFrame(() => {
          update();
          setEnabled(supported);
        });
      },
      { rootMargin: "250px 0px" },
    );
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (entry.intersectionRatio >= 0.2) setRevealed(true);
        updateVisibility();
      },
      { threshold: [0, 0.2] },
    );
    if (stage.current) {
      observer.observe(stage.current);
      preload.observe(stage.current);
    }
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", updateVisibility);
      observer.disconnect();
      preload.disconnect();
    };
  }, []);
  return (
    <div
      ref={stage}
      className={`identity-stage v4-identity ${ready ? "scene-ready" : ""}`}
      data-renderer={ready ? "webgl" : "static"}
    >
      <div className="identity-light" aria-hidden="true" />
      <div className="identity-fallback" aria-hidden="true">
        <div className="static-card">
          <div className="static-card-top">
            P / W <span>PERSONAL PORTFOLIO</span>
          </div>
          <div className="static-card-type">
            PW<span>.</span>
          </div>
          <div className="static-card-photo">FOTO PERSONAL BELUM TERSEDIA</div>
          <div className="static-card-name">
            Prawira Wibawa
            <br />
            Hutagalung.
          </div>
          <div className="static-card-foot">SOCIAL MEDIA & GRAPHIC DESIGN</div>
        </div>
      </div>
      {enabled && (
        <SceneBoundary
          onFailure={() => {
            setReady(false);
            setEnabled(false);
          }}
        >
          <div className="identity-canvas" aria-hidden="true">
            <Scene
              reduced={reduced}
              visible={visible}
              revealed={revealed}
              onReady={() => setReady(true)}
              onFailure={() => {
                setReady(false);
                setEnabled(false);
              }}
            />
          </div>
        </SceneBoundary>
      )}
      <div className="identity-caption">
        <span className="short-line" /> PERSONAL IDENTITY{" "}
        <span className="identity-mode">
          {ready ? "3D STUDY" : "STATIC STUDY"}
        </span>
      </div>
      <span className="sr-only">
        Kartu identitas Prawira. Area foto menggunakan monogram karena foto asli
        belum tersedia.{" "}
        {ready ? "Visual 3D aktif." : "Visual statis pengganti 3D."}
      </span>
    </div>
  );
}
