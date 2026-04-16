import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValueCard } from "@/components/ui/ValueCard";
import { VALUE_PROPS } from "@/lib/constants";

export function ValueProposition() {
  return (
    <section className="section-py gradient-slate relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 industrial-mesh opacity-10" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/40 to-transparent" />
      </div>
      <div className="container-site relative">
        <SectionHeader
          label="Why Nueva Modo"
          title="Built for Real Operational Environments"
          subtitle="We combine engineering rigour with integrated delivery to give clients practical, scalable solutions that work in the field."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {VALUE_PROPS.map((prop) => (
            <ValueCard
              key={prop.title}
              title={prop.title}
              description={prop.description}
              icon={prop.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
