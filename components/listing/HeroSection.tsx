"use client"

import Image from "next/image"
import { ChevronLeft, Heart } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [liked, setLiked] = useState(false)

  return (
    <div className="relative w-full">
      {/* Navigation overlay */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 pt-safe-top pt-5">
        <button
          aria-label="Назад"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-md active:scale-95 transition-transform"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.18)" }}
        >
          <ChevronLeft className="w-6 h-6 text-white drop-shadow" strokeWidth={2.2} />
        </button>
        <button
          aria-label={liked ? "Видалити з обраних" : "Додати до обраних"}
          onClick={() => setLiked((v) => !v)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-md active:scale-95 transition-transform"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.18)" }}
        >
          <Heart
            className={`w-6 h-6 drop-shadow transition-colors ${liked ? "text-red-400 fill-red-400" : "text-white"}`}
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Hero image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src="/images/room-hero.jpg"
          alt="Сучасна яскрава кімната з великим вікном"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/20" />

        {/* Compatibility badge */}
        <div className="absolute top-14 right-4 flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
          Сумісність: 92%
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block rounded-full transition-all ${i === 0 ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
