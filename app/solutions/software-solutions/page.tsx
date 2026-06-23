import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/ui/CTABand";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SectionImage } from "@/components/ui/SectionImage";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";

export const metadata: Metadata = {
  title: "Software Based Solutions",
  description:
    "Custom digital systems that automate processes, digitise workflows, and improve operational efficiency.",
};

const capabilities = [
  "Custom backend systems and APIs",
  "Web application development",
  "Mobile application development",
  "Workflow automation and digitisation",
  "Data capture and forms systems",
  "Dashboards and analytics platforms",
  "Third-party integrations via API",
  "AI-enabled automation solutions",
  "Computer vision applications",
];

const useCases = [
  "Replacing manual paper-based processes",
  "Digitising field operations and inspection workflows",
  "Building internal business management platforms",
  "Connecting disconnected operational systems",
  "Automating reporting and compliance processes",
  "Providing management visibility across operations",
];

const chips = [
  "Web Apps",
  "Mobile Apps",
  "Backend Systems",
  "Workflow Automation",
  "REST APIs",
  "Data Capture",
  "Dashboards",
  "AI Integration",
  "Computer Vision",
  "Cloud Deployment",
];

const solutionTypes = [
  {
    title: "Workflow Automation",
    description:
      "We digitise and automate repetitive manual processes, reducing administrative overhead and improving accuracy across operations.",
  },
  {
    title: "Business Platforms",
    description:
      "Custom internal platforms designed around how your organisation works—field-to-office, operations-to-management, or department-to-department.",
  },
  {
    title: "Data & Analytics",
    description:
      "Dashboards, reporting tools, and analytics systems that give management and operational teams meaningful visibility into performance.",
  },
  {
    title: "AI & Computer Vision",
    description:
      "Solutions that use AI and computer vision to automate visual inspection, pattern recognition, or process monitoring tasks.",
  },
];

export default function SoftwareSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-green/10 text-brand-green mb-6">
                Software Solutions
              </span>
              <h1 className="text-display-lg font-bold text-text-dark mb-5 text-balance">
                Software Based Solutions
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Custom digital systems that automate processes, digitise
                workflows, and improve operational efficiency.
              </p>
            </div>
            <SectionImage
              src="/images/solutions/solution-software.jpg"
              alt="Software engineer workspace with multiple dashboards"
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
              Nueva Modo Software Based Solutions focus on helping
              organisations digitise manual processes, automate workflows, and
              improve operational efficiency through fit-for-purpose software
              systems. We work with clients to identify repetitive, paper-based,
              or disconnected business processes and transform them into
              streamlined digital workflows.
            </p>
            <p className="text-base text-text-muted leading-relaxed mb-6">
              Our solutions include the design and development of custom
              software platforms, internal business applications, workflow
              automation tools, dashboards, data capture systems, and
              API-driven integrations. These systems reduce manual handling,
              improve information accuracy, strengthen accountability, and
              provide better access to business-critical data.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              Whether supporting operations, compliance, reporting, field
              activities, or internal service processes, our software solutions
              are tailored to the way each organisation works—reducing
              administrative burden and enabling teams to focus on higher-value
              activities.
            </p>
          </div>
        </div>
      </section>

      {/* Solution types */}
      <section className="section-py bg-white">
        <div className="container-site">
          <SectionHeader
            label="Solution Types"
            title="What We Build"
            labelColor="green"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {solutionTypes.map((type) => (
              <div
                key={type.title}
                className="p-6 bg-white border border-surface-border rounded-2xl card-hover"
              >
                <div className="w-2 h-6 rounded-full bg-brand-green mb-4" />
                <h3 className="text-base font-semibold text-text-dark mb-3">
                  {type.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities + use cases */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="Capabilities"
                title="Technical Capability"
                align="left"
                className="mb-8"
              />
              <FeatureGrid items={capabilities} columns={1} iconColor="green" />
            </div>
            <div>
              <SectionHeader
                label="Where We Apply This"
                title="Typical Use Cases"
                align="left"
                labelColor="green"
                className="mb-8"
              />
              <FeatureGrid items={useCases} columns={1} iconColor="green" />
              <div className="mt-8">
                <CapabilityChipGroup chips={chips} variant="green" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="section-py bg-white">
        <div className="container-site">
          <SectionImage
            src="/images/solutions/solution-software.jpg"
            alt="Full-stack software capability — web, mobile, backend, AI"
            aspectRatio="wide"
            className="w-full"
          />
        </div>
      </section>

      <CTABand
        title="Discuss a Software Project"
        subtitle="Share the process or system you want to improve and we will help scope the right software solution."
        primaryCTA={{ label: "Discuss a Software Project", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
