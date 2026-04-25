import { Search, Bookmark, MessageCircle, User, Heart } from "lucide-react"
import Link from 'next/link'
type NavItem = {
  icon: React.ElementType
  label: string
  active?: boolean
}

const navItems: NavItem[] = [
  { icon: Search, label: "Пошук" },
  { icon: Bookmark, label: "Збережене" },
  { icon: MessageCircle, label: "Повідомлення" },
  { icon: User, label: "Профіль", active: true },
]

export function BottomNav() {
  return (
    <nav
      aria-label="Нижня навігація"
      className="fixed bottom-0 left-0 right-0 flex justify-between border-t border-slate-100 bg-white px-8 py-3 w-full z-50"
    >
      <Link href="/" className="flex flex-col items-center">
        <Search className="size-6 text-sky-500" />
        <span className="text-xs">Пошук</span>
      </Link>
      <Link href="/saved" className="flex flex-col items-center text-slate-400">
        <Heart className="size-6" />
        <span className="text-xs">Збережене</span>
      </Link>
      <Link href="/messages" className="flex flex-col items-center text-slate-400">
        <MessageCircle className="size-6" />
        <span className="text-xs">Чати</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center text-slate-400">
        <User className="size-6" />
        <span className="text-xs">Профіль</span>
      </Link>
    </nav>
  )
}
