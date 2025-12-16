'use client'

import Image from 'next/image'
import { useState } from 'react'
import { notFound } from 'next/navigation'

// Hardcode product data + multiple views (.R1 .R2 etc array)
const productData: Record<string, {
  code: string
  name: string
  description: string
  price: number
  images: string[]  // array of /images/KP1.R1.jpeg, .R2, etc
  fabric: string
  sizing: string
}> = {
  ks1: {
    code: 'KS1',
    name: 'Alleyways Tokyo',
    description: 'Your detailed description here...',
    price: 30,
    images: ['/images/KS1.R1.jpeg', '/images/KS1.R2.jpeg'],  // add all .R*
    fabric: 'Fabric tech details...',
    sizing: 'Size chart text...',
  },
  // Add others...
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = productData[params.id]
  if (!product) notFound()

  const [mainImage, setMainImage] = useState(product.images[0])

  return (
    <div className="bg-white min-h-screen">
      {/* Same header as homepage */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300"> {/* copy from homepage */} </header>

      <main className="pt-24 px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-screen-2xl mx-auto">
        <div className="relative aspect-square md:aspect-[3/4]">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl uppercase tracking-widest font-bold">{product.code}</h1>
          <p className="text-2xl uppercase tracking-wide mt-2 opacity-80">{product.name}</p>
          <p className="text-3xl mt-8">${product.price}</p>

          <div className="mt-12">
            <select className="border border-black px-4 py-3 w-full uppercase tracking-wider">
              <option>XS</option> {/* sizes */}
            </select>
            <button className="mt-4 bg-black text-white px-8 py-4 w-full uppercase tracking-widest hover:bg-konpaktOrange transition">
              Buy Now
            </button>
          </div>

          <div className="mt-12 space-y-8 text-sm uppercase tracking-wide">
            <div>
              <h2 className="font-bold mb-4">Description</h2>
              <p>{product.description}</p>
            </div>
            <div>
              <h2 className="font-bold mb-4">Fabric Technology</h2>
              <p>{product.fabric}</p>
            </div>
            <div>
              <h2 className="font-bold mb-4">Sizing</h2>
              <p>{product.sizing}</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-4 gap-4">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setMainImage(img)} className="aspect-square relative overflow-hidden border border-gray-300">
                <Image src={img} alt={`View ${i+1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
