import Link from 'next/link'
import Image from 'next/image'
import { Email, LocationOn, Phone } from '@mui/icons-material'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-neutral-800 relative overflow-hidden">
      {/* Subtle luxury background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-lux-radial opacity-10 pointer-events-none" />

      <div className="container-lux pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link href="/" className="inline-block group mb-6">
              <div className="bg-white/5 rounded-xl border border-white/10 p-3 backdrop-blur-sm group-hover:bg-white/10 transition-colors inline-flex items-center">
                <Image 
                  src="/logo-white.png" 
                  alt="Luxury Hotel Supplies Logo" 
                  width={200}
                  height={65}
                  className="object-contain filter brightness-110"
                />
              </div>
            </Link>
            
            <p className="max-w-md text-base leading-relaxed text-gray-400 mb-8">
              Premium hotel and housekeeping supplies across the UAE. We provide a curated catalog built exclusively for elite hospitality operations and facility management teams.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-gold px-6">
                Explore Catalog
              </Link>
              <Link href="/contact#contact-form" className="btn-ghost px-6 bg-white/5 hover:bg-white/10 border-white/10 text-white">
                Request Quote
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-5 lg:col-span-3 lg:pl-8">
            <h3 className="font-heading text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-gold" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Product Catalog', href: '/products' },
                { name: 'Our Services', href: '/services' },
                { name: 'Contact & Quotes', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-gold transition-colors inline-block group"
                  >
                    {link.name}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-gold mt-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-7 lg:col-span-4">
            <h3 className="font-heading text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-gold" />
              Contact Us
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 group-hover:border-gold/30 transition-colors">
                  <LocationOn className="text-gold" fontSize="small" />
                </div>
                <span className="text-gray-400 leading-relaxed pt-2">
                  CWS-IV-155750, 26th Floor, Amber Gem Tower, Ajman Free Zone, Ajman, UAE
                </span>
              </li>
              
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 group-hover:border-gold/30 transition-colors">
                  <Phone className="text-gold" fontSize="small" />
                </div>
                <div className="flex flex-col gap-1 text-gray-400">
                  <a className="hover:text-white transition-colors" href="tel:043258275">043258275</a>
                  <a className="hover:text-white transition-colors" href="tel:+971568452604">+971 56 845 2604</a>
                </div>
              </li>
              
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 group-hover:border-gold/30 transition-colors">
                  <Email className="text-gold" fontSize="small" />
                </div>
                <a href="mailto:luxuryhotelsupplies007@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">
                  luxuryhotelsupplies007@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

     
      </div>
    </footer>
  )
}
