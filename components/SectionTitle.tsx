type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center flex flex-col items-center' : ''} ${className}`.trim()}>
      {eyebrow ? <p className="lux-eyebrow">{eyebrow}</p> : null}
      <h2 className={`mt-3 text-3xl md:text-4xl font-heading font-bold text-gold ${titleClassName}`.trim()}>
        {title}
      </h2>
      <div className="mt-4 h-1 w-20 bg-gold" />
      {subtitle ? (
        <p className={`mt-5 text-muted max-w-2xl text-base md:text-lg ${subtitleClassName}`.trim()}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
