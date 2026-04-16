import { Button } from "@/components/ui/Button";
import { SoftwareVisual } from "@/components/ui/SoftwareVisual";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";
import { ArrowRight } from "lucide-react";

const capabilities = [
  "Workflow Automation",
  "Internal Business Systems",
  "Web Platforms",
  "Mobile Apps",
  "Dashboards",
  "API Integrations",
  "AI-Enabled Solutions",
  "Computer Vision",
];

export function SoftwareHighlight() {
  return (
    <section className="section-py bg-gradient-to-tr from-white via-slate-50/40 to-blue-50/20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 surface-dots opacity-15" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-blue/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-brand-orange/8 rounded-full blur-3xl" />
      </div>
      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div>
            <SoftwareVisual />
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-50 text-brand-blue mb-5">
              Software Solutions
            </span>
            <h2 className="text-display-md font-bold text-text-dark mb-4 text-balance">
              Digital Systems That Improve Operational Efficiency
            </h2>
            <p className="text-base text-text-muted leading-relaxed mb-7">
              We design and build software solutions that digitise manual
              workflows, automate business processes, and provide better
              visibility across operations.
            </p>

            <CapabilityChipGroup chips={capabilities} variant="blue" className="mb-8" />

            <Button
              href="/solutions/software-solutions"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Software Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
