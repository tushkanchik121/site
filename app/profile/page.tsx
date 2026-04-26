import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { AvatarSection } from "@/components/profile/AvatarSection";
import { PersonalInfoSection } from "@/components/profile/PersonalInfoSection";
import { ContactTrustSection } from "@/components/profile/ContactTrustSection";
import { LifestyleSection } from "@/components/profile/LifestyleSection";
import { MyListingsSection } from "@/components/profile/MyListingsSection";
import { BottomNav } from "@/components/bottom-nav"; // Переконайтеся, що шлях правильний
import Link from "next/link"; // 1. Додаємо імпорт посилань

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <div className="max-w-md mx-auto relative">
        <div className="pb-28">
          <ProfileHeader />
          <AvatarSection />
          <PersonalInfoSection />
          <ContactTrustSection />
          <LifestyleSection />
          <MyListingsSection />

          {/* 2. Додаємо кнопку переходу до створення оголошення */}
          <div className="px-4 mt-6 mb-4">
            <Link href="/poster_create" className="block w-full">
              <button className="w-full py-4 bg-sky-500 text-white font-bold rounded-2xl hover:bg-sky-600 active:scale-[0.98] transition-all shadow-md">
                Створити оголошення
              </button>
            </Link>
          </div>
        </div>
        
        <BottomNav />
      </div>
    </main>
  );
}