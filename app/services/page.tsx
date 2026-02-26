import type { Metadata } from 'next'
import SectionTitle from '../../components/SectionTitle'
import ServiceCard from '../../components/ServiceCard'
import CTASection from '../../components/CTASection'
import PageHeader from '../../components/PageHeader'
import { 
  CleaningServices, 
  LocalHotel, 
  HealthAndSafety, 
  MedicalServices, 
  Inventory,
  DesignServices,
  LocalShipping
} from '@mui/icons-material'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Hospitality services including housekeeping equipment, linen supply, general hotel products, safety & hygiene, custom-branded items, cleaning chemicals, and 24/7 medical consultation.',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Housekeeping Equipment',
      description: 'Advanced tools, ergonomic trolleys, and high-performance equipment designed to improve daily cleaning efficiency and drastically reduce room turnover times without compromising quality.',
      Icon: CleaningServices,
    },
    {
      title: 'Bath & Bed Linen',
      description: 'Dedicated sourcing support for luxurious, high thread-count linen that aligns perfectly with elite 5-star hotel standards, ensuring maximum guest comfort and laundering longevity.',
      Icon: LocalHotel,
    },
    {
      title: 'General Hotel Products',
      description: 'A comprehensive catalog of essential consumables, guest-room accessories, and reliable facility products necessary to maintain smooth, uninterrupted daily hospitality operations.',
      Icon: Inventory,
    },
    {
      title: 'Safety & Hygiene Protocols',
      description: 'Premium stainless steel signage, touchless dispensers, robust hygiene items, and compliance-ready essentials that keep your property perfectly sanitized.',
      Icon: HealthAndSafety,
    },
    {
      title: 'Custom-Branded Amenities',
      description: 'Bespoke procurement of guest-facing items and luxury bathroom amenities crafted specifically with your hotel\'s logo and elegant brand presentation in mind.',
      Icon: DesignServices,
    },
    {
      title: 'Cleaning Chemicals & Solutions',
      description: 'Reliable bulk supply of commercial-grade cleaning chemicals, specialized floor solutions, and automated replenishment support for your maintenance team.',
      Icon: LocalShipping,
    },
    {
      title: '24/7 Medical Consultation',
      description: 'Exclusive on-demand access to certified doctors or nursing consultation services to confidently support the rapid health needs of your hospitality staff and VIP guests.',
      Icon: MedicalServices,
    },
  ]

  return (
    <>
      <PageHeader 
        title="Services Built for Hoteliers"
        subtitle="Beyond simply supplying products, we support procurement directors with deep sourcing recommendations, luxury alternatives, and dependable replenishment pipelines."
        bgImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section-padding bg-gray-50 border-b border-borderGray relative overflow-hidden">
        {/* Soft luxury background elements */}
        <div className="absolute -z-10 top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute -z-10 bottom-20 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[80px]" />
        
        <div className="container-lux relative z-10">
          <SectionTitle
            eyebrow="Our Capabilities"
            title="What we provide"
            subtitle="Explore our comprehensive support structures for housekeeping, guest rooms, washrooms, and high-traffic facility operations."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-luxuryHover bg-white rounded-luxury"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  Icon={service.Icon}
                  href="/contact#contact-form"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a bespoke recommendation?"
        subtitle="Tell us your exact property type and bulk quantities. Our specialists will respond urgently with suitable luxury options and accurate B2B pricing."
        primaryHref="/contact#contact-form"
        primaryLabel="Request a Quote"
        secondaryHref="/products"
        secondaryLabel="View Catalog"
      />
    </>
  )
}
