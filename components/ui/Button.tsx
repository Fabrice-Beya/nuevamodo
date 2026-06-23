"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-deep shadow-orange hover:shadow-lg focus-visible:ring-brand-orange",
  secondary:
    "bg-brand-teal text-white hover:bg-brand-teal-deep shadow-teal hover:shadow-lg focus-visible:ring-brand-teal",
  outline:
    "border-2 border-brand-teal text-brand-teal bg-white hover:bg-brand-teal hover:text-white hover:shadow-md focus-visible:ring-brand-teal",
  ghost:
    "text-brand-teal bg-transparent hover:bg-brand-teal/10 focus-visible:ring-brand-teal",
  white:
    "bg-white !text-brand-teal-deep hover:bg-brand-sky/10 shadow-md hover:shadow-xl focus-visible:ring-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2 rounded-lg gap-1.5",
  md: "text-sm px-5 py-2.5 rounded-xl gap-2",
  lg: "text-base px-7 py-3.5 rounded-xl gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      icon,
      iconPosition = "right",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center font-semibold transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      "hover:-translate-y-0.5",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
