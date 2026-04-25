import { ShieldCheck } from "lucide-react";

export function AvatarSection() {
  return (
    <div className="flex flex-col items-center gap-3 mb-2 px-4">
      <div className="relative">
        {/* Avatar circle with the letter "В" */}
        <div className="w-24 h-24 rounded-full border-[3px] border-sky-500 shadow-md bg-sky-500 flex items-center justify-center">
          <span className="text-white text-4xl font-bold select-none">В</span>
        </div>
        <span className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-[3px] border-2 border-white">
          <ShieldCheck size={14} className="text-white" />
        </span>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold text-slate-900">Вікторія</p>
      </div>
    </div>
  );
}
