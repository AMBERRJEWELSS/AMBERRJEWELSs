import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container-custom py-16">
        <h1 className="section-title">About AMBERRJEWELSS</h1>

        {/* Hero Section */}
        <div className="relative h-[400px] mb-16 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d"
            alt="AMBERRJEWELSS Workshop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-sans mb-4">Crafting Memories in Resin</h2>
              <p className="text-xl max-w-2xl mx-auto">
                Preserving your precious moments in beautiful, timeless pieces
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-sans text-secondary mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              AMBERRJEWELSS was born from a passion for creating beautiful, meaningful pieces
              that capture life's precious moments. Founded by Sakeena, our brand specializes
              in crafting exquisite resin jewelry, home decor, and customized bouquets that
              tell your unique story.
            </p>
            <p className="text-gray-600">
              Each piece we create is a labor of love, carefully designed and crafted to
              preserve your memories in a beautiful, lasting form. From delicate resin
              jewelry to elegant home decor pieces, we infuse every creation with attention
              to detail and artistic excellence.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d"
              alt="Crafting Process"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-sans text-secondary mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-sans text-secondary mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-3xl font-sans text-secondary mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-sans text-secondary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

const values = [
  {
    title: "Quality Craftsmanship",
    description: "We take pride in creating pieces of exceptional quality, using the finest materials and techniques.",
    icon: (
      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Personal Touch",
    description: "Every piece we create is unique, reflecting the personal story and style of our customers.",
    icon: (
      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    description: "We are committed to ensuring our customers are delighted with their purchases and experience.",
    icon: (
      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
]

const services = [
  {
    title: "Resin Jewelry",
    description: "Create beautiful, lasting pieces that capture your precious memories.",
    features: [
      "Custom designs",
      "High-quality materials",
      "Durable and long-lasting",
      "Unique pieces for every occasion"
    ],
  },
  {
    title: "Home Decor & Bouquets",
    description: "Transform your space with elegant resin frames and beautiful bouquets.",
    features: [
      "Custom resin frames",
      "Satin bouquets",
      "Home decor pieces",
      "Personalized designs"
    ],
  },
] 