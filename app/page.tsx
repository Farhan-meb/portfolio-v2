import { Hero } from "@/components/sections/Hero";
import { Profile } from "@/components/sections/Profile";
import { Philosophy } from "@/components/sections/Philosophy";
import { Experience } from "@/components/sections/Experience";
import { Metrics } from "@/components/sections/Metrics";
import { Work } from "@/components/sections/Work";
import { Capabilities } from "@/components/sections/Capabilities";
import { CvTeaser } from "@/components/sections/CvTeaser";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Philosophy />
      <Experience />
      <Metrics />
      <Work />
      <Capabilities />
      <CvTeaser />
      <Contact />
    </>
  );
}
