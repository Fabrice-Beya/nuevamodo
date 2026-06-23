import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/ui/CTABand";
import { SectionImage } from "@/components/ui/SectionImage";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";
import { ELECTRICAL_SERVICES } from "@/lib/constants";
import {
  ShieldCheck,
  Settings2,
  Wrench,
  Gauge,
  Thermometer,
  PencilRuler,
  LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Electrical Engineering Services",
  description:
    "Protection & testing, plant commissioning, maintenance, energy audits, thermographic surveys, and ECSA-signed engineering drawings.",
};

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "settings-2": Settings2,
  wrench: Wrench,
  gauge: Gauge,
  thermometer: Thermometer,
  "pencil-ruler": PencilRuler,
};

const chips = [
  "LV & MV Circuit Breakers",
  "Instrument Transformers",
  "Power Transformers",
  "Secondary Injection",
  "Cable Fault Location",
  "AC/DC Pressure Testing",
  "Cold & Hot Commissioning",
  "Motor Maintenance",
  "Infrared Thermography",
  "Reticulation Drawings",
];

export default function ElectricalEngineeringPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange-deep mb-6">
                Our Core Business
              </span>
              <h1 className="text-display-lg font-bold text-text-dark mb-5 text-balance">
                Electrical Engineering Services
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                A comprehensive range of electrical engineering services, backed
                by over 50 years of combined experience across power generation,
                petrochemical, mining, and transportation.
              </p>
            </div>
            <SectionImage
              src="/images/solutions/solution-process-control.jpg"
              alt="Electrical engineers inspecting an industrial distribution board"
              aspectRatio="video"
              priority
              overlay="dark"
            />
          </div>
        </div>
      </section>

      {/* Intro statement */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Are you looking to partner with a company that can find new ways to
              tackle your engineering problems — one that thinks outside the box
              when it comes to creative, inventive solutions? Let us take the
              load off your shoulders.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              We help businesses optimise the electrical aspects of their
              operations. Through this experience, we&apos;re able to offer an
              enhanced, tried-and-tested service you can truly rely on — no
              matter what industry you&apos;re in.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-white">
        <div className="container-site">
          <SectionHeader
            label="What We Deliver"
            title="A Comprehensive Range of Services"
            subtitle="From protection audits to ECSA-signed drawings, we cover the full electrical engineering scope."
            labelColor="orange"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ELECTRICAL_SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || ShieldCheck;
              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-surface-border bg-white p-6 shadow-sm hover:shadow-lg hover:border-brand-orange/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-brand-orange" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold text-text-dark mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capability chips */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionImage
              src="/images/industries/industry-utilities.jpg"
              alt="High-voltage substation infrastructure"
              aspectRatio="video"
            />
            <div>
              <SectionHeader
                label="Technical Scope"
                title="Tried, Tested & Trusted"
                align="left"
                labelColor="orange"
                className="mb-6"
              />
              <p className="text-base text-text-muted leading-relaxed mb-6">
                Our team has a solid commissioning background with proven
                competency levels — from verification of plant construction and
                design through to commercial operation and post-commissioning
                support. We do it all.
              </p>
              <CapabilityChipGroup chips={chips} variant="orange" />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Talk to Us About Your Electrical Project"
        subtitle="Get a custom package tailored to your requirements and defined battery limits."
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "View All Solutions", href: "/solutions" }}
        variant="dark"
      />
    </>
  );
}
