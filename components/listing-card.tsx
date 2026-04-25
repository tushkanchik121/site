"use client"

import Image from "next/image"
import { Heart, MapPin, CircleCheck } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ListingCardProps {
  image: string
  compatibility: number
  title: string
  price: string
  timeAgo: string
  location: string
  preview: string
  tags: string[]
  userName: string
  userInitials: string
  userColor: string
}

export function ListingCard({
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
}: ListingCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100/80">
      {/* Image Area */}
      <div className="relative h-52 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 480px"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Heart button — top-left */}
        <button
          aria-label={liked ? "Прибрати з обраного" : "Додати в обране"}
          onClick={() => setLiked((v) => !v)}
          className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
        >
          <Heart
            className={cn(
              "w-5 h-5 transition-colors",
              liked ? "fill-rose-500 text-rose-500" : "text-slate-400"
            )}
          />
        </button>

        {/* Compatibility badge — top-right */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-sm">
          <span>Сумісність: {compatibility}%</span>
        </div>

        {/* Pagination dots — bottom center */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="w-2 h-2 rounded-full bg-white/50" />
          <span className="w-2 h-2 rounded-full bg-white/50" />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h2 className="text-base font-bold text-slate-900 leading-snug text-balance">
          {title}
        </h2>

        {/* Price + Time */}
        <div className="flex items-center gap-2">
          <span className="text-sky-500 font-semibold text-sm">{price}</span>
          <span className="text-slate-400 text-xs">{timeAgo}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-sky-400" />
          <span>{location}</span>
        </div>

        {/* Preview text */}
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
          {preview}
        </p>

        {/* Lifestyle Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-sky-50 text-sky-600 text-xs font-medium px-3 py-1 rounded-2xl border border-sky-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 pt-3">
          {/* User row */}
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${userColor}`}
            >
              {userInitials}
            </div>
            <span className="text-sm font-medium text-slate-800">{userName}</span>
            <div className="flex items-center gap-1 bg-teal-50 text-teal-700 text-xs font-semibold px-2.5 py-1 rounded-xl border border-teal-100 ml-auto">
              <CircleCheck className="w-3.5 h-3.5" />
              <span>Верифіковано (Дія)</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
