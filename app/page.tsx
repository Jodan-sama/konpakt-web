'use client'

import Image from 'next/image'
import Link from 'next/link'

type Product = {
  id: string
  name: string  // "KP1 // Tenugui" format – split for bold code
  price: number
  category: string
  releaseDate: string
  image: string  // .R1 for grid
}

const allProducts: Product[] = [
  // Your drops – newest first
  {
    id: 'ks1',
    name: 'KS1 // Alleyways Tokyo',
    price: 30,
    category: 'Storyware',
    releaseDate: '2026-01-15',
    image: '/images/KS1.R1.jpeg',
  },
  // Add all others same as before...
].sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300">
        <div className="max-w-screen-2xl mx-auto py-4 px-6 flex justify-between items-center uppercase tracking-wider text-xs">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="KONPAKT"
              width={280}
              height={70}
              priority
              className="object-contain"
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-konpaktOrange transition">Your Account</Link>
            <Link href="#" className="hover:text-konpaktOrange transition">Logout</Link>
            <button className="bg-black text-white px-6 py-2 hover:bg-konpaktOrange transition">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-3 md:gap-4 lg:gap-5">
          {allProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group block">
              <div className="aspect-square relative overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-black/10 transition" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm md:text-base uppercase tracking-widest font-bold">
                  {product.name.split(' // ')[0]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
