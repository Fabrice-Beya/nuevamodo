"use client";

import { motion } from "framer-motion";
import { Thermometer, AlertCircle, CheckCircle2, Bell } from "lucide-react";

export function MonitoringVisual() {
  return (
    <div className="relative w-full aspect-[4/3]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-50/50 via-white to-slate-50 border border-slate-200/80 shadow-xl overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 surface-dots opacity-40" />

        {/* Dashboard layout */}
        <div className="absolute inset-0 p-5 flex flex-col gap-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-brand-green/15 flex items-center justify-center">
                <Thermometer
                  className="w-4 h-4 text-brand-green"
                  strokeWidth={2}
                />
              </div>
              <span className="text-xs font-bold text-text-dark">
                Cold Chain Monitoring
              </span>
            </div>
            <span className="text-[10px] font-bold text-brand-green bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
              ALL SYSTEMS OK
            </span>
          </div>

          {/* Sensor cards */}
          <div className="grid grid-cols-2 gap-2.5 flex-1">
            <SensorCard
              label="Cold Room A"
              value="-18.2"
              unit="°C"
              status="ok"
              target="-18°C"
              delay={0.2}
            />
            <SensorCard
              label="Cold Room B"
              value="-19.5"
              unit="°C"
              status="ok"
              target="-18°C"
              delay={0.3}
            />
            <SensorCard
              label="Mobile Fridge"
              value="2.8"
              unit="°C"
              status="warning"
              target="2-4°C"
              delay={0.4}
            />
            <SensorCard
              label="Freezer C"
              value="-22.1"
              unit="°C"
              status="ok"
              target="-22°C"
              delay={0.5}
            />
          </div>

          {/* Alert bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-deep-blue to-brand-blue rounded-xl p-2.5 flex items-center gap-2.5 shadow-md"
          >
            <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur">
              <Bell className="w-3.5 h-3.5 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-white">
                Real-time alerts active
              </div>
              <div className="text-[9px] text-white/75">
                LoRaWAN · 4G · SMS + Email
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[9px] font-bold text-brand-green">
                LIVE
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SensorCard({
  label,
  value,
  unit,
  status,
  target,
  delay,
}: {
  label: string;
  value: string;
  unit: string;
  status: "ok" | "warning";
  target: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-sm flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-semibold text-text-muted">
          {label}
        </span>
        {status === "ok" ? (
          <CheckCircle2
            className="w-3.5 h-3.5 text-brand-green"
            strokeWidth={2}
          />
        ) : (
          <AlertCircle
            className="w-3.5 h-3.5 text-brand-orange"
            strokeWidth={2}
          />
        )}
      </div>
      <div className="flex items-baseline gap-0.5">
        <span className="text-xl font-bold text-text-dark tabular-nums">
          {value}
        </span>
        <span className="text-xs font-medium text-text-muted">{unit}</span>
      </div>
      <div className="text-[9px] text-text-muted mt-0.5">Target: {target}</div>
    </motion.div>
  );
}
