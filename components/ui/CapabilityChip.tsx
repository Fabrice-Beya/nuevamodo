import { cn } from "@/lib/utils";

interface CapabilityChipProps {
  label: string;
  variant?: "default" | "green" | "orange" | "blue" | "teal" | "sky" | "gold" | "dark";
  className?: string;
}

const variantStyles = {
  default: "bg-surface-soft text-text-dark border border-surface-border shadow-sm",
  blue: "bg-brand-teal/8 text-brand-teal border border-brand-teal/25 shadow-sm hover:shadow-md transition-shadow",
  teal: "bg-brand-teal/8 text-brand-teal border border-brand-teal/25 shadow-sm hover:shadow-md transition-shadow",
  sky: "bg-brand-sky/10 text-brand-sky border border-brand-sky/30 shadow-sm hover:shadow-md transition-shadow",
  green: "bg-brand-green/10 text-brand-green border border-brand-green/30 shadow-sm hover:shadow-md transition-shadow",
  orange: "bg-brand-orange/10 text-brand-orange-deep border border-brand-orange/30 shadow-sm hover:shadow-md transition-shadow",
  gold: "bg-brand-gold/10 text-brand-gold border border-brand-gold/30 shadow-sm hover:shadow-md transition-shadow",
  dark: "bg-white/10 text-white border border-white/20 shadow-sm",
};

export function CapabilityChip({
  label,
  variant = "default",
  className,
}: CapabilityChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {label}
    </span>
  );
}

interface CapabilityChipGroupProps {
  chips: string[];
  variant?: CapabilityChipProps["variant"];
  className?: string;
}

export function CapabilityChipGroup({
  chips,
  variant = "default",
  className,
}: CapabilityChipGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {chips.map((chip) => (
        <CapabilityChip key={chip} label={chip} variant={variant} />
      ))}
    </div>
  );
}
