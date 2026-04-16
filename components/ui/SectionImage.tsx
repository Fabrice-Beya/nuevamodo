import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectionImageProps {
  src: string;
  alt: string;
  aspectRatio?: "video" | "square" | "wide" | "portrait";
  priority?: boolean;
  overlay?: "none" | "dark" | "blue";
  className?: string;
}

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  portrait: "aspect-[3/4]",
};

export function SectionImage({
  src,
  alt,
  aspectRatio = "video",
  priority = false,
  overlay = "none",
  className,
}: SectionImageProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-surface-muted shadow-xl ring-1 ring-surface-border/60",
        aspectMap[aspectRatio],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        priority={priority}
        className="object-cover"
      />
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-blue/40 via-transparent to-transparent" />
      )}
      {overlay === "blue" && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-deep-blue/20" />
      )}
    </div>
  );
}
