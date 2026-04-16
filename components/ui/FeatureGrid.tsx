import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface FeatureGridProps {
  items: string[];
  columns?: 1 | 2 | 3;
  className?: string;
  iconColor?: "blue" | "green";
}

export function FeatureGrid({
  items,
  columns = 2,
  className,
  iconColor = "blue",
}: FeatureGridProps) {
  return (
    <ul
      className={cn(
        "grid gap-3",
        columns === 1 ? "grid-cols-1" : columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle
            className={cn(
              "w-5 h-5 shrink-0 mt-0.5",
              iconColor === "blue" ? "text-brand-blue" : "text-brand-green"
            )}
            strokeWidth={1.75}
          />
          <span className="text-sm text-text-dark leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
