import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { AvatarSection } from "@/components/profile/AvatarSection";
import { PersonalInfoSection } from "@/components/profile/PersonalInfoSection";
import { ContactTrustSection } from "@/components/profile/ContactTrustSection";
import { LifestyleSection } from "@/components/profile/LifestyleSection";
import { MyListingsSection } from "@/components/profile/MyListingsSection";
import { BottomNav } from "@/components/bottom-nav";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Constrain to phone width */}
      <div className="max-w-md mx-auto relative">
        {/* Scrollable content with bottom padding for nav */}
        <div className="pb-28">
          <ProfileHeader />
          <AvatarSection />
          <PersonalInfoSection />
          <ContactTrustSection />
          <LifestyleSection />
          <MyListingsSection />
        </div>
        <BottomNav />
      </div>
    </main>
  );
}
