import { cn } from "@/lib/utils";
import {
  Package,
  ShieldCheck,
  Network,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  package: Package,
  "shield-check": ShieldCheck,
  network: Network,
  "trending-up": TrendingUp,
};

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function ValueCard({
  title,
  description,
  icon,
  className,
}: ValueCardProps) {
  const Icon = iconMap[icon] || Package;

  return (
    <div
      className={cn(
        "p-6 rounded-2xl border-2 border-surface-border bg-white shadow-sm",
        "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        "hover:border-brand-blue/30",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0 shadow-sm">
          <Icon className="w-5 h-5 text-brand-blue" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-text-dark mb-2">{title}</h3>
          <p className="text-sm text-text-muted leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
