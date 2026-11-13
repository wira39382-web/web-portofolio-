import { Arrow } from "@/components/Icons";
import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="container case-study">
      <p className="eyebrow">404 / HALAMAN TIDAK DITEMUKAN</p>
      <h1>
        Belum ada cerita
        <br />
        di halaman ini.
      </h1>
      <Link className="button primary" href="/">
        Kembali ke beranda <Arrow />
      </Link>
    </main>
  );
}
