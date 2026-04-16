"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  Search,
  PencilRuler,
  Rocket,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

const stepIcons: LucideIcon[] = [Search, PencilRuler, Rocket, TrendingUp];

export function ProcessSection() {
  return (
    <section className="section-py bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 surface-dots opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl" />
      </div>
      <div className="container-site relative">
        <SectionHeader
          label="How We Work"
          title="A Delivery Approach Built for Real Projects"
          subtitle="From initial discovery through to long-term support, we follow a structured process that ensures the right solution is delivered correctly."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connecting line on desktop */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent hidden lg:block" />

          {PROCESS_STEPS.map((step, i) => {
            const Icon = stepIcons[i] || Search;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step card */}
                <div className="group relative bg-white rounded-2xl border-2 border-surface-border hover:border-brand-blue/40 p-6 w-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Icon circle */}
                  <div className="relative z-10 mx-auto mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-deep-blue flex items-center justify-center shadow-blue relative">
                      <Icon
                        className="w-7 h-7 text-white"
                        strokeWidth={1.75}
                      />
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-brand-blue shadow-md flex items-center justify-center">
                        <span className="text-xs font-bold text-brand-blue tabular-nums">
                          {step.step}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
