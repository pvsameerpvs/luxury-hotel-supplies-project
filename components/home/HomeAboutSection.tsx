import Link from 'next/link'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'

export default function HomeAboutSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-lux">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          <div className="relative">
            <div className="relative h-[400px] sm:h-[500px] w-full rounded-[24px] overflow-hidden shadow-luxury">
              <Image 
                src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury Hotel Lobby"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
               <div className="bg-white/90 backdrop-blur rounded-luxury p-5 border border-white/20 shadow-xl max-w-sm">
                  <p className="font-heading text-xl text-gold font-semibold mb-1">10+ Years</p>
                  <p className="text-sm text-muted">Supporting the UAE hospitality sector with premium quality supplies.</p>
               </div>
              </div>
            </div>
            
            {/* Decorative Gold Elements */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 rounded-full border border-gold/20 animate-softFloat" />
            <div className="absolute -z-10 top-12 -right-8 w-24 h-24 rounded-full bg-gold/5 blur-2xl" />
          </div>

          <div className="lg:pl-8">
            <SectionTitle
              eyebrow="Who We Are"
              title="A supplier built for highest hospitality standards"
              subtitle="We support premium hotels, serviced apartments, and facility teams with essential supplies that keep operations smooth, incredibly clean, and beautifully guest-ready at all times."
            />
            
            <div className="mt-8 space-y-6 text-base text-muted leading-relaxed">
              <p>
                From advanced housekeeping tools and premium linen to elegant dispensers, bespoke amenities, targeted hygiene protocols and waste solutions, we help you standardize elite quality across properties.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Uncompromising sourcing for hotel-grade longevity.',
                  'Clear communication and responsive regional support.',
                  'Dependable UAE delivery timelines and bulk readiness.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-borderGray flex flex-wrap gap-4">
                <Link href="/about" className="btn-gold hidden sm:inline-flex px-8">
                  Learn More About Us
                </Link>
                <Link href="/contact#contact-form" className="btn-ghost px-8">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
