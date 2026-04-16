import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Nueva Modo",
  description:
    "Talk to Nueva Modo about your industrial IoT, smart monitoring, process control, or software project.",
};

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    color: "blue" as const,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
    color: "blue" as const,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    href: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`,
    color: "green" as const,
  },
  {
    icon: MapPin,
    label: "Region",
    value: CONTACT.region,
    href: undefined,
    color: "blue" as const,
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
              <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-50 text-brand-blue mb-6">
                Get in Touch
              </span>
              <h1 className="text-display-lg font-bold text-text-dark mb-5 text-balance">
                Let&apos;s Talk About Your Project
              </h1>
              <p className="text-base text-text-muted leading-relaxed mb-10">
                Tell us what you are trying to monitor, automate, digitise, or
                integrate, and we will help define the right solution for your
                environment.
              </p>

              {/* Contact details */}
              <div className="space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          item.color === "green"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-brand-blue/10 text-brand-blue"
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
            </div>

            {/* Right column — form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
