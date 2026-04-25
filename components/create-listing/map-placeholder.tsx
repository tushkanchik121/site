import { MapPin } from "lucide-react"

export function MapPlaceholder() {
  return (
    <div className="mt-3 h-32 w-full rounded-2xl bg-slate-100 overflow-hidden relative flex items-center justify-center">
      {/* Grid lines simulating a map */}
      <div className="absolute inset-0 opacity-30">
        {/* Horizontal lines */}
        {[20, 40, 60, 80].map((pct) => (
          <div
            key={`h-${pct}`}
            className="absolute w-full border-t border-slate-300"
            style={{ top: `${pct}%` }}
          />
        ))}
        {/* Vertical lines */}
        {[20, 40, 60, 80].map((pct) => (
          <div
            key={`v-${pct}`}
            className="absolute h-full border-l border-slate-300"
            style={{ left: `${pct}%` }}
          />
        ))}
      </div>
      {/* Roads */}
      <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-slate-200/80 -translate-y-1/2" />
      <div className="absolute left-1/3 top-0 bottom-0 w-1.5 bg-slate-200/80" />
      <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-slate-200/60" />
      <div className="absolute top-1/3 left-0 right-0 h-1 bg-slate-200/60" />
      {/* Pin */}
      <div className="relative z-10 flex flex-col items-center gap-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 shadow-lg shadow-sky-200">
          <MapPin className="h-5 w-5 text-white fill-white" />
        </div>
        <span className="rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-slate-600 shadow-sm">
          Львів, вул. Городоцька
        </span>
      </div>
    </div>
  )
}
