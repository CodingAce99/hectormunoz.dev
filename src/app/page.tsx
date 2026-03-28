// page.tsx — Root landing page, composes all sections as server component

import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Approach />
    </>
  );
}