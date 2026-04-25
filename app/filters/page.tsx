"use client"

import { useRouter } from "next/navigation" // 1. Імпорт
import { useState } from "react"
import { ChevronLeft, MapPin, Search } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

const LOCATION_SUGGESTIONS = [
  "Львів, Залізничний р-н",
  "Львів, Личаківський р-н",
  "Львів, Шевченківський р-н",
  "Львів, Галицький р-н",
  "Львів, Сихівський р-н",
  "Дрогобич",
  "Стрий",
]

const ROOM_OPTIONS = ["1", "2", "3", "4+"]
const AGE_CHIPS = ["18–25", "26–35", "36–45", "46–55", "56–65", "66–75", "75+"]
const GENDER_OPTIONS = ["Жінка", "Чоловік", "Будь-хто"]

export default function FiltersPage() {
  const [location, setLocation] = useState("Львів, Залізничний р-н")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [priceFrom, setPriceFrom] = useState("")
  const [priceTo, setPriceTo] = useState("")
  const [selectedRooms, setSelectedRooms] = useState<string[]>([])
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [selectedAges, setSelectedAges] = useState<string[]>([])
  const [selectedGender, setSelectedGender] = useState<string>("Будь-хто")

  const toggleRoom = (r: string) =>
    setSelectedRooms((prev) =>
      prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]
    )

  const toggleAge = (a: string) =>
    setSelectedAges((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    )

  const handleReset = () => {
    setLocation("")
    setPriceFrom("")
    setPriceTo("")
    setSelectedRooms([])
    setVerifiedOnly(false)
    setSelectedAges([])
    setSelectedGender("Будь-хто")
  }
const router = useRouter() // 2. Ініціалізація

  return (
    <div className="min-h-screen bg-sky-50 font-sans">
      <div className="max-w-md mx-auto px-4 pb-28">
        <header className="flex items-center gap-4 pt-5 mb-8">
          <button
            onClick={() => router.back()} // 3. Обробник кліку
            className="flex items-center justify-center w-10 h-10 rounded-2xl bg-white shadow-sm text-slate-600 hover:bg-slate-50 transition-colors"
            aria-label="Назад"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-slate-900">Фільтри</h1>
        </header>
        {/* ... решта коду */}
        <div className="space-y-8">
          {/* ── ЛОКАЦІЯ ── */}
          <section>
            <SectionLabel>Локація</SectionLabel>
            <div className="relative">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400 pointer-events-none"
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value)
                    setShowSuggestions(true)
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                  placeholder="Місто, район, вулиця…"
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                />
              </div>

              {showSuggestions && location.length > 0 && (
                <ul className="absolute z-20 mt-2 w-full bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                  {LOCATION_SUGGESTIONS.filter((s) =>
                    s.toLowerCase().includes(location.toLowerCase())
                  ).map((s) => (
                    <li
                      key={s}
                      onMouseDown={() => {
                        setLocation(s)
                        setShowSuggestions(false)
                      }}
                      className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-sky-50 transition-colors text-sm text-slate-700"
                    >
                      <MapPin size={15} className="text-sky-400 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* ── ЦІНА ── */}
          <section>
            <SectionLabel>Ціна за місяць</SectionLabel>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="number"
                  value={priceFrom}
                  onChange={(e) => setPriceFrom(e.target.value)}
                  placeholder="Від"
                  className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">₴</span>
              </div>
              <div className="flex-1 relative">
                <input
                  type="number"
                  value={priceTo}
                  onChange={(e) => setPriceTo(e.target.value)}
                  placeholder="До"
                  className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">₴</span>
              </div>
            </div>
          </section>

          {/* ── КІЛЬКІСТЬ КІМНАТ ── */}
          <section>
            <SectionLabel>Кількість кімнат</SectionLabel>
            <div className="flex gap-2">
              {ROOM_OPTIONS.map((r) => (
                <button
                  key={r}
                  onClick={() => toggleRoom(r)}
                  className={cn(
                    "flex-1 py-3 rounded-2xl text-sm font-semibold border transition-all",
                    selectedRooms.includes(r)
                      ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                      : "bg-white text-slate-600 border-slate-100 hover:border-sky-300 hover:text-sky-500"
                  )}
                >
                  {r}
                </button>
              ))}
            </div>
          </section>

          {/* ── ВЕРИФІКАЦІЯ ── */}
          <section>
            <div className="flex items-center justify-between bg-white rounded-2xl px-4 py-4 shadow-sm border border-slate-100">
              <div>
                <p className="text-sm font-semibold text-slate-800">Тільки верифіковані</p>
                <p className="text-xs text-slate-400 mt-0.5">Перевірені через Дія</p>
              </div>
              <Switch
                checked={verifiedOnly}
                onCheckedChange={setVerifiedOnly}
                className="data-[state=checked]:bg-sky-500"
              />
            </div>
          </section>

          {/* ── ВІК АВТОРА ── */}
          <section>
            <SectionLabel>Вік автора оголошення</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {AGE_CHIPS.map((a) => (
                <button
                  key={a}
                  onClick={() => toggleAge(a)}
                  className={cn(
                    "px-4 py-2.5 rounded-2xl text-sm font-semibold border transition-all",
                    selectedAges.includes(a)
                      ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                      : "bg-white text-slate-600 border-slate-100 hover:border-sky-300 hover:text-sky-500"
                  )}
                >
                  {a}
                </button>
              ))}
            </div>
          </section>

          {/* ── СТАТЬ АВТОРА ── */}
          <section>
            <SectionLabel>Стать автора</SectionLabel>
            <div className="flex gap-2">
              {GENDER_OPTIONS.map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGender(g)}
                  className={cn(
                    "flex-1 py-3 rounded-2xl text-sm font-semibold border transition-all",
                    selectedGender === g
                      ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                      : "bg-white text-slate-600 border-slate-100 hover:border-sky-300 hover:text-sky-500"
                  )}
                >
                  {g}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── STICKY BOTTOM ACTIONS ── */}
<div className="fixed bottom-0 left-0 right-0 z-30">
  <div className="max-w-md mx-auto bg-white/90 backdrop-blur-md border-t border-slate-100 p-4 flex gap-3">
    <button
      onClick={handleReset}
      className="flex-1 py-3.5 rounded-2xl bg-slate-100 text-slate-600 font-semibold text-sm hover:bg-slate-200 transition-colors"
    >
      Скинути
    </button>
    <button
      onClick={() => router.push("/search")} // Додаємо цей рядок
      className="flex-[2] py-3.5 rounded-2xl bg-sky-500 text-white font-bold text-sm hover:bg-sky-600 transition-colors shadow-sm"
    >
      Застосувати
    </button>
  </div>
</div>
</div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold text-slate-900 mb-3">{children}</p>
  )
}
