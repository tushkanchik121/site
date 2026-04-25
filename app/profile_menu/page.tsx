import { ProfileHeader } from "@/components/profile-header"
import { SettingsMenu } from "@/components/settings-menu"
import { BottomNav } from "@/components/bottom-nav"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-md relative">
        {/* Scrollable content area with bottom padding to clear fixed nav */}
        <div className="px-4 pb-24">
          <ProfileHeader />
          <SettingsMenu />
        </div>

        <BottomNav />
      </div>
    </main>
  )
}
