import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";

const capabilityTags = [
  "Nano-Material Cleaning",
  "Industrial IoT",
  "Protection & Testing",
  "Process Control",
  "Software Systems",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal-deep text-white">
      {/* Full-bleed hero video with darkening overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/hero-background.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal-deep/70 via-brand-charcoal-deep/50 to-brand-teal-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-deep/50 via-transparent to-transparent" />
      </div>

      <div className="container-site relative">
        <div className="min-h-[calc(94vh-4rem)] lg:min-h-[calc(88vh-4.5rem)] flex items-center py-16 lg:py-20">
          <div className="max-w-2xl">
            <Reveal>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/15 backdrop-blur-sm rounded-full pl-2.5 pr-4 py-1.5 mb-7">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange">
                  <Zap className="w-3 h-3 text-white" strokeWidth={2.5} />
                </span>
                <span className="text-xs font-bold tracking-wide text-white/90">
                  Electrical Engineering · Industrial Technology · Est. 2016
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-display-2xl text-white mb-6 text-balance">
                We Find New Ways to{" "}
                <span className="text-gradient-brand">Power</span> Your
                Operations
              </h1>

              {/* Sub */}
              <p className="text-lg text-white/70 leading-relaxed mb-9 max-w-xl">
                Nueva Modo delivers turnkey electrical engineering and industrial
                technology - from protection &amp; testing, commissioning, and
                process control through to industrial IoT, software systems, and
                our licensed nano-material cleaning technology.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3.5 mb-10">
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
                  variant="white"
                  size="lg"
                  icon={<ChevronRight className="w-4 h-4" />}
                  className="bg-white/10 !text-white border border-white/25 hover:bg-white/20 backdrop-blur-sm"
                >
                  Explore Our Solutions
                </Button>
              </div>

              {/* Capability tags */}
              <div className="flex flex-wrap gap-2">
                {capabilityTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide bg-white/8 text-white/80 border border-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
