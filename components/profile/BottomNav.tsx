"use client";

import { Home, Search, Heart, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "Головна" },
  { icon: Search, label: "Пошук" },
  { icon: Heart, label: "Вибране" },
  { icon: User, label: "Профіль", active: true },
];

export function BottomNav() {
  return (
    <nav
      aria-label="Нижня навігація"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center justify-around px-2 py-2 max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            aria-label={label}
            aria-current={active ? "page" : undefined}
            className={`flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl transition-colors ${
              active ? "text-sky-500" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
            <span className={`text-[10px] font-${active ? "bold" : "medium"}`}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
