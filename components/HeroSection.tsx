'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

export type HeroSlide = {
  src: string
  alt: string
  kicker?: string
}

export type HeroSectionProps = {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  height?: string
  slides?: HeroSlide[]
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return reduced
}

export default function HeroSection({
  title = 'Premium Hotel & Housekeeping Supplies in UAE',
  subtitle = 'LUXURY HOTEL SUPPLIES TRADING FZC LLC delivers curated hotel essentials, linen, dispensers, hygiene solutions, and facility supplies with consistent quality and fast UAE-wide delivery.',
  ctaText = 'View Products',
  ctaLink = '/products',
  height = 'min-h-[calc(100svh-80px)]',
  slides,
}: HeroSectionProps) {
  const fallbackSlides = useMemo<HeroSlide[]>(
    () => [
      {
        src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=2000',
        alt: 'Luxury hotel amenities and essentials',
        kicker: 'Premium housekeeping essentials',
      },
      {
        src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=2000',
        alt: 'Housekeeping products and cleaning supplies',
        kicker: 'Amenities, linen and dispensers',
      },
      {
        src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000',
        alt: 'Linen and room setup essentials',
        kicker: 'Safety, hygiene and facility care',
      },
    ],
    []
  )

  const sliderMode = Boolean(slides && slides.length) || (!slides && height.includes('100svh'))
  const sliderSlides = (slides && slides.length ? slides : fallbackSlides).slice(0, 3)

  const prefersReducedMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const indexRef = useRef(index)
  indexRef.current = index

  const active = sliderMode ? sliderSlides[index] ?? sliderSlides[0] : undefined

  function goTo(idx: number) {
    const total = sliderSlides.length
    const next = ((idx % total) + total) % total
    setIndex(next)
  }

  function prev() {
    goTo(indexRef.current - 1)
  }

  function next() {
    goTo(indexRef.current + 1)
  }

  useEffect(() => {
    if (!sliderMode) return
    if (prefersReducedMotion || paused) return
    const id = window.setInterval(() => next(), 6500)
    return () => window.clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderMode, prefersReducedMotion, paused])

  return (
    <section
      className={`relative overflow-hidden ${height}`}
      aria-label="Hero"
      onMouseEnter={() => sliderMode && setPaused(true)}
      onMouseLeave={() => sliderMode && setPaused(false)}
    >
      <div className="absolute inset-0">
        {sliderMode ? (
          sliderSlides.map((s, i) => (
            <div
              key={s.src}
              className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
              aria-hidden={i !== index}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
                unoptimized
              />
            </div>
          ))
        ) : (
          <div className="absolute inset-0 bg-lux-radial" />
        )}

        <div className="absolute inset-0 bg-lux-radial" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/60" />
      </div>

      <div className={`relative container-lux flex ${height} items-center`}>
        <div className="w-full max-w-3xl">

          <h1 className="mt-4 font-bold text-4xl md:text-6xl leading-[1.05] text-gold animate-fadeUp">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-5 font-medium text-base md:text-lg text-white max-w-2xl animate-fadeUp">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {ctaText && ctaLink ? (
              <Link href={ctaLink} className="btn-gold">
                {ctaText}
              </Link>
            ) : null}
            <Link href="/contact#contact-form" className="btn-ghost">
              Request Quote
            </Link>
          </div>

          

        </div>

        {sliderMode ? (
          <div className="absolute bottom-10 right-4 md:right-8 z-20 flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="h-12 w-12 flex items-center justify-center rounded-full border border-borderGray/50 bg-white/80 hover:bg-gold hover:text-white transition shadow-sm backdrop-blur"
              aria-label="Previous slide"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 currentColor"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              className="h-12 w-12 flex items-center justify-center rounded-full border border-borderGray/50 bg-white/80 hover:bg-gold hover:text-white transition shadow-sm backdrop-blur"
              aria-label="Next slide"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 currentColor"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
