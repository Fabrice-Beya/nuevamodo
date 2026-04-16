import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { CapabilityChip } from "@/components/ui/CapabilityChip";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, ChevronRight } from "lucide-react";

const capabilityTags = [
  "Smart Metering",
  "Industrial IoT",
  "Smart Monitoring",
  "Software Platforms",
  "Process Automation",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Ambient industrial photograph on the right — very subtle for depth */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none">
        <Image
          src="/images/hero/hero-background.jpg"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          priority
          className="object-cover opacity-[0.08] lg:opacity-[0.10]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Enhanced background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 surface-dots opacity-40" />
        {/* Industrial mesh on right side */}
        <div className="absolute inset-y-0 right-0 w-[60%] industrial-mesh opacity-20" />
        {/* Gradient overlays */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-50/60 via-transparent to-transparent" />
        <div className="absolute left-0 bottom-0 w-1/3 h-2/3 bg-gradient-to-tr from-slate-100/40 to-transparent" />
        {/* Glowing orbs for depth */}
        <div className="absolute left-[10%] top-[20%] h-48 w-48 rounded-full bg-gradient-to-br from-brand-green/20 to-brand-green/5 blur-3xl glow-green" />
        <div className="absolute right-[15%] top-[15%] h-64 w-64 rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-blue/5 blur-3xl glow-blue" />
        <div className="absolute right-[8%] bottom-[20%] h-56 w-56 rounded-full bg-gradient-to-br from-brand-orange/10 to-transparent blur-3xl" />
        {/* Accent lines */}
        <div className="absolute top-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-brand-blue/20 to-transparent" />
        <div className="absolute top-2/3 left-0 w-1/4 h-px bg-gradient-to-r from-brand-green/20 to-transparent" />
      </div>

      <div className="container-site relative">
        <div className="min-h-[calc(92vh-4rem)] lg:min-h-[calc(90vh-4.5rem)] flex items-center py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            {/* Left — messaging */}
            <Reveal className="order-2 lg:order-1">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-white border border-brand-blue/20 rounded-full pl-2 pr-4 py-1.5 mb-7 shadow-sm">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-green/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                </span>
                <span className="text-xs font-bold text-brand-deep-blue tracking-wide">
                  Industrial Technology Solutions
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-display-xl font-extrabold text-text-dark mb-6 text-balance leading-[1.05]">
                Turnkey{" "}
                <span className="relative inline-block text-brand-blue">
                  Industrial
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-green rounded-full" />
                </span>{" "}
                Technology Solutions
              </h1>

              {/* Sub */}
              <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-xl text-balance">
                Nueva Modo designs and delivers integrated solutions across
                industrial IoT, smart metering, smart monitoring, software
                platforms, and process automation—helping organisations gain
                visibility, control, and operational intelligence.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-10">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Talk to Us
                </Button>
                <Button
                  href="/solutions"
                  variant="outline"
                  size="lg"
                  icon={<ChevronRight className="w-4 h-4" />}
                >
                  Explore Our Solutions
                </Button>
              </div>

              {/* Capability tags */}
              <div className="flex flex-wrap gap-2">
                {capabilityTags.map((tag) => (
                  <CapabilityChip key={tag} label={tag} variant="dark" />
                ))}
              </div>
            </Reveal>

            {/* Right — visual */}
            <Reveal className="order-1 lg:order-2" delay={0.1}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
