import React from 'react';
import { 
  Train, 
  MapPin, 
  ArrowRight, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Layers,
  Sparkles,
  Navigation
} from 'lucide-react';


export default function ProjectCardGraphic({ projectId, title }) {
  if (projectId === 'metro-bot') {
    return (
      <div className="relative w-full h-52 bg-gradient-to-br from-slate-900 via-[#131b2e] to-slate-950 rounded-xl overflow-hidden p-4 border border-orange-500/20 text-white flex flex-col justify-between select-none">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ea580c15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        {/* Header Strip */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30">
              <Train className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider text-orange-400 uppercase">Namma Metro Route Finder</div>
              <div className="text-[10px] text-slate-400">Bengaluru Transit Network</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Fare Calc
          </span>
        </div>

        {/* Visual Route Representation */}
        <div className="my-auto z-10 space-y-2">
          <div className="flex items-center justify-between bg-slate-800/80 backdrop-blur rounded-lg p-2 border border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
              <span className="text-xs font-semibold text-slate-200">Baiyappanahalli</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
            <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-orange-500/20 border border-orange-500/30 text-[10px] font-bold text-orange-300">
              <Navigation className="w-2.5 h-2.5" /> Majestic (Interchange)
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              <span className="text-xs font-semibold text-slate-200">Yelachenahalli</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="bg-slate-800/60 p-1.5 rounded border border-slate-700/40">
              <span className="text-slate-400 block">Est. Time</span>
              <span className="font-bold text-orange-400">38 Mins</span>
            </div>
            <div className="bg-slate-800/60 p-1.5 rounded border border-slate-700/40">
              <span className="text-slate-400 block">Token Fare</span>
              <span className="font-bold text-slate-200">₹ 45.00</span>
            </div>
            <div className="bg-slate-800/60 p-1.5 rounded border border-slate-700/40">
              <span className="text-slate-400 block">SmartCard</span>
              <span className="font-bold text-emerald-400">₹ 42.75 (-5%)</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 z-10 pt-1 border-t border-slate-800">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-purple-500" /> Purple Line
            <span className="w-2 h-2 rounded-full bg-emerald-500 ml-1" /> Green Line
          </span>
          <span className="text-orange-400 font-medium">Dijkstra Shortest Path</span>
        </div>
      </div>
    );
  }

  if (projectId === 'urban-eye') {
    return (
      <div className="relative w-full h-52 bg-gradient-to-br from-slate-900 via-[#182338] to-slate-950 rounded-xl overflow-hidden p-4 border border-orange-500/20 text-white flex flex-col justify-between select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#f9731615_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        {/* Header */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider text-orange-400 uppercase">UrbanEye Civic Hub</div>
              <div className="text-[10px] text-slate-400">Geotagged Municipal Tracker</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-[10px] font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-orange-400" /> AI Priority Triage
          </span>
        </div>

        {/* Active Ticket Card */}
        <div className="my-auto z-10 bg-slate-800/80 backdrop-blur rounded-lg p-2.5 border border-slate-700/60 space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-bold text-slate-100">Pothole Hazard #BLR-4029</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-red-500/20 border border-red-500/40 text-red-300 text-[9px] font-bold">
              High Severity (0.89)
            </span>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span>📍 100ft Ring Rd, Indiranagar</span>
            <span className="text-orange-400 font-semibold">▲ 48 Upvotes</span>
          </div>

          <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-full w-3/4 rounded-full" />
          </div>
          <div className="flex justify-between text-[9px] text-slate-400">
            <span>Reported</span>
            <span>Verified</span>
            <span className="text-orange-400 font-bold">Dispatched</span>
            <span>Resolved</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 z-10 pt-1 border-t border-slate-800">
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> SLA Tracked
          </span>
          <span>Leaflet Maps + AI Pipeline</span>
        </div>
      </div>
    );
  }

  if (projectId === 'smarthealth-ai') {
    return (
      <div className="relative w-full h-52 bg-gradient-to-br from-slate-900 via-[#10242b] to-slate-950 rounded-xl overflow-hidden p-4 border border-orange-500/20 text-white flex flex-col justify-between select-none">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider text-teal-400 uppercase">SmartHealth Predictor</div>
              <div className="text-[10px] text-slate-400">ML Clinical Classifier</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-[10px] font-semibold">
            94.8% Accuracy
          </span>
        </div>

        {/* Prediction visualization */}
        <div className="my-auto z-10 bg-slate-800/80 backdrop-blur rounded-lg p-2.5 border border-slate-700/60 space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-300">Confidence Analysis</span>
            <span className="text-teal-400">Low Risk Tier</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Cardio Indicators</span>
              <span className="text-slate-200">12%</span>
            </div>
            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[12%]" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Metabolic Index</span>
              <span className="text-slate-200">78%</span>
            </div>
            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div className="bg-orange-500 h-full w-[78%]" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 z-10 pt-1 border-t border-slate-800">
          <span>Random Forest + SVM</span>
          <span className="text-teal-400">FastAPI Sub-50ms</span>
        </div>
      </div>
    );
  }

  // Fallback for code review or other projects
  return (
    <div className="relative w-full h-52 bg-gradient-to-br from-slate-900 via-[#1e1c2e] to-slate-950 rounded-xl overflow-hidden p-4 border border-orange-500/20 text-white flex flex-col justify-between select-none">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold tracking-wider text-orange-400 uppercase">{title}</div>
            <div className="text-[10px] text-slate-400">Software Engineering Solution</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-[10px] font-semibold">
          Production Ready
        </span>
      </div>

      <div className="my-auto z-10 bg-slate-800/80 backdrop-blur rounded-lg p-3 border border-slate-700/60 font-mono text-[11px] text-slate-300 space-y-1">
        <div className="flex items-center gap-2 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>npm run test: PASS (24 suites)</span>
        </div>
        <div className="text-slate-400">const app = initializeModule(&apos;{title}&apos;);</div>
        <div className="text-orange-400">&gt; Deployed successfully to edge network</div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 z-10 pt-1 border-t border-slate-800">
        <span>Clean Architecture</span>
        <span className="text-orange-400">Verified Quality</span>
      </div>
    </div>
  );
}
