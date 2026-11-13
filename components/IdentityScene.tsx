"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
function roundedShape(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  const x = -w / 2,
    y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}
function createPrint() {
  const styles = getComputedStyle(document.documentElement);
  const heading =
    styles.getPropertyValue("--font-space").trim() || "sans-serif";
  const body = styles.getPropertyValue("--font-inter").trim() || "sans-serif";
  const c = document.createElement("canvas");
  c.width = 840;
  c.height = 1180;
  const x = c.getContext("2d")!;
  const g = x.createLinearGradient(0, 0, 840, 1180);
  g.addColorStop(0, "#25364e");
  g.addColorStop(0.38, "#162238");
  g.addColorStop(1, "#0d1626");
  x.fillStyle = g;
  x.fillRect(0, 0, 840, 1180);
  x.fillStyle = "#cfdaea";
  x.font = `500 23px ${body}`;
  x.fillText("P / W", 65, 85);
  x.font = `400 15px ${body}`;
  x.fillStyle = "#a9bad1";
  x.fillText("PERSONAL PORTFOLIO", 532, 83);
  x.strokeStyle = "#ffffff22";
  x.beginPath();
  x.moveTo(65, 124);
  x.lineTo(775, 124);
  x.stroke();
  x.font = `500 360px ${heading}`;
  x.fillStyle = "#9eb9de";
  x.fillText("PW", 40, 575);
  x.fillStyle = "#3b82f6";
  x.font = `500 255px ${heading}`;
  x.fillText(".", 683, 573);
  x.font = `400 15px ${body}`;
  x.fillStyle = "#b8c8de";
  x.fillText("FOTO PERSONAL BELUM TERSEDIA", 65, 666);
  x.fillStyle = "#ffffff10";
  x.fillRect(65, 711, 710, 1);
  x.font = `400 63px ${heading}`;
  x.fillStyle = "#eef3fa";
  x.fillText("Prawira Wibawa", 65, 834);
  x.fillText("Hutagalung.", 65, 907);
  x.font = `400 18px ${body}`;
  x.fillStyle = "#a5b8d3";
  x.fillText("SOCIAL MEDIA & GRAPHIC DESIGN", 65, 1001);
  x.strokeStyle = "#ffffff20";
  x.beginPath();
  x.moveTo(65, 1050);
  x.lineTo(775, 1050);
  x.stroke();
  x.font = `400 14px ${body}`;
  x.fillStyle = "#8ab4f8";
  x.fillText("VISUAL / DIGITAL", 65, 1102);
  x.fillStyle = "#a7bad5";
  x.fillText("PRAWIRA.", 677, 1102);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
function Card({
  reduced,
  revealed,
  onReady,
}: {
  reduced: boolean;
  revealed: boolean;
  onReady: () => void;
}) {
  const ref = useRef<THREE.Group>(null);
  const firstVisible = useRef<number | null>(null);
  const touch = useMemo(() => matchMedia("(pointer: coarse)").matches, []);
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);
  const { gl, invalidate } = useThree();
  const geometry = useMemo(
    () =>
      new THREE.ExtrudeGeometry(roundedShape(2.8, 3.94, 0.16), {
        depth: 0.075,
        bevelEnabled: true,
        bevelSegments: 4,
        steps: 1,
        bevelSize: 0.035,
        bevelThickness: 0.025,
        curveSegments: 12,
      }),
    [],
  );
  const face = useMemo(() => {
    const face = new THREE.ShapeGeometry(roundedShape(2.78, 3.92, 0.15));
    const pos = face.getAttribute("position"),
      uv = face.getAttribute("uv");
    for (let i = 0; i < pos.count; i++)
      uv.setXY(i, (pos.getX(i) + 1.39) / 2.78, (pos.getY(i) + 1.96) / 3.92);
    uv.needsUpdate = true;
    return face;
  }, []);
  const environment = useMemo(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const room = new RoomEnvironment();
    const env = pmrem.fromScene(room, 0.04);
    room.dispose();
    pmrem.dispose();
    return env;
  }, [gl]);
  // Shape UVs use local units; normalize to map the typographic print precisely.
  useEffect(() => {
    let cancelled = false;
    let print: THREE.CanvasTexture;
    document.fonts.ready.then(() => {
      if (cancelled) return;
      print = createPrint();
      setTexture(print);
      invalidate();
      onReady();
    });
    return () => {
      cancelled = true;
      print?.dispose();
    };
  }, [invalidate, onReady]);
  useEffect(() => () => environment.dispose(), [environment]);
  useEffect(
    () => () => {
      geometry.dispose();
      face.dispose();
    },
    [geometry, face],
  );
  useFrame(({ clock, pointer }, delta) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    if (revealed && firstVisible.current === null) firstVisible.current = t;
    const elapsed =
      firstVisible.current === null
        ? 0
        : Math.min(1, (t - firstVisible.current) / 0.95);
    const entrance = reduced ? 1 : 1 - Math.pow(1 - elapsed, 3);
    ref.current.scale.setScalar(0.86 + 0.14 * entrance);
    ref.current.position.z = -0.5 * (1 - entrance);
    ref.current.rotation.z = -0.06 - 0.1 * (1 - entrance);
    const targetX = 0.06 + (reduced || touch ? 0 : pointer.y * 0.08),
      targetY =
        -0.2 - 0.06 * (1 - entrance) + (reduced || touch ? 0 : pointer.x * 0.1);
    ref.current.rotation.x = THREE.MathUtils.damp(
      ref.current.rotation.x,
      targetX,
      4,
      delta,
    );
    ref.current.rotation.y = THREE.MathUtils.damp(
      ref.current.rotation.y,
      targetY,
      4,
      delta,
    );
    ref.current.position.y = reduced ? 0 : Math.sin(t * 1.15) * 0.045;
  });
  return (
    <>
      <primitive object={environment.texture} attach="environment" />
      <group ref={ref} rotation={[0.06, -0.26, -0.16]}>
        <mesh geometry={geometry}>
          <meshStandardMaterial
            color="#54769d"
            metalness={0.78}
            roughness={0.27}
          />
        </mesh>
        <mesh geometry={face} position={[0, 0, 0.102]}>
          <meshPhysicalMaterial
            clearcoat={0.55}
            clearcoatRoughness={0.32}
            key={texture?.uuid ?? "pending"}
            map={texture}
            color={texture ? "#ffffff" : "#17243a"}
            metalness={0.22}
            roughness={0.42}
            envMapIntensity={0.4}
          />
        </mesh>
        <mesh position={[0, 1.83, 0.12]}>
          <boxGeometry args={[0.38, 0.035, 0.012]} />
          <meshStandardMaterial color="#0b1220" roughness={0.9} />
        </mesh>
      </group>
    </>
  );
}
export default function IdentityScene({
  reduced,
  visible,
  revealed,
  onReady,
  onFailure,
}: {
  reduced: boolean;
  visible: boolean;
  revealed: boolean;
  onReady: () => void;
  onFailure: () => void;
}) {
  const handlers = useRef({ onReady, onFailure });
  useEffect(() => {
    handlers.current = { onReady, onFailure };
  }, [onReady, onFailure]);
  const ready = useMemo(() => () => handlers.current.onReady(), []);
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 36 }}
      dpr={[1, 1.5]}
      frameloop={visible && !reduced ? "always" : "demand"}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        gl.domElement.addEventListener(
          "webglcontextlost",
          () => handlers.current.onFailure(),
          { once: true },
        );
      }}
      fallback={null}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[-3, 5, 5]} intensity={2.4} color="#e5edff" />
      <directionalLight position={[4, 0, 2]} intensity={1.8} color="#8ab4f8" />
      <Card reduced={reduced} revealed={revealed} onReady={ready} />
    </Canvas>
  );
}
