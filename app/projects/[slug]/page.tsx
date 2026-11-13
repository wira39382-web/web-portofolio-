import { Arrow } from "@/components/Icons";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, contexts } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import { ProjectVisual } from "@/components/ProjectCard";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title:
      projects.find((p) => p.slug === slug)?.name ?? "Proyek tidak ditemukan",
  };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <Navbar />
      <main id="main" className="container case-study">
        <Link className="text-link" href="/#work">
          ← Kembali ke karya
        </Link>
        <p className="eyebrow case-eyebrow">{p.category}</p>
        <h1>{p.name}</h1>
        <p className="case-status">
          Detail proyek sedang disiapkan. Visual asli, bukti, dan ruang lingkup
          kontribusi belum lengkap.
        </p>
        <dl className="case-facts">
          <div>
            <dt>Konteks</dt>
            <dd>{contexts[p.context] ?? p.context}</dd>
          </div>
          <div>
            <dt>Peran tercatat</dt>
            <dd>{p.role}</dd>
          </div>
          <div>
            <dt>Durasi</dt>
            <dd>{p.knownDuration ?? "Belum dikonfirmasi"}</dd>
          </div>
        </dl>
        <ProjectVisual project={p} index={Math.max(0, projects.indexOf(p))} />
        <div className="case-columns">
          <section>
            <h2>Kontribusi tercatat</h2>
            <p>
              Berdasarkan keterangan pemilik portofolio; rincian peran pribadi
              dan tim masih perlu dilengkapi.
            </p>
            <ul>
              {p.verifiedFromUserAccount.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Materi yang dibutuhkan</h2>
            <ul>
              {p.needsEvidence.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="asset-note">
              Tautan publik dan hasil terukur belum tersedia.
            </p>
          </section>
        </div>
        <Link href="/#work" className="button primary">
          Lihat karya lainnya <Arrow />
        </Link>
      </main>
    </>
  );
}
