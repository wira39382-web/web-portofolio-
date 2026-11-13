import Navbar from "@/components/Navbar";
import {
  Hero,
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
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Expertise />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
