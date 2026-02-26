import type { Metadata } from 'next'
import Image from 'next/image'
import CTASection from '../../components/CTASection'
import SectionTitle from '../../components/SectionTitle'
import PageHeader from '../../components/PageHeader'
import {
  WorkspacePremium,
  Speed,
  Handshake,
  TrendingUp
} from '@mui/icons-material'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about LUXURY HOTEL SUPPLIES TRADING FZC LLC, our mission, vision, and why luxury hotels choose us in the UAE.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Our Company"
        subtitle="A trusted procurement partner built specifically for premium hospitality operations and high-end facility teams across the UAE."
        bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Story Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-lux">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            
            <div className="lg:pr-8">
              <SectionTitle
                eyebrow="Our Story"
                title="Sourcing excellence since day one"
                subtitle="We entered the hospitality supply sector to solve a single problem: the friction between ordering high-quality items and getting them delivered reliably on time."
              />
              
              <div className="mt-8 space-y-6 text-base text-muted leading-relaxed">
                <p>
                  Today, LUXURY HOTEL SUPPLIES TRADING FZC LLC supports major hospitality groups with housekeeping products, premium bath and bed linen, luxury amenities, dispensers, targeted hygiene items, and essential facility equipment.
                </p>
                <p>
                  Hospitality teams run on immense detail and strict deadlines. We focus strictly on hotel-grade products that perform flawlessly in real-world operations to keep your replenishment cycles predictable and stress-free. Whether you are setting up a sprawling new property, outfitting a boutique resort, or standardizing supplies across multiple branded locations, we can actively assist with product recommendations, sustainable alternatives, and aggressive bulk pricing models.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] w-full rounded-[24px] overflow-hidden shadow-luxury">
                <Image 
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1200"
                  alt="Hotel operational excellence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 rounded-full border border-gold/20 animate-softFloat" />
              <div className="absolute -z-10 top-12 -left-8 w-24 h-24 rounded-full bg-gold/5 blur-xl" />
            </div>
            
          </div>
        </div>
      </section>

      {/* Mission Vision Split Section */}
      <section className="py-20 bg-ink relative overflow-hidden text-white border-y border-neutral-800">
        <div className="absolute inset-0 bg-lux-radial opacity-20 pointer-events-none mix-blend-screen" />
        <div className="absolute -z-10 bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="container-lux relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            <div className="p-10 md:p-14 rounded-[24px] bg-white/[0.03] border border-white/10 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10">
                <div className="h-16 w-16 mb-8 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center">
                  <TrendingUp className="text-gold" fontSize="large" />
                </div>
                <h2 className="font-heading text-3xl mb-4 font-semibold text-white">Our Mission</h2>
                <p className="text-lg text-gray-400 leading-relaxed font-light">
                  Provide premium international hotel supplies that effortlessly support operational excellence, reduce friction for facility teams, and ultimately elevate the final guest experience.
                </p>
              </div>
            </div>

            <div className="p-10 md:p-14 rounded-[24px] bg-white/[0.03] border border-white/10 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10">
                <div className="h-16 w-16 mb-8 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center">
                  <WorkspacePremium className="text-gold" fontSize="large" />
                </div>
                <h2 className="font-heading text-3xl mb-4 font-semibold text-white">Our Vision</h2>
                <p className="text-lg text-gray-400 leading-relaxed font-light">
                  Become the undisputed, most reliable hospitality supplies partner in the UAE through uncompromising product quality, unwavering transparency, and hyper-consistent logistics.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-gray-50 border-b border-borderGray">
        <div className="container-lux">
          <SectionTitle
            eyebrow="Core Values"
            title="What drives our operations"
            subtitle="Our business is built completely around modern hospitality timelines and strict procurement expectations."
            centered
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            {[
              { 
                t: 'Curated Quality', 
                d: 'We only source products strictly aligned with 5-star hotel operational standards.',
                i: WorkspacePremium 
              },
              { 
                t: 'Rapid Response', 
                d: 'Hospitality waits for no one. Expect lightning-fast quotes and crystal clear communication.',
                i: Speed 
              },
              { 
                t: 'Trusted Partnership', 
                d: 'We don’t just sell—we consult, mapping out bulk B2B replenishment strategies for aggressive growth.',
                i: Handshake 
              },
            ].map((v) => (
              <div key={v.t} className="card-lux p-8 text-center flex flex-col items-center group/card transition-all hover:border-gold/30 hover:shadow-luxuryHover">
                <div className="h-16 w-16 mb-6 rounded-full border border-gold/20 bg-gradient-to-br from-gold/5 target-gold/10 flex items-center justify-center transition-transform duration-500 group-hover/card:scale-110 group-hover/card:bg-gold/10">
                  <v.i className="text-gold transition-colors" fontSize="medium" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to elevate your supply chain?"
        subtitle="Share your master list and bulk quantities. Our procurement specialists will recommend premium options along with accurate pricing."
        primaryHref="/contact#contact-form"
        primaryLabel="Request a Quote"
        secondaryHref="/products"
        secondaryLabel="View Full Catalog"
      />
    </>
  )
}
