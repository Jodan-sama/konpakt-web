'use client'

import Image from 'next/image'
import { useState } from 'react'

type Product = {
  id: string
  name: string
  price: number
  category: string
  releaseDate: string
  image: string
}

const allProducts: Product[] = [
  // Your drops — newest first, code // name format for bold split
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
  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto py-4 px-8 flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="KONPAKT"
            width={300}
            height={80}
            priority
            className="object-contain"
          />
          <div className="flex items-center gap-8 uppercase tracking-wider text-sm">
            <a href="#" className="hover:text-konpaktOrange transition">Your Account</a>
            <a href="#" className="hover:text-konpaktOrange transition">Logout</a>
            <button className="bg-black text-white px-6 py-3 hover:bg-konpaktOrange transition">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      <main className="pt-32 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6 lg:gap-8">
          {allProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-black/20 transition" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg md:text-xl uppercase tracking-widest font-bold">
                  {product.name.split(' // ')[0]}
                </h3>
                {/* Name smaller/opacity if needed, or hide for pure code feel */}
                <p className="text-sm uppercase tracking-wide opacity-70 mt-1">
                  {product.name.split(' // ')[1]}
                </p>
                {/* Price orange on hover/detail later – hidden on grid for Acronym purity */}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
