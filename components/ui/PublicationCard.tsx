import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Publication } from "@/lib/publications";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-surface-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-gold/30">
      <Link href={`/publications/${publication.slug}/`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={publication.image}
          alt={publication.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-deep/55 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-brand-gold/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          {publication.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-brand-gold" strokeWidth={2} />
            {publication.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand-gold" strokeWidth={2} />
            {publication.time}
          </span>
        </div>

        <h2 className="mb-3 text-xl font-bold leading-snug text-text-dark text-balance">
          <Link
            href={`/publications/${publication.slug}/`}
            className="transition-colors hover:text-brand-teal"
          >
            {publication.title}
          </Link>
        </h2>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted line-clamp-4">
          {publication.excerpt}
        </p>

        <Link
          href={`/publications/${publication.slug}/`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal transition-colors group-hover:text-brand-teal-deep"
        >
          Read article
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
