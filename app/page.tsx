'use client'

import Image from 'next/image'
import Link from 'next/link'

type Product = {
  id: string
  code: string  // e.g., 'KP1'
  name: string  // e.g., 'Tenugui'
  price: number
  image: string
}

const allProducts: Product[] = [
  { id: 'kp1', code: 'KP1', name: 'Tenugui', price: 22, image: '/images/KP1.R1.jpeg' },
  { id: 'kp2', code: 'KP2', name: 'Toothbrush', price: 122, image: '/images/KP2.R1.jpeg' },
  { id: 'kp3', code: 'KP3', name: 'Chopstick Spoon', price: 122, image: '/images/KP3.R1.jpeg' },
  { id: 'kd1', code: 'KD1', name: 'Cups', price: 54, image: '/images/KD1.R1.jpeg' },
  { id: 'kd2', code: 'KD2', name: 'Bowls', price: 65, image: '/images/KD2.R1.jpeg' },
  { id: 'ks1', code: 'KS1', name: 'Alleyways Tokyo', price: 30, image: '/images/KS1.R1.jpeg' },
  { id: 'kb1', code: 'KB1', name: 'Studio', price: 5, image: '/images/KB1.R1.jpeg' },
  // Add more as drops come
].reverse()  // oldest first or adjust for newest – Acronym mixes

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
        <div className="max-w-screen-2xl mx-auto py-3 px-6 flex justify-between items-center uppercase tracking-widest text-xs">
          <Link href="/">
            <Image src="/logo.png" alt="KONPAKT" width={240} height={60} priority className="object-contain" />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-konpaktOrange transition">Sort</Link>
            <Link href="#" className="hover:text-konpaktOrange transition">Img</Link>
            <Link href="#" className="hover:text-konpaktOrange transition">Txt</Link>
            <Link href="#" className="hover:text-konpaktOrange transition">Search</Link>
            <Link href="#" className="hover:text-konpaktOrange transition">Your Account</Link>
            <Link href="#" className="hover:text-konpaktOrange transition">Logout</Link>
            <button className="bg-black text-white px-5 py-2 text-xs hover:bg-konpaktOrange transition">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20 px-2 md:px-4">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 md:gap-3">
          {allProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group block">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-70"
                />
              </div>
              <p className="mt-3 text-center text-xs uppercase tracking-widest font-medium">
                {product.code}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
