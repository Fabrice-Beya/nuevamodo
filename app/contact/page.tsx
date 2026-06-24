import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, Phone, MessageCircle, MapPin, User } from "lucide-react";
import { CONTACT, MANAGING_DIRECTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Nueva Modo",
  description:
    "Talk to Nueva Modo about your electrical engineering, process control, industrial IoT, or software project. Based in Kempton Park, serving clients across South Africa.",
};

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    color: "teal" as const,
  },
  {
    icon: Phone,
    label: "Telephone",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    color: "teal" as const,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    href: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`,
    color: "green" as const,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left column */}
            <div className="lg:col-span-2">
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange-deep mb-6">
                Get in Touch
              </span>
              <h1 className="text-display-lg font-bold text-text-dark mb-5 text-balance">
                Let&apos;s Talk About Your Project
              </h1>
              <p className="text-base text-text-muted leading-relaxed mb-10">
                Tell us what you are trying to power, monitor, automate,
                digitise, or integrate, and we will help define the right
                solution for your environment.
              </p>

              {/* Contact details */}
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-brand-teal/10 text-brand-teal">
                    <MapPin className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                      Office
                    </p>
                    <p className="text-sm font-medium text-text-dark leading-relaxed">
                      {CONTACT.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          item.color === "green"
                            ? "bg-brand-green/10 text-brand-green"
                            : "bg-brand-teal/10 text-brand-teal"
                        }`}
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-text-dark">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* Managing Director card */}
              <div className="mt-8 rounded-2xl border border-surface-border bg-surface-soft p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-brand-charcoal text-white">
                    <User className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                      {MANAGING_DIRECTOR.title} · {MANAGING_DIRECTOR.designation}
                    </p>
                    <p className="text-sm font-bold text-text-dark">
                      {MANAGING_DIRECTOR.name}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                      {MANAGING_DIRECTOR.qualifications}
                    </p>
                    <div className="mt-3 flex flex-col gap-1">
                      <a
                        href={`mailto:${MANAGING_DIRECTOR.email}`}
                        className="text-sm font-medium text-brand-teal hover:underline"
                      >
                        {MANAGING_DIRECTOR.email}
                      </a>
                      <a
                        href={`tel:${CONTACT.whatsapp.replace(/\s/g, "")}`}
                        className="text-sm font-medium text-text-dark hover:text-brand-teal"
                      >
                        {MANAGING_DIRECTOR.mobile}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-surface-soft border-t border-surface-border">
        <div className="container-site py-0">
          <div className="relative w-full h-[360px] overflow-hidden rounded-2xl my-10 ring-1 ring-surface-border">
            <iframe
              title="Nueva Modo office location"
              src="https://www.google.com/maps?q=Electron%20Avenue%20Isando%20Kempton%20Park&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
