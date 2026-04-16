import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/ui/CTABand";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SectionImage } from "@/components/ui/SectionImage";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Nueva Modo",
  description:
    "Nueva Modo is an engineering and technology company delivering turnkey solutions across industrial IoT, smart monitoring, process control, and software systems.",
};

const capabilities = [
  "Engineering thinking",
  "Industrial integration",
  "Hardware deployment",
  "Connectivity solutions",
  "Software development",
  "Monitoring and analytics",
];

const principles = [
  "Technology must solve real operational problems",
  "Good systems connect physical assets to useful intelligence",
  "Industrial solutions must be reliable, practical, and scalable",
  "Delivery matters as much as design",
];

const whyClients = [
  "Turnkey delivery from field hardware to software platforms",
  "Cross-disciplinary capability spanning hardware and software",
  "Strong integration mindset across systems and environments",
  "Industrial and infrastructure alignment",
  "Practical, fit-for-purpose solutions without unnecessary complexity",
];

const services = [
  {
    title: "Process Control & Instrumentation",
    description: "Instrumentation, PLC, SCADA, and industrial control integration for reliable process performance.",
  },
  {
    title: "IoT Solutions",
    description: "Turnkey smart metering and industrial IoT systems for facilities, utilities, and critical infrastructure.",
  },
  {
    title: "Smart Monitoring Solutions",
    description: "Sensor-driven monitoring for cold storage, mobile refrigeration, property environments, and critical assets.",
  },
  {
    title: "Software Based Solutions",
    description: "Custom platforms, workflow automation, dashboards, and digital systems that streamline operations.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-50 text-brand-blue mb-6">
                About Us
              </span>
              <h1 className="text-display-lg font-bold text-text-dark mb-6 text-balance">
                About Nueva Modo
              </h1>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                Nueva Modo is an engineering and technology company focused on
                building intelligent solutions across industrial environments,
                facilities, and critical infrastructure.
              </p>
              <p className="text-base text-text-muted leading-relaxed">
                We combine deep engineering knowledge with practical software
                development to deliver complete, integrated solutions that give
                organisations real visibility and control over their operations.
              </p>
            </div>
            <SectionImage
              src="/images/about/about-team.jpg"
              alt="Nueva Modo engineers collaborating on site"
              aspectRatio="video"
              priority
              overlay="blue"
            />
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="Who We Are"
                title="Engineering Meets Digital Delivery"
                align="left"
                className="mb-8"
              />
              <p className="text-base text-text-muted leading-relaxed mb-6">
                We are a team of engineers, integrators, and developers who
                believe that technology must deliver practical operational
                value. Our work spans physical hardware, connectivity,
                software platforms, and monitoring systems—built and
                integrated as a single, coherent solution.
              </p>
              <p className="text-base text-text-muted leading-relaxed">
                Every solution we deliver is designed to work reliably in real
                environments, not controlled demo conditions. We understand
                the constraints of industrial and commercial operations, and
                we build accordingly.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-5">
                Our Combined Capabilities
              </p>
              <FeatureGrid items={capabilities} columns={2} iconColor="blue" />
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              label="What We Believe"
              title="Principles That Guide Our Work"
              subtitle="We hold a clear view of what good industrial technology looks like—and it starts with solving the right problem correctly."
              className="mb-12"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-4 p-5 bg-surface-soft rounded-2xl border border-surface-border"
                >
                  <CheckCircle
                    className="w-5 h-5 text-brand-blue shrink-0 mt-0.5"
                    strokeWidth={1.75}
                  />
                  <p className="text-sm text-text-dark font-medium leading-relaxed">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <SectionHeader
            label="What We Deliver"
            title="Four Core Solution Lines"
            subtitle="Every solution area combines hardware, connectivity, software, and integration into a complete offering."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="p-6 bg-white rounded-2xl border border-surface-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why clients work with us */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionImage
              src="/images/solutions/solution-process-control.jpg"
              alt="Industrial control room with multi-screen SCADA dashboards"
              aspectRatio="video"
            />
            <div>
              <SectionHeader
                label="Why Clients Work With Us"
                title="Reliability, Breadth, and Practical Thinking"
                align="left"
                className="mb-8"
              />
              <FeatureGrid items={whyClients} columns={1} iconColor="blue" />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Discuss Your Project With Our Team"
        subtitle="Tell us about your environment and objectives—we will help define the right solution."
        primaryCTA={{ label: "Discuss Your Project", href: "/contact" }}
        secondaryCTA={{ label: "View Our Solutions", href: "/solutions" }}
        variant="blue"
      />
    </>
  );
}
