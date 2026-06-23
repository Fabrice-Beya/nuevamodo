import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { CapabilityChipGroup } from "@/components/ui/CapabilityChip";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { CERTIFICATIONS } from "@/lib/constants";
import { ArrowRight, BadgeCheck } from "lucide-react";

const benefits = [
  "Removes static, dust and grime from live equipment",
  "Restores insulation and lowers operating temperatures",
  "Reduces noise and increases airflow at inlets and outlets",
  "Certified for LV, MV and HV primary and secondary equipment",
  "Proven in over 11 countries across industrial environments",
  "Licensed exclusively for the Sub-Saharan African region",
];

const equipment = [
  "Insulator Surfaces",
  "Bushings & Surge Arrestors",
  "Capacitor Banks",
  "Reactors",
  "LV / MV / HV Equipment",
  "Network Communication Equipment",
];

export function NanoCleaningHighlight() {
  return (
    <section className="section-py bg-gradient-to-br from-white via-amber-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 surface-dots opacity-15" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-gold/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>
      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="w-full">
            <SectionImage
              src="/nano_0.png"
              alt="Before and after nano-material cleaning on industrial electrical equipment"
              aspectRatio="portrait"
              overlay="none"
              className="!aspect-[497/661] shadow-xl"
            />
          </div>

          <div>
            <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold mb-5">
              Nano-Material Cleaning Technology
            </span>
            <h2 className="text-display-md font-bold text-text-dark mb-4 text-balance">
              Deep Cleaning for Live Electrical Equipment
            </h2>
            <div className="h-1 w-14 rounded-full bg-brand-gold mb-6" />
            <p className="text-base text-text-muted leading-relaxed mb-6">
              A quick, effective, and uniquely engineered solution for
              contamination on electrical and electronic equipment — tried and
              tested in over 11 countries, and licensed exclusively to Nueva
              Modo across Sub-Saharan Africa.
            </p>

            <div className="flex flex-wrap gap-2 mb-7">
              {CERTIFICATIONS.slice(0, 3).map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-gold/10 text-brand-gold border border-brand-gold/25"
                >
                  <BadgeCheck className="w-3.5 h-3.5" strokeWidth={2} />
                  {cert}
                </span>
              ))}
            </div>

            <FeatureGrid items={benefits} columns={1} className="mb-7" iconColor="gold" />

            <CapabilityChipGroup chips={equipment} variant="gold" className="mb-8" />

            <Button
              href="/solutions/nano-cleaning"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Nano-Material Cleaning
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
