"use client"

import { SlidersHorizontal, Search } from "lucide-react"

export function SearchHeader() {
  return (
    <div className="flex items-center gap-2 mb-6 pt-4 px-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Введіть назву населеного пункту..."
          className="w-full pl-9 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition-all"
        />
      </div>
      <button
        aria-label="Фільтри"
        className="flex items-center justify-center w-12 h-12 bg-sky-50 text-sky-500 rounded-xl shrink-0 border border-sky-100 hover:bg-sky-100 transition-colors"
      >
        <SlidersHorizontal className="w-5 h-5" />
      </button>
    </div>
  )
}
