"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Gauge,
  Radio,
  Server,
  BarChart3,
  Bell,
  Cpu,
} from "lucide-react";

export function IoTVisual() {
  return (
    <div className="relative w-full aspect-[4/3]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-slate-50 border border-slate-200/80 shadow-xl overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 industrial-mesh opacity-40" />

        {/* Connection lines SVG */}
        <svg
          viewBox="0 0 400 300"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#0E7C8B" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#27AAE1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0E7C8B" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Device to gateway lines */}
          <motion.line
            x1="70"
            y1="80"
            x2="200"
            y2="150"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="70"
            y1="220"
            x2="200"
            y2="150"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="70"
            y1="150"
            x2="200"
            y2="150"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          />
          {/* Gateway to platform */}
          <motion.line
            x1="200"
            y1="150"
            x2="330"
            y2="80"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="200"
            y1="150"
            x2="330"
            y2="150"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
          />
          <motion.line
            x1="200"
            y1="150"
            x2="330"
            y2="220"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            viewport={{ once: true }}
          />
        </svg>

        {/* Field Devices Column */}
        <div className="absolute left-4 md:left-6 inset-y-0 flex flex-col justify-around py-8">
          <FieldDeviceNode icon={<Gauge className="w-4 h-4" />} label="Meter" color="blue" delay={0.1} />
          <FieldDeviceNode icon={<Radio className="w-4 h-4" />} label="Sensor" color="green" delay={0.2} />
          <FieldDeviceNode icon={<Cpu className="w-4 h-4" />} label="Device" color="orange" delay={0.3} />
        </div>

        {/* Central Gateway */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-deep-blue flex items-center justify-center shadow-blue relative">
            <Wifi className="w-7 h-7 text-white" strokeWidth={2} />
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-2xl border-2 border-brand-blue/40 animate-ping" />
          </div>
          <div className="mt-2 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="text-[10px] font-bold text-brand-blue">GATEWAY</span>
          </div>
        </motion.div>

        {/* Platform Column (right) */}
        <div className="absolute right-4 md:right-6 inset-y-0 flex flex-col justify-around py-8">
          <FieldDeviceNode icon={<Server className="w-4 h-4" />} label="Cloud" color="blue" delay={1.1} align="right" />
          <FieldDeviceNode icon={<BarChart3 className="w-4 h-4" />} label="Analytics" color="green" delay={1.2} align="right" />
          <FieldDeviceNode icon={<Bell className="w-4 h-4" />} label="Alerts" color="orange" delay={1.3} align="right" />
        </div>

        {/* Bottom labels */}
        <div className="absolute bottom-3 inset-x-0 flex items-center justify-between px-6">
          <span className="text-[10px] font-bold tracking-widest text-text-muted uppercase">
            Field
          </span>
          <span className="text-[10px] font-bold tracking-widest text-brand-blue uppercase">
            Connectivity
          </span>
          <span className="text-[10px] font-bold tracking-widest text-text-muted uppercase">
            Platform
          </span>
        </div>
      </div>
    </div>
  );
}

function FieldDeviceNode({
  icon,
  label,
  color,
  delay,
  align = "left",
}: {
  icon: React.ReactNode;
  label: string;
  color: "blue" | "green" | "orange";
  delay: number;
  align?: "left" | "right";
}) {
  const colorMap = {
    blue: "bg-brand-sky/10 text-brand-sky border-brand-sky/30",
    green: "bg-brand-green/10 text-brand-green border-brand-green/30",
    orange: "bg-brand-orange/10 text-brand-orange border-brand-orange/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`flex flex-col items-center gap-1.5 ${align === "right" ? "md:items-center" : ""}`}
    >
      <div
        className={`w-11 h-11 rounded-xl ${colorMap[color]} border-2 flex items-center justify-center bg-white shadow-sm`}
      >
        {icon}
      </div>
      <span className="text-[10px] font-semibold text-text-dark tracking-wide">
        {label}
      </span>
    </motion.div>
  );
}
