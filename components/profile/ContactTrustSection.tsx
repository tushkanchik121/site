import { CheckCircle2, ShieldCheck } from "lucide-react";

export function ContactTrustSection() {
  return (
    <section className="px-4 mt-6 mb-6">
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-4">
        {/* Phone */}
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">Телефон</p>
          <div className="flex items-center gap-2">
            <p className="text-base font-semibold text-slate-900">
              +380 93 123 45 67
            </p>
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200" />

        {/* Diia Badge */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
            <ShieldCheck size={20} className="text-emerald-500" />
          </div>
          <div>
            <p className="text-emerald-700 font-bold text-sm leading-tight">
              Верифіковано через Дію
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Особа підтверджена державним сервісом
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
