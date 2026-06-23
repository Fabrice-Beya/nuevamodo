import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/ui/CTABand";
import { SectionImage } from "@/components/ui/SectionImage";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { CERTIFICATIONS } from "@/lib/constants";
import { CheckCircle2, BadgeCheck, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Nano-Material Cleaning Technology",
  description:
    "A licensed, ISO-certified nano-material cleaning technology for live electrical equipment — tried and tested in over 11 countries.",
};

const problems = [
  "Sticky coils and contacts",
  "Unwanted temperature rise",
  "Electrostatic build-up",
  "Component heating",
  "Poor efficiency",
  "Arcing and flashovers",
];

const benefits = [
  "Removes static",
  "Reduces noise",
  "Increases wind speed at inlets and outlets",
  "Restores insulation",
  "Removes dust and grime",
  "Lowers operating temperatures",
];

const chips = [
  "Live or Offline Cleaning",
  "Insulator Surfaces",
  "Bushings",
  "Surge Arrestors",
  "Reactors",
  "Capacitor Banks",
  "LV / MV / HV Equipment",
  "Network Communication Equipment",
];

const caseStudies = [
  {
    title: "Electrical DB Board Clean",
    description:
      "Our Nano Cleaning technology is perfect for Electrical DB Board Cleaning. Preventative cleaning will prolong the life of the electrical components and help your electrical components run more efficiently.",
    image: "/nano_1.png",
    alt: "Before and after nano-material cleaning of an electrical distribution board",
  },
  {
    title: "Resistor Bank Clean",
    description:
      "Cleaning your resistors will prevent overheating and component malfunction. After cleaning with our Nano Cleaning technology, your resistors will run like new again! Just look at the difference below!",
    image: "/nano_2.png",
    alt: "Before and after nano-material cleaning of industrial resistor banks",
  },
  {
    title: "UPS Clean",
    description:
      "After years of not getting cleaning maintenance we tackled this job with our Nano Cleaning technology, after 30 minutes without switching anything off we managed to get this UPS back to its former glory!",
    image: "/nano_3.png",
    alt: "Before and after nano-material cleaning of a UPS unit",
  },
];

const cleaningVideos = [
  "OtGvn1_a65k",
  "rBUlMZwwS2o",
  "j_KUDqZk2ao",
  "fA4cowxikTY",
  "EKzE-JyFk-c",
  "xMtgCdpPM-Y",
  "un_47TNUbAU",
  "oBjzPsbSf_I",
];

export default function NanoCleaningPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                Innovative Solution
              </span>
              <h1 className="text-display-lg font-bold text-text-dark mb-5 text-balance">
                Nano-Material Cleaning Technology
              </h1>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                A quick, easy, and effective way to clean your electrical and
                electronic equipment — tried and tested in over 11 countries.
              </p>
              <div className="flex flex-wrap gap-2">
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
              <p className="text-sm text-text-muted italic mt-5">
                Nueva Modo holds the licence for this technology in the
                Sub-Saharan African region.
              </p>
            </div>
            <SectionImage
              src="/images/solutions/solution-monitoring.jpg"
              alt="Clean electrical contactors and busbars inside a distribution panel"
              aspectRatio="video"
              priority
              overlay="dark"
            />
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="section-py bg-surface-soft">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="Industrial Problem Statement"
                title="Contamination Is a Silent Threat"
                align="left"
                labelColor="gold"
                className="mb-6"
              />
              <p className="text-base text-text-muted leading-relaxed mb-6">
                Industry experience, failure investigations, and scientific
                research have revealed that electrical and electronic equipment
                is susceptible to contamination by oil, dust, acid, alkali
                salts, and moisture during long-term operation. This often leads
                to:
              </p>
              <ul className="space-y-3">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" strokeWidth={1.8} />
                    <span className="text-sm font-medium text-text-dark leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white border border-surface-border p-8 shadow-sm">
              <h3 className="text-lg font-bold text-text-dark mb-3">
                Our Solution
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                A uniquely engineered, well-researched solution that addresses
                the well-known problem where deep cleaning of equipment is
                usually a no-go zone — due to continuous operations, health and
                safety considerations, secondary problems, and access
                constraints.
              </p>
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                Product Benefits
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-sm text-text-dark leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Where it applies */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <SectionHeader
              label="There Is No Other Solution Like This on the Market"
              title="Cleaning for Primary & Secondary Equipment"
              subtitle="Our solution covers live or offline physical sweeping and cleaning of primary electrical equipment, as well as secondary high, medium, and low voltage power distribution and network communication equipment."
              labelColor="gold"
            />
          </div>
          <div className="max-w-3xl mx-auto">
            <CapabilityChipGroup chips={chips} variant="gold" className="justify-center" />
          </div>
        </div>
      </section>

      {/* Real-world applications */}
      <section className="section-py bg-surface-soft border-y border-surface-border">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionHeader
              label="Proven Results"
              title="See the Difference in the Field"
              subtitle="Real before-and-after outcomes from live electrical equipment cleaned with our nano-material technology — without shutdown, without compromise."
              labelColor="gold"
            />
          </div>

          <div className="space-y-16 lg:space-y-20">
            {caseStudies.map((study, index) => {
              const imageFirst = index % 2 === 0;

              return (
                <div
                  key={study.title}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
                >
                  <div className={imageFirst ? "order-1" : "order-1 lg:order-2"}>
                    <SectionImage
                      src={study.image}
                      alt={study.alt}
                      aspectRatio="portrait"
                      overlay="none"
                      className="!aspect-[493/662] shadow-xl"
                    />
                  </div>

                  <div className={imageFirst ? "order-2" : "order-2 lg:order-1 lg:py-4"}>
                    <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold mb-5">
                      Application
                    </span>
                    <h2 className="text-display-sm font-bold text-text-dark mb-4 text-balance">
                      {study.title}
                    </h2>
                    <div className="h-1 w-14 rounded-full bg-brand-gold mb-6" />
                    <p className="text-base text-text-muted leading-relaxed">
                      {study.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cleaning videos */}
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionHeader
              label="In Action"
              title="Watch Our Satisfying Cleaning Videos"
              subtitle="Cleaning electricals with our Nano Cleaning technology is almost as satisfying as watching these videos."
              labelColor="gold"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {cleaningVideos.map((videoId, index) => (
              <YouTubeEmbed
                key={videoId}
                videoId={videoId}
                title={`Nano-material cleaning video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Protect Your Electrical Investment"
        subtitle="Don't allow expensive electrical equipment to become covered in dust and grime. Talk to us about a cleaning programme."
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "View All Solutions", href: "/solutions" }}
        variant="dark"
      />
    </>
  );
}
