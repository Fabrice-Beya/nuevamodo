import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/ui/CTABand";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SectionImage } from "@/components/ui/SectionImage";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";

export const metadata: Metadata = {
  title: "Smart Monitoring Solutions",
  description:
    "Sensor-driven monitoring systems for critical environments, mobile assets, and real-estate operations.",
};

const useCases = [
  "Cold room and freezer monitoring",
  "Mobile fridge and refrigerated vehicle monitoring",
  "Temperature excursion alerts",
  "Noise monitoring in real estate environments",
  "Occupancy and environmental sensing",
  "Smart security sensor solutions",
  "Real-time alerting and remote visibility",
  "Historical data and compliance reporting",
];

const chips = [
  "LoRaWAN",
  "4G Connectivity",
  "Cloud Dashboards",
  "Alerting",
  "Sensors",
  "Remote Monitoring",
  "Historical Data",
  "Threshold-Based Alarms",
];

const environments = [
  {
    title: "Cold Chain & Refrigeration",
    description:
      "Continuous temperature monitoring across cold rooms, freezers, and refrigerated transport assets. Immediate alerts on excursion events before product is compromised.",
  },
  {
    title: "Real Estate & Property",
    description:
      "Environmental sensors, noise monitoring, and smart security sensors for managed properties and portfolios. Improve tenant experience and operational visibility.",
  },
  {
    title: "Critical Infrastructure",
    description:
      "Sensor-driven monitoring for server rooms, plant rooms, substations, and assets where environmental conditions must be tracked and anomalies acted on quickly.",
  },
  {
    title: "Mobile & Remote Assets",
    description:
      "4G-connected monitoring for vehicles, containers, and mobile assets that move between locations but must remain continuously monitored.",
  },
];

export default function SmartMonitoringPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 mb-6">
                Smart Monitoring
              </span>
              <h1 className="text-display-lg font-bold text-text-dark mb-5 text-balance">
                Smart Monitoring Solutions
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Sensor-driven monitoring systems for critical environments,
                mobile assets, and real-estate operations.
              </p>
            </div>
            <SectionImage
              src="/images/solutions/solution-monitoring.jpg"
              alt="Cold storage facility with wireless temperature sensors"
              aspectRatio="video"
              priority
              overlay="blue"
            />
          </div>
        </div>
      </section>

      {/* Main copy */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Nueva Modo Smart Monitoring Solutions help organisations monitor
              critical environments in real time through connected sensors,
              intelligent alerts, and reliable communications. These solutions
              are designed for environments where temperature, movement, noise,
              security, or environmental change must be tracked continuously
              and acted on quickly.
            </p>
            <p className="text-base text-text-muted leading-relaxed mb-6">
              We provide monitoring systems for cold storage facilities, fixed
              refrigeration environments, and moving fridges or mobile cooling
              assets using technologies such as LoRaWAN and 4G connectivity.
              We also deploy smart sensors for real-estate and building
              environments, including noise monitoring, environmental sensing,
              and smart security-related sensors.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              By combining field sensors, communications, dashboards, alerts,
              and software integration, Nueva Modo delivers practical
              monitoring systems that reduce blind spots, improve response
              times, and give clients more confidence in how critical
              environments are performing.
            </p>
          </div>
        </div>
      </section>

      {/* Environments */}
      <section className="section-py bg-white">
        <div className="container-site">
          <SectionHeader
            label="Environments"
            title="Where We Deploy Smart Monitoring"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {environments.map((env) => (
              <div
                key={env.title}
                className="p-6 rounded-2xl bg-white border border-surface-border card-hover"
              >
                <div className="w-2 h-6 rounded-full bg-brand-green mb-4" />
                <h3 className="text-base font-semibold text-text-dark mb-3">
                  {env.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {env.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases + technology */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="Use Cases"
                title="Key Monitoring Applications"
                align="left"
                className="mb-8"
              />
              <FeatureGrid items={useCases} columns={1} iconColor="green" />
            </div>
            <div>
              <SectionHeader
                label="Technology"
                title="Connectivity & Platform"
                align="left"
                className="mb-8"
              />
              <p className="text-base text-text-muted leading-relaxed mb-6">
                Our smart monitoring solutions use reliable, proven
                connectivity technologies suited to the deployment environment.
                Whether a fixed facility or a moving asset, we select the
                right communications layer and integrate it with a centralised
                monitoring platform.
              </p>
              <CapabilityChipGroup chips={chips} variant="green" />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Explore Monitoring Options"
        subtitle="Describe the environment you need to monitor and we will recommend the right sensor and connectivity approach."
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore Monitoring Options", href: "/contact" }}
        variant="blue"
      />
    </>
  );
}
