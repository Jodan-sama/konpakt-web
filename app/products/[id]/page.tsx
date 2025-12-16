'use client'

import Image from 'next/image'
import { useState } from 'react'
import { notFound } from 'next/navigation'

const products: Record<string, any> = {
  ks1: {
    code: 'KS1',
    name: 'Alleyways Tokyo',
    price: 30,
    images: ['/images/KS1.R1.jpeg', '/images/KS1.R2.jpeg'],
    description: 'Detailed description...',
    fabric: 'Fabric technology...',
    sizing: 'Sizing chart...',
  },
  // Add all others with .R* arrays
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id]
  if (!product) notFound()

  const [mainImage, setMainImage] = useState(product.images[0])

  return (
    <div className="bg-white min-h-screen">
      {/* Copy header from homepage */}

      <main className="pt-20 px-6 md:px-16 lg:px-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative aspect-square lg:aspect-[3/4]">
            <Image src={mainImage} alt={product.name} fill className="object-cover" />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-5xl uppercase tracking-widest font-bold">{product.code}</h1>
              <p className="text-3xl uppercase tracking-wide mt-2 opacity-80">{product.name}</p>
              <p className="text-4xl mt-6">${product.price}</p>
            </div>

            <div>
              <select className="border border-black px-6 py-4 w-full uppercase tracking-widest text-sm">
                <option>Size</option>
              </select>
              <button className="mt-4 bg-black text-white px-8 py-5 w-full uppercase tracking-widest hover:bg-konpaktOrange transition">
                Buy Now
              </button>
            </div>

            <div className="space-y-8 text-sm uppercase tracking-wide">
              <div>
                <h2 className="font-bold mb-2">Description</h2>
                <p>{product.description}</p>
              </div>
              <div>
                <h2 className="font-bold mb-2">Fabric Technology</h2>
                <p>{product.fabric}</p>
              </div>
              <div>
                <h2 className="font-bold mb-2">Sizing</h2>
                <p>{product.sizing}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-4 md:grid-cols-6 gap-4">
          {product.images.map((img: string, i: number) => (
            <button key={i} onClick={() => setMainImage(img)} className="aspect-square relative overflow-hidden border border-black/20">
              <Image src={img} alt={`View ${i+1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
