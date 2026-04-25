"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { ActiveListingCard } from "./ActiveListingCard";

export function MyListingsSection() {
  const [activeTab, setActiveTab] = useState<"active" | "archive">("active");

  return (
    <section className="px-4 mt-8">
      {/* Section Title */}
      <h2 className="text-lg font-bold text-slate-900 mb-4">Мої оголошення</h2>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-slate-100 rounded-xl mb-4">
        <button
          onClick={() => setActiveTab("active")}
          className={`flex-1 px-4 py-2 text-sm rounded-lg transition-all ${
            activeTab === "active"
              ? "bg-white shadow-sm font-bold text-slate-900"
              : "text-slate-500 font-medium"
          }`}
        >
          Активні (1)
        </button>
        <button
          onClick={() => setActiveTab("archive")}
          className={`flex-1 px-4 py-2 text-sm rounded-lg transition-all ${
            activeTab === "archive"
              ? "bg-white shadow-sm font-bold text-slate-900"
              : "text-slate-500 font-medium"
          }`}
        >
          Архівні (0)
        </button>
      </div>

      {/* Content */}
      {activeTab === "active" ? (
        <div className="space-y-4">
          <ActiveListingCard />
        </div>
      ) : (
        <div className="text-center py-10 text-slate-400 text-sm">
          Немає архівних оголошень
        </div>
      )}

      {/* Create Button */}
      <button className="w-full mt-4 py-4 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-slate-400 hover:border-sky-300 hover:text-sky-400 transition-colors mb-6">
        <Plus size={18} />
        <span className="text-sm font-medium">Створити нове оголошення</span>
      </button>
    </section>
  );
}
