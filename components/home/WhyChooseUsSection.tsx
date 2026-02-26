import {
  WorkspacePremium,
  Speed,
  Inventory,
  LocalShipping
} from '@mui/icons-material'

export default function WhyChooseUsSection() {
  const reasons = [
    { 
      title: 'Premium Quality', 
      description: 'Curated, high-grade items that strictly match international luxury hotel standards.',
      Icon: WorkspacePremium
    },
    { 
      title: 'Fast Quotes', 
      description: 'Clear, transparent pricing and accurate lead time updates delivered with urgency.',
      Icon: Speed
    },
    { 
      title: 'Bulk B2B Pricing', 
      description: 'Highly competitive pricing structures specifically designed for large property supply runs.',
      Icon: Inventory
    },
    { 
      title: 'UAE Distribution', 
      description: 'Reliable, tracked, and secure distribution logistics spanning across the entire UAE.',
      Icon: LocalShipping
    },
  ]

  return (
    <section className="section-padding bg-ink relative overflow-hidden border-y border-neutral-800">
      {/* Deep luxury background accents */}
      <div className="absolute inset-0 bg-lux-radial opacity-20 pointer-events-none mix-blend-screen" />
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-gold/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="container-lux relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-gold" />
            <p className="font-heading text-sm uppercase tracking-[0.2em] text-gold font-bold">Why Choose Us</p>
            <span className="h-px w-8 bg-gold" />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-5xl leading-tight font-heading font-bold text-white mb-6">
            Luxury feel.<br />
            <span className="text-gold">Operational reliability.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            A frictionless procurement experience built strictly around elite quality, unshakable consistency, and fast turnaround times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="relative p-8 rounded-[24px] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] hover:border-gold/30 transition-all duration-500 group overflow-hidden"
            >
              {/* Subtle hover sweep gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="h-16 w-16 mb-8 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-2 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(221,161,38,0.3)] transition-all duration-500">
                  <reason.Icon className="text-gold/80 group-hover:text-gold transition-colors duration-500" fontSize="medium" />
                </div>
                
                <h3 className="font-heading text-2xl text-white font-semibold mb-3 group-hover:text-white transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
