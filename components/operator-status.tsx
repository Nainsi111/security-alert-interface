"use client"

export function OperatorStatus() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/5">
      <div>
        <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-1">Status</div>
        <div className="text-sm font-mono text-primary animate-pulse uppercase tracking-wider">Active Intrusion</div>
      </div>
      <div>
        <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-1">Access Level</div>
        <div className="text-sm font-mono text-white/80 uppercase tracking-wider">Senior Operator</div>
      </div>
      <div>
        <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-1">Location</div>
        <div className="text-sm font-mono text-white/80 uppercase tracking-wider">Sector 7 // Luxury Auto</div>
      </div>
      <div>
        <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-1">Time Accessed</div>
        <div className="text-sm font-mono text-white/80 uppercase tracking-wider">02:34:42 AM</div>
      </div>
    </div>
  )
}
