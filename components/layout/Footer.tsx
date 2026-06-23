import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, COMPANY, SOLUTIONS } from "@/lib/constants";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 8.5h2.2V5.6C15.8 5.5 14.9 5.4 14 5.4c-2 0-3.4 1.2-3.4 3.5v1.8H8v3h2.6V21h3.1v-7.3h2.5l.4-3h-2.9V9.1c0-.9.3-1.5 1.3-1.5z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const solutions = SOLUTIONS.map((solution) => ({
  label: solution.title,
  href: `/solutions/${solution.slug}`,
}));

const company = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="gradient-industrial text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 surface-grid opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
      </div>
      <div className="container-site relative">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src="/logo.png"
              alt="Nueva Modo"
              width={150}
              height={40}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-sm font-semibold text-brand-orange tracking-wide mb-4">
              {COMPANY.tagline}
            </p>
            <p className="text-sm text-white/55 leading-relaxed max-w-xs mb-6">
              A South African electrical engineering and industrial technology
              company delivering turnkey solutions — from protection &amp;
              testing and process control to IoT, software, and licensed
              nano-material cleaning technology.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-teal flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-150 leading-snug"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" strokeWidth={1.75} />
                <span className="leading-relaxed">
                  {CONTACT.addressLines.slice(0, 4).join(", ")}, {CONTACT.addressLines[4]}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors duration-150"
                >
                  <Mail className="w-4 h-4 text-brand-teal shrink-0" strokeWidth={1.75} />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors duration-150"
                >
                  <Phone className="w-4 h-4 text-brand-teal shrink-0" strokeWidth={1.75} />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 text-brand-green shrink-0" strokeWidth={1.75} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-white/35 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/35 hover:text-white/70 transition-colors">
              Terms
            </Link>
            <a
              href={`https://${CONTACT.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 hover:text-white/70 transition-colors text-xs font-medium"
            >
              {CONTACT.website}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
