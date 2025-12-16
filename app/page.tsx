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

const categories = ['ALL', 'PRODUCT', 'DESIGN', 'STORYWARE', 'BIOSYNC']

export default function Home() {
  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null)
  const [sortOpen, setSortOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [cartOpen, setCartOpen] = useState(false)

  const filteredProducts = activeCategory && activeCategory !== 'ALL'
    ? allProducts.filter(p => p.category.toUpperCase() === activeCategory)
    : allProducts

  return (
    <div className="bg-[#fefbda] min-h-screen text-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fefbda]">
        <div className="max-w-screen-2xl mx-auto py-1 px-4 md:py-1.5 md:px-8 flex justify-between items-center uppercase tracking-widest text-xs">
          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/">
              <Image src="/logo.png" alt="KONPAKT" width={120} height={30} md:width={160} md:height={40} priority className="object-contain" />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {sortOpen ? (
                categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat === 'ALL' ? null : cat)
                      setSortOpen(false)
                    }}
                    className="hover:text-[#FF6200] transition"
                  >
                    {cat}
                  </button>
                ))
              ) : (
                <button onClick={() => setSortOpen(true)} className="hover:text-[#FF6200] transition">
                  SORT
                </button>
              )}
            </div>
            {hoveredProduct && (
              <div className="flex items-center gap-6 text-xs font-normal">
                <p className="text-sm">{hoveredProduct.code}</p>
                <p className="opacity-80">{hoveredProduct.name}</p>
                <p>{hoveredProduct.category}</p>
                <p>${hoveredProduct.price}</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="#" className="hover:text-[#FF6200] transition">LOGIN</Link>
            <button onClick={() => setCartOpen(!cartOpen)} className="bg-black text-white px-4 py-1 hover:bg-[#95ad46] transition">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      {/* Cart Sidebar Small */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute inset-0 bg-black/50 pointer-events-auto" onClick={() => setCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-black text-white pointer-events-auto flex flex-col">
            <div className="p-6 flex justify-between items-center uppercase tracking-widest text-xs border-b border-white/20">
              <p>YOUR ACCOUNT 0 ITEMS TOTAL</p>
              <button onClick={() => setCartOpen(false)} className="hover:text-[#95ad46] transition">
                CLOSE CART
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center uppercase tracking-widest text-center px-6">
              <p>Your cart is empty</p>
            </div>
            <div className="p-6 flex gap-4 uppercase tracking-widest text-xs">
              <button className="flex-1 bg-white text-black py-4 hover:bg-[#95ad46] hover:text-white transition">
                VIEW CART
              </button>
              <button className="flex-1 bg-white text-black py-4 hover:bg-[#95ad46] hover:text-white transition">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="pt-16 md:pt-20">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4">
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
