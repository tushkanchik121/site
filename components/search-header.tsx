"use client"
import Link from "next/link"
import { SlidersHorizontal, Search } from "lucide-react"

export function SearchHeader() {
  return (
    <header className="p-4 bg-white border-b flex items-center gap-3">
      {/* Ваше поле пошуку */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
        <input className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-xl" placeholder="Пошук..." />
      </div>

      {/* Змінюємо кнопку на Link */}
      <Link 
        href="/filters" 
        className="p-2.5 bg-sky-50 text-sky-500 rounded-xl hover:bg-sky-100 transition-colors"
      >
        <SlidersHorizontal className="size-5" />
      </Link>
    </header>
  )
}
