import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-sans text-2xl mb-4">AMBERRJEWELSS</h3>
            <p className="text-white/80 mb-4">
              Preserve your memories in beautiful resin jewelry and home decor pieces.
              Customized creations for your special moments.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/amberrjewelss" target="_blank" className="text-white hover:text-accent">
                Instagram
              </Link>
              <Link href="https://wa.me/916366009883" target="_blank" className="text-white hover:text-accent">
                WhatsApp
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-white/80 hover:text-accent">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans text-xl mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white/80">
              <li>📍 Karnataka, India</li>
              <li>
                <Link href="https://wa.me/916366009883" className="hover:text-accent">
                  WhatsApp: +91 6366009883
                </Link>
              </li>
              <li>
                <Link href="mailto:amberrjewelss@gmail.com" className="hover:text-accent">
                  amberrjewelss@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} AMBERRJEWELSS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 