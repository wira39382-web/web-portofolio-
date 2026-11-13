import OpeningMotion from "@/components/OpeningMotion";
import Navbar from "@/components/Navbar";
import {
  Hero,
  DigitalIdentity,
  Work,
  About,
  Expertise,
  Journey,
  Contact,
} from "@/components/Sections";
export default function Home() {
  return (
    <>
      <Navbar home />
      <main id="main" tabIndex={-1}>
        <OpeningMotion />
        <div className="opening-sequence">
          <Hero />
          <DigitalIdentity />
          <Work />
        </div>
        <About />
        <Expertise />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
