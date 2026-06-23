import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  labelColor?: "blue" | "teal" | "sky" | "green" | "orange" | "gold";
}

const labelColors = {
  blue: "text-brand-teal bg-brand-teal/10",
  teal: "text-brand-teal bg-brand-teal/10",
  sky: "text-brand-sky bg-brand-sky/10",
  green: "text-brand-green bg-brand-green/10",
  orange: "text-brand-orange-deep bg-brand-orange/10",
  gold: "text-brand-gold bg-brand-gold/10",
};

const barColors = {
  blue: "bg-brand-teal",
  teal: "bg-brand-teal",
  sky: "bg-brand-sky",
  green: "bg-brand-green",
  orange: "bg-brand-orange",
  gold: "bg-brand-gold",
};

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  labelColor = "blue",
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4",
            labelColors[labelColor]
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-display-md text-text-dark text-balance",
          titleClassName
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-5 h-1 w-14 rounded-full",
          barColors[labelColor],
          align === "center" && "mx-auto"
        )}
      />
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
