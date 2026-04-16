import { Button } from "@/components/ui/Button";
import { MonitoringVisual } from "@/components/ui/MonitoringVisual";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";
import { ArrowRight } from "lucide-react";

const chips = [
  "Cold Storage Monitoring",
  "Mobile Fridge Monitoring",
  "Noise Monitoring",
  "Smart Security Sensors",
  "Real-Time Alerts",
  "LoRaWAN & 4G Connectivity",
];

export function MonitoringHighlight() {
  return (
    <section className="section-py bg-gradient-to-bl from-emerald-50/30 via-slate-50 to-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 industrial-mesh opacity-8" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-green/8 rounded-full blur-3xl glow-green" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />
      </div>
      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 mb-5">
              Smart Monitoring
            </span>
            <h2 className="text-display-md font-bold text-text-dark mb-4 text-balance">
              Smart Monitoring for Critical Environments
            </h2>
            <p className="text-base text-text-muted leading-relaxed mb-7">
              We deploy smart sensor solutions for temperature-sensitive
              operations, mobile refrigeration, real-estate environments, and
              security-related monitoring—using LoRaWAN, 4G, and intelligent
              alerting systems.
            </p>

            <CapabilityChipGroup chips={chips} variant="green" className="mb-8" />

            <Button
              href="/solutions/smart-monitoring"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Smart Monitoring
            </Button>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <MonitoringVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
