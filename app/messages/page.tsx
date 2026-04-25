import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Search, Bookmark, MessageCircle, User } from "lucide-react"

interface ChatCardProps {
  name: string
  avatar: string
  initials: string
  timestamp: string
  preview: string
  isUnread?: boolean
  hasBorder?: boolean
  previewHighlight?: boolean
}

function ChatCard({
  name,
  avatar,
  initials,
  timestamp,
  preview,
  isUnread = false,
  hasBorder = false,
  previewHighlight = false,
}: ChatCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3 active:bg-sky-50 transition-colors cursor-pointer">
      <div className={hasBorder ? "p-1 rounded-full border border-slate-200" : ""}>
        <Avatar className="size-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-sky-100 text-sky-600">{initials}</AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <span className="font-semibold text-slate-900">{name}</span>
          <span className="text-xs text-slate-500">{timestamp}</span>
        </div>
        <p
          className={`text-sm line-clamp-1 ${
            previewHighlight ? "font-semibold text-sky-600" : "text-slate-500"
          }`}
        >
          {preview}
        </p>
      </div>
      
      {isUnread && (
        <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
      )}
    </div>
  )
}

interface NavItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
}

function NavItem({ icon, label, isActive = false }: NavItemProps) {
  return (
    <button
      className={`flex flex-col items-center gap-1 transition-colors ${
        isActive ? "text-sky-500" : "text-slate-400"
      }`}
    >
      <div className="relative">
        {icon}
        {isActive && (
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-500" />
        )}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </button>
  )
}

export default function ChatListPage() {
  const chats = [
    {
      id: 1,
      name: "Олексій",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      initials: "ОЛ",
      timestamp: "2 хв тому",
      preview: "Яка вартість комунальних послуг?...",
      isUnread: true,
      previewHighlight: true,
    },
    {
      id: 2,
      name: "Вікторія",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
      initials: "ВІ",
      timestamp: "2 год тому",
      preview: "Добридень! Бачу у нас 92% сумісності, було б круто спі...",
      hasBorder: true,
    },
    {
      id: 3,
      name: "Марк",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
      initials: "МА",
      timestamp: "1 д тому",
      preview: "Де найближче укриття?...",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Main Container */}
      <div className="px-4">
        {/* Header */}
        <h1 className="text-2xl font-bold text-slate-900 pt-4 mb-6">
          Повідомлення
        </h1>

        {/* Chat List */}
        <div className="space-y-4">
          {chats.map((chat) => (
            <ChatCard
              key={chat.id}
              name={chat.name}
              avatar={chat.avatar}
              initials={chat.initials}
              timestamp={chat.timestamp}
              preview={chat.preview}
              isUnread={chat.isUnread}
              hasBorder={chat.hasBorder}
              previewHighlight={chat.previewHighlight}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 flex justify-between items-center border-t border-slate-200 bg-white px-8 py-3 h-16">
        <NavItem
          icon={<Search className="size-6" />}
          label="Пошук"
        />
        <NavItem
          icon={<Bookmark className="size-6" />}
          label="Збережене"
        />
        <NavItem
          icon={<MessageCircle className="size-6" />}
          label="Повідомлення"
          isActive
        />
        <NavItem
          icon={<User className="size-6" />}
          label="Профіль"
        />
      </nav>
    </div>
  )
}
