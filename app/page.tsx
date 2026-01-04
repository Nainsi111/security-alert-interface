"use client"

import { useState } from "react"
import { Shield, AlertTriangle, Zap, UserCheck, Eye, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DroneFeed } from "@/components/drone-feed"
import { OperatorStatus } from "@/components/operator-status"
import { PhaseTwo } from "@/components/phase-two"
import { PhaseThree } from "@/components/phase-three"

export default function SecurityDashboard() {
  const [phase, setPhase] = useState<1 | 2 | 3>(1)

  return (
    <main className="min-h-screen security-gradient text-white flex flex-col font-sans selection:bg-primary/30 overflow-hidden">
      {/* Top Navigation / Branding */}
      <header className="px-6 py-4 md:px-12 flex justify-between items-center border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
            <Shield className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-lg font-bold tracking-tight uppercase">
            Flyt<span className="font-light text-white/50">Base</span>{" "}
            <span className="text-primary/80 ml-1 text-xs">Aegis</span>
          </h1>
        </div>

        {/* Phase Navigation Tabs */}
        <nav className="hidden lg:flex items-center bg-white/5 rounded-full p-1 border border-white/10">
          <button
            onClick={() => setPhase(1)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${phase === 1 ? "bg-primary text-black shadow-lg shadow-primary/20" : "text-white/40 hover:text-white"}`}
          >
            Phase 1: Alert
          </button>
          <button
            onClick={() => setPhase(2)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${phase === 2 ? "bg-primary text-black shadow-lg shadow-primary/20" : "text-white/40 hover:text-white"}`}
          >
            Phase 2: Response
          </button>
          <button
            onClick={() => setPhase(3)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${phase === 3 ? "bg-primary text-black shadow-lg shadow-primary/20" : "text-white/40 hover:text-white"}`}
          >
            Phase 3: Evidence
          </button>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest">System Online</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent" />
          </div>
        </div>
      </header>

      {/* Dynamic Content Based on Phase */}
      <div className="flex-1 overflow-y-auto">
        {phase === 1 && (
          <div className="flex flex-col md:flex-row px-6 md:px-12 gap-8 md:gap-16 items-center max-w-7xl mx-auto w-full py-8 lg:py-16">
            {/* Left Side: Assessment & Decision */}
            <div className="w-full md:w-1/2 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-primary">
                  <AlertTriangle className="w-4 h-4 animate-pulse-red" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Priority Alert // Phase 1</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-pretty leading-[0.9]">
                  ACTIVE INTRUSION <br />
                  <span className="text-primary/90">DETECTION.</span>
                </h2>
                <div className="space-y-3 pt-2">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">AI Assessment</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Threat verified (95% confidence)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>2 intruders detected — Sector 7</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Autonomous tracking active</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Assessment Data */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl backdrop-blur-sm group hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-center gap-2 text-white/40 mb-3 group-hover:text-primary transition-colors">
                    <UserCheck className="w-4 h-4" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">Confidence</span>
                  </div>
                  <div className="text-4xl font-black font-mono tracking-tighter">
                    95<span className="text-sm font-light text-white/40 ml-1">%</span>
                  </div>
                  <p className="text-[10px] text-primary/70 mt-3 leading-relaxed font-bold uppercase tracking-wider">
                    Motion + behavior match
                  </p>
                </div>
                <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl backdrop-blur-sm group hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-center gap-2 text-white/40 mb-3 group-hover:text-primary transition-colors">
                    <Zap className="w-4 h-4" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">Status</span>
                  </div>
                  <div className="text-lg font-black font-mono uppercase tracking-tighter leading-none">
                    Drone 04 Deployed
                  </div>
                  <p className="text-[10px] text-white/30 uppercase mt-2 tracking-tight">Next critical moment: 22s</p>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-6 pt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => setPhase(2)}
                    className="h-16 px-8 bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-widest text-xs flex-1 rounded-sm shadow-[0_0_20px_rgba(255,0,0,0.1)] transition-all hover:scale-[1.02]"
                  >
                    Confirm Response
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    title="Use if this is a false alarm"
                    className="h-16 px-8 border-white/10 hover:bg-white/5 text-white/60 hover:text-white font-bold uppercase tracking-widest text-xs flex-1 bg-transparent rounded-sm"
                  >
                    Stand Down
                  </Button>
                </div>
                <p className="text-[10px] text-white/40 text-center">
                  AI-proposed response is ready for execution. Stand down if false positive.
                </p>
              </div>
            </div>

            {/* Right Side: Visual Context */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <DroneFeed />
              </div>

              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col gap-4 backdrop-blur-xl">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                      <Eye className="w-5 h-5 text-primary/60" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-white/30 tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" />
                        AI Summary
                      </p>
                      <p className="text-sm text-white/90 font-bold leading-snug">
                        2 subjects moving toward high-value inventory
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const el = document.getElementById("ai-reasoning-full")
                      if (el) el.classList.toggle("hidden")
                    }}
                    className="text-[9px] font-bold text-primary/60 hover:text-primary uppercase tracking-widest px-2 py-1 border border-primary/20 rounded hover:bg-primary/5 transition-all"
                  >
                    View Reasoning
                  </button>
                </div>
                <div
                  id="ai-reasoning-full"
                  className="hidden border-t border-white/5 pt-4 animate-in fade-in duration-300"
                >
                  <p className="text-xs text-white/50 italic leading-relaxed">
                    "Identified 2 subjects at Sector 7. Behavior markers: Evasive movement, flashlights detected.
                    Confidence high based on thermal signature and silhouette consistency. Autonomous tracking initiated
                    to maintain visual lock while ground units are notified."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {phase === 2 && <PhaseTwo onNext={() => setPhase(3)} onBack={() => setPhase(1)} />}
        {phase === 3 && <PhaseThree onBack={() => setPhase(2)} />}
      </div>

      {/* Footer / Meta Data */}
      <footer className="px-6 md:px-12 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
          <OperatorStatus />
          <div className="flex gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">Active Site</span>
              <span className="text-[10px] font-bold text-white/70 uppercase">LUXURY MOTORS // NJ-07</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">Latency</span>
              <span className="text-[10px] font-bold text-emerald-500 uppercase">12ms</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
