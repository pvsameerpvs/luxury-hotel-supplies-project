import type { Metadata } from 'next'
import CTASection from '../../components/CTASection'
import ProductCard from '../../components/ProductCard'
import SectionTitle from '../../components/SectionTitle'
import PageHeader from '../../components/PageHeader'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore housekeeping products, tissues & dispensers, linen & amenities, and waste solutions supplied across the UAE.',
}

type ProductItem = {
  title: string
  image?: string
}

type ProductCategory = {
  id: string
  title: string
  subtitle: string
  items: ProductItem[]
}

const CATEGORIES: ProductCategory[] = [
  {
    id: 'housekeeping',
    title: 'Housekeeping Products',
    subtitle: 'Daily-use equipment and tools to keep rooms and corridors guest-ready.',
    items: [
      { title: 'Floor Cleaning Wiper', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600' },
      { title: 'Cotton Twist Mop' },
      { title: 'Mop Bucket Trolley' },
      { title: 'Cleaning Trolley', image: 'https://images.unsplash.com/photo-1628177142898-93e46e46248d?auto=format&fit=crop&q=80&w=600' },
      { title: 'Housekeeping Trolley' },
      { title: 'Cleaning Safety Signs' },
      { title: 'Dustpan with Brush' },
      { title: 'Floor Cleaning Brush' },
      { title: 'Toilet Brush' },
    ],
  },
  {
    id: 'tissues',
    title: 'Tissues & Dispensers',
    subtitle: 'Dispensing solutions for washrooms and guest areas.',
    items: [
      { title: 'Tissues', image: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&q=80&w=600' },
      { title: 'Interfold Dispenser' },
      { title: 'Tissue Dispenser' },
      { title: 'Refillable Shampoo Bottle', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600' },
    ],
  },
  {
    id: 'linen',
    title: 'Linen & Amenities',
    subtitle: 'Comfort-focused essentials for guest rooms and bathrooms.',
    items: [
      { title: 'Linen (Bath & Bed)', image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=600' },
      { title: 'Amenities', image: 'https://images.unsplash.com/photo-1628177142898-93e46e46248d?auto=format&fit=crop&q=80&w=600' },
      { title: 'Dishwashing Cleaning Items' },
      { title: 'Cleaning Items' },
      { title: 'Bathroom Cleaning Items' },
    ],
  },
  {
    id: 'waste',
    title: 'Waste & Ashtray Solutions',
    subtitle: 'Bins, ashtrays, and recycling solutions for facilities.',
    items: [
      { title: 'OUD Ashtray Bin', image: 'https://images.unsplash.com/photo-1530985559881-df96c6fa5e92?auto=format&fit=crop&q=80&w=600' },
      { title: 'Steel Ashtray Bin' },
      { title: 'Steel Pedal Dustbin', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600' },
      { title: 'Plastic Pedal Dustbin' },
      { title: 'Recycle Bin' },
      { title: 'Garbage Waste Dustbin' },
    ],
  },
]

export default function ProductsPage() {
  return (
    <>
      <PageHeader 
        title="Our Curated Product Catalog"
        subtitle="Explore our comprehensive supply of housekeeping essentials, premium dispensers, bespoke linen, luxurious amenities, and facility waste solutions built for modern hospitality."
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000"
      />

      {CATEGORIES.map((cat, i) => (
        <section key={cat.id} className={`section-padding ${i % 2 !== 0 ? 'bg-gray-50 border-y border-borderGray' : ''}`} id={cat.id}>
          <div className="container-lux">
            <SectionTitle eyebrow="Category" title={cat.title} subtitle={cat.subtitle} />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
              {cat.items.map((item) => (
                <ProductCard key={item.title} title={item.title} badge={cat.title} image={item.image} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Want pricing for a bulk order?"
        subtitle="Send your list and quantities. We will respond with a quote and lead time."
        primaryHref="/contact#contact-form"
        primaryLabel="Request Quote"
        secondaryHref="/services"
        secondaryLabel="View Services"
      />
    </>
  )
}
