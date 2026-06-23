import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/ui/CTABand";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";
import { Flame, Gauge, Cpu, ShieldCheck, Thermometer, Boxes } from "lucide-react";

export const metadata: Metadata = {
  title: "Intelligent Fire Extinguisher",
  description:
    "A self-contained, power-free automatic fire-extinguishing device that detects and suppresses fire at its source.",
};

const sequence = [
  { step: "01", title: "Heat is detected", description: "The heat-sensitive tube continuously monitors temperature." },
  { step: "02", title: "Tube bursts at the hottest point", description: "When temperature rises, the tube bursts exactly where the fire is." },
  { step: "03", title: "Suppression agent is released", description: "The brass release nozzle sprays nano particles through the burst tube." },
  { step: "04", title: "Fire is extinguished", description: "The fire is suppressed at the initial stage, with no harm to personnel." },
];

const components = [
  { icon: ShieldCheck, title: "Outer Casing", description: "Nylon glass-fibre full-insulation nano material." },
  { icon: Thermometer, title: "Temperature Detection", description: "Military-grade double base lead." },
  { icon: Boxes, title: "Adhesive", description: "Industrial grade 3M adhesive." },
  { icon: Cpu, title: "Trigger Feedback Chip", description: "Customised according to system requirements." },
];

const parts = [
  "Control Unit",
  "Pressure Gauge",
  "Heat-Sensitive Tube",
  "Brass Release Nozzle",
  "No External Power",
  "No Smoke Sensors Required",
];

export default function FireExtinguisherPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange-deep mb-6">
              <Flame className="w-3.5 h-3.5" strokeWidth={2} />
              Innovative Solution
            </span>
            <h1 className="text-display-lg font-bold text-text-dark mb-5 text-balance">
              Intelligent Fire Extinguisher
            </h1>
            <p className="text-lg text-text-muted leading-relaxed mb-4">
              A simple and highly reliable independent automatic fire-extinguishing
              device. The initial fire-protection products use specially developed
              fire-extinguishing materials and environment-friendly industrial
              temperature-sensing materials.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              Without external power supply, additional smoke sensors,
              temperature detectors, or complex pipework, simply place it inside
              the equipment to accurately detect and extinguish a fire at its
              initial stage. Project and single fire-extinguishing costs are
              greatly reduced — with no harm to personnel.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <SectionHeader
            label="How It Works"
            title="Detects & Extinguishes at the Source"
            labelColor="orange"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sequence.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl bg-white border border-surface-border p-6 shadow-sm"
              >
                <div className="text-3xl font-extrabold text-brand-orange/30 mb-3 tabular-nums">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="Engineering"
                title="Built From the Inside Out"
                align="left"
                labelColor="orange"
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {components.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="rounded-2xl border border-surface-border bg-white p-5 shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-brand-orange" strokeWidth={1.8} />
                      </div>
                      <h3 className="text-sm font-bold text-text-dark mb-1.5">{c.title}</h3>
                      <p className="text-xs text-text-muted leading-relaxed">{c.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:sticky lg:top-28">
              <div className="rounded-3xl gradient-charcoal text-white p-8 shadow-sm relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-brand-orange/20 blur-3xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 flex items-center justify-center mb-5">
                    <Gauge className="w-6 h-6 text-brand-orange" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Self-Contained & Reliable</h3>
                  <p className="text-sm text-white/75 leading-relaxed mb-6">
                    Every unit is a complete suppression system — control unit,
                    pressure gauge, heat-sensitive tube, and brass release nozzle
                    working together, with no reliance on external infrastructure.
                  </p>
                  <CapabilityChipGroup chips={parts} variant="dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Protect Critical Equipment Automatically"
        subtitle="Talk to us about integrating intelligent fire suppression into your panels, cabinets, and equipment."
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "View All Solutions", href: "/solutions" }}
        variant="dark"
      />
    </>
  );
}
