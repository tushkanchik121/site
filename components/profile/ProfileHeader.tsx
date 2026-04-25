"use client";

import { ChevronLeft } from "lucide-react";

export function ProfileHeader() {
  return (
    <div className="flex items-center gap-4 mb-6 pt-4 px-4">
      <button
        aria-label="Назад"
        className="flex items-center justify-center w-9 h-9 rounded-2xl bg-white shadow-sm border border-slate-100 text-slate-600 hover:bg-slate-50 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-bold text-slate-900">Мій профіль</h1>
    </div>
  );
}
