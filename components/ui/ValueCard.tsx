import { cn } from "@/lib/utils";
import {
  Package,
  ShieldCheck,
  Network,
  TrendingUp,
  Award,
  Sparkles,
  Handshake,
  Eye,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  package: Package,
  "shield-check": ShieldCheck,
  network: Network,
  "trending-up": TrendingUp,
  award: Award,
  sparkles: Sparkles,
  handshake: Handshake,
  eye: Eye,
};

type Accent = "teal" | "sky" | "green" | "orange" | "gold";

const accentMap: Record<Accent, string> = {
  teal: "bg-brand-teal/10 text-brand-teal",
  sky: "bg-brand-sky/10 text-brand-sky",
  green: "bg-brand-green/10 text-brand-green",
  orange: "bg-brand-orange/10 text-brand-orange",
  gold: "bg-brand-gold/10 text-brand-gold",
};

const accentBorder: Record<Accent, string> = {
  teal: "hover:border-brand-teal/40",
  sky: "hover:border-brand-sky/40",
  green: "hover:border-brand-green/40",
  orange: "hover:border-brand-orange/40",
  gold: "hover:border-brand-gold/40",
};

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
  accent?: Accent;
  className?: string;
}

export function ValueCard({
  title,
  description,
  icon,
  accent = "teal",
  className,
}: ValueCardProps) {
  const Icon = iconMap[icon] || Package;

  return (
    <div
      className={cn(
        "group p-6 rounded-2xl border-2 border-surface-border bg-white shadow-sm",
        "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        accentBorder[accent],
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110",
            accentMap[accent]
          )}
        >
          <Icon className="w-5 h-5" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-text-dark mb-2">{title}</h3>
          <p className="text-sm text-text-muted leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
