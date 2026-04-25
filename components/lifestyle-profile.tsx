"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

type SingleState = Record<string, string>
type MultiState = Record<string, string[]>

// ─── Sub-components ───────────────────────────────────────────────────────────

interface SectionLabelProps {
  children: React.ReactNode
}
function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-sm font-semibold text-slate-700 mb-3">{children}</p>
  )
}

interface SingleChoiceGroupProps {
  name: string
  options: string[]
  value: string
  onChange: (name: string, value: string) => void
}
function SingleChoiceGroup({ name, options, value, onChange }: SingleChoiceGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = value === option
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(name, option)}
            className={cn(
              "px-4 py-2 rounded-2xl border text-sm font-medium transition-all duration-150",
              isSelected
                ? "bg-sky-50 border-sky-500 text-sky-700"
                : "bg-white border-slate-200 text-slate-800 hover:border-slate-300"
            )}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

interface MultiChoiceGroupProps {
  name: string
  options: string[]
  values: string[]
  onChange: (name: string, value: string) => void
}
function MultiChoiceGroup({ name, options, values, onChange }: MultiChoiceGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = values.includes(option)
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(name, option)}
            className={cn(
              "px-4 py-2 rounded-full border text-sm font-medium transition-all duration-150",
              isSelected
                ? "bg-sky-50 border-sky-500 text-sky-700"
                : "bg-white border-slate-200 text-slate-800 hover:border-slate-300"
            )}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function LifestyleProfile() {
  const [single, setSingle] = useState<SingleState>({
    sleep: "",
    cleanliness: "",
    pets: "",
    smoking: "",
    guests: "",
  })

  const [multi, setMulti] = useState<MultiState>({
    music: [],
    leisure: [],
  })

  function handleSingleChange(name: string, value: string) {
    setSingle((prev) => ({ ...prev, [name]: value }))
  }

  function handleMultiChange(name: string, value: string) {
    setMulti((prev) => {
      const current = prev[name]
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      return { ...prev, [name]: updated }
    })
  }

  function handleSave() {
    console.log("[v0] Lifestyle profile saved:", { single, multi })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pt-6 pb-28">
        {/* Row 1 – Navigation */}
        <div className="flex items-center gap-3 mb-2">
          <button
            type="button"
            aria-label="Назад"
            className="text-slate-500 hover:text-slate-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-sm font-medium text-slate-500">Крок 2 з 3</span>
        </div>

        {/* Row 2 – Title */}
        <h1 className="text-2xl font-bold text-slate-900 mb-6">
          Твій стиль життя
        </h1>

        {/* Form */}
        <div className="space-y-6">

          {/* Графік сну */}
          <div>
            <SectionLabel>Графік сну</SectionLabel>
            <SingleChoiceGroup
              name="sleep"
              options={["Рання пташка", "Гнучкий", "Сова"]}
              value={single.sleep}
              onChange={handleSingleChange}
            />
          </div>

          {/* Чистота */}
          <div>
            <SectionLabel>Чистота</SectionLabel>
            <SingleChoiceGroup
              name="cleanliness"
              options={["Ідеальна", "Середня", "Творчий безлад"]}
              value={single.cleanliness}
              onChange={handleSingleChange}
            />
          </div>

          {/* Тварини */}
          <div>
            <SectionLabel>Тварини</SectionLabel>
            <SingleChoiceGroup
              name="pets"
              options={["Маю тварин", "Без тварин"]}
              value={single.pets}
              onChange={handleSingleChange}
            />
          </div>

          {/* Паління */}
          <div>
            <SectionLabel>Паління</SectionLabel>
            <SingleChoiceGroup
              name="smoking"
              options={["Палю", "Не палю", "Толерую"]}
              value={single.smoking}
              onChange={handleSingleChange}
            />
          </div>

          {/* Гості */}
          <div>
            <SectionLabel>Гості</SectionLabel>
            <SingleChoiceGroup
              name="guests"
              options={["Без гостей", "На вихідних", "Будь-коли"]}
              value={single.guests}
              onChange={handleSingleChange}
            />
          </div>

          {/* Музика – multi-select */}
          <div>
            <SectionLabel>Музика</SectionLabel>
            <MultiChoiceGroup
              name="music"
              options={["Рок", "Поп", "Інді", "Електронна", "Тиша"]}
              values={multi.music}
              onChange={handleMultiChange}
            />
          </div>

          {/* Дозвілля – multi-select */}
          <div>
            <SectionLabel>Дозвілля</SectionLabel>
            <MultiChoiceGroup
              name="leisure"
              options={["Домашній відпочинок", "Соціальне дозвілля", "Активне дозвілля"]}
              values={multi.leisure}
              onChange={handleMultiChange}
            />
          </div>

        </div>
      </div>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-4 py-4">
        <button
          type="button"
          onClick={handleSave}
          className="w-full bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white text-base font-semibold rounded-2xl py-4 transition-colors duration-150"
        >
          Зберегти та продовжити
        </button>
      </div>
    </div>
  )
}
