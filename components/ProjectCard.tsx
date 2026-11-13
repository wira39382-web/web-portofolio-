import { Arrow } from "./Icons";
import Link from "next/link";
import { type Project, titles, contexts } from "@/lib/projects";
export function ProjectVisual({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <div className={`project-visual visual-${index % 4}`}>
      <div className="visual-top">
        <span>
          {String(index + 1).padStart(2, "0")} /{" "}
          {project.category.includes("Web") ? "WEB CREATION" : "VISUAL DESIGN"}
        </span>
        <span aria-hidden="true">
          <Arrow />
        </span>
      </div>
      <div className="project-stage-type" aria-hidden="true">
        {project.slug === "agrinex-social-media" ? (
          <>
            <span className="stage-kicker">SOCIAL MEDIA / VISUAL DESIGN</span>
            <strong>
              AgriNex<span>.</span>
            </strong>
            <em>Konten visual. Identitas digital.</em>
          </>
        ) : project.slug === "komdigi-graphic-design" ? (
          <>
            <span className="stage-kicker">GRAPHIC DESIGN / INTERNSHIP</span>
            <strong>
              Komdigi<span>.</span>
            </strong>
            <em>Konten & materi grafis</em>
          </>
        ) : project.slug === "desa-sei-rotan-website" ? (
          <>
            <span className="stage-kicker">COMMUNITY / WEB CREATION</span>
            <strong>
              Sei
              <br />
              Rotan<span>.</span>
            </strong>
          </>
        ) : project.slug === "agrinex-business-website" ? (
          <>
            <span className="stage-kicker">
              BUSINESS PROFILE / WEB CREATION
            </span>
            <strong>
              AgriNex<span>.</span>
            </strong>
            <em>Profil usaha dalam ruang digital.</em>
          </>
        ) : (
          <strong>{project.name}</strong>
        )}
      </div>
      <div className="visual-bottom">
        <span>Aset proyek belum tersedia</span>
        <span>ASET ASLI MENYUSUL</span>
      </div>
    </div>
  );
}
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project-card project-position-${index}`}>
      <Link href={`/projects/${project.slug}`} className="project-link">
        <ProjectVisual project={project} index={index} />
        <div className="project-meta">
          <div>
            <p className="project-context">
              {contexts[project.context] ?? project.context}
              {project.knownDuration ? ` · ${project.knownDuration}` : ""}
            </p>
            <h3>{titles[project.slug] ?? project.name}</h3>
          </div>
          <span className="round-arrow" aria-hidden="true">
            <Arrow />
          </span>
        </div>
      </Link>
      <p className="project-description">
        {project.verifiedFromUserAccount.join(". ")}.
      </p>
    </article>
  );
}
