'use client'

import Image from 'next/image'
import { useState } from 'react'

const categories = ['All', 'Product', 'Design', 'Storyware', 'Biosync'] as const

type Product = {
  id: string
  name: string
  price: number
  category: typeof categories[number]
  releaseDate: string
  image: string
}

// Hardcode your products here — newest releaseDate first
const allProducts = const allProducts: Product[] = [
  {
    id: 'ks1',
    name: 'KS1 // Alleyways Tokyo',
    price: 30,
    category: 'Storyware',
    releaseDate: '2026-01-15',
    image: '/images/KS1.R1.jpeg',
  },
  {
    id: 'kd1',
    name: 'KD1 // Cups',
    price: 54,
    category: 'Design',
    releaseDate: '2026-01-11',
    image: '/images/KD1.R1.jpeg',  // corrected prefix
  },
  {
    id: 'kd2',
    name: 'KD2 // Bowls',
    price: 65,
    category: 'Design',
    releaseDate: '2026-01-11',
    image: '/images/KD2.R1.jpeg',  // corrected prefix
  },
  {
    id: 'kb1',
    name: 'KB1 // Studio',
    price: 5,  // "$5 per run" — we'll add custom tag later if needed
    category: 'Biosync',
    releaseDate: '2026-01-02',
    image: '/images/KB1.R1.jpeg',
  },
  {
    id: 'kp1',
    name: 'KP1 // Tenugui',
    price: 22,
    category: 'Product',
    releaseDate: '2026-01-01',
    image: '/images/KP1.R1.jpeg',
  },
  {
    id: 'kp2',
    name: 'KP2 // Toothbrush',
    price: 122,
    category: 'Product',
    releaseDate: '2026-01-01',
    image: '/images/KP2.R1.jpeg',
  },
  {
    id: 'kp3',
    name: 'KP3 // Chopstick Spoon',
    price: 122,
    category: 'Product',
    releaseDate: '2026-01-01',
    image: '/images/KP3.R1.jpeg',
  },
].sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All')

  const products = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-konpaktBlack">
      <header className="fixed top-0 left-0 right-0 z-50 bg-konpaktBlack/90 backdrop-blur-sm">
        <div className="py-6 flex justify-center">
          <Image
            src="/logo.png"
            alt="KONPAKT"
            width={320}
            height={100}
            priority
            className="object-contain"
          />
        </div>
        <nav className="flex justify-center gap-12 pb-6 overflow-x-auto px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-2xl uppercase tracking-widest transition ${
                activeCategory === cat ? 'text-konpaktOrange' : 'text-white hover:text-konpaktOrange'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      <main className="pt-56 px-4 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square relative overflow-hidden bg-gray-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl uppercase tracking-wide">{product.name}</h3>
                <p className="text-konpaktOrange text-lg mt-2">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
