import { cn } from "@/lib/utils"

interface SectionCardProps {
  children: React.ReactNode
  className?: string
}

export function SectionCard({ children, className }: SectionCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white shadow-sm shadow-slate-100 border border-slate-100 p-4",
        className
      )}
    >
      {children}
    </div>
  )
}
