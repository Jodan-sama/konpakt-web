'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type Product = {
  id: string
  code: string
  name: string
  category: string
  price: number
  image: string
}

const allProducts: Product[] = [
  { id: 'kp1', code: 'KP1', name: 'Tenugui', category: 'Product', price: 22, image: '/images/KP1.R1.jpeg' },
  { id: 'kp2', code: 'KP2', name: 'Toothbrush', category: 'Product', price: 122, image: '/images/KP2.R1.jpeg' },
  { id: 'kp3', code: 'KP3', name: 'Chopstick Spoon', category: 'Product', price: 122, image: '/images/KP3.R1.jpeg' },
  { id: 'kd1', code: 'KD1', name: 'Cups', category: 'Design', price: 54, image: '/images/KD1.R1.jpeg' },
  { id: 'kd2', code: 'KD2', name: 'Bowls', category: 'Design', price: 65, image: '/images/KD2.R1.jpeg' },
  { id: 'ks1', code: 'KS1', name: 'Alleyways Tokyo', category: 'Storyware', price: 30, image: '/images/KS1.R1.jpeg' },
  { id: 'kb1', code: 'KB1', name: 'Studio', category: 'Biosync', price: 5, image: '/images/KB1.R1.jpeg' },
]

export default function Home() {
  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null)

  return (
    <div className="bg-[#fefbda] min-h-screen text-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fefbda]">
        <div className="max-w-screen-2xl mx-auto py-1.5 px-8 flex justify-between items-center uppercase tracking-widest text-xs">
          <Link href="/">
            <Image src="/logo.png" alt="KONPAKT" width={160} height={40} priority className="object-contain" />
          </Link>
          <div className="flex items-center gap-6">
            {hoveredProduct ? (
              <div className="flex items-center gap-6">
                <p className="text-sm font-medium">{hoveredProduct.code}</p>
                <p className="text-xs opacity-80">{hoveredProduct.name}</p>
                <p className="text-xs">{hoveredProduct.category}</p>
                <p className="text-xs">${hoveredProduct.price}</p>
              </
