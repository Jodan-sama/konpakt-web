'use client'

import Image from 'next/image'
import Link from 'next/link'

type Product = {
  id: string
  code: string
  image: string
}

const allProducts: Product[] = [
  { id: 'kp1', code: 'KP1', image: '/images/KP1.R1.jpeg' },
  { id: 'kp2', code: 'KP2', image: '/images/KP2.R1.jpeg' },
  { id: 'kp3', code: 'KP3', image: '/images/KP3.R1.jpeg' },
  { id: 'kd1', code: 'KD1', image: '/images/KD1.R1.jpeg' },
  { id: 'kd2', code: 'KD2', image: '/images/KD2.R1.jpeg' },
  { id: 'ks1', code: 'KS1', image: '/images/KS1.R1.jpeg' },
  { id: 'kb1', code: 'KB1', image: '/images/KB1.R1.jpeg' },
  // Add more as drops come
]

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
        <div className="max-w-screen-2xl mx-auto py-2 px-6 flex justify-between items-center uppercase tracking-widest text-xs">
          <Link href="/">
            <Image src="/logo.png" alt="KONPAKT" width={200} height={50} priority className="object-contain" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-konpaktOrange transition">Sort</Link>
            <Link href="#" className="hover:text-konpaktOrange transition">Img</Link>
            <Link href="#" className="hover:text-konpaktOrange transition">Txt</Link>
            <Link href="#" className="hover:text-konpaktOrange transition">Search</Link>
            <Link href="#" className="hover:text-konpaktOrange transition">Your Account</Link>
            <Link href="#" className="hover:text-konpaktOrange transition">Logout</Link>
            <button className="bg-black text-white px-4 py-1.5 hover:bg-konpaktOrange transition">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 px-4">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-2">
          {allProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group block">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.code}
                  fill
                  className="object-cover transition duration-500 group-hover:opacity-70"
                />
              </div>
              <p className="mt-4 text-center text-lg uppercase tracking-widest font-bold">
                {product.code}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
