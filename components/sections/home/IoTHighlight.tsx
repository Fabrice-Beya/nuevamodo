import { Button } from "@/components/ui/Button";
import { IoTVisual } from "@/components/ui/IoTVisual";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { ArrowRight } from "lucide-react";

const features = [
  "Smart metering for commercial & industrial facilities",
  "Substation and grid infrastructure monitoring",
  "End-to-end device integration and provisioning",
  "Central platform and dashboards",
  "Alerting, reporting and analytics",
  "Scalable rollout across assets and sites",
];

export function IoTHighlight() {
  return (
    <section className="section-py bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 surface-grid opacity-10" />
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl" />
      </div>
      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div>
            <IoTVisual />
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-50 text-brand-blue mb-5">
              IoT Solutions
            </span>
            <h2 className="text-display-md font-bold text-text-dark mb-4 text-balance">
              From Field Devices to Operational Insight
            </h2>
            <p className="text-base text-text-muted leading-relaxed mb-7">
              Nueva Modo delivers complete smart metering and infrastructure
              monitoring solutions across commercial buildings, industrial
              facilities, municipal environments, substations, and
              grid-connected assets.
            </p>

            <FeatureGrid items={features} columns={2} className="mb-8" />

            <Button
              href="/solutions/iot-solutions"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View IoT Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
