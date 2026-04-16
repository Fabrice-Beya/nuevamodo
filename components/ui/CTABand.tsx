import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

interface CTABandProps {
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: "blue" | "dark" | "light";
  className?: string;
}

export function CTABand({
  title,
  subtitle,
  primaryCTA = { label: "Talk to Us", href: "/contact" },
  secondaryCTA,
  variant = "blue",
  className,
}: CTABandProps) {
  const variantStyles = {
    blue: "gradient-blue-to-deep text-white",
    dark: "gradient-dark text-white",
    light: "bg-surface-soft border border-surface-border text-text-dark",
  };

  return (
    <section
      className={cn(
        "section-py relative overflow-hidden",
        variantStyles[variant],
        className
      )}
    >
      {/* Enhanced background for dark variants */}
      {variant !== "light" && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 surface-grid opacity-5" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        </div>
      )}
      <div className="container-site relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className={cn(
              "text-display-md font-bold mb-4 text-balance",
              variant === "light" ? "text-text-dark" : "text-white"
            )}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={cn(
                "text-lg leading-relaxed mb-8",
                variant === "light" ? "text-text-muted" : "text-white/75"
              )}
            >
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {variant === "light" ? (
              <Button
                href={primaryCTA.href}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {primaryCTA.label}
              </Button>
            ) : (
              <Button
                href={primaryCTA.href}
                variant="white"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant={variant === "light" ? "outline" : "ghost"}
                size="lg"
                className={variant !== "light" ? "text-white border-white/30 hover:bg-white/10" : ""}
              >
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
