import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./v4.css";
import "./v7.css";
const inter = localFont({
  src: "../public/fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
});
const space = localFont({
  src: "../public/fonts/space-grotesk-latin.woff2",
  variable: "--font-space",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Prawira Wibawa Hutagalung — Portfolio",
    template: "%s · Prawira",
  },
  description:
    "Social Media & Graphic Designer · AI-Assisted Web Creator. Portofolio Prawira Wibawa Hutagalung.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={`${inter.variable} ${space.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Lewati navigasi
        </a>
        {children}
      </body>
    </html>
  );
}
