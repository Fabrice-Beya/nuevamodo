"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Wifi,
  Cpu,
  Gauge,
  Zap,
  LineChart,
  TrendingUp,
} from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[5/4]">
      {/* Main dashboard card */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/80 shadow-2xl overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 industrial-mesh opacity-30" />

        {/* Top status bar */}
        <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-r from-brand-deep-blue to-brand-blue flex items-center justify-between px-5 z-10">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
            </div>
            <span className="text-white/90 text-xs font-semibold ml-2 tracking-wide">
              NUEVA MODO · OPERATIONS
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5 text-brand-green" strokeWidth={2} />
            <span className="text-xs text-white/80 font-medium">LIVE</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="absolute inset-0 pt-16 px-5 pb-5 flex flex-col gap-3">
          {/* Metric cards row */}
          <div className="grid grid-cols-3 gap-2.5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-sm"
            >
              <div className="flex items-center justify-between mb-1.5">
                <Gauge className="w-3.5 h-3.5 text-brand-blue" strokeWidth={2} />
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  +2.4%
                </span>
              </div>
              <div className="text-lg font-bold text-text-dark tabular-nums">
                847
              </div>
              <div className="text-[10px] text-text-muted font-medium">
                Active Sensors
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-sm"
            >
              <div className="flex items-center justify-between mb-1.5">
                <Zap className="w-3.5 h-3.5 text-brand-orange" strokeWidth={2} />
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  99.9%
                </span>
              </div>
              <div className="text-lg font-bold text-text-dark tabular-nums">
                24.3
              </div>
              <div className="text-[10px] text-text-muted font-medium">
                kWh Avg Load
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-sm"
            >
              <div className="flex items-center justify-between mb-1.5">
                <Activity
                  className="w-3.5 h-3.5 text-brand-green"
                  strokeWidth={2}
                />
                <span className="text-[10px] font-semibold text-brand-blue bg-blue-50 px-1.5 py-0.5 rounded">
                  OK
                </span>
              </div>
              <div className="text-lg font-bold text-text-dark tabular-nums">
                12
              </div>
              <div className="text-[10px] text-text-muted font-medium">
                Sites Online
              </div>
            </motion.div>
          </div>

          {/* Chart area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex-1 bg-white rounded-xl p-3 border border-slate-200/80 shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <LineChart
                  className="w-3.5 h-3.5 text-brand-blue"
                  strokeWidth={2}
                />
                <span className="text-[11px] font-semibold text-text-dark">
                  Real-time Performance
                </span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp
                  className="w-3 h-3 text-brand-green"
                  strokeWidth={2}
                />
                <span className="text-[10px] font-semibold text-brand-green">
                  +12.8%
                </span>
              </div>
            </div>

            {/* Chart SVG */}
            <svg
              viewBox="0 0 300 110"
              className="w-full h-[calc(100%-20px)]"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0E56C8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0E56C8" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="chartGradient2"
                  x1="0"
                  x2="0"
                  y1="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#07C96B" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#07C96B" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {[20, 40, 60, 80].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="300"
                  y2={y}
                  stroke="#E2E8F0"
                  strokeWidth="0.5"
                  strokeDasharray="2 3"
                />
              ))}

              {/* Green line (secondary) */}
              <motion.path
                d="M 0,70 Q 30,65 50,60 T 100,55 T 150,50 T 200,45 T 250,40 T 300,35"
                fill="none"
                stroke="#07C96B"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              <path
                d="M 0,70 Q 30,65 50,60 T 100,55 T 150,50 T 200,45 T 250,40 T 300,35 L 300,110 L 0,110 Z"
                fill="url(#chartGradient2)"
              />

              {/* Blue line (primary) */}
              <motion.path
                d="M 0,85 Q 25,75 50,70 T 100,50 T 150,55 T 200,35 T 250,25 T 300,20"
                fill="none"
                stroke="#0E56C8"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <path
                d="M 0,85 Q 25,75 50,70 T 100,50 T 150,55 T 200,35 T 250,25 T 300,20 L 300,110 L 0,110 Z"
                fill="url(#chartGradient)"
              />

              {/* Data points */}
              {[
                { x: 50, y: 70 },
                { x: 100, y: 50 },
                { x: 150, y: 55 },
                { x: 200, y: 35 },
                { x: 250, y: 25 },
              ].map((point, i) => (
                <motion.circle
                  key={i}
                  cx={point.x}
                  cy={point.y}
                  r="2.5"
                  fill="#0E56C8"
                  stroke="white"
                  strokeWidth="1.5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Bottom info strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-2.5 border border-slate-200/80 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                <Cpu className="w-3.5 h-3.5 text-brand-blue" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[10px] font-semibold text-text-dark">
                  Gateway Node #A47
                </div>
                <div className="text-[9px] text-text-muted">
                  LoRaWAN · 4G · Operational
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[10px] font-semibold text-brand-green">
                LIVE
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating accent card - top right */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute top-5 -right-4 md:-right-8 bg-gradient-to-br from-brand-blue to-brand-deep-blue text-white rounded-2xl p-3.5 shadow-blue hidden sm:block z-10"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur">
            <Activity className="w-4 h-4" strokeWidth={2} />
          </div>
          <div>
            <div className="text-xs font-bold">Turnkey Delivery</div>
            <div className="text-[10px] text-white/75">Hardware + Software</div>
          </div>
        </div>
      </motion.div>

      {/* Floating accent card - bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="absolute bottom-5 -left-4 md:-left-8 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200/80 hidden sm:block z-10"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-green/15 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-bold text-text-dark">
              End-to-End System
            </div>
            <div className="text-[10px] text-text-muted">
              Field to Dashboard
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
