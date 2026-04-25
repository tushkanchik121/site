import HeroSection from "@/components/listing/HeroSection"
import EssentialInfo from "@/components/listing/EssentialInfo"
import Description from "@/components/listing/Description"
import OwnerInfo from "@/components/listing/OwnerInfo"
import LocationSection from "@/components/listing/LocationSection"
import CompatibilitySection from "@/components/listing/CompatibilitySection"
import StickyFooter from "@/components/listing/StickyFooter"

export default function ListingDetailPage() {
  return (
    <main className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-md relative bg-background">
        {/* Hero with nav overlay */}
        <HeroSection />

        {/* Scrollable content */}
        <div className="pb-32">
          <EssentialInfo />

          {/* Divider */}
          <div className="mx-5 mt-5 border-t border-slate-100" />

          <Description />

          {/* Divider */}
          <div className="mx-5 mt-5 border-t border-slate-100" />

          <OwnerInfo />

          <LocationSection />

          {/* Divider */}
          <div className="mx-5 mt-5 border-t border-slate-100" />

          <CompatibilitySection />

          {/* Bottom spacing */}
          <div className="h-6" />
        </div>

        {/* Sticky CTA */}
        <StickyFooter />
      </div>
    </main>
  )
}
