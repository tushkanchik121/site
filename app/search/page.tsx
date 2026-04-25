import { SearchHeader } from "@/components/search-header";
import { ListingCard } from "@/components/listing-card";
import { BottomNav } from "@/components/bottom-nav";

const listings = [
  {
    id: 1,
    image: "/images/apartment1.jpg",
    compatibility: 92,
    title: "Шукаю студента для підселення",
    price: "5 000 грн/міс",
    timeAgo: "2 год тому",
    location: "м. Львів, вул. Городоцька",
    preview:
      "Здається затишна кімната. Шукаю охайного сусіда без шкідливих звичок...",
    tags: ["Не палю", "Сова", "Без тварин"],
    userName: "Вікторія",
    userAvatar: "/images/avatar-viktoriia.jpg",
  },
  {
    id: 2,
    image: "/images/apartment2.jpg",
    compatibility: 88,
    title: "Кімната в 3-к квартирі, центр",
    price: "6 500 грн/міс",
    timeAgo: "5 год тому",
    location: "м. Львів, вул. Виговського",
    preview:
      "Шукаю дівчину на підселення. Квартира з новим ремонтом, поруч парк...",
    tags: ["Рання пташка", "Ідеальна чистота", "Без тварин"],
    userName: "Оксана",
    userAvatar: "/images/avatar-oksana.jpg",
  },
];

export default function SearchResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile wrapper — centers content and caps width */}
      <div className="max-w-lg mx-auto relative min-h-screen flex flex-col">
        {/* Header */}
        <SearchHeader />

        {/* Results count */}
        <div className="px-4 mb-3 flex items-center justify-between">
          <p className="text-sm text-muted-foreground font-medium">
            Знайдено{" "}
            <span className="text-foreground font-semibold">
              {listings.length}
            </span>{" "}
            оголошення
          </p>
          <span className="text-xs text-primary font-semibold bg-accent px-2.5 py-1 rounded-full">
            Залізничний р-н
          </span>
        </div>

        {/* Main feed */}
        <main className="flex-1 px-4 pb-28 space-y-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </main>

        {/* Bottom navigation */}
        <BottomNav />
      </div>
    </div>
  );
}
