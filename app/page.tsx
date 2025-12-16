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

const categories = ['Product', 'Design', 'Storyware', 'Biosync']

export default function Home() {
  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null)
  const [sortOpen, setSortOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredProducts = activeCategory
    ? allProducts.filter(p => p.category === activeCategory)
    : allProducts

  return (
    <div className="bg-[#fefbda] min-h-screen text-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fefbda]">
        <div className="max-w-screen-2xl mx-auto py-1.5 px-8 flex justify-between items-center uppercase tracking-widest text-xs">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image src="/logo.png" alt="KONPAKT" width={160} height={40} priority className="object-contain" />
            </Link>
            {!hoveredProduct && (
              <div className="flex items-center gap-6">
                {sortOpen ? (
                  categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat === activeCategory ? null : cat)
                        setSortOpen(false)
                      }}
                      className="hover:text-[#FF6200] transition"
                    >
                      {cat}
                    </button>
                  ))
                ) : (
                  <button onClick={() => setSortOpen(true)} className="hover:text-[#FF6200] transition">
                    Sort
                  </button>
                )}
              </div>
            )}
            {hoveredProduct && (
              <div className="flex items-center gap-6 text-xs font-normal">
                <p className="text-sm">{hoveredProduct.code}</p>
                <p className="opacity-80">{hoveredProduct.name}</p>
                <p>{hoveredProduct.category}</p>
                <p>${hoveredProduct.price}</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#FF6200] transition">Your Account</Link>
            <Link href="#" className="hover:text-[#FF6200] transition">Logout</Link>
            <button className="bg-black text-white px-4 py-1 hover:bg-[#FF6200] transition">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group"
                onMouseEnter={() => setHoveredProduct(product)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link href={`/products/${product.id}`} className="block">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.code}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-left text-xs uppercase tracking-widest font-normal group-hover:underline">
                    {product.code}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
