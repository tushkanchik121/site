"use client"
import Link from "next/link"
import {
  User,
  Bell,
  ShieldCheck,
  Palette,
  Languages,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react"

type MenuItem = {
  icon: React.ElementType
  label: string
  subtitle?: string
  danger?: boolean
  href?: string
}

const menuItems: MenuItem[] = [
  {
    icon: User,
    label: "Мій профіль",
    subtitle: "Анкета, звички та ваші оголошення",
    href: "/profile",
  },
  { icon: Bell, label: "Сповіщення" },
  { icon: ShieldCheck, label: "Конфіденційність" },
  {
    icon: Palette,
    label: "Налаштування відображення",
    subtitle: "Темна тема, кольори",
  },
  {
    icon: Languages,
    label: "Мова",
    subtitle: "Українська",
  },
  { icon: HelpCircle, label: "FAQ та підтримка" },
  {
    icon: LogOut,
    label: "Вийти з облікового запису",
    danger: true,
    href: "/profile_step1",
  },
]

export function SettingsMenu() {
  return (
    <nav aria-label="Налаштування профілю">
      <ul className="space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          
          // Спільні класи для обох типів елементів
          const className = "w-full flex items-center justify-between py-4 border-b border-slate-50 group active:bg-slate-50 rounded-2xl px-2 -mx-2 transition-colors"

          // Внутрішній вміст кнопки/посилання
          const content = (
            <>
              <div className="flex items-center gap-3.5">
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-2xl ${
                    item.danger ? "bg-red-50" : "bg-slate-50"
                  }`}
                >
                  <Icon
                    size={20}
                    className={item.danger ? "text-red-500" : "text-slate-400"}
                  />
                </div>
                <div className="text-left">
                  <p
                    className={`text-sm font-medium leading-tight ${
                      item.danger ? "text-red-500" : "text-slate-900"
                    }`}
                  >
                    {item.label}
                  </p>
                  {item.subtitle && (
                    <p className="text-xs text-slate-400 mt-0.5 leading-tight">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <ChevronRight
                size={16}
                className={`flex-shrink-0 ${
                  item.danger ? "text-red-300" : "text-slate-300"
                }`}
              />
            </>
          )

          return (
            <li key={index}>
              {item.href ? (
                // Якщо є href, рендеримо справжній Link
                <Link href={item.href} className={className}>
                  {content}
                </Link>
              ) : (
                // Якщо href немає, рендеримо звичайну кнопку
                <button type="button" className={className}>
                  {content}
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}