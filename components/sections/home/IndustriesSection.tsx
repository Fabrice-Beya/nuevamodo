import { SectionHeader } from "@/components/ui/SectionHeader";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { Button } from "@/components/ui/Button";
import { INDUSTRIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function IndustriesSection() {
  return (
    <section className="section-py bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 surface-grid opacity-[0.08]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
      </div>
      <div className="container-site relative">
        <SectionHeader
          label="Where We Deliver Value"
          title="Industries & Environments"
          subtitle="Nueva Modo solutions are designed to work across a wide range of physical and operational environments."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {INDUSTRIES.slice(0, 6).map((industry) => (
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

        <div className="mt-10 text-center">
          <Button
            href="/industries"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            See All Industries
          </Button>
        </div>
      </div>
    </section>
  );
}
