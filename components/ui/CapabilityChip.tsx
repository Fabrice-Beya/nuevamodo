import { cn } from "@/lib/utils";

interface CapabilityChipProps {
  label: string;
  variant?: "default" | "green" | "orange" | "blue" | "dark";
  className?: string;
}

const variantStyles = {
  default: "bg-surface-soft text-text-dark border-2 border-surface-border shadow-sm",
  blue: "bg-blue-50 text-brand-blue border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow",
  green: "bg-emerald-50 text-emerald-700 border-2 border-emerald-200 shadow-sm hover:shadow-md transition-shadow",
  orange: "bg-amber-50 text-amber-700 border-2 border-amber-200 shadow-sm hover:shadow-md transition-shadow",
  dark: "bg-brand-deep-blue/10 text-brand-deep-blue border-2 border-brand-deep-blue/20 shadow-sm",
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
