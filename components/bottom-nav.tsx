"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Heart, MessageCircle, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { icon: Search, label: "Пошук", href: "/" },
    { icon: Heart, label: "Збережене", href: "/saved" },
    { icon: MessageCircle, label: "Повідомлення", href: "/messages" },
    { icon: User, label: "Профіль", href: "/profile_menu" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-between items-center border-t border-slate-200 bg-white px-8 py-3 h-16">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 transition-colors",
              isActive ? "text-sky-500" : "text-slate-400"
            )}
          >
            <Icon className="size-6" />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}