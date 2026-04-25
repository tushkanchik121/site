"use client";

import Image from "next/image";
import { ChevronLeft, Phone, MoreVertical } from "lucide-react";

export function ChatHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between w-full h-16 px-4 border-b border-border bg-white">
      {/* Back button */}
      <button
        aria-label="Назад"
        className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 transition-colors text-slate-700"
      >
        <ChevronLeft size={24} strokeWidth={2} />
      </button>

      {/* Center: user info */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Image
            src="/images/viktoria-avatar.jpg"
            alt="Аватар Вікторії"
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10 ring-2 ring-sky-100"
          />
          {/* Online dot on avatar */}
          <span
            className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-base leading-tight text-slate-900">
            Вікторія
          </span>
          <span className="flex items-center gap-1 text-xs text-emerald-500 leading-tight">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            Онлайн
          </span>
        </div>
      </div>

      {/* Right: action icons */}
      <div className="flex items-center gap-1">
        <button
          aria-label="Зателефонувати"
          className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 transition-colors text-slate-600"
        >
          <Phone size={20} strokeWidth={1.8} />
        </button>
        <button
          aria-label="Більше опцій"
          className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 transition-colors text-slate-600"
        >
          <MoreVertical size={20} strokeWidth={1.8} />
        </button>
      </div>
    </header>
  );
}
