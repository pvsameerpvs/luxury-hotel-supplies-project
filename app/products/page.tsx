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
      { title: 'Floor Cleaning Wiper', image: '/FloorCleaningWiper.png' },
      { title: 'Cotton Twist Mop', image: '/CottonTwistMop.png' },
      { title: 'Mop Bucket Trolley', image: '/MopBucketTrolley.png' },
      { title: 'Cleaning Trolley', image: '/cleaningtrolley.png' },
      { title: 'Housekeeping Trolley', image: '/housekeepingtrolley.png' },
      { title: 'Cleaning Safety Signs', image: '/CleaningSafetySigns.png' },
      { title: 'Dustpan with Brush', image: '/dustpanwithbrush.png' },
      { title: 'Floor Cleaning Brush', image: '/FloorCleaningBrush.png' },
      { title: 'Toilet Brush', image: '/toiletbrush.png' },
    ],
  },
  {
    id: 'tissues',
    title: 'Tissues & Dispensers',
    subtitle: 'Dispensing solutions for washrooms and guest areas.',
    items: [
      { title: 'Tissues', image: '/Tissues.png' },
      { title: 'Interfold Dispenser', image: '/interfolddispenser.png' },
      { title: 'Tissue Dispenser', image: '/tissuedispenser.png' },
      { title: 'Refillable Shampoo Bottle', image: '/reﬁllableshampoobottle.png' },
    ],
  },
  {
    id: 'linen',
    title: 'Linen & Amenities',
    subtitle: 'Comfort-focused essentials for guest rooms and bathrooms.',
    items: [
      { title: 'Linen (Bath & Bed)', image: '/Linen.png' },
      { title: 'Amenities', image: '/Amenities.png' },
      { title: 'Dishwashing Cleaning Items', image: '/DishwashingCleaning.png' },
      { title: 'Cleaning Items', image: '/cleaningitems.png' },
      { title: 'Bathroom Cleaning Items', image: '/bathroomcleaningitem.png' },
    ],
  },
  {
    id: 'waste',
    title: 'Waste & Ashtray Solutions',
    subtitle: 'Bins, ashtrays, and recycling solutions for facilities.',
    items: [
      { title: 'OUD Ashtray Bin', image: '/oudashtraybin.png' },
      { title: 'Steel Ashtray Bin', image: '/steelashtraybin.png' },
      { title: 'Steel Pedal Dustbin', image: '/SteelPedalDustbin.png' },
      { title: 'Plastic Pedal Dustbin', image: '/PlasticPedalDustbin.png' },
      { title: 'Recycle Bin', image: '/RecycleBin.png' },
      { title: 'Garbage Waste Dustbin', image: '/GarbageWasteDustbin.png' },
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
