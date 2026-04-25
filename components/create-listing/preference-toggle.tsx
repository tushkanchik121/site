"use client"

import { cn } from "@/lib/utils"

interface PreferenceToggleProps {
  label: string
  options: string[]
  value: string[]
  multi?: boolean
  onChange: (val: string[]) => void
}

export function PreferenceToggle({
  label,
  options,
  value,
  multi = false,
  onChange,
}: PreferenceToggleProps) {
  function toggle(opt: string) {
    if (multi) {
      if (value.includes(opt)) {
        onChange(value.filter((v) => v !== opt))
      } else {
        onChange([...value, opt])
      }
    } else {
      onChange(value[0] === opt ? [] : [opt])
    }
  }

  const isSelected = (opt: string) => value.includes(opt)

  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold text-slate-700">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={cn(
              "rounded-2xl border px-3 py-1.5 text-sm font-medium transition-all",
              isSelected(opt)
                ? "border-sky-500 bg-sky-50 text-sky-700"
                : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:bg-sky-50/50"
            )}
            aria-pressed={isSelected(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
