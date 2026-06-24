import type { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/ui/CTABand";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SectionImage } from "@/components/ui/SectionImage";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";
import {
  Activity,
  Gauge,
  HeartPulse,
  BellRing,
  LineChart,
  Map,
  Network,
  Router,
  Cpu,
  MapPin,
  Workflow,
  Zap,
  Leaf,
  Building2,
  LayoutDashboard,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IoT Solutions",
  description:
    "Turnkey smart metering and industrial IoT systems for facilities, utilities, and critical infrastructure - including the Nueva MeterHub, Nueva Grid, and Nueva EMS energy monitoring platforms.",
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

const meterHubFeatures = [
  {
    icon: Network,
    title: "Facility & Topology Management",
    description:
      "Organise facilities, gateways, and meter-line structures within a single clear hierarchy.",
  },
  {
    icon: Router,
    title: "Gateway Fleet Control",
    description:
      "Inspect, enroll, and monitor your gateway estate, assignments, and connectivity.",
  },
  {
    icon: Cpu,
    title: "Meter Lifecycle Management",
    description:
      "Audit meter availability, assignment state, and line-level readiness at scale.",
  },
  {
    icon: MapPin,
    title: "Data Enrichment & Context",
    description:
      "Attach location, gateway, and organisation context to raw device data so every reading is attributable.",
  },
  {
    icon: Workflow,
    title: "Provisioning Workflows",
    description:
      "Provision new devices and manage meter and line operations end to end.",
  },
  {
    icon: Activity,
    title: "Operational Indicators",
    description:
      "Live health, growth, and reliability insights across your entire device platform.",
  },
];

const emsFeatures = [
  {
    icon: Zap,
    title: "Full Energy Cycle Visibility",
    description:
      "Track electricity, fuel and generators, and solar (SSEG) production across every facility in one view.",
  },
  {
    icon: Leaf,
    title: "Energy Use Intensity (EUI)",
    description:
      "Compute EUI per building to benchmark how green your entire portfolio really is.",
  },
  {
    icon: Building2,
    title: "Facility Data Management",
    description:
      "Upload floor plans, area sizes, GPS locations, and rich metadata for each facility.",
  },
  {
    icon: LayoutDashboard,
    title: "Whole Portfolio, One Place",
    description:
      "A single command centre for municipalities and commercial owners to manage their estate.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Trends",
    description:
      "Consumption trends, top-consuming facilities, and production analytics over time.",
  },
  {
    icon: BellRing,
    title: "Alarms & Reporting",
    description:
      "Configurable alarms and exportable reports for compliance, oversight, and insight.",
  },
];

const gridFeatures = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "Live phase and line voltages, current, and frequency streamed directly from each substation.",
  },
  {
    icon: Gauge,
    title: "Power Quality Insights",
    description:
      "Track power factor, frequency, average voltage, and active and reactive power at a glance.",
  },
  {
    icon: HeartPulse,
    title: "System Health & Status",
    description:
      "Instant overview of circuit status and overall operational health across connected assets.",
  },
  {
    icon: BellRing,
    title: "Alarms & Events",
    description:
      "Configurable thresholds with automatic alerts when readings move outside safe operating bands.",
  },
  {
    icon: LineChart,
    title: "Historical Trends",
    description:
      "Analyse minimum, maximum, and average values over custom time ranges with rich time-series charts.",
  },
  {
    icon: Map,
    title: "Map View & Data Export",
    description:
      "Visualise substations geographically and export readings for reporting and deeper analysis.",
  },
];

function BrowserFrame({
  src,
  alt,
  width,
  height,
  url = "app.nuevagrid.co.za",
  priority = false,
  cropClassName,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  url?: string;
  priority?: boolean;
  cropClassName?: string;
}) {
  return (
    <figure className="rounded-xl overflow-hidden bg-white shadow-2xl ring-1 ring-black/10">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-100 border-b border-slate-200">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 hidden sm:inline-flex items-center px-3 py-1 rounded-md bg-white text-[11px] font-medium text-slate-400 border border-slate-200">
          {url}
        </span>
      </div>
      {cropClassName ? (
        <div className={cn("relative w-full overflow-hidden", cropClassName)}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority={priority}
            className="object-cover object-bottom"
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-auto"
        />
      )}
    </figure>
  );
}

