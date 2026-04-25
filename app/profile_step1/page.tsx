"use client"

import { useState } from "react"
import { ChevronLeft, Plus, User } from "lucide-react"

export default function ProfileSetupPage() {
  const [gender, setGender] = useState<"female" | "male">("female")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [about, setAbout] = useState("")

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pt-14 pb-32">

        {/* Header — 2 rows */}
        <div className="mb-6">
          {/* Row 1: Navigation */}
          <div className="flex items-center gap-3 mb-2">
            <button
              aria-label="Назад"
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-100 transition-colors -ml-1"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>
            <span className="text-sm font-medium text-slate-500">Крок 1 з 3</span>
          </div>

          {/* Row 2: Title */}
          <h1 className="text-2xl font-bold text-slate-900">Розкажи про себе</h1>
        </div>

        {/* Profile Image Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center">
              <User className="w-10 h-10 text-slate-400" />
            </div>
            <button
              aria-label="Додати фото"
              className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center shadow-md hover:bg-sky-600 transition-colors"
            >
              <Plus className="w-4 h-4 text-white" />
            </button>
          </div>
          <span className="mt-2 text-sm font-medium text-sky-600">Додати фото</span>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">

          {/* Ім'я */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              {"Ім'я"}
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all"
            />
          </div>

          {/* Вік */}
          <div className="space-y-1.5">
            <label htmlFor="age" className="text-sm font-medium text-slate-700">
              Вік (тільки 18+)
            </label>
            <input
              id="age"
              type="number"
              min={18}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all"
            />
          </div>

          {/* Стать */}
          <div className="space-y-1.5">
            <span className="text-sm font-medium text-slate-700">Стать</span>
            <div className="flex gap-3">
              <button
                onClick={() => setGender("female")}
                className={`flex-1 rounded-full border py-2.5 text-sm font-medium transition-all ${
                  gender === "female"
                    ? "bg-sky-50 border-sky-500 text-sky-700"
                    : "bg-white border-slate-200 text-slate-600"
                }`}
              >
                Жінка
              </button>
              <button
                onClick={() => setGender("male")}
                className={`flex-1 rounded-full border py-2.5 text-sm font-medium transition-all ${
                  gender === "male"
                    ? "bg-sky-50 border-sky-500 text-sky-700"
                    : "bg-white border-slate-200 text-slate-600"
                }`}
              >
                Чоловік
              </button>
            </div>
          </div>

          {/* Про себе */}
          <div className="space-y-1.5">
            <label htmlFor="about" className="text-sm font-medium text-slate-700">
              Коротко про себе
            </label>
            <textarea
              id="about"
              rows={4}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Працюю, люблю порядок та тишу. Шукаю адекватного сусіда..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all resize-none"
            />
          </div>

        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-4 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        <button className="w-full rounded-2xl bg-sky-500 py-4 text-base font-semibold text-white hover:bg-sky-600 active:scale-[0.98] transition-all">
          Продовжити
        </button>
      </div>
    </div>
  )
}
