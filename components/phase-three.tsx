"use client"

import {
  Camera,
  Download,
  FileCheck,
  ChevronLeft,
  ShieldCheck,
  Tag,
  Clock,
  PlusCircle,
  CheckCircle2,
  AlertCircle,
  Fingerprint,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function PhaseThree({ onBack }: { onBack: () => void }) {
  return (
    <div className="px-6 md:px-12 py-8 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Evidence Dashboard */}
        <div className="flex-1 space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-primary mb-3">
                <FileCheck className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Evidence Collection</span>
              </div>
              <h2 className="text-3xl font-black tracking-tighter uppercase italic">LEGAL-GRADE ARTIFACTS</h2>
              <p className="text-xs text-white/50 mt-2 max-w-md">
                Autonomous evidence synthesis complete. All artifacts are verified, tamper-proof, and audit-ready.
              </p>
            </div>
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white shrink-0"
            >
              <ChevronLeft className="w-3 h-3 mr-1" />
              Review Active Coordination
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-md h-fit">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Incident Timeline Summary
                  </h3>
                </div>
                <div className="space-y-6 relative pl-6 border-l-2 border-primary/20">
                  {[
                    {
                      time: "02:34:12",
                      event: "Intrusion detected",
                      detail: "Perimeter breach at Sector 7",
                      status: "auto",
                    },
                    {
                      time: "02:35:14",
                      event: "Subject identified",
                      detail: "Face + Gait signature captured",
                      status: "auto",
                      critical: true,
                    },
                    {
                      time: "02:35:18",
                      event: "Exit path recorded",
                      detail: "Rear service door trajectory",
                      status: "auto",
                    },
                    {
                      time: "02:36:02",
                      event: "Perimeter coverage complete",
                      detail: "Multi-angle sweep finished",
                      status: "auto",
                    },
                    {
                      time: "02:51:00",
                      event: "Incident secured",
                      detail: "Autonomous stand-down",
                      status: "reviewed",
                    },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div
                        className={`absolute -left-[27px] w-3 h-3 rounded-full border-2 border-background ${item.critical ? "bg-primary animate-pulse" : "bg-primary/50"}`}
                      />
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-mono text-primary font-bold">{item.time}</span>
                          <span className="text-xs text-white/90 font-bold">{item.event}</span>
                        </div>
                        <p className="text-[9px] text-white/40 italic pl-0">{item.detail}</p>
                        {item.status === "reviewed" && (
                          <span className="w-fit px-1.5 py-0.5 bg-blue-500/20 text-[8px] font-bold text-blue-400 uppercase rounded-sm border border-blue-500/20 mt-1">
                            Operator Validated
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <Fingerprint className="w-8 h-8 text-primary shrink-0" />
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">
                      AI Evidence Intelligence
                    </h4>
                    <p className="text-[11px] text-white/70 leading-relaxed font-medium">
                      Evidence synthesis generated with{" "}
                      <span className="text-primary font-bold italic underline decoration-primary/30">
                        98% identification confidence
                      </span>
                      . System verified face, gait, and exit trajectory without occlusion. No human blind spots
                      detected.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <div className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded-sm text-[8px] font-bold text-white/40 uppercase">
                        Tamper-Proof Lock: 02:51
                      </div>
                      <div className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded-sm text-[8px] font-bold text-white/40 uppercase">
                        Multi-Feed Sync: OK
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Evidence Hero & Grid */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Primary Evidence</h3>
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-primary/10 rounded-md border border-primary/20">
                    <AlertCircle className="w-3 h-3 text-primary" />
                    <span className="text-[9px] font-bold text-primary uppercase">Critical Proof</span>
                  </div>
                </div>
                <div className="relative aspect-video bg-white/5 rounded-2xl border border-primary/30 overflow-hidden group">
                  <img
                    src="/night-vision-intruder-photo-.jpg?height=400&width=700&query=primary evidence subject identified"
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    alt="Primary Evidence"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl max-w-[240px]">
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                      02:35:14 — Identification Key
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 mt-0.5" />
                        <span className="text-[9px] text-white/70 leading-tight">
                          Face + Gait captured at 1.2m distance. Signature unique.
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 mt-0.5" />
                        <span className="text-[9px] text-white/70 leading-tight">
                          Timestamp aligns with first perimeter sensor breach.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-primary rounded-full shadow-lg shadow-primary/20">
                    <ShieldCheck className="w-3 h-3 text-white" />
                    <span className="text-[10px] font-black text-white uppercase italic">Verified Proof</span>
                  </div>
                </div>
              </div>

              {/* Evidence Grid - Refactored to 2x2 for curation */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">
                      Secondary Verification
                    </h3>
                    <p className="text-[9px] text-white/30 italic">
                      Supporting angles selected to ensure zero occlusion in tracking sequence.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 border-white/10 bg-white/5 text-[9px] font-bold uppercase tracking-widest"
                  >
                    <PlusCircle className="w-3 h-3 mr-2 text-primary" />
                    Add Legal Context
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="group relative aspect-video bg-white/5 rounded-xl border border-white/10 overflow-hidden cursor-pointer hover:border-primary/50 transition-all"
                    >
                      <img
                        src={`/night-vision-intruder-photo-.jpg?height=300&width=300&query=supporting evidence angle ${i}`}
                        className="w-full h-full object-cover opacity-50 grayscale group-hover:opacity-100 transition-all duration-500"
                        alt={`Supporting angle ${i}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-[9px] font-bold text-white/80 uppercase tracking-tighter">
                          {i === 1 ? "Exit Trajectory Confirm" : "Secondary Perspective Sync"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-96 space-y-6">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-black tracking-tight uppercase italic">CASE: LUX-2024-001</h3>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
                Automatic Evidence Package
              </p>
            </div>

            <div className="space-y-4 py-4 border-y border-white/5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-white/60">
                  <Camera className="w-4 h-4" />
                  <span className="text-xs font-medium">High-Res Captures</span>
                </div>
                <span className="text-xs font-bold font-mono">14 Files</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase italic tracking-tighter">Full Video Stream</span>
                </div>
                <span className="text-xs font-bold font-mono">42m 12s</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-white/60">
                  <Tag className="w-4 h-4" />
                  <span className="text-xs font-medium">AI Tagged Events</span>
                </div>
                <span className="text-xs font-bold font-mono">8 Points</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-white/60">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-medium">Chain of Custody</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold font-mono text-emerald-500 block uppercase">Secure</span>
                  <span className="text-[8px] text-white/20 uppercase">Tamper-Proof • Audit-Ready</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-white/60">Shared With:</h4>
              <div className="space-y-2">
                {["Police Department", "Dealership Owner", "Insurance Portal"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span className="text-xs text-white/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full h-14 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-white/90 shadow-2xl shadow-white/5">
                <Download className="w-4 h-4 mr-2" />
                Download Evidence ZIP
              </Button>
              <Button
                variant="outline"
                className="w-full h-14 border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-xl"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Send to Police Portal
              </Button>
            </div>

            <div className="p-5 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 flex gap-4">
              <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
              <div className="space-y-1">
                <h4 className="text-[11px] font-black text-emerald-500 uppercase italic">Incident Closed</h4>
                <p className="text-[10px] text-white/40 leading-snug">
                  All evidence encrypted, verified, and shared with authorized parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
