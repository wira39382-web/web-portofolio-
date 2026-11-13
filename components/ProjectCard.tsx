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
      <span className="visual-monogram" aria-hidden="true">
        {project.slug.startsWith("agrinex")
          ? "Ag."
          : project.slug.startsWith("komdigi")
            ? "K."
            : project.slug.startsWith("desa")
              ? "SR."
              : "PW."}
      </span>
      <div className="visual-bottom">
        <span>Preview belum tersedia</span>
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
    <article className="project-card">
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
