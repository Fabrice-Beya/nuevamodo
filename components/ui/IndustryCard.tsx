import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Factory,
  Building2,
  Landmark,
  Zap,
  Globe,
  Thermometer,
  Truck,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  factory: Factory,
  "building-2": Building2,
  landmark: Landmark,
  zap: Zap,
  globe: Globe,
  thermometer: Thermometer,
  truck: Truck,
};

interface IndustryCardProps {
  title: string;
  challenge: string;
  fit: string;
  icon: string;
  image?: string;
  className?: string;
}

export function IndustryCard({
  title,
  challenge,
  fit,
  icon,
  image,
  className,
}: IndustryCardProps) {
  const Icon = iconMap[icon] || Factory;

  return (
    <div
      className={cn(
        "group relative rounded-2xl bg-white border border-surface-border shadow-sm overflow-hidden",
        "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        "hover:border-brand-blue/30",
        className
      )}
    >
      {image && (
        <div className="relative w-full h-44 overflow-hidden bg-surface-muted">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-blue/70 via-brand-deep-blue/20 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Icon className="w-5 h-5 text-brand-blue" strokeWidth={1.75} />
            </div>
            <h3 className="text-base font-bold text-white drop-shadow-md">
              {title}
            </h3>
          </div>
        </div>
      )}

      <div className="p-6">
        {!image && (
          <>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 flex items-center justify-center mb-4 shadow-sm">
              <Icon className="w-5 h-5 text-brand-blue" strokeWidth={1.75} />
            </div>
            <h3 className="text-base font-semibold text-text-dark mb-3">
              {title}
            </h3>
          </>
        )}

        <div className="space-y-3">
          <div>
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Challenge
            </span>
            <p className="text-sm text-text-muted mt-1 leading-relaxed">
              {challenge}
            </p>
          </div>
          <div>
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
              Solution Fit
            </span>
            <p className="text-sm text-text-dark mt-1 leading-relaxed">{fit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
