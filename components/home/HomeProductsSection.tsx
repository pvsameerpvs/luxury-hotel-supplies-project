import Link from 'next/link'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'

export default function HomeProductsSection() {
  const categories = [
    {
      title: "Housekeeping",
      description: "Mops, trolleys, safety signs and brushes for daily operations.",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1200",
      href: "/products#housekeeping",
      colSpan: "md:col-span-2",
    },
    {
      title: "Dispensers",
      description: "Premium tissues and refillable bottles.",
      image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&q=80&w=800",
      href: "/products#tissues",
      colSpan: "md:col-span-1",
    },
    {
      title: "Linen",
      description: "Bath & bed linen, and beautifully crafted amenities.",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
      href: "/products#linen",
      colSpan: "md:col-span-1",
    },
    {
      title: "Waste Solutions",
      description: "Elegant bins, recycle solutions and ashtrays.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
      href: "/products#waste",
      colSpan: "md:col-span-2",
    }
  ]

  return (
    <section className="section-padding bg-gray-50 border-y border-borderGray">
      <div className="container-lux">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            eyebrow="Products"
            title="Premium Collections"
            subtitle="Explore our most sought-after categories designed for daily operations, guest rooms, and facility care."
            className="mb-0" // override the default mb-10 in SectionTitle
          />
          <Link href="/products" className="btn-gold whitespace-nowrap hidden md:inline-flex mb-2">
            View Full Catalog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, idx) => (
            <Link 
              key={idx} 
              href={category.href}
              className={`group relative h-[320px] md:h-[400px] overflow-hidden rounded-[24px] shadow-sm hover:shadow-luxuryHover transition-all duration-500 ${category.colSpan}`}
            >
              <Image 
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                <h3 className="font-heading text-2xl md:text-3xl text-white font-semibold mb-2">{category.title}</h3>
                <p className="text-white/80 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-gold font-medium text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  Explore Collection 
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 md:hidden flex justify-center">
          <Link href="/products" className="btn-gold w-full sm:w-auto text-center px-10">
            View Full Catalog
          </Link>
        </div>
        
      </div>
    </section>
  )
}
