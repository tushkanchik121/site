"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation"
export function ProfileHeader() {
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
    <div className="flex items-center gap-4 mb-6 pt-4 px-4">
      <button
        aria-label="Назад"
        className="flex items-center justify-center w-9 h-9 rounded-2xl bg-white shadow-sm border border-slate-100 text-slate-600 hover:bg-slate-50 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      
      <h1 className="text-xl font-bold text-slate-900">Мій профіль</h1>
    </div>
    </div>
  );
}
