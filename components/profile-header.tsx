import Image from "next/image"

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center pt-8 pb-6">
      <div className="relative">
        <div className="w-24 h-24 rounded-full ring-2 ring-sky-500 ring-offset-2 overflow-hidden">
          <Image
            src="/avatar-victoria.jpg"
            alt="Аватар Вікторії"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <h1 className="text-xl font-bold text-slate-900 mt-3 tracking-tight">
        Вікторія
      </h1>
      <span className="mt-1.5 text-xs text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full font-medium">
        Верифікований профіль
      </span>
    </div>
  )
}
