import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/ui/CTABand";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SectionImage } from "@/components/ui/SectionImage";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";

export const metadata: Metadata = {
  title: "Process Control & Instrumentation",
  description:
    "Instrumentation, PLC, SCADA, and industrial control integration for reliable process performance.",
};

const capabilities = [
  "Instrumentation selection & integration",
  "PLC system design and programming",
  "SCADA system implementation",
  "Control panel design and build",
  "Process monitoring and visualisation",
  "Automation and control reliability",
  "Calibration and maintenance",
  "Field instrumentation wiring and commissioning",
];

const contentBlocks = [
  {
    title: "Instrumentation Selection & Integration",
    description:
      "We specify and integrate the right field instrumentation for each process application—flow meters, pressure transmitters, temperature sensors, level gauges, and more. Every instrument is selected for accuracy, reliability, and compatibility with the wider control architecture.",
  },
  {
    title: "PLC Systems",
    description:
      "We design, program, and commission programmable logic controller systems that provide reliable, deterministic control of industrial processes. Our PLC work spans single-panel applications through to multi-controller distributed architectures.",
  },
  {
    title: "SCADA Systems",
    description:
      "Our SCADA implementations give operators real-time visibility and control over industrial processes. We build human-machine interfaces that are intuitive, accurate, and aligned to the operational environment.",
  },
  {
    title: "Process Monitoring",
    description:
      "Beyond control, we implement process monitoring layers that capture trend data, generate alarms, and provide the operational intelligence needed to optimise performance and pre-empt failure.",
  },
];

const chips = [
  "PLC",
  "SCADA",
  "HMI",
  "DCS",
  "Instrumentation",
  "Flow Meters",
  "Pressure Transmitters",
  "Level Gauges",
  "Control Panels",
  "Calibration",
];

export default function ProcessControlPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal mb-6">
                Solutions
              </span>
              <h1 className="text-display-lg font-bold text-text-dark mb-5 text-balance">
                Process Control &amp; Instrumentation
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Reliable, accurate, and intelligent control solutions for
                industrial processes.
              </p>
            </div>
            <SectionImage
              src="/images/solutions/solution-process-control.jpg"
              alt="Modern industrial control room with SCADA dashboards"
              aspectRatio="video"
              priority
              overlay="blue"
            />
          </div>
        </div>
      </section>

      {/* Core content */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeader
                label="What We Deliver"
                title="Complete Control & Instrumentation Capability"
                align="left"
                className="mb-8"
              />
              <p className="text-base text-text-muted leading-relaxed">
                Our process control and instrumentation work covers the full
                engineering scope—from field device selection through to PLC
                programming, SCADA development, and commissioning. We deliver
                systems that are built to perform reliably over the long term
                in demanding industrial environments.
              </p>
            </div>
            <FeatureGrid items={capabilities} columns={2} iconColor="blue" />
          </div>
        </div>
      </section>

      {/* Detail blocks */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contentBlocks.map((block) => (
              <div
                key={block.title}
                className="p-6 bg-white rounded-2xl border border-surface-border"
              >
                <h3 className="text-base font-semibold text-text-dark mb-3">
                  {block.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionImage
              src="/images/industries/industry-manufacturing.jpg"
              alt="Industrial manufacturing floor with process automation"
              aspectRatio="video"
            />
            <div>
              <SectionHeader
                label="Technology"
                title="Modern Industrial Control Standards"
                align="left"
                className="mb-8"
              />
              <p className="text-base text-text-muted leading-relaxed mb-6">
                We work with leading industrial control platforms and follow
                recognised engineering standards. All systems are designed for
                operational reliability, maintainability, and long service life.
              </p>
              <CapabilityChipGroup chips={chips} variant="teal" />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Talk to Us About Process Control"
        subtitle="Tell us about your process environment and we will help define the right control and instrumentation approach."
        primaryCTA={{ label: "Talk to Us About Process Control", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
