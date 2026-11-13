import data from "@/content/projects.json";
export const projects = data;
export type Project = (typeof projects)[number];
export const featured = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));
export const titles: Record<string, string> = {
  "agrinex-social-media": "AgriNex — Social Media",
  "komdigi-graphic-design": "Komdigi — Graphic Design",
  "desa-sei-rotan-website": "Website Desa Sei Rotan",
  "agrinex-business-website": "AgriNex — Company Profile",
};
export const contexts: Record<string, string> = {
  "Team / business project": "Proyek tim / usaha",
  Internship: "Magang",
  "KKN / community project": "KKN / pengabdian masyarakat",
  "Team assignment / program relation to verify":
    "Penugasan tim · konteks program perlu dikonfirmasi",
  "University assignment / prototype": "Tugas kuliah / prototipe",
  "University project / marketplace concept":
    "Proyek kuliah / konsep marketplace",
  "Academic / personal work collection": "Koleksi akademik / personal",
};
