import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { CTABand } from "@/components/ui/CTABand";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";
import { SOLUTIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Solutions",
  description:
    "Nueva Modo delivers integrated industrial and digital solutions across process control, IoT, smart monitoring, and software systems.",
};

const capabilities = [
  "Smart metering",
  "Sensors & gateways",
  "LoRaWAN & 4G",
  "PLC / SCADA",
  "Web applications",
  "Mobile applications",
  "Dashboards",
  "APIs & integrations",
  "AI / computer vision",
  "Alerts & automation",
  "Cold chain monitoring",
  "SCADA integration",
  "Edge computing",
  "Data analytics",
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
            subtitle="Nueva Modo delivers integrated industrial and digital solutions designed to improve visibility, control, and efficiency across operational environments."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
            subtitle="Underlying every solution is a broad technical capability spanning hardware, connectivity, software, and analytics."
            className="mb-10"
          />
          <div className="max-w-3xl mx-auto">
            <CapabilityChipGroup chips={capabilities} variant="blue" />
          </div>
        </div>
      </section>

      <CTABand
        title="Not Sure Which Solution Fits?"
        subtitle="Describe your environment and objectives—our team will help identify the right approach."
        primaryCTA={{ label: "Discuss a Project", href: "/contact" }}
        variant="blue"
      />
    </>
  );
}
