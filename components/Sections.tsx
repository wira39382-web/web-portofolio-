import { Arrow, Asterisk } from "./Icons";
import Link from "next/link";
import experience from "@/content/experience.json";
import { featured, projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import IdentityCard from "./IdentityCard";
export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label">
      <span>{number}</span>
      <span className="short-line" />
      {children}
    </p>
  );
}
export function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            PERSONAL PORTFOLIO <span>/</span> PRAWIRA
          </p>
          <h1>
            Prawira Wibawa
            <br />
            Hutagalung<span>.</span>
          </h1>
          <div className="hero-roles">
            <p>
              Social Media &<br />
              Graphic Designer
            </p>
            <p>AI-Assisted Web Creator</p>
          </div>
          <p className="hero-description">
            Menyusun konten visual, mengelola media sosial, dan membuat website
            dengan dukungan AI.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              Lihat Proyek{" "}
              <span aria-hidden="true">
                <Arrow />
              </span>
            </a>
            <a className="text-link" href="#about">
              Tentang Saya <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <IdentityCard />
      </div>
      <div className="hero-footer">
        <span>
          SOCIAL MEDIA <i>·</i> GRAPHIC DESIGN <i>·</i> WEB CREATION
        </span>
        <a href="#work">
          JELAJAHI PORTFOLIO <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
