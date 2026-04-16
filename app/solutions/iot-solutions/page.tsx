import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/ui/CTABand";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SectionImage } from "@/components/ui/SectionImage";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";

export const metadata: Metadata = {
  title: "IoT Solutions",
  description:
    "Turnkey smart metering and industrial IoT systems for facilities, utilities, and critical infrastructure.",
};

const keyFeatures = [
  "Smart metering for commercial and industrial facilities",
  "Substation and grid infrastructure monitoring",
  "End-to-end field device integration and provisioning",
  "Centralised data platform and dashboards",
  "Automated alerting and reporting",
  "Scalable rollout across assets and sites",
  "Edge hardware and gateway deployment",
  "Secure data acquisition and communications",
];

const useCases = [
  "Office parks and commercial buildings",
  "Industrial plants and manufacturing sites",
  "Retail environments and mixed-use facilities",
  "Municipal facilities and public infrastructure",
  "Substations and grid-connected assets",
  "Campuses and distributed infrastructure",
];

const chips = [
  "Smart Meters",
  "IoT Gateways",
  "LoRaWAN",
  "4G / LTE",
  "MQTT",
  "Modbus",
  "Edge Hardware",
  "Cloud Platforms",
  "Real-Time Analytics",
  "API Integration",
];

export default function IoTSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 mb-6">
                IoT Solutions
              </span>
              <h1 className="text-display-lg font-bold text-text-dark mb-5 text-balance">
                IoT Solutions
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Turnkey smart metering and industrial IoT solutions for
                facilities, utilities, and critical infrastructure.
              </p>
            </div>
            <SectionImage
              src="/images/solutions/solution-iot.jpg"
              alt="Industrial IoT gateway and smart metering infrastructure"
              aspectRatio="video"
              priority
              overlay="blue"
            />
          </div>
        </div>
      </section>

      {/* Main positioning */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Nueva Modo Industrial Internet of Things Solutions are designed
              to deliver turnkey, end-to-end smart metering and infrastructure
              monitoring solutions for organisations seeking greater visibility,
              control, and intelligence across their operations.
            </p>
            <p className="text-base text-text-muted leading-relaxed mb-6">
              We support a wide range of environments, including commercial
              facilities, industrial sites, campuses, municipal assets,
              substations, and grid-related infrastructure, enabling clients
              to capture and use operational data more effectively.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              Our solutions include the supply and integration of field devices,
              smart meters, sensors, gateways, communications networks, and
              edge hardware, all connected to centralised software platforms
              for secure data acquisition, device provisioning, monitoring,
              analytics, and reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="Capabilities"
                title="End-to-End IoT Delivery"
                align="left"
                className="mb-8"
              />
              <FeatureGrid items={keyFeatures} columns={1} iconColor="green" />
            </div>
            <div>
              <SectionHeader
                label="Where We Deploy"
                title="Use Cases & Environments"
                align="left"
                className="mb-8"
              />
              <FeatureGrid items={useCases} columns={1} iconColor="blue" />
            </div>
          </div>
        </div>
      </section>

      {/* Visual + tech */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionImage
              src="/images/hero/detail-smart-meters.jpg"
              alt="Array of smart electricity meters in a utility distribution panel"
              aspectRatio="video"
            />
            <div>
              <SectionHeader
                label="Technology"
                title="Standards-Based, Scalable Architecture"
                align="left"
                className="mb-8"
              />
              <p className="text-base text-text-muted leading-relaxed mb-6">
                With a strong focus on complete solution delivery, Nueva Modo
                combines hardware, connectivity, software, and analytics into
                one unified offering. The result is a scalable platform that
                supports smarter energy management, improved infrastructure
                visibility, and better performance across all facility types
                and critical industrial environments.
              </p>
              <CapabilityChipGroup chips={chips} variant="green" />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Discuss an IoT Project"
        subtitle="Tell us about the facilities, infrastructure, or assets you need to monitor and we will define the right IoT architecture."
        primaryCTA={{ label: "Discuss an IoT Project", href: "/contact" }}
        variant="blue"
      />
    </>
  );
}
