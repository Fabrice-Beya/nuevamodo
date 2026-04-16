"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  {
    value: "100%",
    label: "Turnkey Delivery",
    description: "From design to deployment",
    accent: "blue",
  },
  {
    value: "24/7",
    label: "Real-time Monitoring",
    description: "Continuous visibility",
    accent: "green",
  },
  {
    value: "End-to-End",
    label: "Integration",
    description: "Hardware + Software + Data",
    accent: "orange",
  },
  {
    value: "Scalable",
    label: "Multi-Site Deployments",
    description: "From pilot to enterprise",
    accent: "blue",
  },
];

const accentMap: Record<string, string> = {
  blue: "from-brand-blue to-brand-deep-blue",
  green: "from-emerald-500 to-emerald-700",
  orange: "from-amber-500 to-amber-700",
};

export function StatsSection() {
  return (
    <section className="relative py-14 lg:py-20 bg-gradient-to-br from-brand-deep-blue via-[#0b2e70] to-brand-deep-blue overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 surface-grid opacity-[0.08]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />
        {/* Top edge gradient */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="container-site relative">
        <Reveal className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/15 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            Our Impact
          </span>
          <h2 className="text-display-md font-bold text-white text-balance mb-3">
            Built for Scale. Engineered for Reliability.
          </h2>
          <p className="text-base text-white/70 leading-relaxed">
            We combine field-proven hardware with software rigour to deliver
            outcomes that matter to operations teams.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-2xl bg-white/[0.06] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 p-5 lg:p-6 backdrop-blur-sm transition-all duration-300 h-full overflow-hidden">
                {/* Hover gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentMap[stat.accent]} opacity-80`}
                />

                <div className="text-2xl lg:text-3xl font-extrabold text-white mb-1.5 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-white/60 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