export function Work() {
  return (
    <section className="work-section section" id="work" tabIndex={-1}>
      <div className="container">
        <SectionLabel number="01">SELECTED WORKS</SectionLabel>
        <div className="section-heading">
          <h2>
            Ide menjadi visual.
            <br />
            <span>Visual menjadi cerita.</span>
          </h2>
          <p>
            Proyek terpilih dalam media sosial, desain grafis, dan pembuatan
            website.
          </p>
        </div>
        <div className="work-grid">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <details className="all-projects">
          <summary>
            Proyek lainnya <span aria-hidden="true">+</span>
          </summary>
          <div>
            {projects
              .filter((p) => !p.featured)
              .map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`}>
                  <span>
                    {p.name}
                    <small>{p.category} · Materi belum lengkap</small>
                  </span>
                  <span aria-hidden="true">
                    <Arrow />
                  </span>
                </Link>
              ))}
          </div>
        </details>
        <p className="asset-note">
          Seluruh preview masih berupa placeholder. Materi karya asli dan detail
          kontribusi sedang dilengkapi.
        </p>
      </div>
    </section>
  );
}
export function About() {
  return (
    <section
      id="about"
      className="section container about-section"
      tabIndex={-1}
    >
      <div className="portrait-frame">
        <div className="portrait-top">
          <span>PERSONAL PORTRAIT</span>
          <span>PW / 01</span>
        </div>
        <span className="portrait-mark" aria-hidden="true">
          pw.
        </span>
        <div className="portrait-caption">
          <span className="portrait-cross" aria-hidden="true">
            +
          </span>
          <p>
            Foto personal
            <br />
            akan ditambahkan<small>Ruang untuk portrait asli Prawira.</small>
          </p>
        </div>
      </div>
      <div className="about-copy">
        <SectionLabel number="02">TENTANG SAYA</SectionLabel>
        <h2>
          Di antara visual
          <br />
          dan dunia <span>digital.</span>
        </h2>
        <p>
          Saya Prawira Wibawa Hutagalung, dengan latar pendidikan S1 Bisnis
          Digital dan konsentrasi Digital Marketing.
        </p>
        <p>
          Minat saya ada pada konten media sosial, desain grafis, dan pembuatan
          website dengan dukungan AI. Portofolio ini merangkum proyek tim,
          pengalaman magang, serta eksplorasi selama perkuliahan.
        </p>
        <div className="education-note">
          <span className="eyebrow">LATAR PENDIDIKAN</span>
          <p>
            Bisnis Digital <span>/</span> Digital Marketing
          </p>
        </div>
        <a className="text-link" href="#journey">
          Lihat perjalanan saya{" "}
          <span aria-hidden="true">
            <Arrow />
          </span>
        </a>
      </div>
    </section>
  );
}
const skills = [
  {
    title: "Social Media &\nContent Design",
    text: "Pengelolaan akun Instagram dan desain konten visual untuk kebutuhan media sosial.",
    slug: "agrinex-social-media",
    label: "AgriNex Social Media",
    symbol: "↗",
  },
  {
    title: "Graphic\nDesign",
    text: "Desain konten Instagram dan perancangan ulang banner dalam pengalaman magang.",
    slug: "komdigi-graphic-design",
    label: "Komdigi Graphic Design",
    symbol: "✳",
  },
  {
    title: "AI-Assisted\nWeb Creation",
    text: "Pembuatan website dengan dukungan AI, dengan perhatian pada struktur dan tampilan.",
    slug: "desa-sei-rotan-website",
    label: "Website Desa Sei Rotan",
    symbol: "⌘",
  },
];
export function Expertise() {
  return (
    <section className="section expertise-section" id="expertise" tabIndex={-1}>
      <div className="container">
        <SectionLabel number="03">KEAHLIAN</SectionLabel>
        <div className="section-heading">
          <h2>
            Tiga bidang.
            <br />
            <span>Satu arah kreatif.</span>
          </h2>
          <p>
            Kompetensi yang saling melengkapi untuk menyampaikan pesan secara
            visual dan digital.
          </p>
        </div>
        <div className="expertise-grid">
          {skills.map((s, i) => (
            <article key={s.slug}>
              <div className="expertise-top">
                <span>0{i + 1}</span>
                <span aria-hidden="true">
                  {i === 0 ? <Arrow /> : i === 1 ? <Asterisk /> : s.symbol}
                </span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Link className="text-link" href={`/projects/${s.slug}`}>
                {s.label}
                <span aria-hidden="true">
                  <Arrow />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Journey() {
  return (
    <section id="journey" className="section container" tabIndex={-1}>
      <SectionLabel number="04">JOURNEY & CERTIFICATES</SectionLabel>
      <div className="section-heading">
        <h2>
          Belajar, berkarya,
          <br />
          <span>dan terus bertumbuh.</span>
        </h2>
        <p>
          Pengalaman dan kegiatan dari catatan pribadi. Periode serta dokumen
          pendukung sedang dilengkapi.
        </p>
      </div>
      <div className="journey-layout">
        <div className="timeline">
          {experience.map((e, i) => (
            <article key={e.id}>
              <span className="timeline-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="journey-org">{e.organization}</p>
                <h3>{e.title}</h3>
                <p>{e.summary}</p>
                {e.id === "agrinex-kmi" && (
                  <small className="verification-note">
                    Sebutan finalis menunggu verifikasi sertifikat resmi.
                  </small>
                )}
                {e.id === "rumah-daging" && (
                  <small className="verification-note">
                    Hubungan dengan program bootcamp perlu dikonfirmasi.
                  </small>
                )}
              </div>
              <span className="duration">
                {e.duration ?? "Periode menyusul"}
              </span>
            </article>
          ))}
        </div>
        <aside className="certificate-panel">
          <span className="certificate-icon" aria-hidden="true">
            ▧
          </span>
          <p className="eyebrow">DOKUMEN PENDUKUNG</p>
          <h3>
            Sertifikat &<br />
            rekam perjalanan.
          </h3>
          <p>
            Sertifikat asli belum tersedia. Dokumen magang, bootcamp, dan
            kegiatan akan ditampilkan setelah dilengkapi.
          </p>
          <span className="status-label">Menunggu dokumen asli</span>
        </aside>
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <section id="contact" className="contact-section section" tabIndex={-1}>
      <div className="container">
        <SectionLabel number="05">KONTAK</SectionLabel>
        <div className="contact-grid">
          <h2>
            Setiap koneksi,
            <br />
            <span>awal cerita baru.</span>
          </h2>
          <div>
            <p>
              Untuk percakapan seputar desain, konten media sosial, dan website.
            </p>
            <div className="contact-pending">
              <span aria-hidden="true">
                <Arrow />
              </span>
              <div>
                Kanal kontak sedang disiapkan
                <small>Email dan tautan profesional belum tersedia.</small>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <Link className="wordmark" href="/">
            PRAWIRA<span>.</span>
          </Link>
          <span>PORTFOLIO / DESIGN FOUNDATION V3</span>
          <a className="text-link" href="#home">
            Kembali ke atas <span aria-hidden="true">↑</span>
          </a>
        </footer>
      </div>
    </section>
  );
}
