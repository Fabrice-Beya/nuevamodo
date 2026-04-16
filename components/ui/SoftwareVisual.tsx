"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Monitor,
  Database,
  Eye,
  Sparkles,
} from "lucide-react";

export function SoftwareVisual() {
  const items = [
    { icon: <Monitor className="w-5 h-5" />, label: "Web Platform", color: "blue", delay: 0.1 },
    { icon: <Smartphone className="w-5 h-5" />, label: "Mobile App", color: "green", delay: 0.2 },
    { icon: <Database className="w-5 h-5" />, label: "Backend", color: "orange", delay: 0.3 },
    { icon: <Code2 className="w-5 h-5" />, label: "APIs", color: "blue", delay: 0.4 },
    { icon: <Eye className="w-5 h-5" />, label: "Vision AI", color: "green", delay: 0.5 },
    { icon: <Sparkles className="w-5 h-5" />, label: "AI Models", color: "orange", delay: 0.6 },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    blue: {
      bg: "bg-blue-50",
      icon: "text-brand-blue",
      border: "border-blue-200",
    },
    green: {
      bg: "bg-emerald-50",
      icon: "text-emerald-600",
      border: "border-emerald-200",
    },
    orange: {
      bg: "bg-amber-50",
      icon: "text-amber-600",
      border: "border-amber-200",
    },
  };

  return (
    <div className="relative w-full aspect-[4/3]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200/80 shadow-xl overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 surface-grid opacity-30" />

        {/* Central gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl" />

        {/* Browser/terminal window mock */}
        <div className="absolute inset-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-lg overflow-hidden flex flex-col">
          {/* Window chrome */}
          <div className="h-8 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200 flex items-center px-3 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            <div className="ml-3 flex-1 h-4 rounded bg-slate-100" />
          </div>

          {/* Capability grid */}
          <div className="flex-1 p-4 grid grid-cols-3 gap-2.5 content-center">
            {items.map((item) => {
              const colors = colorMap[item.color];
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: item.delay }}
                  viewport={{ once: true }}
                  className={`rounded-xl ${colors.bg} border-2 ${colors.border} p-3 flex flex-col items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer`}
                >
                  <div className={colors.icon}>{item.icon}</div>
                  <span className="text-[10px] font-bold text-text-dark">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom status */}
          <div className="border-t border-slate-200 px-4 py-2 flex items-center justify-between bg-slate-50/60">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[9px] font-bold text-text-muted">
                ALL SERVICES OPERATIONAL
              </span>
            </div>
            <span className="text-[9px] font-bold text-brand-blue">
              v2.4.1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
