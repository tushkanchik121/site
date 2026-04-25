"use client"

import Image from "next/image"
import Link from "next/link" // Додаємо імпорт посилань
import { Heart, MapPin, CircleCheck } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ListingCardProps {
  id: number | string // Додаємо id в інтерфейс
  image: string
  compatibility: number
  title: string
  price: string
  timeAgo: string
  location: string
  preview: string
  tags: string[]
  userName: string
  userInitials?: string
  userColor?: string
  userAvatar?: string
}

export function ListingCard({
  id, // Приймаємо id
  image,
  compatibility,
  title,
  price,
  timeAgo,
  location,
  preview,
  tags,
  userName,
  userInitials,
  userColor,
  userAvatar
}: ListingCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="relative bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100/80 active:scale-[0.98] transition-transform">
      {/* Робимо всю картку клікабельною через Link */}
      {/* Оскільки у вас сторінка деталей називається poster, ведемо на /poster */}
      <Link href="poster" className="block cursor-pointer">
        {/* Image Area */}
        <div className="relative h-52 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 480px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Compatibility badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-sm">
            <span>Сумісність: {compatibility}%</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 space-y-3">
          <h2 className="text-base font-bold text-slate-900 leading-snug">{title}</h2>
          <div className="flex items-center gap-2">
            <span className="text-sky-500 font-semibold text-sm">{price}</span>
            <span className="text-slate-400 text-xs">{timeAgo}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>{location}</span>
          </div>
          <p className="text-slate-500 text-sm line-clamp-2">{preview}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-sky-50 text-sky-600 text-xs font-medium px-3 py-1 rounded-2xl border border-sky-100">
                {tag}
              </span>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-3">
            {/* Замість старого блоку з userColor */}
<div className="flex items-center gap-2">
  {userAvatar ? (
    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
      <Image
        src={userAvatar}
        alt={userName}
        fill
        className="object-cover"
      />
    </div>
  ) : (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 ${userColor || 'bg-slate-400'}`}>
      {userInitials || userName.substring(0, 2).toUpperCase()}
    </div>
  )}
  <span className="text-sm font-medium text-slate-800">{userName}</span>
  {/* ... решта коду з верифікацією */}
</div>
          </div>
        </div>
      </Link>

      {/* Кнопка "Сердечко" має бути ПОЗА Link, щоб клік на неї не перекидав на іншу сторінку */}
      <button
        aria-label={liked ? "Прибрати з обраного" : "Додати в обране"}
        onClick={(e) => {
          e.preventDefault(); // Зупиняємо перехід по посиланню
          setLiked((v) => !v);
        }}
        className="absolute top-3 left-3 z-10 w-9 h-9 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
      >
        <Heart className={cn("w-5 h-5 transition-colors", liked ? "fill-rose-500 text-rose-500" : "text-slate-400")} />
      </button>
    </article>
  )
}