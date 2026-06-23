import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { Reveal } from "@/components/ui/Reveal";
import { ELECTRICAL_SERVICES } from "@/lib/constants";
import {
  ArrowRight,
  ShieldCheck,
  Settings2,
  Wrench,
  Gauge,
  Thermometer,
  PencilRuler,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "settings-2": Settings2,
  wrench: Wrench,
  gauge: Gauge,
  thermometer: Thermometer,
  "pencil-ruler": PencilRuler,
};

export function ElectricalHighlight() {
  return (
    <section className="section-py bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 surface-dots opacity-20" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>
      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange-deep mb-5">
              Our Core Business
            </span>
            <h2 className="text-display-md font-bold text-text-dark mb-4 text-balance">
              A Focus on Innovation &amp; Expertise
            </h2>
            <div className="h-1 w-14 rounded-full bg-brand-orange mb-6" />
            <p className="text-base text-text-muted leading-relaxed mb-6">
              In a rapidly changing world, we&apos;ll always help you find new,
              innovative solutions to the complex electrical engineering issues
              facing your business. Our team brings over 50 years of combined
              experience across power generation, petrochemical, mining, and
              transportation.
            </p>
            <SectionImage
              src="/images/solutions/solution-process-control.jpg"
              alt="Electrical engineers working on an industrial distribution panel"
              aspectRatio="video"
              overlay="dark"
              className="mb-8 hidden lg:block"
            />
            <Button
              href="/solutions/electrical-engineering"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Electrical Services
            </Button>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ELECTRICAL_SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || ShieldCheck;
              return (
                <Reveal key={service.title} delay={i * 0.05}>
                  <div className="group h-full rounded-2xl border border-surface-border bg-white p-5 shadow-sm hover:shadow-lg hover:border-brand-orange/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-brand-orange" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-sm font-bold text-text-dark mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed line-clamp-5">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
