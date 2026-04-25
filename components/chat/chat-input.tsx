"use client";

import { useState } from "react";
import { Plus, SendHorizontal } from "lucide-react";

const QUICK_TEMPLATES = [
  "Яка вартість комунальних послуг?",
  "Коли востаннє був ремонт?",
  "Де найближче укриття?",
  "Які правила щодо гостей?",
  "Чи є поруч продуктові?",
];

export function ChatInput() {
  const [value, setValue] = useState("");

  function handleTemplateClick(text: string) {
    setValue(text);
  }

  function handleSend() {
    if (!value.trim()) return;
    setValue("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <div className="sticky bottom-0 bg-white border-t border-border">
      {/* Quick template pills row */}
      <div className="flex flex-nowrap overflow-x-auto gap-2 px-4 py-2 no-scrollbar">
        {QUICK_TEMPLATES.map((tpl) => (
          <button
            key={tpl}
            onClick={() => handleTemplateClick(tpl)}
            className="flex-shrink-0 whitespace-nowrap bg-sky-50 text-sky-600 border border-sky-100 text-sm rounded-full px-4 py-2 hover:bg-sky-100 active:scale-95 transition-all"
          >
            {tpl}
          </button>
        ))}
      </div>

      {/* Input row */}
      <div className="flex items-center gap-2 px-3 pb-4 pt-1">
        {/* Plus button */}
        <button
          aria-label="Вкладення"
          className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors text-slate-400"
        >
          <Plus size={22} strokeWidth={2} />
        </button>

        {/* Text input */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Написати повідомлення..."
            aria-label="Написати повідомлення"
            className="w-full bg-slate-100 rounded-2xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none border-none focus:ring-2 focus:ring-sky-300 transition-shadow"
          />
        </div>

        {/* Send button */}
        <button
          onClick={handleSend}
          aria-label="Надіслати"
          className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full hover:bg-sky-50 active:scale-95 transition-all text-sky-500"
        >
          <SendHorizontal size={22} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
