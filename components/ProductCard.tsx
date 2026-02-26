import Image from 'next/image'
import Link from 'next/link'

export type ProductCardProps = {
  title: string
  badge?: string
  description?: string
  image?: string
  href?: string
  linkLabel?: string
}

export default function ProductCard({
  title,
  badge,
  description,
  image,
  href = '/contact#contact-form',
  linkLabel = 'Request price',
}: ProductCardProps) {
  return (
    <Link href={href} className="card-lux overflow-hidden block group cursor-pointer hover:border-gold/30 hover:shadow-luxuryHover transition-all">
      <div className="relative h-40 w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_30%,rgba(212,175,55,0.22),transparent_60%),radial-gradient(500px_circle_at_80%_50%,rgba(182,140,40,0.16),transparent_55%)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/50 to-white" />
      </div>

      <div className="p-6">
        {badge ? (
          <span className="inline-flex items-center rounded-full border border-borderGray bg-white px-3 py-1 text-xs font-semibold text-gold">
            {badge}
          </span>
        ) : null}

        <h3 className="mt-3 text-lg font-heading text-foreground group-hover:text-gold transition-colors">{title}</h3>
        {description ? <p className="mt-2 text-sm text-muted">{description}</p> : null}

        <div className="mt-5">
          <span className="inline-flex items-center text-sm font-semibold text-gold group-hover:underline">
            {linkLabel}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
