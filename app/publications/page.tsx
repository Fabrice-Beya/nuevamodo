import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PublicationCard } from "@/components/ui/PublicationCard";
import { CTABand } from "@/components/ui/CTABand";
import { PUBLICATIONS } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Articles and insights from Nueva Modo on nano-material cleaning technology, electrical equipment maintenance, and industrial engineering.",
};

export default function PublicationsPage() {
  return (
    <>
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <SectionHeader
            label="Insights & Articles"
            title="Publications"
            subtitle="Expert perspectives on nano-material cleaning, electrical equipment care, and keeping industrial operations safe, efficient, and reliable."
            labelColor="gold"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {PUBLICATIONS.map((publication) => (
              <PublicationCard key={publication.slug} publication={publication} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Need Help With Your Electrical Equipment?"
        subtitle="Talk to Nueva Modo about nano-material cleaning, maintenance, and engineering support tailored to your operation."
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore Nano Cleaning", href: "/solutions/nano-cleaning" }}
        variant="dark"
      />
    </>
  );
}
