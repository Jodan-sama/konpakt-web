'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type Product = {
  id: string
  code: string
  name: string
  price: number
  category: string
  image: string
}

const allProducts: Product[] = [
  { id: 'kp1', code: 'KP1', name: 'Tenugui', price: 22, category: 'Product', image: '/images/KP1.R1.jpeg' },
  { id: 'kp2', code: 'KP2', name: 'Toothbrush', price: 122, category: 'Product', image: '/images/KP2.R1.jpeg' },
  { id: 'kp3', code: 'KP3', name: 'Chopstick Spoon', price: 122, category: 'Product', image: '/images/KP3.R1.jpeg' },
  { id: 'kd1', code: 'KD1', name: 'Cups', price: 54, category: 'Design', image: '/images/KD1.R1.jpeg' },
  { id: 'kd2', code: 'KD2', name: 'Bowls', price: 65, category: 'Design', image: '/images/KD2.R1.jpeg' },
  { id: 'ks1', code: 'KS1', name: 'Alleyways Tokyo', price: 30, category: 'Storyware', image: '/images/KS1.R1.jpeg' },
  { id: 'kb1', code: 'KB1', name: 'Studio', price: 5, category: 'Biosync', image: '/images/KB1.R1.jpeg' },
]

export default function Home() {
  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null)

  return (
    <div className="bg-white min-h-screen text-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-screen-2xl mx-auto py-1.5 px-8 flex justify-between items-center uppercase tracking-widest text-xs">
          <Link href="/">
            <Image src="/logo.png" alt="KONPAKT" width={160} height={40} priority className="object-contain" />
          </Link>
          <div className="flex items-center">
            {hoveredProduct ? (
              <div className="flex items-center gap-8">
                <p className="text-2xl font-bold">{hoveredProduct.code}</p>
                <p className="text-sm opacity-80">{hoveredProduct.name}</p>
                <p className="text-sm">{hoveredProduct.category}</p>
                <p className="text-sm">${hoveredProduct.price}</p>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <Link href="#" className="hover:text-konpaktOrange transition">Sort</Link>
                <Link href="#" className="hover:text-konpaktOrange transition">Img</Link>
                <Link href="#" className="hover:text-konpaktOrange transition">Txt</Link>
                <Link href="#" className="hover:text-konpaktOrange transition">Search</Link>
                <Link href="#" className="hover:text-konpaktOrange transition">Your Account</Link>
                <Link href="#" className="hover:text-konpaktOrange transition">Logout</Link>
                <button className="bg-black text-white px-4 py-1 hover:bg-konpaktOrange transition">
                  Cart (0)
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="pt-14">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {allProducts.map((product) => (
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
                  <p className="mt-3 text-left text-xs uppercase tracking-widest font-light group-hover:underline">
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
