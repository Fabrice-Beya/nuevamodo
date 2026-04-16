import { SectionHeader } from "@/components/ui/SectionHeader";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { Button } from "@/components/ui/Button";
import { SOLUTIONS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function SolutionsOverview() {
  return (
    <section className="section-py bg-gradient-to-b from-white via-slate-50/50 to-white relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 surface-dots opacity-20 pointer-events-none" />
      <div className="container-site relative">
        <SectionHeader
          label="What We Do"
          title="Integrated Industrial & Digital Solutions"
          subtitle="Integrated solutions across industrial environments, facilities, infrastructure, and digital operations."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
