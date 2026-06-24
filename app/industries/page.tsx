import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { CTABand } from "@/components/ui/CTABand";
import { INDUSTRIES, SOLUTIONS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries & Environments",
  description:
    "Nueva Modo delivers industrial technology solutions across manufacturing, commercial property, utilities, cold chain, and municipal environments.",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py bg-white border-b border-surface-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 surface-grid opacity-[0.08]" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-orange/[0.06] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-teal/[0.06] blur-3xl" />
        </div>
        <div className="container-site relative">
          <SectionHeader
            label="Industries"
            title="Industries & Environments"
            subtitle="With over 50 years of combined experience across power generation, petrochemical, mining, and transportation, our solutions work across a wide range of operational environments."
            labelColor="orange"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((industry) => (
              <IndustryCard
                key={industry.title}
                title={industry.title}
                challenge={industry.challenge}
                fit={industry.fit}
                icon={industry.icon}
                image={industry.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions cross-link */}
      <section className="section-py bg-surface-soft relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 surface-grid opacity-[0.08]" />
          <div className="absolute top-1/3 -left-24 h-96 w-96 rounded-full bg-brand-teal/[0.06] blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-brand-gold/[0.06] blur-3xl" />
        </div>
        <div className="container-site relative">
          <SectionHeader
            label="Related Solutions"
            title="Solutions That Serve These Environments"
            subtitle="Each solution line is designed with real operational environments in mind."
            labelColor="teal"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOLUTIONS.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group p-5 bg-white rounded-2xl border border-surface-border hover:border-brand-teal/30 transition-all duration-200 card-hover"
              >
                <h3 className="text-sm font-semibold text-text-dark group-hover:text-brand-teal transition-colors mb-2">
                  {solution.title}
                </h3>
                <div className="flex items-center gap-1 text-xs font-medium text-text-muted group-hover:text-brand-teal transition-colors">
                  Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="See Use Cases for Your Environment"
        subtitle="We work with clients across power, petrochemical, mining, industrial, commercial, utility, and infrastructure sectors. Tell us about your project."
        primaryCTA={{ label: "Contact Nueva Modo", href: "/contact" }}
        secondaryCTA={{ label: "View Our Solutions", href: "/solutions" }}
        variant="dark"
      />
    </>
  );
}
