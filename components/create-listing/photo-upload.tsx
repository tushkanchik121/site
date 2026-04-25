"use client"

import { Camera } from "lucide-react"
import { useRef, useState } from "react"

export function PhotoUpload() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
    }
  }

  return (
    <div
      className="relative aspect-video w-full rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50/60 flex flex-col items-center justify-center gap-2 cursor-pointer overflow-hidden transition-colors hover:bg-sky-50"
      onClick={() => inputRef.current?.click()}
      role="button"
      aria-label="Додати фото помешкання"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
    >
      {preview ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={preview} alt="Превʼю фото" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
      ) : (
        <>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
            <Camera className="h-6 w-6 text-sky-500" />
          </div>
          <p className="text-sm font-medium text-sky-600">Додати фото помешкання</p>
          <p className="text-xs text-slate-400">JPG, PNG — до 10 МБ</p>
        </>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleChange}
        aria-hidden="true"
      />
    </div>
  )
}
