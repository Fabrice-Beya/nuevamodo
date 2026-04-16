import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  labelColor?: "blue" | "green" | "orange";
}

const labelColors = {
  blue: "text-brand-blue bg-blue-50",
  green: "text-emerald-700 bg-emerald-50",
  orange: "text-amber-700 bg-amber-50",
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
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
