import Link from 'next/link'

type CTASectionProps = {
  title?: string
  subtitle?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export default function CTASection({
  title = 'Request a Catalog and Quote',
  subtitle = 'Tell us what you need and we will share recommended options, pricing, and lead time for your property.',
  primaryHref = '/contact',
  primaryLabel = 'Request a Quote',
  secondaryHref = '/products',
  secondaryLabel = 'Browse Products',
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="container-lux">
        <div className="card-lux overflow-hidden">
          <div className="relative px-6 py-10 md:px-10 md:py-12">
            <div className="pointer-events-none absolute inset-0 bg-lux-sheen bg-[length:220%_220%] opacity-80 animate-shimmer" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl text-gold font-heading">{title}</h3>
                <p className="mt-2 text-muted">{subtitle}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={primaryHref} className="btn-gold">
                  {primaryLabel}
                </Link>
                <Link href={secondaryHref} className="btn-ghost">
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
