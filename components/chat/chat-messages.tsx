"use client";

import { Home, CheckCheck } from "lucide-react";

export function ChatMessages() {
  return (
    <main className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
      {/* Listing preview card */}
      <div className="mx-auto w-full max-w-xs">
        <div className="flex items-start gap-2.5 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-sky-100 text-sky-500 mt-0.5">
            <Home size={16} strokeWidth={2} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide leading-none mb-1">
              Оголошення
            </span>
            <p className="text-sm font-medium text-slate-800 leading-snug">
              Шукаю студента для підселення,&nbsp;5000&nbsp;грн/міс
            </p>
          </div>
        </div>
      </div>

      {/* System message */}
      <div className="flex justify-center">
        <p className="text-xs text-slate-400 text-center max-w-[260px] leading-relaxed px-2">
          Ви розпочали діалог з Вікторією. Вона зазвичай відповідає протягом
          години.
        </p>
      </div>

      {/* Sent message bubble (user — right side) */}
      <div className="flex justify-end">
        <div className="relative max-w-[75%]">
          <div
            className="bg-sky-500 text-white px-4 py-2.5 text-sm leading-relaxed"
            style={{
              borderRadius: "18px 18px 4px 18px",
            }}
          >
            Привіт! Мене зацікавила ваша кімната. Коли можна поглянути?
          </div>
          {/* Timestamp + double check */}
          <div className="flex items-center justify-end gap-1 mt-1 pr-1">
            <span className="text-[10px] text-slate-400 leading-none">
              21:45
            </span>
            <CheckCheck
              size={14}
              strokeWidth={2}
              className="text-sky-400"
              aria-label="Прочитано"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
