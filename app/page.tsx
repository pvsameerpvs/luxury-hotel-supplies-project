import type { Metadata } from 'next'
import CTASection from '../components/CTASection'
import HeroSection from '../components/HeroSection'
import HomeAboutSection from '../components/home/HomeAboutSection'
import HomeProductsSection from '../components/home/HomeProductsSection'
import HomeServicesSection from '../components/home/HomeServicesSection'
import WhyChooseUsSection from '../components/home/WhyChooseUsSection'

export const metadata: Metadata = {
  title: 'Premium Hotel & Housekeeping Supplies in UAE',
  description:
    'LUXURY HOTEL SUPPLIES TRADING FZC LLC supplies premium hotel amenities, housekeeping products, linens, and hygiene solutions across the UAE.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeAboutSection />
      <HomeProductsSection />
      <HomeServicesSection />
      <WhyChooseUsSection />
      
      <CTASection
        title="Need pricing for your hotel?"
        subtitle="Send your requirements and quantity. We will reply with a quote and lead time."
        primaryHref="/contact#contact-form"
        primaryLabel="Request Quote"
        secondaryHref="/products"
        secondaryLabel="View Products"
      />
    </>
  )
}
