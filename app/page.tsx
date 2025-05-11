"use client";

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d"
            alt="Luxury Resin Jewelry"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        
        <div className="relative container-custom h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            className="font-sans text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-6 font-bold tracking-widest text-accent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            AMBERRJEWELSS
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl font-body text-white/90 px-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Preserve your memories in exquisite resin jewelry and home decor pieces
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link href="/products" className="luxury-button w-full sm:w-auto text-center">
              Products
            </Link>
            <Link href="/contact" className="luxury-button w-full sm:w-auto text-center">
              Contact Us
            </Link>
            <Link href="https://wa.me/916366009883" target="_blank" className="luxury-button w-full sm:w-auto text-center">
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <h2 className="section-title">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={400}
                  height={500}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-2xl font-sans mb-2">{category.title}</h3>
                    <p className="text-white/90 mb-4">{category.description}</p>
                    <Link href="/products" className="text-white border-b border-white hover:border-accent">
                      Discover More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const categories = [
  {
    title: "Resin Jewelry",
    description: "Unique pieces that capture your precious moments",
    image: "/Jhumkas.jpg",
    link: "/products/jewelry"
  },
  {
    title: "Home Decor",
    description: "Elegant resin frames and decorative pieces",
    image: "/Preservations.jpg",
    link: "/products/home-decor"
  },
  {
    title: "Custom Bouquets",
    description: "Beautiful satin bouquets for special occasions",
    image: "/Bouquet.jpg",
    link: "/products/bouquets"
  }
] 