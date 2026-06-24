import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { CTABand } from "@/components/ui/CTABand";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";
import { SOLUTIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Solutions",
  description:
    "Nueva Modo delivers electrical engineering, process control, industrial IoT, software, nano-material cleaning, and intelligent fire suppression.",
};

const capabilities = [
  "Nano-material cleaning",
  "Protection & testing",
  "Plant commissioning",
  "Thermographic surveys",
  "Energy audits",
  "Smart metering",
  "Sensors & gateways",
  "LoRaWAN & 4G",
  "PLC / SCADA",
  "Web & mobile apps",
  "APIs & integrations",
  "AI / computer vision",
  "Dashboards & analytics",
  "Fire suppression",
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <SectionHeader
            label="Solutions"
            title="Our Solutions"
            subtitle="From electrical engineering and process control to connected systems, software, and our flagship innovations - delivered turnkey, end-to-end."
            labelColor="orange"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS.map((solution) => (
              <SolutionCard
                key={solution.slug}
                title={solution.title}
                summary={solution.summary}
                icon={solution.icon}
                color={solution.color}
                href={`/solutions/${solution.slug}`}
                image={solution.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Supporting capabilities */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <SectionHeader
            label="Capabilities"
            title="Supporting Capabilities Across All Solutions"
            subtitle="Underlying every solution is a broad technical capability spanning electrical engineering, hardware, connectivity, software, and analytics."
            labelColor="teal"
            className="mb-10"
          />
          <div className="max-w-3xl mx-auto">
            <CapabilityChipGroup chips={capabilities} variant="teal" />
          </div>
        </div>
      </section>

      <CTABand
        title="Not Sure Which Solution Fits?"
        subtitle="Describe your environment and objectives-our team will help identify the right approach."
        primaryCTA={{ label: "Discuss a Project", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
