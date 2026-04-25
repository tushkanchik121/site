"use client";

import { useState } from "react";

export function PersonalInfoSection() {
  const [activeGender, setActiveGender] = useState<"female" | "male">("female");

  return (
    <section className="px-4 mt-6">
      {/* Section Title Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-slate-900">Особисті дані</h2>
        <button className="text-sky-500 text-sm font-medium hover:text-sky-600 transition-colors">
          Редагувати
        </button>
      </div>

      {/* Fields */}
      <div className="space-y-4">
        {/* Ім'я */}
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">Ім&apos;я</p>
          <div className="bg-white border border-slate-100 rounded-2xl px-4 py-3 shadow-sm">
            <p className="text-base font-semibold text-slate-900">Вікторія</p>
          </div>
        </div>

        {/* Вік */}
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">Вік</p>
          <div className="bg-white border border-slate-100 rounded-2xl px-4 py-3 shadow-sm">
            <p className="text-base font-semibold text-slate-900">21</p>
          </div>
        </div>

        {/* Стать */}
        <div>
          <p className="text-sm font-medium text-slate-500 mb-2">Стать</p>
          <div className="flex gap-3">
            <button
              onClick={() => setActiveGender("female")}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                activeGender === "female"
                  ? "bg-sky-50 border-sky-500 text-sky-700"
                  : "bg-white text-slate-400 border-slate-200"
              }`}
            >
              Жінка
            </button>
            <button
              onClick={() => setActiveGender("male")}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                activeGender === "male"
                  ? "bg-sky-50 border-sky-500 text-sky-700"
                  : "bg-white text-slate-400 border-slate-200"
              }`}
            >
              Чоловік
            </button>
          </div>
        </div>

        {/* Про себе */}
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">
            Коротко про себе
          </p>
          <div className="bg-white border border-slate-100 rounded-2xl px-4 py-3 shadow-sm">
            <p className="text-sm text-slate-700 leading-relaxed">
              Студентка, працюю, люблю порядок та тишу. Шукаю адекватного
              сусіда...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
