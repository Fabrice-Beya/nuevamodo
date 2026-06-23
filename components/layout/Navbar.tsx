"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  SlidersHorizontal,
  Wifi,
  Zap,
  Code2,
  Sparkles,
  Flame,
} from "lucide-react";

const solutionIcons: Record<string, React.ReactNode> = {
  "Electrical Engineering Services": <Zap className="w-4 h-4" strokeWidth={1.75} />,
  "Process Control & Instrumentation": <SlidersHorizontal className="w-4 h-4" strokeWidth={1.75} />,
  "Industrial IoT Solutions": <Wifi className="w-4 h-4" strokeWidth={1.75} />,
  "Software Based Solutions": <Code2 className="w-4 h-4" strokeWidth={1.75} />,
  "Nano-Material Cleaning Technology": <Sparkles className="w-4 h-4" strokeWidth={1.75} />,
  "Intelligent Fire Extinguisher": <Flame className="w-4 h-4" strokeWidth={1.75} />,
};

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openSolutions = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setSolutionsOpen(true);
  };

  const closeSolutionsSoon = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
      closeTimeoutRef.current = null;
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSolutionsOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-surface-border shadow-sm"
            : "bg-white/95 backdrop-blur-sm border-b border-transparent"
        )}
      >
        <div className="container-site">
          <nav className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="Nueva Modo"
                width={150}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
              <span className="text-lg font-extrabold tracking-tight text-text-dark leading-none">
                <span className="text-brand-teal">Nueva</span> Modo
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={openSolutions}
                    onMouseLeave={closeSolutionsSoon}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
                        "text-text-dark hover:text-brand-blue hover:bg-blue-50/60",
                        (solutionsOpen || isActiveLink(link.href)) &&
                          "text-brand-blue bg-blue-50/60"
                      )}
                      onClick={() => setSolutionsOpen((v) => !v)}
                      aria-expanded={solutionsOpen}
                      aria-haspopup="menu"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          solutionsOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {/* Dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[760px]",
                        "transition-all duration-200 origin-top",
                        solutionsOpen
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      )}
                    >
                      <div className="bg-white rounded-2xl border border-surface-border shadow-xl">
                        <div className="p-5 grid grid-cols-5 gap-5">
                        {/* Solutions list */}
                        <div className="col-span-3">
                          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3 px-3">
                            Solutions
                          </p>
                          <div className="grid grid-cols-2 gap-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-surface-soft transition-colors duration-150 group"
                              onClick={() => setSolutionsOpen(false)}
                            >
                              <span
                                className={cn(
                                  "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-150",
                                  isActiveLink(item.href)
                                    ? "bg-brand-blue text-white"
                                    : "bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
                                )}
                              >
                                {solutionIcons[item.label]}
                              </span>
                              <div className="min-w-0">
                                <div
                                  className={cn(
                                    "text-sm font-semibold transition-colors duration-150 leading-snug",
                                    isActiveLink(item.href)
                                      ? "text-brand-teal"
                                      : "text-text-dark group-hover:text-brand-teal"
                                  )}
                                >
                                  {item.label}
                                </div>
                              </div>
                            </Link>
                          ))}
                          </div>
                        </div>
                        {/* Quick links */}
                        <div className="col-span-2 bg-surface-soft rounded-xl p-4 flex flex-col">
                          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                            Quick Links
                          </p>
                          <div className="space-y-2 flex-1">
                            <Link
                              href="/solutions"
                              className="flex items-center gap-2 text-sm font-medium text-text-dark hover:text-brand-blue transition-colors py-1.5"
                              onClick={() => setSolutionsOpen(false)}
                            >
                              <ArrowRight className="w-3.5 h-3.5 text-brand-blue" />
                              View All Solutions
                            </Link>
                            <Link
                              href="/contact"
                              className="flex items-center gap-2 text-sm font-medium text-text-dark hover:text-brand-blue transition-colors py-1.5"
                              onClick={() => setSolutionsOpen(false)}
                            >
                              <ArrowRight className="w-3.5 h-3.5 text-brand-blue" />
                              Discuss a Project
                            </Link>
                            <Link
                              href="/contact"
                              className="flex items-center gap-2 text-sm font-medium text-text-dark hover:text-brand-blue transition-colors py-1.5"
                              onClick={() => setSolutionsOpen(false)}
                            >
                              <ArrowRight className="w-3.5 h-3.5 text-brand-blue" />
                              Contact Nueva Modo
                            </Link>
                          </div>
                          <p className="text-xs text-text-muted leading-relaxed mt-4 border-t border-surface-border pt-4">
                            Industrial & Digital Solutions — turnkey from field devices to dashboards.
                          </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
                      isActiveLink(link.href)
                        ? "text-brand-blue bg-blue-50/60"
                        : "text-text-dark hover:text-brand-blue hover:bg-blue-50/60"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/contact" variant="primary" size="sm">
                Talk to Us
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-text-dark hover:bg-surface-soft transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-text-dark/40 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[min(360px,90vw)] bg-white shadow-2xl",
            "flex flex-col transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Nueva Modo"
                width={130}
                height={36}
                className="h-8 w-auto object-contain"
              />
              <span className="text-base font-extrabold tracking-tight text-text-dark leading-none">
                <span className="text-brand-teal">Nueva</span> Modo
              </span>
            </div>
            <button
              className="p-2 rounded-lg hover:bg-surface-soft transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-5 space-y-1">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <p className="px-3 pt-4 pb-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Solutions
                  </p>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-text-dark hover:bg-surface-soft hover:text-brand-blue transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="w-6 h-6 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                        {solutionIcons[item.label]}
                      </span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "flex items-center px-3 py-3 rounded-xl text-sm font-medium transition-colors",
                    isActiveLink(link.href)
                      ? "bg-blue-50 text-brand-blue"
                      : "text-text-dark hover:bg-surface-soft hover:text-brand-blue"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className="p-5 border-t border-surface-border">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Talk to Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
