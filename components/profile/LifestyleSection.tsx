const lifestyleItems = [
  { label: "Графік сну", value: "Сова" },
  { label: "Чистота", value: "Середня" },
  { label: "Тварини", value: "Без тварин" },
  { label: "Паління", value: "Не палю" },
  { label: "Гості", value: "На вихідних" },
  { label: "Музика", value: "Поп" },
  { label: "Дозвілля", value: "Домашній відпочинок" },
];

export function LifestyleSection() {
  return (
    <section className="px-4">
      {/* Section Title Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-slate-900">Стиль життя</h2>
        <button className="text-sky-500 text-sm font-medium hover:text-sky-600 transition-colors">
          Редагувати
        </button>
      </div>

      {/* 2-column grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {lifestyleItems.map((item) => (
          <div key={item.label}>
            <p className="text-xs text-slate-500 mb-1">{item.label}</p>
            <span className="inline-block bg-sky-50 text-sky-700 border border-transparent px-3 py-1 rounded-full text-xs font-medium w-fit">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
