import Image from "next/image";
import { MapPin, CheckCircle2 } from "lucide-react";

const lifestyleTags = ["Не палю", "Сова", "Без тварин"];

export function ActiveListingCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
      {/* Image */}
      <div className="relative h-44">
        <Image
          src="/apartment.jpg"
          alt="Фото квартири"
          fill
          className="object-cover"
        />
        {/* Active Badge */}
        <span className="absolute top-3 right-3 bg-emerald-100 text-emerald-700 font-bold text-xs px-3 py-1 rounded-full">
          Активно
        </span>
        {/* Pagination dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white opacity-100" />
          <span className="w-2 h-2 rounded-full bg-white opacity-50" />
          <span className="w-2 h-2 rounded-full bg-white opacity-50" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 leading-snug">
          Шукаю студента для підселення
        </h3>

        {/* Price + Time */}
        <div className="flex items-center justify-between">
          <span className="text-sky-500 font-bold text-base">5000 грн/міс</span>
          <span className="text-xs text-slate-400">2 год тому</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-slate-500">
          <MapPin size={14} className="shrink-0" />
          <span className="text-sm">м. Львів, вул. Городоцька</span>
        </div>

        {/* Preview text */}
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
          Здається затишна кімната. Шукаю охайного сусіда без шкідливих звичок...
        </p>

        {/* Lifestyle Tags */}
        <div className="flex flex-wrap gap-2">
          {lifestyleTags.map((tag) => (
            <span
              key={tag}
              className="bg-sky-50 text-sky-700 text-xs px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* User Row */}
        <div className="flex items-center justify-between w-full pt-1">
          {/* Left: avatar + name */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold select-none">В</span>
            </div>
            <span className="text-sm font-semibold text-slate-800">Вікторія</span>
          </div>
          {/* Right: verification badge */}
          <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full shrink-0">
            <CheckCircle2 size={11} />
            <span>Верифіковано (Дія)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
