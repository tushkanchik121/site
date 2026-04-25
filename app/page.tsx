import { SearchHeader } from "@/components/search-header"
import { ListingCard } from "@/components/listing-card"
import { BottomNav } from "@/components/bottom-nav"

const listings = [
  {
    id: 1,
    image: "/images/room-andrii.jpg",
    compatibility: 94,
    title: "Шукаю сусіда в 2-к квартиру, Сихів",
    price: "5 500 грн/міс",
    timeAgo: "1 год тому",
    location: "м. Львів, пр. Червоної Калини",
    preview:
      "Здам окрему кімнату. Квартира після ремонту, є вся техніка. Шукаю відповідального хлопця для довгострокової оренди...",
    tags: ["Рання пташка", "Ідеальна чистота", "Без тварин"],
    userName: "Андрій",
    userInitials: "АН",
    userColor: "bg-sky-500",
  },
  {
    id: 2,
    image: "/images/room-mariia.jpg",
    compatibility: 89,
    title: "Кімната для дівчини біля центру",
    price: "6 000 грн/міс",
    timeAgo: "4 год тому",
    location: "м. Львів, вул. Листопадового Чину",
    preview:
      "Шукаю сусідку в простору квартиру поруч із парком Франка. Важливо: повага до особистого простору та тиша...",
    tags: ["Сова", "Гнучкий графік", "Толерую паління"],
    userName: "Марія",
    userInitials: "МА",
    userColor: "bg-emerald-500",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Mobile-first container */}
      <div className="max-w-lg mx-auto bg-slate-50 min-h-screen pb-24">
        {/* Search Header */}
        <SearchHeader />

        {/* Feed Section */}
        <div className="px-4">
          <h1 className="text-xl font-bold text-slate-900 mb-4">
            Рекомендовано вам
          </h1>

          {/* Listing Cards */}
          <div className="space-y-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </main>
  )
}