export default function IoTSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-sky/10 text-brand-sky mb-6">
                Industrial IoT
              </span>
              <h1 className="text-display-lg font-bold text-text-dark mb-5 text-balance">
                Industrial IoT Solutions
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Turnkey, end-to-end smart metering and industrial IoT solutions
                for facilities, utilities, and critical infrastructure.
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

      {/* Positioning */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Nueva Modo Industrial Internet of Things Solutions are designed
              to deliver turnkey, end-to-end smart metering and infrastructure
              monitoring solutions for organisations seeking greater visibility,
              control, and intelligence across their operations.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              We support a wide range of environments - commercial facilities,
              industrial sites, campuses, municipal assets, substations, and
              grid-related infrastructure - enabling clients to capture and use
              operational data more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* End-to-end architecture (stack diagram) */}
      <section className="section-py bg-surface-soft relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 surface-grid opacity-[0.08]" />
        </div>
        <div className="container-site relative">
          <SectionHeader
            label="How It Works"
            title="End-to-End IoT Architecture"
            subtitle="From field devices and connectivity through to a secure data platform and the dashboards your teams rely on - delivered as one integrated solution."
            labelColor="sky"
            className="mb-12"
          />
          <figure className="max-w-6xl mx-auto rounded-2xl bg-white border border-surface-border p-4 sm:p-8 shadow-sm">
            <Image
              src="/iotstack.png"
              alt="Nueva Modo IoT stack - field devices, device integration, data management, secure data platform, and solution suite"
              width={2114}
              height={962}
              className="w-full h-auto"
            />
          </figure>
          <p className="max-w-3xl mx-auto text-center text-sm text-text-muted leading-relaxed mt-8">
            Our solutions include the supply and integration of field devices,
            smart meters, sensors, gateways, communications networks, and edge
            hardware - all connected to centralised software platforms for
            secure data acquisition, device provisioning, monitoring, analytics,
            and reporting.
          </p>
        </div>
      </section>

      {/* Nueva MeterHub - Device Provisioning & Enrichment */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-brand-sky/10 text-brand-sky border border-brand-sky/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-sky" />
              Our Platform
            </span>
            <h2 className="text-display-md font-bold text-text-dark text-balance mb-4">
              Nueva MeterHub - Device Provisioning &amp; Enrichment
            </h2>
            <div className="h-1 w-14 rounded-full bg-brand-sky mb-6" />
            <p className="text-lg text-text-muted leading-relaxed mb-3">
              Nueva MeterHub is our device management cockpit - where field
              devices are provisioned, organised, and enriched before their data
              flows upstream.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              It is where raw measurements from field devices are contextualised:
              each reading is tied to its physical location, the gateway it is
              attached to, and the organisation it belongs to. This turns raw
              data into meaningful, attributable information before it is
              aggregated into consuming platforms such as Nueva Grid.
            </p>
          </div>

          {/* MeterHub dashboard screenshot */}
          <div className="mb-12">
            <BrowserFrame
              src="/nuevameterhub.png"
              alt="Nueva MeterHub device manager showing facilities, gateways, meters, featured facilities, and operations highlights"
              width={4010}
              height={2204}
              url="app.nuevameterhub.co.za"
            />
            <p className="text-center text-xs text-text-muted mt-4">
              Device manager - facilities, gateway fleet, meter portfolio, and
              meter-line operations in one operations cockpit.
            </p>
          </div>

          {/* MeterHub feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {meterHubFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title}>
                  <div className="w-10 h-10 rounded-xl bg-brand-sky/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-brand-sky" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-semibold text-text-dark mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Flow note */}
          <div className="mt-12 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center text-sm font-medium text-text-muted">
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-surface-soft border border-surface-border">
              Field Devices
            </span>
            <span className="text-brand-sky font-bold">→</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-brand-sky/10 border border-brand-sky/25 text-brand-sky">
              Nueva MeterHub - provision &amp; enrich
            </span>
            <span className="text-brand-sky font-bold">→</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-surface-soft border border-surface-border">
              Nueva Grid &amp; upstream platforms
            </span>
          </div>
        </div>
      </section>

      {/* Nueva Grid - Substation Monitoring Platform */}
      <section className="section-py gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 surface-grid opacity-[0.07]" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-sky/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />
        </div>
        <div className="container-site relative">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              Our Platform
            </span>
            <h2 className="text-display-md font-bold text-white text-balance mb-4">
              Nueva Grid - Substation Monitoring
            </h2>
            <div className="h-1 w-14 rounded-full bg-brand-sky mb-6" />
            <p className="text-lg text-white/80 leading-relaxed mb-3">
              Nueva Grid is our purpose-built substation monitoring platform - a
              real-time window into the electrical health of your substations
              and grid-connected assets.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              Field devices stream live measurements to a secure cloud platform,
              giving operations teams instant visibility of voltage, current,
              frequency, power, and power quality across every connected site -
              with alarms, historical trends, and reporting built in.
            </p>
          </div>

          {/* Primary dashboard screenshot */}
          <div className="mb-12">
            <BrowserFrame
              src="/nuevagrid_0.png"
              alt="Nueva Grid real-time monitor showing system health, power summary, power quality, and detailed per-phase metrics for a substation"
              width={3982}
              height={2214}
              priority
            />
            <p className="text-center text-xs text-white/55 mt-4">
              Real-time monitor - system health, power summary, power quality,
              and live per-phase metrics.
            </p>
          </div>

          {/* Feature highlights + charts screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7">
              {gridFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title}>
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div>
              <BrowserFrame
                src="/nuevagrid.png"
                alt="Nueva Grid metrics and charts view showing voltage trends over a 24-hour period with min, max, average, and range statistics"
                width={3986}
                height={2204}
                url="app.nuevagrid.co.za/metrics"
              />
              <p className="text-center text-xs text-white/55 mt-4">
                Metrics &amp; charts - historical trends with min, max, average,
                and range over any time window.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva EMS - Energy Monitoring & Facility Management */}
      <section className="section-py bg-surface-soft relative overflow-hidden">
        <div className="surface-grid absolute inset-0 opacity-[0.08]" />
        <div className="container-site relative">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              Our Platform
            </span>
            <h2 className="text-display-md font-bold text-text-dark text-balance mb-4">
              Nueva EMS - Energy Monitoring &amp; Facility Management
            </h2>
            <div className="h-1 w-14 rounded-full bg-brand-green mb-6" />
            <p className="text-lg text-text-muted leading-relaxed mb-3">
              Nueva EMS gives clients a complete view of their energy usage
              across an entire facility portfolio - electricity, fuel and
              generators, and solar power - all in one place.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              We compute the Energy Use Intensity (EUI) of every building so
              owners can see how green their portfolio really is, alongside full
              facility data management: upload floor plans, area sizes, GPS
              locations, and more. It is a one-stop shop for municipalities and
              commercial property owners to manage, monitor, and report on their
              entire estate - complete with analytics, alarms, and reporting.
            </p>
          </div>

          {/* EMS dashboard screenshot (top header cropped for privacy) */}
          <div className="mb-12">
            <BrowserFrame
              src="/Nueva_ems.png"
              alt="Nueva EMS dashboard showing total facilities, 90-day consumption and production, average EUI, energy consumption trends, top consuming facilities, SSEG production, and EUI trends"
              width={3974}
              height={2222}
              url="app.nuevaems.co.za"
              cropClassName="aspect-[21/10]"
            />
            <p className="text-center text-xs text-text-muted mt-4">
              Portfolio overview - facility count, consumption and production
              totals, average EUI, and energy trends across the entire estate.
            </p>
          </div>

          {/* EMS feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {emsFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title}>
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-3">
                    <Icon
                      className="w-5 h-5 text-brand-green"
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-text-dark mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities + use cases */}
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
                labelColor="sky"
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
              <CapabilityChipGroup chips={chips} variant="sky" />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Discuss an IoT Project"
        subtitle="Tell us about the facilities, infrastructure, or assets you need to monitor and we will define the right IoT architecture."
        primaryCTA={{ label: "Discuss an IoT Project", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
