"use client"

import { Radio, Target } from "lucide-react"

export function DroneFeed() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
      <img
        src="/night-vision-security-camera-feed-of-luxury-car-de.jpg"
        alt="Drone Night Vision Feed"
        className="h-full w-full object-cover opacity-60 grayscale brightness-75 contrast-125"
      />

      {/* Overlay Elements */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
            <Radio className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase">Live // Drone_04_Beta</span>
          </div>
          <div className="text-right font-mono text-[10px] text-white/40">
            23.4542° N, 12.3421° E<br />
            ALT: 12.4m // VEL: 0.8m/s
          </div>
        </div>

        {/* AI Tracking UI */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary/40 rounded-sm">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
          <div className="absolute -top-6 left-0 bg-primary px-1.5 py-0.5 text-[9px] font-bold text-black uppercase">
            Subject tracked
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-tighter">Recording_In_Progress</span>
          </div>
          <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary">Autotracking Active</span>
          </div>
        </div>
      </div>

      <div className="scanline" />
    </div>
  )
}
