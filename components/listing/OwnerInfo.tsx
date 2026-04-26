"use client" // Обов'язково для використання onClick та useRouter

import Image from "next/image"
import { Check, MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function OwnerInfo() {
  const router = useRouter()

  return (
    <section className="px-5 pt-6">
      <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <Image
              src="/images/viktoria-avatar.jpg"
              alt="Вікторія"
              width={52}
              height={52}
              className="rounded-full object-cover ring-2 ring-sky-100"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-sky-500 rounded-full border-2 border-white" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-base font-semibold text-slate-900">Вікторія</span>
            <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit">
              <Check className="w-3 h-3" strokeWidth={2.5} />
              Верифіковано (Дія)
            </span>
          </div>
        </div>

        {/* Кнопка переходу до чату */}
        <button 
          onClick={() => router.push('/chat')}
          className="flex items-center justify-center p-3 bg-sky-50 text-sky-500 rounded-xl hover:bg-sky-100 active:scale-95 transition-all"
          aria-label="Написати Вікторії"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}