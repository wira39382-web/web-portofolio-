"use client";
import { Arrow } from "./Icons";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
const links = [
  ["work", "Karya"],
  ["about", "Tentang"],
  ["expertise", "Keahlian"],
  ["journey", "Pengalaman"],
  ["contact", "Kontak"],
];
export default function Navbar({ home = false }: { home?: boolean }) {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);
      let current = "";
      for (const [id] of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 180) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  function close() {
    if (menu.current) menu.current.open = false;
  }
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="wordmark" aria-label="Prawira — Beranda">
          PRAWIRA<span>.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`${home ? "" : "/"}#${id}`}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <span className="nav-note">DESIGN & DIGITAL</span>
        <details
          className="mobile-nav"
          ref={menu}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              close();
              menu.current?.querySelector("summary")?.focus();
            }
          }}
        >
          <summary aria-label="Buka atau tutup navigasi">
            Menu <span aria-hidden="true">☰</span>
          </summary>
          <nav aria-label="Navigasi mobile">
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`${home ? "" : "/"}#${id}`}
                onClick={() => {
                  close();
                  if (home) {
                    const target = document.getElementById(id);
                    target?.focus({ preventScroll: true });
                  }
                }}
                aria-current={active === id ? "location" : undefined}
              >
                {label}
                <span aria-hidden="true">
                  <Arrow />
                </span>
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
