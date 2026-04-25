import { Check, Minus } from "lucide-react"

type CompatibilityItem = {
  label: string
  value: string
  match: "green" | "neutral"
}

const items: CompatibilityItem[] = [
  { label: "Графік сну", value: "Сова", match: "green" },
  { label: "Чистота", value: "Середня", match: "green" },
  { label: "Тварини", value: "Без тварин", match: "green" },
  { label: "Паління", value: "Не палю", match: "green" },
  { label: "Гості", value: "На вихідних", match: "neutral" },
  { label: "Музика", value: "Поп", match: "green" },
  { label: "Дозвілля", value: "Домашній відпочинок", match: "green" },
]

export default function CompatibilitySection() {
  return (
    <section className="px-5 pt-6">
      <h2 className="text-lg font-bold text-slate-900 mb-4">Аналіз сумісності: 92%</h2>

      {/* Progress bar */}
      <div className="w-full h-2 rounded-full bg-slate-100 mb-5 overflow-hidden">
        <div
          className="h-full rounded-full bg-emerald-400 transition-all"
          style={{ width: "92%" }}
          role="progressbar"
          aria-valuenow={92}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Сумісність 92%"
        />
      </div>

      <div className="flex flex-col gap-0 divide-y divide-slate-100 bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-slate-500 font-medium">{item.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-800">{item.value}</span>
              {item.match === "green" ? (
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                  <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2.5} />
                </span>
              ) : (
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100">
                  <Minus className="w-3.5 h-3.5 text-slate-400" strokeWidth={2.5} />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
