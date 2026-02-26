import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '../../../components/PageHeader'
import { ArrowBack } from '@mui/icons-material'

// Dummy dynamic data fetching mechanism based on the requested slug.
// In a real application, you would swap this out with your database or CMS.
const getProductDetails = (slug: string) => {
  const products: Record<string, { title: string, category: string, image: string, description: string, features: string[] }> = {
    // Housekeeping
    'floor-cleaning-wiper': {
      title: 'Floor Cleaning Wiper',
      category: 'Housekeeping Products',
      image: '/FloorCleaningWiper.png',
      description: 'Industrial-grade floor wiping solution designed to effortlessly clear water and liquid spills from wide hospitality corridors and lobby spaces without leaving streaks or watermarks.',
      features: ['Heavy-duty rubber blade', 'Ergonomic lightweight handle', 'Rust-proof aluminum construction', 'Ideal for marble and tile floors']
    },
    'cotton-twist-mop': {
      title: 'Cotton Twist Mop',
      category: 'Housekeeping Products',
      image: '/CottonTwistMop.png',
      description: 'Highly absorbent commercial cotton blend mop for deep floor cleaning. Perfect for daily room turnover and tough spill management.',
      features: ['Premium blended cotton yarn', 'Washes up to 50 times', 'Sturdy industrial handle', 'Fast drying material']
    },
    'mop-bucket-trolley': {
      title: 'Mop Bucket Trolley',
      category: 'Housekeeping Products',
      image: '/MopBucketTrolley.png',
      description: 'Heavy-duty mobile wringer bucket system for professional hotel housekeeping teams, accelerating floor cleaning efficiency.',
      features: ['High-capacity 20L tank', 'Commercial-grade spring wringer', 'Smooth rolling casters', 'Caution warning symbol printed']
    },
    'cleaning-trolley': {
      title: 'Cleaning Trolley',
      category: 'Housekeeping Products',
      image: '/cleaningtrolley.png',
      description: 'Multi-tiered utility cleaning cart designed to hold chemicals, mops, tools, and a waste bag for comprehensive floor maintenance.',
      features: ['Durable structural web plastic', 'Quiet-roll 8-inch wheels', 'Large vinyl zipper bag included', 'Mop and broom holders built-in']
    },
    'housekeeping-trolley': {
      title: 'Housekeeping Trolley',
      category: 'Housekeeping Products',
      image: '/housekeepingtrolley.png',
      description: 'Premium guest room turnover cart designed to hold fresh linens, amenities, and cleaning supplies in an organized, discreet manner.',
      features: ['Dual linen bag attachments', 'Enclosed locking doors available', 'Adjustable internal shelving', 'Non-marking bumper guards']
    },
    'cleaning-safety-signs': {
      title: 'Cleaning Safety Signs',
      category: 'Housekeeping Products',
      image: '/CleaningSafetySigns.png',
      description: 'High-visibility multilingual wet floor safety signs to ensure guest slip-prevention and hotel liability compliance during active cleaning.',
      features: ['Bright warning yellow color', 'Foldable for easy storage', 'A-frame stable design', 'Multilingual warning text']
    },
    'dustpan-with-brush': {
      title: 'Dustpan with Brush',
      category: 'Housekeeping Products',
      image: '/dustpanwithbrush.png',
      description: 'Lobby dustpan and broom set with a long handle, allowing housekeepers to elegantly sweep up debris without bending over.',
      features: ['Self-opening/closing lid', 'Ergonomic upright handle', 'Durable stiff bristle brush', 'Attaches together for storage']
    },
    'floor-cleaning-brush': {
      title: 'Floor Cleaning Brush',
      category: 'Housekeeping Products',
      image: '/FloorCleaningBrush.png',
      description: 'Stiff-bristle deck scrubbing brush for deep cleaning grouts, outdoor pool areas, and textured bathroom tiles.',
      features: ['Aggressive scrubbing bristles', 'Resistant to harsh chemicals', 'Long-reach handle', 'Does not scratch ceramic']
    },
    'toilet-brush': {
      title: 'Toilet Brush',
      category: 'Housekeeping Products',
      image: '/toiletbrush.png',
      description: 'Discreet and highly durable commercial toilet bowel brush with a covered caddy for hygienic storage in guest or public restrooms.',
      features: ['360-degree bristle head', 'Enclosed sanitary holder', 'Rust-resistant handle', 'Replaceable brush head']
    },
    
    // Tissues & Dispensers
    'tissues': {
      title: 'Tissues',
      category: 'Tissues & Dispensers',
      image: '/Tissues.png',
      description: 'Ultra-soft, premium 2-ply facial tissues packaged beautifully for bedside tables or bathroom vanities in high-end suites.',
      features: ['100% virgin pulp', 'Hypoallergenic material', 'Elegant box design', 'Highly absorbent']
    },
    'interfold-dispenser': {
      title: 'Interfold Dispenser',
      category: 'Tissues & Dispensers',
      image: '/interfolddispenser.png',
      description: 'Sleek wall-mounted interfold hand towel dispenser designed for public hotel washrooms. Promotes hygiene through one-at-a-time dispensing.',
      features: ['Durable ABS plastic shell', 'Lockable security design', 'Viewing window for refills', 'Fits standard Z-fold towels']
    },
    'tissue-dispenser': {
      title: 'Tissue Dispenser',
      category: 'Tissues & Dispensers',
      image: '/tissuedispenser.png',
      description: 'Commercial hygienic dispenser for jumbo toilet tissue rolls. Perfect for high-traffic lobby restrooms and facility areas.',
      features: ['Stainless steel or sleek black finish', 'High capacity roll housing', 'Anti-theft lock mechanism', 'Smooth tearing edge']
    },
    'refillable-shampoo-bottle': {
      title: 'Refillable Shampoo Bottle',
      category: 'Tissues & Dispensers',
      image: '/reﬁllableshampoobottle.png',
      description: 'Eco-friendly, securely lockable wall-mounted amenity pump bottles for upscale hotel showers, eliminating single-use plastics.',
      features: ['Tamper-proof locking key', 'Precision pump mechanism', 'Customizable hotel branding', 'Easy-refill wide mouth tank']
    },

    // Linen & Amenities
    'linen-bath--bed': {
      title: 'Linen (Bath & Bed)',
      category: 'Linen & Amenities',
      image: '/Linen.png',
      description: 'Hotel-grade luxury bed sheets and plush bath towels. Woven to withstand aggressive commercial laundering while retaining soft guest comfort.',
      features: ['High thread-count cotton blends', 'Double-stitched hems', 'Bleach-safe white finish', 'Available in all bed sizes']
    },
    'amenities': {
      title: 'Amenities',
      category: 'Linen & Amenities',
      image: '/Amenities.png',
      description: 'Curated selection of guest essentials including dental kits, vanity kits, and sewing kits, elegantly packaged to match your luxury brand.',
      features: ['Custom branded packaging', 'Eco-friendly material options', 'Premium sensory formulations', 'Complete bathroom sets']
    },
    'dishwashing-cleaning-items': {
      title: 'Dishwashing Cleaning Items',
      category: 'Linen & Amenities',
      image: '/DishwashingCleaning.png',
      description: 'Professional suite-kitchen cleaning packs provided to extended-stay guests for maintaining dishes and glassware.',
      features: ['Mini detergent bottles', 'Non-scratch scrub sponges', 'Absorbent kitchen wipes', 'Sealed hygienic packs']
    },
    'cleaning-items': {
      title: 'Cleaning Items',
      category: 'Linen & Amenities',
      image: '/cleaningitems.png',
      description: 'General room upkeep kits and specialized cloths designed to safely polish hotel furniture, glass, and mirrors without leaving lint.',
      features: ['Microfiber technology', 'Color-coded for cross-contamination', 'Lint-free finish', 'Machine washable']
    },
    'bathroom-cleaning-items': {
      title: 'Bathroom Cleaning Items',
      category: 'Linen & Amenities',
      image: '/bathroomcleaningitem.png',
      description: 'Specialized wiping and descaling sets designed specifically for hotel bathroom ceramics and glass shower enclosures.',
      features: ['Non-abrasive pads', 'Watermark removing cloths', 'Chemical-resistant material', 'High absorbency']
    },

    // Waste
    'oud-ashtray-bin': {
      title: 'OUD Ashtray Bin',
      category: 'Waste & Ashtray Solutions',
      image: '/oudashtraybin.png',
      description: 'Luxurious OUD-scented or stylized lobby ashtray bin designed to blend seamlessly into premium smoking areas and hotel entrances.',
      features: ['Elegant metallic finish', 'Wind-proof ash tray top', 'Easy-empty side door', 'Weighted base for stability']
    },
    'steel-ashtray-bin': {
      title: 'Steel Ashtray Bin',
      category: 'Waste & Ashtray Solutions',
      image: '/steelashtraybin.png',
      description: 'Classic brushed stainless steel outdoor ashtray and trash receptacle for high-traffic hotel entrances and patio spaces.',
      features: ['Fire-safe steel construction', 'Weather resistant', 'Removable inner galvanized bin', 'Snuffer plate included']
    },
    'steel-pedal-dustbin': {
      title: 'Steel Pedal Dustbin',
      category: 'Waste & Ashtray Solutions',
      image: '/SteelPedalDustbin.png',
      description: 'Hygienic hands-free stainless steel step bins ideal for guest bathrooms, spa changing rooms, and corridor pantries.',
      features: ['Fingerprint-proof coating', 'Silent soft-close lid', 'Sturdy foot pedal', 'Removable plastic inner bucket']
    },
    'plastic-pedal-dustbin': {
      title: 'Plastic Pedal Dustbin',
      category: 'Waste & Ashtray Solutions',
      image: '/PlasticPedalDustbin.png',
      description: 'Durable commercial plastic step bins for back-of-house operations, kitchens, and housekeeping pantries.',
      features: ['Heavy-duty resin construction', 'Hands-free sanitary pedal', 'Tight-fitting odor control lid', 'Easy-clean smooth surface']
    },
    'recycle-bin': {
      title: 'Recycle Bin',
      category: 'Waste & Ashtray Solutions',
      image: '/RecycleBin.png',
      description: 'Color-coded recycling receptacles to encourage eco-friendly waste separation across hotel administration and public spaces.',
      features: ['Clear recycling decals', 'Multiple lid shapes available', 'High-capacity design', 'Connectable station options']
    },
    'garbage-waste-dustbin': {
      title: 'Garbage Waste Dustbin',
      category: 'Waste & Ashtray Solutions',
      image: '/GarbageWasteDustbin.png',
      description: 'Large capacity utility waste bins for heavy-duty refuse collection in commercial kitchen loading docks and refuse rooms.',
      features: ['Extra-tough reinforced plastic', 'Optional wheeled dolly', 'Snap-on tight lid', 'Molded carrying handles']
    },
  }

  return products[slug]
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductDetails(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <PageHeader 
        title={product.title}
        subtitle={`Premium ${product.category} supplied directly to luxury properties.`}
      />

      <section className="section-padding bg-gray-50 border-b border-borderGray relative overflow-hidden">
        <div className="container-lux relative z-10">
          
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center text-sm font-semibold text-gold hover:text-gold-dark transition-colors group">
              <ArrowBack fontSize="small" className="mr-2 transform transition-transform group-hover:-translate-x-1" />
              Back to Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Product Image Display */}
            <div className="relative w-full aspect-square rounded-[24px] overflow-hidden bg-white border border-borderGray shadow-luxury group">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-8 md:p-12 transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                  No Image Available
                </div>
              )}
            </div>

            {/* Right Side: Product Description */}
            <div className="flex flex-col">
              <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold text-gold w-fit mb-6">
                {product.category}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                {product.title}
              </h1>
              
              <p className="text-lg text-muted leading-relaxed font-light mb-10">
                {product.description}
              </p>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-4 h-px bg-gold" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted">
                      <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 pt-8 border-t border-borderGray">
                <Link href={`/contact?product=${params.slug}#contact-form`} className="btn-gold py-4 px-8 text-center text-lg shadow-luxuryHover">
                  Request Bulk Quote
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
