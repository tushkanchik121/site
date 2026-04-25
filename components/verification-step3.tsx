"use client";

import { useState } from "react";
import { ChevronLeft, ShieldCheck, Smartphone, CheckCircle2 } from "lucide-react";

export default function VerificationStep3() {
  const [phone, setPhone] = useState("");
  const [smsSent, setSmsSent] = useState(false);
  const [smsCode, setSmsCode] = useState("");
  const [phoneVerified, setPhoneVerified] = useState(false);

  const isPhoneValid = phone.replace(/\D/g, "").length >= 10;
  const isComplete = phoneVerified;

  function handleSendSms() {
    if (!isPhoneValid) return;
    setSmsSent(true);
  }

  function handleVerifyCode() {
    if (smsCode.length >= 4) {
      setPhoneVerified(true);
    }
  }

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 12);
    if (digits.length === 0) return "";
    if (digits.startsWith("380")) {
      const rest = digits.slice(3);
      let formatted = "+380";
      if (rest.length > 0) formatted += " (" + rest.slice(0, 2);
      if (rest.length >= 2) formatted += ") ";
      if (rest.length > 2) formatted += rest.slice(2, 5);
      if (rest.length > 5) formatted += "-" + rest.slice(5, 7);
      if (rest.length > 7) formatted += "-" + rest.slice(7, 9);
      return formatted;
    }
    return "+" + digits;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Scrollable content area */}
      <main className="flex-1 overflow-y-auto pb-28">
        <div className="max-w-md mx-auto px-4 pt-10">

          {/* ── Header Row 1: Navigation ── */}
          <div className="flex items-center justify-start gap-2 mb-2">
            <button
              aria-label="Назад"
              className="text-foreground hover:opacity-70 transition-opacity"
            >
              <ChevronLeft size={20} strokeWidth={2.2} />
            </button>
            <span className="text-sm font-medium text-slate-500">
              Крок 3 з 3
            </span>
          </div>

          {/* ── Header Row 2: Title ── */}
          <h1 className="text-2xl font-bold text-slate-900 mb-6 text-balance">
            Безпека та довіра
          </h1>

          {/* ── Section 1: Phone Verification ── */}
          <section aria-labelledby="phone-label" className="mb-5">
            <div className="bg-card rounded-2xl border border-border p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone size={18} className="text-primary" strokeWidth={2} />
                <label
                  id="phone-label"
                  htmlFor="phone-input"
                  className="text-sm font-semibold text-slate-900"
                >
                  Підтвердження телефону
                </label>
              </div>

              {/* Phone input */}
              <div className="relative mb-3">
                <input
                  id="phone-input"
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  placeholder="+380 (__)  __-__-__"
                  disabled={phoneVerified}
                  className="w-full h-12 rounded-2xl border border-border bg-background px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-describedby="phone-hint"
                />
              </div>

              {/* Send SMS button */}
              {!smsSent && !phoneVerified && (
                <button
                  onClick={handleSendSms}
                  disabled={!isPhoneValid}
                  className="w-full h-11 rounded-2xl bg-sky-50 text-sky-600 text-sm font-semibold border border-sky-200 hover:bg-sky-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Отримати SMS-код
                </button>
              )}

              {/* SMS code input */}
              {smsSent && !phoneVerified && (
                <div className="flex flex-col gap-2">
                  <p id="phone-hint" className="text-xs text-slate-500">
                    Введіть 4-значний код із SMS
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={4}
                      value={smsCode}
                      onChange={(e) => setSmsCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      placeholder="• • • •"
                      className="flex-1 h-12 rounded-2xl border border-border bg-background px-4 text-center text-lg font-bold tracking-[0.4em] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                    />
                    <button
                      onClick={handleVerifyCode}
                      disabled={smsCode.length < 4}
                      className="px-5 h-12 rounded-2xl bg-primary text-white text-sm font-semibold hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      OK
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setSmsSent(false);
                      setSmsCode("");
                    }}
                    className="text-xs text-primary underline-offset-2 hover:underline self-start"
                  >
                    Надіслати повторно
                  </button>
                </div>
              )}

              {/* Verified state */}
              {phoneVerified && (
                <div className="flex items-center gap-2 px-1">
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">
                    Телефон підтверджено
                  </span>
                </div>
              )}
            </div>
          </section>

          {/* ── Section 2: Diia Trust Card ── */}
          <section aria-labelledby="diia-title">
            <div
              className="rounded-2xl p-5 flex flex-col gap-4"
              style={{ backgroundColor: "var(--trust-bg)" }}
            >
              {/* Icon + text */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <ShieldCheck
                    size={32}
                    strokeWidth={1.8}
                    style={{ color: "var(--trust-icon)" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2
                    id="diia-title"
                    className="text-lg font-bold leading-tight"
                    style={{ color: "var(--trust-title)" }}
                  >
                    Верифікація через Дію
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--trust-text)" }}
                  >
                    Отримайте спеціальний значок у профілі. Верифіковані
                    користувачі знаходять житло у{" "}
                    <span className="font-bold">3 рази швидше!</span>
                  </p>
                </div>
              </div>

              {/* Diia primary button */}
              <button
                className="w-full h-12 rounded-2xl font-semibold text-sm transition hover:opacity-85 active:scale-[0.98]"
                style={{ backgroundColor: "var(--diia-bg)", color: "var(--diia-fg)" }}
              >
                Перейти в Дію
              </button>

              {/* Skip ghost button — inside the card */}
              <button className="self-center text-sm text-slate-500 underline-offset-4 hover:underline transition">
                Пропустити цей крок
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* ── Sticky bottom bar ── */}
      <div className="fixed bottom-0 inset-x-0 bg-background/90 backdrop-blur-sm border-t border-border px-4 py-4 safe-area-pb">
        <div className="max-w-md mx-auto">
          <button
            disabled={!isComplete}
            aria-disabled={!isComplete}
            className={[
              "w-full h-14 rounded-2xl text-base font-bold transition",
              isComplete
                ? "bg-primary text-white hover:opacity-90 active:scale-[0.98]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed",
            ].join(" ")}
          >
            Завершити реєстрацію
          </button>
          {!isComplete && (
            <p className="text-center text-xs text-slate-400 mt-2">
              Спочатку підтвердіть номер телефону
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
