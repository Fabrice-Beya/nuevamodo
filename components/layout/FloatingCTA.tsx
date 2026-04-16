"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MessageCircle, X, Mail, Phone, FileText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/lib/constants";

export function FloatingCTA() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (pathname === "/contact") {
    return null;
  }

  return (
    <div ref={wrapperRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Options */}
      <div
        className={cn(
          "flex flex-col gap-2 transition-all duration-200",
          open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-3"
        )}
      >
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-3 bg-white text-text-dark text-sm font-medium px-4 py-2.5 rounded-xl shadow-card hover:shadow-card-hover border border-surface-border transition-all duration-150"
        >
          <Mail className="w-4 h-4 text-brand-blue shrink-0" strokeWidth={1.75} />
          Email Us
        </a>
        <a
          href={`tel:${CONTACT.phone}`}
          className="flex items-center gap-3 bg-white text-text-dark text-sm font-medium px-4 py-2.5 rounded-xl shadow-card hover:shadow-card-hover border border-surface-border transition-all duration-150"
        >
          <Phone className="w-4 h-4 text-brand-blue shrink-0" strokeWidth={1.75} />
          Call Us
        </a>
        <a
          href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white text-text-dark text-sm font-medium px-4 py-2.5 rounded-xl shadow-card hover:shadow-card-hover border border-surface-border transition-all duration-150"
        >
          <MessageCircle className="w-4 h-4 text-brand-green shrink-0" strokeWidth={1.75} />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex items-center gap-3 bg-white text-text-dark text-sm font-medium px-4 py-2.5 rounded-xl shadow-card hover:shadow-card-hover border border-surface-border transition-all duration-150"
          onClick={() => setOpen(false)}
        >
          <FileText className="w-4 h-4 text-brand-blue shrink-0" strokeWidth={1.75} />
          Contact Form
        </Link>
      </div>

      {/* Toggle button */}
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "hidden sm:block rounded-full border border-surface-border bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-text-dark shadow-card transition-all duration-200",
            open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
          )}
        >
          Contact Us
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "rounded-2xl shadow-blue flex items-center justify-center transition-all duration-200",
            "bg-brand-blue text-white hover:bg-[#0c47a8] w-14 h-14",
            open && "scale-95"
          )}
          aria-label="Contact options"
          aria-expanded={open}
        >
          {open ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageCircle className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
