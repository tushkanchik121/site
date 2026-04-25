"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronLeft, Heart } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const router = useRouter()

  return (
    <div className="relative">
      {/* Кнопка назад зазвичай поверх картинки */}
      <button 
        onClick={() => router.back()}
        className="absolute top-4 left-4 z-10 bg-white/80 p-2 rounded-full shadow-md"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

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
