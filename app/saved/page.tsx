'use client'

import { Heart, MapPin, CircleCheck, Search, MessageCircle, User } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface ListingCard {
  id: string
  title: string
  price: string
  timeAgo: string
  location: string
  image: string
  compatibility: number
  tags: string[]
  userName: string
  userAvatar: string
  verified: boolean
  isSaved: boolean
}

const listingsData: ListingCard[] = [
  {
    id: '1',
    title: 'Шукаю сусіда в 2-к квартиру, Сихів',
    price: '5500 грн/міс',
    timeAgo: '1 год тому',
    location: 'м. Львів, пр. Червоної Калини',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    compatibility: 94,
    tags: ['Рання пташка', 'Ідеальна чистота', 'Без тварин'],
    userName: 'Андрій',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    verified: true,
    isSaved: true,
  },
  {
    id: '2',
    title: 'Кімната для дівчини біля центру',
    price: '6000 грн/міс',
    timeAgo: '4 год тому',
    location: 'м. Львів, вул. Листопадового Чину',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    compatibility: 89,
    tags: ['Сова', 'Гнучкий графік', 'Толерую'],
    userName: 'Марія',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
    verified: true,
    isSaved: true,
  },
]

const navItems = [
  { icon: Search, label: 'Пошук', key: 'search' },
  { icon: Heart, label: 'Збережене', key: 'saved', active: true },
  { icon: MessageCircle, label: 'Повідомлення', key: 'messages' },
  { icon: User, label: 'Профіль', key: 'profile' },
]

export default function SavedListings() {
  const [listings, setListings] = useState(listingsData)

  const toggleSave = (id: string) => {
    setListings(
      listings.map((listing) =>
        listing.id === id ? { ...listing, isSaved: !listing.isSaved } : listing
      )
    )
  }

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-6 pt-4 px-4">
        <h1 className="text-2xl font-bold text-slate-900">Збережене</h1>
        <button className="bg-sky-50 text-sky-500 rounded-xl p-2 hover:bg-sky-100 transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Saved Listings Feed */}
      <div className="px-4 space-y-6">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Image Area with Heart and Compatibility Badge */}
            <div className="relative">
              <Image
                src={listing.image}
                alt={listing.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />

              {/* Pagination Dots */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
              </div>

              {/* Heart Icon (Top-Left) - Filled */}
              <button
                onClick={() => toggleSave(listing.id)}
                className="absolute top-3 left-3 bg-white bg-opacity-90 rounded-lg p-2 hover:bg-opacity-100 transition-all"
              >
                <Heart
                  className="w-5 h-5"
                  fill={listing.isSaved ? '#0ea5e9' : 'none'}
                  stroke={listing.isSaved ? '#0ea5e9' : '#64748b'}
                  strokeWidth={2}
                />
              </button>

              {/* Compatibility Badge (Top-Right) */}
              <div className="absolute top-3 right-3 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-sm font-semibold">
                Сумісність: {listing.compatibility}%
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4">
              {/* Title */}
              <h3 className="font-bold text-slate-900 mb-2 text-base">
                {listing.title}
              </h3>

              {/* Price Row */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sky-500 font-semibold">{listing.price}</span>
                <span className="text-slate-400 text-sm">{listing.timeAgo}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-slate-600 text-sm mb-4">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{listing.location}</span>
              </div>

              {/* Lifestyle Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {listing.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-xs border-transparent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* User Info */}
              <div className="flex justify-between items-center w-full pt-4 border-t border-slate-100">
                {/* Left: Avatar + Name */}
                <div className="flex items-center gap-3">
                  <Image
                    src={listing.userAvatar}
                    alt={listing.userName}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-semibold text-slate-900 text-sm">
                    {listing.userName}
                  </span>
                </div>

                {/* Right: Verification Badge */}
                {listing.verified && (
                  <span className="flex items-center gap-1 bg-teal-50 text-teal-700 border border-teal-200 px-2.5 py-1 rounded-full text-xs font-medium">
                    <CircleCheck className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2.5} />
                    Верифіковано (Дія)
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-between px-8 py-3">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.active
          return (
            <button
              key={item.key}
              className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
            >
              <Icon
                className={`w-6 h-6 ${
                  isActive ? 'text-sky-500' : 'text-slate-400'
                }`}
              />
              <span
                className={`text-xs font-medium ${
                  isActive ? 'text-sky-500' : 'text-slate-600'
                }`}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
