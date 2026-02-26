import Link from 'next/link'
import type { SvgIconComponent } from '@mui/icons-material'

export type ServiceCardProps = {
  title: string
  description?: string
  href?: string
  Icon?: SvgIconComponent
}

export default function ServiceCard({
  title,
  description,
  href = '/contact#contact-form',
  Icon,
}: ServiceCardProps) {
  return (
    <div className="card-lux p-6 h-full flex flex-col group/card border-transparent transition-colors hover:border-gold/20">
      <div className="flex flex-col h-full">
        <div className="mb-6 h-14 w-14 rounded-full border border-gold/20 bg-gradient-to-br from-gold/5 target-gold/10 flex items-center justify-center transition-transform duration-500 group-hover/card:scale-110 group-hover/card:bg-gold/10">
          {Icon ? <Icon fontSize="medium" className="text-gold transition-colors" /> : null}
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-heading font-semibold text-foreground group-hover/card:text-gold transition-colors">{title}</h3>
          {description ? <p className="mt-3 text-sm text-muted leading-relaxed">{description}</p> : null}
        </div>
        <div className="mt-6 pt-6 border-t border-borderGray/50">
          <Link href={href} className="inline-flex items-center text-sm font-semibold text-gold hover:text-gold-dark transition-colors group-hover/link">
            Learn more
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 ml-1 transform transition-transform group-hover/card:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
