import { cn } from "@/lib/utils";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  isShort?: boolean;
  className?: string;
}

export function YouTubeEmbed({
  videoId,
  title,
  isShort = false,
  className,
}: YouTubeEmbedProps) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border border-surface-border bg-brand-charcoal-deep shadow-md ring-1 ring-surface-border/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5",
        isShort ? "aspect-[9/16]" : "aspect-video",
        className
      )}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
        loading="lazy"
      />
    </div>
  );
}
