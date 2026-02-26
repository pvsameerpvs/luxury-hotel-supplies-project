import SectionTitle from '../SectionTitle'
import ServiceCard from '../ServiceCard'
import {
  CleaningServices,
  LocalHotel,
  HealthAndSafety,
  MedicalServices,
  Inventory,
  SupportAgent
} from '@mui/icons-material'
import Link from 'next/link'

export default function HomeServicesSection() {
  const services = [
    {
      title: "Housekeeping & Equipment",
      description: "Essential tools, trolleys, and chemicals to streamline daily room turnover and deep cleaning.",
      href: "/services",
      Icon: CleaningServices,
    },
    {
      title: "Linen & Bath Essentials",
      description: "Reliable linen sourcing for ultimate guest comfort and efficient housekeeping workflow.",
      href: "/services",
      Icon: LocalHotel,
    },
    {
      title: "Safety & Hygiene Protocols",
      description: "Signage, touchless dispensers, robust consumables and hygiene-ready smart supplies.",
      href: "/services",
      Icon: HealthAndSafety,
    },
    {
      title: "Facility Consumables",
      description: "General hotel products and bulk supplies for smooth, uninterrupted hospitality operations.",
      href: "/services",
      Icon: Inventory,
    },
    {
      title: "24/7 Medical Support",
      description: "On-demand doctor or nurse consultation services to support staff and guest needs.",
      href: "/services",
      Icon: MedicalServices,
    },
    {
      title: "Custom Sourcing",
      description: "Dedicated procurement support for high-volume custom branded amenities and guest items.",
      href: "/services",
      Icon: SupportAgent,
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Premium Background Accents */}
      <div className="absolute top-0 right-0 w-full h-full bg-lux-radial opacity-40 pointer-events-none" />
      <div className="absolute -z-10 bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute -z-10 top-20 left-10 w-[400px] h-[400px] bg-ink/5 rounded-full blur-3xl" />

      <div className="container-lux relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            eyebrow="Our Services"
            title="Support that helps teams deliver"
            subtitle="Beyond products, we provide sourcing support, tailored recommendations, and consistent replenishment structured around hotel operations."
            className="mb-0 max-w-2xl"
          />
          <Link href="/services" className="btn-ghost whitespace-nowrap hidden md:inline-flex mb-2">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-luxuryHover bg-white rounded-luxury"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                href={service.href}
                Icon={service.Icon}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <Link href="/services" className="btn-ghost w-full sm:w-auto text-center px-10">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
