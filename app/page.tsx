'use client'

import Image from 'next/image'
import { useState } from 'react'

const categories = ['All', 'Product', 'Design', 'Storyware', 'Biosync'] as const

type Product = {
  id: string
  name: string
  price: number
  category: string
  releaseDate: string
  image: string
}

const allProducts: Product[] = [
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
    image: '/images/KD1.R1.jpeg',
  },
  {
    id: 'kd2',
    name: 'KD2 // Bowls',
    price: 65,
    category: 'Design',
    releaseDate: '2026-01-11',
    image: '/images/KD2.R1.jpeg',
  },
  {
    id: 'kb1',
    name: 'KB1 // Studio',
    price: 5,
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
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const products = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-konpaktBlack text-white">
      <header className="relative z-50 pt-12 pb-24 flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="KONPAKT"
          width={800}
          height={200}
          priority
          className="object-contain w-full max-w-5xl px-8"
        />
        <nav className="mt-20 flex justify-center gap-16 md:gap-32 flex-wrap px-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-5xl md:text-7xl lg:text-8xl uppercase tracking-wider font-bold transition-colors duration-500 ${
                activeCategory === cat ? 'text-konpaktOrange' : 'text-white hover:text-konpaktOrange/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      <main className="px-8 md:px-16 lg:px-32 -mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 lg:gap-32">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-1000" />
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-4xl md:text-6xl uppercase tracking-widest font-bold">{product.name.split(' // ')[0]}</h3>
                <p className="text-2xl md:text-4xl uppercase tracking-wider mt-4 opacity-80">{product.name.split(' // ')[1]}</p>
                <p className="text-konpaktOrange text-3xl md:text-5xl mt-8 font-light">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-32" /> {/* bottom breathing room */}
      </main>
    </div>
  )
}
