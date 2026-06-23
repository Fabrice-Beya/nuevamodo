import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { PublicationBody } from "@/components/ui/PublicationBody";
import { CTABand } from "@/components/ui/CTABand";
import { Button } from "@/components/ui/Button";
import {
  PUBLICATIONS,
  getPublicationBySlug,
} from "@/lib/publications";

interface PublicationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PUBLICATIONS.map((publication) => ({ slug: publication.slug }));
}

export async function generateMetadata({
  params,
}: PublicationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const publication = getPublicationBySlug(slug);

  if (!publication) {
    return { title: "Publication Not Found" };
  }

  return {
    title: publication.title,
    description: publication.excerpt,
  };
}

export default async function PublicationDetailPage({
  params,
}: PublicationPageProps) {
  const { slug } = await params;
  const publication = getPublicationBySlug(slug);

  if (!publication) {
    notFound();
  }

  return (
    <>
      <section className="section-py bg-white border-b border-surface-border">
        <div className="container-site">
          <Link
            href="/publications/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal transition-colors hover:text-brand-teal-deep"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to publications
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold mb-5">
                {publication.category}
              </span>

              <h1 className="text-display-md font-bold text-text-dark mb-5 text-balance">
                {publication.title}
              </h1>

              <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-text-muted">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-brand-gold" strokeWidth={2} />
                  {publication.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-gold" strokeWidth={2} />
                  {publication.time}
                </span>
              </div>

              <PublicationBody content={publication.content} />

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary" size="md">
                  Get in Touch
                </Button>
                <Button href="/solutions/nano-cleaning/" variant="outline" size="md">
                  Nano Cleaning Solutions
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-surface-border shadow-xl">
                  <Image
                    src={publication.image}
                    alt={publication.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-text-muted">{publication.imageCredit}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Protect Your Electrical Equipment?"
        subtitle="Nueva Modo delivers licensed nano-material cleaning technology and full electrical engineering support across South Africa."
        primaryCTA={{ label: "Talk to Us", href: "/contact" }}
        secondaryCTA={{ label: "View All Publications", href: "/publications" }}
        variant="dark"
      />
    </>
  );
}
