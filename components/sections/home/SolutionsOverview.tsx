import { SectionHeader } from "@/components/ui/SectionHeader";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { Button } from "@/components/ui/Button";
import { SOLUTIONS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function SolutionsOverview() {
  return (
    <section className="section-py bg-surface-soft relative overflow-hidden">
      {/* Layered background for depth and variety */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 surface-dots opacity-30" />
        {/* Soft brand-colored glows that echo the palette without overpowering */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-teal/[0.07] blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-brand-orange/[0.06] blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-brand-gold/[0.06] blur-3xl" />
      </div>
      <div className="container-site relative">
        <SectionHeader
          label="What We Do"
          title="Electrical Engineering Meets Industrial Technology"
          subtitle="A turnkey range spanning electrical works, process control, connected systems, software, and our flagship innovations."
          labelColor="orange"
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((solution) => (
            <SolutionCard
              key={solution.slug}
              title={solution.title}
              summary={solution.summary}
              icon={solution.icon}
              color={solution.color}
              href={`/solutions/${solution.slug}`}
              image={solution.image}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            href="/solutions"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
