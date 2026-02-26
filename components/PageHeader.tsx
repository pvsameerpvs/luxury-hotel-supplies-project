import React from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  bgImage?: string
}

export default function PageHeader({ title, subtitle, bgImage }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ink border-b border-neutral-800">
      <div className="absolute inset-0 bg-lux-radial opacity-30" />
      {bgImage && (
        <>
          <img src={bgImage} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/50" />
        </>
      )}
      <div className="container-lux relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6 animate-fadeUp">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light animate-fadeUp" style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
