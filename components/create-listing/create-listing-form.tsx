"use client"

import { useState } from "react"
import { ArrowLeft, Sparkles } from "lucide-react"
import { PhotoUpload } from "./photo-upload"
import { PreferenceToggle } from "./preference-toggle"
import { MapPlaceholder } from "./map-placeholder"
import { SectionCard } from "./section-card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface Preferences {
  sleep: string[]
  cleanliness: string[]
  pets: string[]
  smoking: string[]
  guests: string[]
  music: string[]
  leisure: string[]
}

export function CreateListingForm() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [rooms, setRooms] = useState("")
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")
  const [prefs, setPrefs] = useState<Preferences>({
    sleep: [],
    cleanliness: [],
    pets: [],
    smoking: [],
    guests: [],
    music: [],
    leisure: [],
  })

  function setPref(key: keyof Preferences) {
    return (val: string[]) => setPrefs((p) => ({ ...p, [key]: val }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Submit logic would go here
    alert("Оголошення опубліковано!")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col min-h-dvh bg-background">
      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto pb-28">
        <div className="px-4 max-w-lg mx-auto">
          {/* Header */}
          <header className="flex items-center gap-3 mb-6 pt-5">
            <button
              type="button"
              aria-label="Назад"
              className="flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight text-balance">
              Нове оголошення
            </h1>
          </header>

          {/* Section 1: Photo & Basic Info */}
          <SectionCard className="mb-4">
            <PhotoUpload />

            <div className="mt-4 space-y-1">
              <Label htmlFor="listing-title" className="text-sm font-medium text-slate-700">
                Назва оголошення
              </Label>
              <Input
                id="listing-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Світла кімната для студента"
                className="rounded-2xl border-slate-200 bg-slate-50 placeholder:text-slate-400 focus-visible:ring-sky-400"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <div className="flex-1 space-y-1">
                <Label htmlFor="price" className="text-sm font-medium text-slate-700">
                  Ціна (грн/міс)
                </Label>
                <Input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="5000"
                  className="rounded-2xl border-slate-200 bg-slate-50 placeholder:text-slate-400 focus-visible:ring-sky-400"
                />
              </div>
              <div className="flex-1 space-y-1">
                <Label htmlFor="rooms" className="text-sm font-medium text-slate-700">
                  Кількість кімнат
                </Label>
                <Input
                  id="rooms"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="1, 2, 3... (необов'язково)"
                  className="rounded-2xl border-slate-200 bg-slate-50 placeholder:text-slate-400 focus-visible:ring-sky-400 text-sm"
                />
              </div>
            </div>
          </SectionCard>

          {/* Section 2: Details & Location */}
          <SectionCard className="mb-4 space-y-4">
            <div className="space-y-1">
              <Label htmlFor="description" className="text-sm font-medium text-slate-700">
                Про помешкання
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Опишіть умови, ремонт та ваші очікування..."
                className="rounded-2xl border-slate-200 bg-slate-50 placeholder:text-slate-400 focus-visible:ring-sky-400 min-h-24 resize-none leading-relaxed"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="address" className="text-sm font-medium text-slate-700">
                Адреса
              </Label>
              <Input
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="м. Львів, вул. Городоцька"
                className="rounded-2xl border-slate-200 bg-slate-50 placeholder:text-slate-400 focus-visible:ring-sky-400"
              />
              <MapPlaceholder />
            </div>
          </SectionCard>

          {/* Section 3: Roommate Requirements */}
          <SectionCard className="mb-4">
            <div className="flex items-start gap-2 mb-1">
              <Sparkles className="h-4 w-4 mt-0.5 text-sky-500 shrink-0" />
              <div>
                <h2 className="text-lg font-bold text-slate-900 leading-tight">
                  Кого ви шукаєте?
                </h2>
                <p className="text-xs text-slate-500 mt-0.5 mb-4">
                  Оберіть критичні для вас звички сусіда
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <PreferenceToggle
                label="Графік сну"
                options={["Пташка", "Гнучкий", "Сова", "Неважливо"]}
                value={prefs.sleep}
                onChange={setPref("sleep")}
              />
              <PreferenceToggle
                label="Чистота"
                options={["Ідеальна", "Середня", "Творчий безлад", "Неважливо"]}
                value={prefs.cleanliness}
                onChange={setPref("cleanliness")}
              />
              <PreferenceToggle
                label="Тварини"
                options={["Маю тварин", "Без тварин", "Неважливо"]}
                value={prefs.pets}
                onChange={setPref("pets")}
              />
              <PreferenceToggle
                label="Паління"
                options={["Палю", "Не палю", "Толерую"]}
                value={prefs.smoking}
                onChange={setPref("smoking")}
              />
              <PreferenceToggle
                label="Гості"
                options={["Без гостей", "На вихідних", "Будь-коли", "Неважливо"]}
                value={prefs.guests}
                onChange={setPref("guests")}
              />

              {/* Divider */}
              <div className="h-px bg-slate-100" />

              <PreferenceToggle
                label="Музика (мультивибір)"
                options={["Рок", "Поп", "Інді", "Електронна", "Тиша", "Будь-яка"]}
                value={prefs.music}
                multi
                onChange={setPref("music")}
              />
              <PreferenceToggle
                label="Дозвілля (мультивибір)"
                options={["Домашній", "Соціальне", "Активне", "Неважливо"]}
                value={prefs.leisure}
                multi
                onChange={setPref("leisure")}
              />
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Sticky bottom action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-100 px-4 py-3 safe-area-bottom">
        <div className="max-w-lg mx-auto">
          <button
            type="submit"
            className="w-full rounded-2xl bg-sky-500 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-200 hover:bg-sky-600 active:scale-[0.98] transition-all"
          >
            Опублікувати оголошення
          </button>
        </div>
      </div>
    </form>
  )
}
