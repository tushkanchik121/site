import { MapPin } from "lucide-react"

export default function LocationSection() {
  return (
    <section className="px-5 pt-6">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">Розташування</h2>

      {/* Address row */}
      <div className="flex items-center gap-1.5 text-sm text-slate-600 mb-3">
        <MapPin className="w-4 h-4 text-sky-500 shrink-0" strokeWidth={2} />
        <span>м. Львів, вул. Городоцька</span>
      </div>

      {/* Map placeholder */}
      <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
        {/* Stylised map background using CSS */}
        <div className="absolute inset-0" style={{ background: "oklch(0.93 0.01 210)" }}>
          {/* Road grid lines */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="10" />
              </pattern>
              <pattern id="grid2" width="96" height="96" patternUnits="userSpaceOnUse">
                <path d="M 96 0 L 0 0 0 96" fill="none" stroke="white" strokeWidth="3" />
              </pattern>
            </defs>
            {/* Base fill */}
            <rect width="100%" height="100%" fill="oklch(0.935 0.012 210)" />
            {/* Block fills */}
            <rect x="5" y="5" width="38" height="38" rx="3" fill="oklch(0.91 0.015 210)" />
            <rect x="55" y="5" width="84" height="38" rx="3" fill="oklch(0.91 0.015 210)" />
            <rect x="155" y="5" width="60" height="38" rx="3" fill="oklch(0.91 0.015 210)" />
            <rect x="230" y="5" width="100%" height="38" rx="3" fill="oklch(0.91 0.015 210)" />
            <rect x="5" y="55" width="55" height="62" rx="3" fill="oklch(0.91 0.015 210)" />
            <rect x="75" y="55" width="64" height="62" rx="3" fill="oklch(0.91 0.015 210)" />
            <rect x="155" y="55" width="60" height="62" rx="3" fill="oklch(0.91 0.015 210)" />
            <rect x="230" y="55" width="80" height="62" rx="3" fill="oklch(0.91 0.015 210)" />
            <rect x="5" y="130" width="38" height="50" rx="3" fill="oklch(0.91 0.015 210)" />
            <rect x="55" y="130" width="84" height="50" rx="3" fill="oklch(0.91 0.015 210)" />
            <rect x="155" y="130" width="60" height="50" rx="3" fill="oklch(0.91 0.015 210)" />
            <rect x="230" y="130" width="100%" height="50" rx="3" fill="oklch(0.91 0.015 210)" />
            {/* Roads (white) */}
            <rect x="0" y="43" width="100%" height="12" fill="white" />
            <rect x="0" y="118" width="100%" height="12" fill="white" />
            <rect x="43" y="0" width="12" height="100%" fill="white" />
            <rect x="139" y="0" width="12" height="100%" fill="white" />
            <rect x="215" y="0" width="12" height="100%" fill="white" />
            {/* Green park area */}
            <rect x="75" y="55" width="64" height="62" rx="3" fill="oklch(0.87 0.07 155)" opacity="0.5" />
          </svg>
        </div>

        {/* Pin */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-sky-500 shadow-lg flex items-center justify-center border-2 border-white">
              <MapPin className="w-5 h-5 text-white" fill="white" strokeWidth={1.5} />
            </div>
            <div className="w-2 h-2 rounded-full bg-sky-500/40 mt-0.5" />
          </div>
        </div>

        {/* Subtle vignette */}
        <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none" style={{ boxShadow: "inset 0 0 20px rgba(0,0,0,0.05)" }} />
      </div>
    </section>
  )
}
