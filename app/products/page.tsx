"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const products = [
  { name: 'Jhumkas', image: '/Jhumkas.jpg' },
  { name: 'Preservations', image: '/Preservations.jpg' },
  { name: 'Bouquet', image: '/Bouquet.jpg' },
  { name: 'Wedding Favours', image: '/Wedding Favours.jpg' },
  { name: 'Wedding Invitations', image: '/Wedding Invitations.jpg' },
  { name: 'Bridal Quran Set', image: '/Bridal Quran Set.jpg' },
  { name: 'Customize Calendar and Frames', image: '/Customize Calendar and Frames.jpg' },
  { name: 'Key Chains', image: '/Key Chains.jpg' },
  { name: 'Pendants', image: '/Pendants.jpg' },
  { name: 'Bookmarks', image: '/Bookmarks.jpg' },
  { name: 'Anklet Payal', image: '/Anklet Payal.jpg' },
  { name: 'clock', image: '/clock.jpg' },
  { name: 'Earrings', image: '/Earrings.jpg' },
  { name: 'Rings', image: '/Rings.jpg' },
  { name: 'Resin Photo Frames', image: '/Resin Photo Frames.png' },
  { name: 'Name Stand', image: '/Name Stand.jpg' },
]

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen pt-20 bg-background">
      <div className="container-custom py-16">
        <h1 className="section-title">Our Collections</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.name} className="group relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={500}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="w-full">
                  <h3 className="text-white text-2xl font-sans mb-2 text-center">{product.name}</h3>
                  <Link
                    href={`https://wa.me/916366009883?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}%20from%20AMBERRJEWELSS!`}
                    target="_blank"
                    className="luxury-button bg-accent text-white hover:bg-primary mt-2 w-full block text-center"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 