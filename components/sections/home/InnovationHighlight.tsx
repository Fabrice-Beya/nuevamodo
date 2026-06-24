import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";
import { ArrowRight, Sparkles, Flame, CheckCircle2 } from "lucide-react";

const innovations = [
  {
    eyebrow: "Licensed Technology",
    title: "Nano-Material Cleaning Technology",
    href: "/solutions/nano-cleaning",
    icon: Sparkles,
    accent: "gold" as const,
    description:
      "A uniquely engineered, tried-and-tested solution for deep cleaning live electrical and electronic equipment - certified under ISO 9001, ISO 14001, and OHSAS 18001, and proven in over 11 countries.",
    points: [
      "Licensed for the Sub-Saharan African region",
      "Removes static, dust and grime; reduces noise",
      "Restores insulation and lowers temperatures",
    ],
  },
  {
    eyebrow: "Innovative Solution",
    title: "Intelligent Fire Extinguisher",
    href: "/solutions/fire-extinguisher",
    icon: Flame,
    accent: "orange" as const,
    description:
      "A simple, highly reliable automatic fire-extinguishing device that detects and suppresses fire at its source - without external power, smoke sensors, or complex pipework.",
    points: [
      "Detects heat and bursts at the hottest point",
      "Releases nano-particle suppression agent",
      "No harm to personnel, lower project cost",
    ],
  },
];

const accentClasses = {
  gold: {
    chip: "bg-brand-gold/15 text-brand-gold",
    icon: "bg-brand-gold/15 text-brand-gold",
    check: "text-brand-gold",
    glow: "bg-brand-gold/10",
    link: "text-brand-gold",
  },
  orange: {
    chip: "bg-brand-orange/15 text-brand-orange",
    icon: "bg-brand-orange/15 text-brand-orange",
    check: "text-brand-orange",
    glow: "bg-brand-orange/10",
    link: "text-brand-orange",
  },
};

export function InnovationHighlight() {
  return (
    <section className="section-py gradient-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 surface-grid opacity-[0.06]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
      </div>
      <div className="container-site relative">
        <SectionHeader
          label="What Sets Us Apart"
          title="Innovations You Won't Find Anywhere Else"
          subtitle="Beyond core engineering, Nueva Modo brings two flagship innovations to the South African market."
          labelColor="gold"
          className="mb-12 [&_h2]:text-white [&_p]:text-white/70"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {innovations.map((item, i) => {
            const Icon = item.icon;
            const a = accentClasses[item.accent];
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <Link
                  href={item.href}
                  className="group relative block h-full rounded-3xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl ${a.glow}`} />
                  <div className="relative">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5 ${a.chip}`}>
                      {item.eyebrow}
                    </span>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${a.icon}`}>
                        <Icon className="w-6 h-6" strokeWidth={1.8} />
                      </div>
                      <h3 className="text-xl font-bold text-white leading-snug pt-1">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${a.check}`} strokeWidth={2} />
                          <span className="text-sm text-white/80 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${a.link}`}>
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
