import type { Metadata } from 'next'
import SectionTitle from '../../components/SectionTitle'
import ContactForm from '../../components/ContactForm'
import PageHeader from '../../components/PageHeader'
import { Email, LocationOn, Phone, Business } from '@mui/icons-material'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact LUXURY HOTEL SUPPLIES TRADING FZC LLC for inquiries and quotes. Phone: 043258275, +971 56 845 2604. Email: luxuryhotelsupplies007@gmail.com.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Get in Touch"
        subtitle="Share your operational requirements and master quantities. Our procurement specialists will respond immediately with competitive B2B pricing and accurate lead times."
        bgImage="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section-padding bg-gray-50 border-y border-borderGray relative overflow-hidden">
        {/* Subtle background flair */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[100px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="container-lux relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Contact Information Column */}
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="Direct Contact"
                title="Connect with our team"
                subtitle="Reach our corporate headquarters directly by phone, email, or visit our executive office in the Ajman Free Zone."
              />

              <div className="mt-8 space-y-6">
                
                {/* Physical Address */}
                <div className="card-lux p-6 group hover:border-gold/30 hover:shadow-luxuryHover transition-all flex items-start gap-4 cursor-default">
                  <div className="h-12 w-12 shrink-0 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-gold/10">
                    <LocationOn className="text-gold" fontSize="small" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Corporate Office</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      CWS-IV-155750, 26th Floor,<br />
                      Amber Gem Tower, Ajman Free Zone,<br />
                      Ajman, UAE
                    </p>
                  </div>
                </div>

                {/* Direct Phone Lines */}
                <div className="card-lux p-6 group hover:border-gold/30 hover:shadow-luxuryHover transition-all flex items-start gap-4 cursor-default">
                  <div className="h-12 w-12 shrink-0 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-gold/10">
                    <Phone className="text-gold" fontSize="small" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Direct Lines</h3>
                    <div className="flex flex-col gap-1 text-sm text-muted">
                      <a className="hover:text-gold transition-colors inline-flex items-center gap-2" href="tel:043258275">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                        043 258 275
                      </a>
                      <a className="hover:text-gold transition-colors inline-flex items-center gap-2" href="tel:+971568452604">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                        +971 56 845 2604
                      </a>
                    </div>
                  </div>
                </div>

                {/* Secure Email */}
                <div className="card-lux p-6 group hover:border-gold/30 hover:shadow-luxuryHover transition-all flex items-start gap-4 cursor-default">
                  <div className="h-12 w-12 shrink-0 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-gold/10">
                    <Email className="text-gold" fontSize="small" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Official Email</h3>
                    <p className="text-sm text-muted break-all">
                      <a className="hover:text-gold transition-colors" href="mailto:luxuryhotelsupplies007@gmail.com">
                        luxuryhotelsupplies007@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="card-lux p-6 group hover:border-gold/30 hover:shadow-luxuryHover transition-all flex items-start gap-4 cursor-default">
                  <div className="h-12 w-12 shrink-0 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-gold/10">
                    <Business className="text-gold" fontSize="small" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-sm text-muted">
                      Monday - Friday: 9:00 AM - 6:00 PM<br/>
                      <span className="text-gold/80 italic text-xs mt-1 block">Emergency operational requests handled 24/7.</span>
                    </p>
                  </div>
                </div>

              </div>
              
              <div className="mt-8 rounded-[24px] overflow-hidden shadow-luxuryHover border border-borderGray bg-white">
                <iframe
                  title="Map: Amber Gem Tower, Ajman Free Zone"
                  className="h-[250px] w-full brightness-95 contrast-125 grayscale-[30%]" // Adds a subtle premium filter to google maps
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Amber%20Gem%20Tower%20Ajman%20Free%20Zone&output=embed"
                />
              </div>
            </div>

            {/* Application Form Column */}
            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-32 card-lux p-8 md:p-12 shadow-luxuryHover border-gold/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark" />
                <div className="mb-8">
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2">Request a Quote</h2>
                  <p className="text-muted text-sm md:text-base">Fill out the form below. A procurement specialist will be assigned to your request immediately.</p>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
