import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Settings2,
  Wifi,
  Activity,
  Code2,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "settings-2": Settings2,
  wifi: Wifi,
  activity: Activity,
  "code-2": Code2,
};

const colorMap = {
  blue: {
    icon: "bg-brand-blue/10 text-brand-blue",
    accent: "group-hover:text-brand-blue",
    border: "hover:border-brand-blue/30",
    dot: "bg-brand-blue",
  },
  green: {
    icon: "bg-emerald-50 text-emerald-600",
    accent: "group-hover:text-emerald-600",
    border: "hover:border-emerald-200",
    dot: "bg-brand-green",
  },
  orange: {
    icon: "bg-amber-50 text-amber-600",
    accent: "group-hover:text-amber-600",
    border: "hover:border-amber-200",
    dot: "bg-brand-orange",
  },
};

interface SolutionCardProps {
  title: string;
  summary: string;
  icon: string;
  color?: "blue" | "green" | "orange";
  href: string;
  image?: string;
  className?: string;
}

export function SolutionCard({
  title,
  summary,
  icon,
  color = "blue",
  href,
  image,
  className,
}: SolutionCardProps) {
  const Icon = iconMap[icon] || Settings2;
  const colors = colorMap[color];

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col bg-white rounded-2xl border border-surface-border overflow-hidden",
        "transition-all duration-300 shadow-sm hover:shadow-xl",
        "hover:-translate-y-1",
        colors.border,
        className
      )}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-surface-muted">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-blue/60 via-transparent to-transparent" />
          <div
            className={cn(
              "absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/95",
              "transition-transform duration-300 group-hover:scale-110"
            )}
          >
            <Icon
              className={cn(
                "w-5 h-5",
                color === "blue"
                  ? "text-brand-blue"
                  : color === "green"
                    ? "text-emerald-600"
                    : "text-amber-600"
              )}
              strokeWidth={1.75}
            />
          </div>
        </div>
      )}
      <div className="flex flex-col p-6 flex-1">
        {!image && (
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm",
              "transition-transform duration-300 group-hover:scale-110",
              colors.icon
            )}
          >
            <Icon className="w-6 h-6" strokeWidth={1.75} />
          </div>
        )}
        <h3 className="text-base font-semibold text-text-dark mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed flex-1">
          {summary}
        </p>
        <div
          className={cn(
            "mt-4 flex items-center gap-1.5 text-sm font-semibold text-text-muted transition-colors duration-200",
            colors.accent
          )}
        >
          Learn more{" "}
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
