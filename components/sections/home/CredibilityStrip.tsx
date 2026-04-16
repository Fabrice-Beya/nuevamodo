import {
  PackageCheck,
  Cpu,
  Globe,
  Building2,
  Layers,
} from "lucide-react";

const items = [
  {
    icon: PackageCheck,
    label: "Turnkey Delivery",
  },
  {
    icon: Cpu,
    label: "Hardware + Software Integration",
  },
  {
    icon: Building2,
    label: "Industrial & Commercial Environments",
  },
  {
    icon: Globe,
    label: "Infrastructure & Facilities Monitoring",
  },
  {
    icon: Layers,
    label: "Scalable Across Sites",
  },
];

export function CredibilityStrip() {
  return (
    <div className="bg-gradient-to-r from-brand-deep-blue via-[#0c3a8f] to-brand-deep-blue border-y border-brand-deep-blue/20 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 surface-grid opacity-5" />
        <div className="absolute left-1/4 top-0 w-64 h-full bg-brand-blue/10 blur-2xl" />
        <div className="absolute right-1/4 top-0 w-64 h-full bg-brand-green/10 blur-2xl" />
      </div>
      <div className="container-site py-5 relative">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2.5 text-white/70"
              >
                <Icon
                  className="w-4 h-4 text-brand-green shrink-0"
                  strokeWidth={1.75}
                />
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
