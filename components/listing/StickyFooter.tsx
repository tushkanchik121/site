import { MessageCircle } from "lucide-react"

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
      <div className="w-full max-w-md pointer-events-auto">
        <div
          className="bg-white/80 backdrop-blur-md border-t border-slate-100 px-5 pb-safe-bottom pb-6 pt-3"
          style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        >
          <button
            className="w-full flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white text-base font-semibold rounded-2xl py-4 shadow-md shadow-sky-200 transition-all active:scale-[0.98]"
            aria-label="Написати Вікторії"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2} />
            Написати Вікторії
          </button>
        </div>
      </div>
    </div>
  )
}
