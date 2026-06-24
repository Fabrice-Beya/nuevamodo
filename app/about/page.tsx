import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/ui/CTABand";
import { ValueCard } from "@/components/ui/ValueCard";
import { SectionImage } from "@/components/ui/SectionImage";
import {
  VALUES,
  VISION,
  MISSION,
  COMPANY,
  MANAGING_DIRECTOR,
  AFFILIATIONS,
  CERTIFICATIONS,
  SOLUTIONS,
} from "@/lib/constants";
import { Eye, Target, ShieldCheck, BadgeCheck, User } from "lucide-react";

export const metadata: Metadata = {
  title: "About Nueva Modo",
  description:
    "Founded in 2016, Nueva Modo is a South African electrical engineering and industrial technology company with 50+ years of combined experience, affiliated with ICASA, SABS, ECSA, and SAIEE.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange-deep mb-6">
                Welcome to Nueva Modo
              </span>
              <h1 className="text-display-lg font-bold text-text-dark mb-6 text-balance">
                Find New Ways
              </h1>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                {COMPANY.legalName} was founded in {COMPANY.founded} on the idea
                that in a rapidly changing world, we can always find new ways. We
                challenge and tackle electrical engineering and industrial
                problems - and in the process, we value respect, integrity, and
                openness.
              </p>
              <p className="text-base text-text-muted leading-relaxed">
                Our team is composed of qualified professionals with extensive
                experience across diverse industries, fields, and disciplines,
                bringing over {COMPANY.combinedExperience} of combined experience
                in power generation, petrochemical, mining, and transportation.
                Each team member has been handpicked for their passion,
                innovation, and expertise, and we are incredibly proud of the
                team at Nueva Modo.
              </p>
            </div>
            <SectionImage
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1600&q=80"
              alt="Black engineering professional in hard hat on an industrial construction site"
              aspectRatio="video"
              priority
              overlay="dark"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white border border-surface-border p-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-brand-teal" strokeWidth={1.8} />
              </div>
              <h2 className="text-xl font-bold text-text-dark mb-3">Our Vision</h2>
              <p className="text-base text-text-muted leading-relaxed">{VISION}</p>
            </div>
            <div className="rounded-3xl gradient-teal text-white p-8 shadow-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h2 className="text-xl font-bold mb-3">Our Mission</h2>
                <p className="text-base text-white/85 leading-relaxed">{MISSION}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-white">
        <div className="container-site">
          <SectionHeader
            label="Our Values"
            title="Respect · Openness · Integrity"
            subtitle="The principles that guide how we work with our clients, partners, and each other."
            labelColor="orange"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {VALUES.map((value, i) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
                icon={value.icon}
                accent={(["orange", "sky", "green"] as const)[i % 3]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <SectionHeader
            label="What We Deliver"
            title="Our Solution Lines"
            subtitle="Every solution area combines engineering, hardware, connectivity, and software into a complete offering."
            labelColor="teal"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SOLUTIONS.map((service, i) => (
              <div
                key={service.title}
                className="p-6 bg-white rounded-2xl border border-surface-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-teal flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A focus on safety */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionImage
              src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?auto=format&fit=crop&w=1600&q=80"
              alt="Professional team in a boardroom conducting a compliance and standards review meeting"
              aspectRatio="video"
              overlay="dark"
            />
            <div>
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-green/10 text-brand-green mb-5">
                A Focus on Safety
              </span>
              <h2 className="text-display-sm font-bold text-text-dark mb-4">
                Completely Above Board
              </h2>
              <div className="h-1 w-14 rounded-full bg-brand-green mb-6" />
              <p className="text-lg text-text-dark leading-relaxed mb-5">
                Nervous about getting electrical engineers in because you&apos;re
                worried about the safety of your staff, premises, and equipment?
              </p>
              <p className="text-base text-text-muted leading-relaxed mb-5">
                Working in the field of electrical engineering and nano-material
                cleaning technology, safety is a factor that is of extreme
                importance to us. We ensure that there are the necessary
                precautions in place for each of our service offerings.
              </p>
              <p className="text-base text-text-muted leading-relaxed mb-6">
                We are completely above board, and are affiliated with SAIEE, and
                ECSA, as well as the Department of Labour.
              </p>
              <div className="space-y-3">
                {AFFILIATIONS.map((aff) => (
                  <div key={aff} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" strokeWidth={1.8} />
                    <span className="text-sm font-medium text-text-dark leading-relaxed">{aff}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {CERTIFICATIONS.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-gold/10 text-brand-gold border border-brand-gold/25"
                  >
                    <BadgeCheck className="w-3.5 h-3.5" strokeWidth={2} />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      {/* <section className="section-py bg-surface-soft">
        <div className="container-site">
          <SectionHeader
            label="Leadership"
            title="Led by Experienced Engineers"
            labelColor="teal"
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-surface-border p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-charcoal flex items-center justify-center shrink-0">
                <User className="w-8 h-8 text-white" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-dark">
                  {MANAGING_DIRECTOR.name}
                </h3>
                <p className="text-sm font-semibold text-brand-teal mb-1">
                  {MANAGING_DIRECTOR.title} · {MANAGING_DIRECTOR.designation}
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {MANAGING_DIRECTOR.qualifications}
                </p>
                <p className="text-sm text-text-muted leading-relaxed italic">
                  &ldquo;In a rapidly changing world, we&apos;ll always help you
                  find new, innovative solutions to the complex electrical
                  engineering issues facing your business.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <CTABand
        title="Discuss Your Project With Our Team"
        subtitle="Tell us about your environment and objectives - we will help define the right solution."
        primaryCTA={{ label: "Discuss Your Project", href: "/contact" }}
        secondaryCTA={{ label: "View Our Solutions", href: "/solutions" }}
        variant="dark"
      />
    </>
  );
}
