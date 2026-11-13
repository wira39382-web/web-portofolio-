import Image from "next/image";
import { Arrow } from "./Icons";
import IdentityCard from "./IdentityCard";
import media from "@/content/media.json";
export function CinematicHero() {
  const portrait = media.heroPortrait as string | null;
  return (
    <section className="cinematic-hero" id="home" aria-labelledby="hero-name">
      <div className={`hero-media ${portrait ? "has-photo" : "photo-pending"}`}>
        <div className="hero-media-parallax">
          {portrait ? (
            <Image
              src={portrait}
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-personal-photo"
              style={{ objectPosition: media.heroPosition }}
            />
          ) : (
            <div className="hero-photo-placeholder" aria-hidden="true">
              <span className="hero-placeholder-letter">
                P<span>.</span>
              </span>
              <span className="hero-placeholder-axis" />
            </div>
          )}
        </div>
        <div className="hero-media-shade" />
        {!portrait && (
          <p className="hero-photo-caption">
            <span className="photo-caption-line" />
            Foto personal belum tersedia
            <small>Ruang untuk foto asli Prawira</small>
          </p>
        )}
      </div>
      <div className="container cinematic-hero-inner">
        <div className="human-hero-copy">
          <p className="eyebrow hero-opening-label">
            PERSONAL PORTFOLIO <span>/</span> PRAWIRA
          </p>
          <h1 id="hero-name">
            <span className="hero-name-main">Prawira</span>
            <span className="hero-name-family">
              Wibawa Hutagalung<span>.</span>
            </span>
          </h1>
          <div className="human-hero-roles">
            <p>
              Social Media &<br />
              Graphic Designer
            </p>
            <p>AI-Assisted Web Creator</p>
          </div>
          <p className="human-hero-description">
            Menyusun konten visual, mengelola media sosial, dan membuat website
            dengan dukungan AI.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              Lihat Proyek <Arrow />
            </a>
            <a className="text-link" href="#about">
              Tentang Saya <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="hero-scene-footer">
          <span>VISUAL THINKING. DIGITAL MAKING.</span>
          <a href="#identity">
            MENGENAL PRAWIRA <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export function DigitalIdentity() {
  return (
    <section
      className="digital-identity-section"
      id="identity"
      tabIndex={-1}
      aria-labelledby="identity-title"
    >
      <div className="identity-bridge" aria-hidden="true" />
      <div className="container digital-identity-grid">
        <div className="identity-editorial-copy">
          <p className="section-label">
            <span>01</span>
            <span className="short-line" />
            DIGITAL IDENTITY
          </p>
          <h2 id="identity-title">
            Satu identitas.
            <br />
            <span>
              Banyak ruang
              <br />
              untuk berkarya.
            </span>
          </h2>
          <p>
            Konten media sosial, desain grafis, dan website. Tiga bidang yang
            saya eksplorasi dalam ruang digital.
          </p>
          <a href="#work" className="text-link">
            Telusuri karya terpilih <Arrow />
          </a>
        </div>
        <div className="identity-visual-wrap">
          <IdentityCard />
        </div>
      </div>
      <div className="container identity-to-work">
        <span>IDENTITAS → KARYA</span>
        <span className="identity-to-work-line" aria-hidden="true" />
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
