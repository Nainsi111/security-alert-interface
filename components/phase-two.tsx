"use client"

import {
  LayoutGrid,
  Target,
  Users,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  Radio,
  Maximize2,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function PhaseTwo({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [approvedAll, setApprovedAll] = useState(false)

  return (
    <div className="px-6 md:px-12 py-8 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Surveillance Grid */}
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-500 mb-3">
                <Target className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Active Coordination</span>
              </div>
              <h2 className="text-3xl font-black tracking-tighter uppercase">Live Situation View</h2>
              <div className="inline-flex items-center gap-2 mt-2 bg-primary/10 border border-primary/20 px-2 py-1 rounded text-primary/90">
                <Sparkles className="w-3 h-3" />
                <span className="text-[9px] font-bold uppercase tracking-widest">
                  Predicted exit: Rear Service Door (18s)
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/5 border-white/10 text-[10px] font-bold uppercase tracking-widest"
              >
                <LayoutGrid className="w-3 h-3 mr-2" />
                Monitor All Angles
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/5 border-white/10 text-[10px] font-bold uppercase tracking-widest"
              >
                <Maximize2 className="w-3 h-3 mr-2" />
                Track Primary Intruder
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Main Feed - Now takes 3 columns for clear hierarchy */}
            <div className="relative aspect-video md:col-span-3 bg-black rounded-xl border-2 border-primary/30 overflow-hidden group shadow-lg shadow-primary/10">
              <img
                src="/night-vision-security-camera-feed-of-luxury-car-de.jpg"
                alt="Primary Feed"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <div className="bg-primary px-2 py-1 rounded text-black">
                  <span className="text-[10px] font-black uppercase tracking-widest">Primary Threat Feed</span>
                </div>
                <div className="flex items-center gap-2 bg-black/60 px-2 py-1 rounded border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] font-mono uppercase tracking-widest">DRONE_04 // PRIMARY</span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Secondary Feed - Slightly muted */}
            <div className="relative aspect-video bg-black rounded-xl border border-white/10 overflow-hidden group opacity-70 hover:opacity-100 transition-opacity md:col-span-1">
              <img
                src="/thermal-security-camera-parking-lot.jpg"
                alt="Thermal Feed"
                className="w-full h-full object-cover opacity-40 grayscale"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 px-2 py-1 rounded border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[9px] font-mono uppercase tracking-widest">DRONE_07</span>
              </div>
            </div>
          </div>

          {/* Response Team Status */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-6">
              Response Units In Transit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest">Unit Alpha</p>
                  <p className="text-[10px] text-white/40 font-mono">ETA: 1m 45s // 0.8km</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest">Police Dispatch</p>
                  <p className="text-[10px] text-white/40 font-mono">En Route // Signal Active</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Radio className="w-6 h-6 text-white/40" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest">Site Security</p>
                  <p className="text-[10px] text-white/40 font-mono">Holding Perimeter</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tactical Control Panel */}
        <div className="w-full lg:w-80 space-y-6">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 backdrop-blur-xl space-y-6">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/70">AI Response Management</h3>

            {!approvedAll && (
              <Button
                onClick={() => setApprovedAll(true)}
                className="w-full h-12 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-lg shadow-lg hover:bg-primary transition-all"
              >
                Approve all recommendations
              </Button>
            )}

            <div className="space-y-4">
              {[
                {
                  reason: "High risk escape detected",
                  prediction: "Rear exit predicted in 18s",
                  action: "Deploy perimeter drone → Rear Exit",
                },
                {
                  reason: "Subject behavior spike",
                  prediction: "Accelerating toward inventory",
                  action: "Initiate Close Tracking",
                },
                {
                  reason: "Risk threshold exceeded",
                  prediction: "Manual override required soon",
                  action: "Activate Site Alarm",
                },
              ].map((rec, i) => (
                <div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-all p-4 space-y-3 ${approvedAll ? "bg-emerald-500/10 border-emerald-500/30" : "bg-white/5 border-white/10"}`}
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none mb-1">
                      Reason
                    </p>
                    <p className="text-[11px] font-bold text-white/90 leading-tight">{rec.reason}</p>
                    <p className="text-[9px] text-primary/60 font-medium italic mb-2">{rec.prediction}</p>

                    <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none mb-1">
                      Suggested Action
                    </p>
                    <p className="text-[11px] font-black text-primary uppercase tracking-tight">{rec.action}</p>
                  </div>
                  {!approvedAll && (
                    <div className="flex gap-2 pt-1">
                      <Button className="h-8 flex-1 bg-white text-black text-[9px] font-black uppercase tracking-tighter hover:bg-emerald-500 hover:text-white transition-colors">
                        Approve
                      </Button>
                      <Button
                        variant="outline"
                        className="h-8 flex-1 text-[9px] border-white/10 text-white/60 bg-transparent hover:bg-red-500/10 hover:text-red-500"
                      >
                        Modify
                      </Button>
                    </div>
                  )}
                  {approvedAll && (
                    <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                      <Sparkles className="w-3 h-3" />
                      Executing...
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <p className="text-[11px] text-white/60 text-center italic leading-relaxed">
                All critical activity is being automatically recorded
              </p>
              <Button
                onClick={onNext}
                className="w-full h-16 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
              >
                Proceed to Evidence
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-[9px] text-white/40 text-center">You can add notes and review later</p>
              <Button
                onClick={onBack}
                variant="ghost"
                className="w-full mt-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white"
              >
                <ChevronLeft className="w-3 h-3 mr-1" />
                Back to Assessment
              </Button>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
            <p className="text-[11px] font-bold text-white/80 uppercase tracking-widest mb-4">System Logic Update</p>
            <div className="space-y-3">
              <div className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 animate-pulse" />
                <p className="text-[10px] text-white/70 leading-relaxed">Drone 04 tracking Subject 01 (98% lock)</p>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 animate-pulse" />
                <p className="text-[10px] text-white/70 leading-relaxed">Drone 07 securing west perimeter</p>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 animate-pulse" />
                <p className="text-[10px] text-white/70 leading-relaxed">Ground units en route with live coordinates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
