import { HeroSection } from "@/components/sections/home/HeroSection";
import { CredibilityStrip } from "@/components/sections/home/CredibilityStrip";
import { SolutionsOverview } from "@/components/sections/home/SolutionsOverview";
import { ValueProposition } from "@/components/sections/home/ValueProposition";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { IoTHighlight } from "@/components/sections/home/IoTHighlight";
import { MonitoringHighlight } from "@/components/sections/home/MonitoringHighlight";
import { SoftwareHighlight } from "@/components/sections/home/SoftwareHighlight";
import { IndustriesSection } from "@/components/sections/home/IndustriesSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { CTABand } from "@/components/ui/CTABand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityStrip />
      <SolutionsOverview />
      <ValueProposition />
      <StatsSection />
      <IoTHighlight />
      <MonitoringHighlight />
      <SoftwareHighlight />
      <IndustriesSection />
      <ProcessSection />
      <CTABand
        title="Let's Build the Right Solution for Your Environment"
        subtitle="Whether you need smart metering, monitoring, automation, or software systems, Nueva Modo can help design and deliver the right fit."
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore Our Solutions", href: "/solutions" }}
        variant="dark"
      />
    </>
  );
}
