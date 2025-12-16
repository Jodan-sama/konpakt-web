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
const allProducts = [
  {
    id: '1',
    name: 'Example Jacket',
    price: 850,
    category: 'Product',
    releaseDate: '2025-12-10',
    image: 'https://source.unsplash.com/random/800x800/?techwear,black', // replace with your /images/...
  },
  // Add your real products (few per category)
  // Example:
  // { id: '2', name: 'Biosync Module', price: 320, category: 'Biosync', releaseDate: '2025-11-20', image: '/images/biosync1.jpg' },
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
