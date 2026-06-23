import { HeroSection } from "@/components/sections/home/HeroSection";
import { CredibilityStrip } from "@/components/sections/home/CredibilityStrip";
import { SolutionsOverview } from "@/components/sections/home/SolutionsOverview";
import { ValueProposition } from "@/components/sections/home/ValueProposition";
import { ElectricalHighlight } from "@/components/sections/home/ElectricalHighlight";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { NanoCleaningHighlight } from "@/components/sections/home/NanoCleaningHighlight";
import { IoTHighlight } from "@/components/sections/home/IoTHighlight";
import { SoftwareHighlight } from "@/components/sections/home/SoftwareHighlight";
import { InnovationHighlight } from "@/components/sections/home/InnovationHighlight";
import { IndustriesSection } from "@/components/sections/home/IndustriesSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { CTABand } from "@/components/ui/CTABand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsOverview />
      <ValueProposition />
      <CredibilityStrip />
      <NanoCleaningHighlight />
      <StatsSection />
      <ElectricalHighlight />
      <IoTHighlight />
      <SoftwareHighlight />
      <InnovationHighlight />
      <IndustriesSection />
      <ProcessSection />
      <CTABand
        title="Let's Find New Ways to Power Your Operations"
        subtitle="Whether you need electrical engineering, process control, monitoring, automation, or software systems, Nueva Modo can help design and deliver the right fit."
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore Our Solutions", href: "/solutions" }}
        variant="dark"
      />
    </>
  );
}
