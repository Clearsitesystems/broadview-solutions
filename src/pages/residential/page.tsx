import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SeoHead from '../../components/feature/SeoHead';
import TestimonialCard from '../../components/feature/TestimonialCard';
import TrustBadge from '../../components/feature/TrustBadge';
import { getTestimonialsByService } from '../../mocks/testimonials';

const residentialSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Lawn Care & Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Broadview Solutions",
      "telephone": "+15745963633",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Goshen",
        "addressRegion": "IN",
        "addressCountry": "US"
      }
    },
    "serviceType": "Residential Lawn Care",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Elkhart County, Indiana"
    },
    "description": "Professional residential lawn maintenance, seasonal cleanup, and snow plowing for homeowners in Goshen, Elkhart, Bristol, Middlebury, and Wakarusa, Indiana.",
    "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/residential`
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Residential Services",
        "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/residential`
      }
    ]
  }
];

export default function Residential() {
  return (
    <div className="min-h-screen bg-[#1C2B2B]">
      <SeoHead
        title="Residential Lawn Care Service | Goshen, Indiana"
        description="Reliable residential lawn maintenance, seasonal cleanup & snow plowing for homeowners in Goshen, Elkhart & Bristol, Indiana. Family-owned, licensed & insured. Free estimates — call (574) 596-3633."
        keywords="residential lawn care Goshen Indiana, lawn mowing Elkhart County, snow plowing homeowners Bristol IN, seasonal cleanup residential Indiana"
        canonical="/residential"
        ogTitle="Residential Lawn Care Services | Broadview Solutions"
        ogDescription="Year-round residential lawn maintenance, seasonal cleanup & snow plowing across Elkhart County, IN. Trusted by homeowners. Free estimates."
        schema={residentialSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start lg:items-center pt-24 pb-12 lg:pt-0 lg:pb-0">
        <img 
          src="https://readdy.ai/api/search-image?query=happy%20family%20enjoying%20beautiful%20backyard%20with%20perfect%20green%20lawn%20residential%20landscaping%20suburban%20home%20outdoor%20living%20space%20well%20maintained%20yard%20homeowner%20satisfaction%20lifestyle%20photography%20natural%20sunlight%20warm%20inviting%20atmosphere&width=1920&height=1080&seq=reshero001&orientation=landscape" 
          alt="Beautiful Residential Yard" 
          title="Residential Lawn Care Services for Homeowners — Broadview Solutions Goshen IN"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2B2B]/90 via-[#1C2B2B]/70 to-[#1C2B2B]/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto lg:ml-auto bg-[#1A2424]/95 backdrop-blur-sm p-6 sm:p-10 md:p-12 rounded-2xl border-2 border-[#8A9BA8]/30 shadow-2xl">
            <div className="inline-flex items-center space-x-2 bg-[#2D5016] text-white px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[#B8A882]/30">
              <i className="ri-home-heart-line"></i>
              <span>For Homeowners</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Your Dream Yard, Maintained Year-Round
            </h1>
            
            <p className="text-lg text-[#C0C8CC] mb-6">
              Professional lawn maintenance, seasonal cleanup, and snow plowing services that fit your lifestyle and budget
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              <div className="flex items-center space-x-2 text-[#C0C8CC]">
                <i className="ri-check-line text-[#2D5016]"></i>
                <span>No Contracts Required</span>
              </div>
              <div className="flex items-center space-x-2 text-[#C0C8CC]">
                <i className="ri-check-line text-[#2D5016]"></i>
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Link 
                to="/contact" 
                className="bg-[#2D5016] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1E3A0F] transition-all flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer shadow-lg shadow-[#2D5016]/30"
              >
                <i className="ri-calendar-check-line"></i>
                <span>Get Free Estimate</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Services Timeline */}
      <section className="bg-[#1A2424] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Year-Round Care for Every Season</h2>
            <p className="text-lg text-[#C0C8CC]">We adapt our services to keep your yard beautiful through all seasons</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                season: 'Spring',
                icon: 'ri-seedling-line',
                color: 'bg-green-500',
                services: ['Spring cleanup', 'Bed preparation', 'Mulch installation', 'First mow of the season']
              },
              {
                season: 'Summer',
                icon: 'ri-sun-line',
                color: 'bg-yellow-500',
                services: ['Regular mowing', 'Edging & trimming', 'Weed control', 'Lawn health monitoring', 'Debris removal']
              },
              {
                season: 'Fall',
                icon: 'ri-leaf-line',
                color: 'bg-orange-500',
                services: ['Leaf removal', 'Seasonal cleanup', 'Winter preparation']
              },
              {
                season: 'Winter',
                icon: 'ri-snowy-line',
                color: 'bg-blue-400',
                services: ['Snow plowing', 'Ice management', 'Driveway clearing', 'Walkway safety', 'Storm response']
              }
            ].map((season, index) => (
              <div key={index} className="bg-[#1C2B2B] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-[#8A9BA8]/20 hover:border-[#8A9BA8]/50">
                <div className={`w-16 h-16 flex items-center justify-center ${season.color} rounded-full mb-4 shadow-lg`}>
                  <i className={`${season.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{season.season}</h3>
                <ul className="space-y-2">
                  {season.services.map((service, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <i className="ri-checkbox-circle-line text-[#2D5016] mt-0.5"></i>
                      <span className="text-[#C0C8CC] text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Testimonials */}
      <section className="bg-[#1A2424] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary/20 border border-primary/30 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="ri-home-heart-line mr-2"></i>
              Homeowner Stories
            </div>
            <h2 className="text-4xl font-bold text-offwhite mb-4">
              Why Families & Homeowners Love <span className="text-primary italic">Broadview</span>
            </h2>
            <p className="text-lg text-silver-light max-w-3xl mx-auto">
              From busy parents to senior homeowners, see how we help families enjoy beautiful yards without the work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {getTestimonialsByService('lawn-maintenance')
              .filter((t) => 
                t.highlight?.includes('Senior') || 
                t.highlight?.includes('family') || 
                t.highlight?.includes('new homeowner') ||
                t.highlight?.includes('Switched') ||
                t.highlight?.includes('post-surgery')
              )
              .slice(0, 3)
              .map((t) => (
                <TestimonialCard key={t.id} testimonial={t} variant="featured" />
              ))}
            
            {/* Fill remaining slots with other lawn testimonials if needed */}
            {getTestimonialsByService('lawn-maintenance')
              .filter((t) => 
                !(t.highlight?.includes('Senior') || 
                  t.highlight?.includes('family') || 
                  t.highlight?.includes('new homeowner') ||
                  t.highlight?.includes('Switched') ||
                  t.highlight?.includes('post-surgery'))
              )
              .slice(0, Math.max(0, 3 - (getTestimonialsByService('lawn-maintenance').filter((t) => 
                t.highlight?.includes('Senior') || 
                t.highlight?.includes('family') || 
                t.highlight?.includes('new homeowner') ||
                t.highlight?.includes('Switched') ||
                t.highlight?.includes('post-surgery')
              ).length)))
              .map((t) => (
                <TestimonialCard key={t.id} testimonial={t} variant="featured" />
              ))}
          </div>

          <div className="bg-charcoal-dark border border-silver-dark/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <TrustBadge variant="expanded" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/testimonials"
                className="inline-flex items-center justify-center gap-2 bg-charcoal border-2 border-primary/40 text-offwhite px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all whitespace-nowrap cursor-pointer"
              >
                <i className="ri-star-line"></i>
                <span>Read All Reviews</span>
              </Link>
              <a
                href="https://www.google.com/maps/search/Broadview+Solutions+Goshen+Indiana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-charcoal border-2 border-silver-dark/30 text-offwhite px-6 py-3 rounded-lg font-semibold hover:border-accent hover:text-accent transition-all whitespace-nowrap cursor-pointer"
              >
                <i className="ri-google-fill"></i>
                <span>Leave a Review</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="bg-[#1A2424] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg text-[#C0C8CC]">Getting started is simple and stress-free</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', icon: 'ri-phone-line', title: 'Request Estimate', desc: 'Call or fill out our online form to get started' },
              { step: '2', icon: 'ri-map-pin-line', title: 'Site Assessment', desc: 'We visit your property to understand your needs' },
              { step: '3', icon: 'ri-file-list-line', title: 'Approve Proposal', desc: 'Review our detailed plan and pricing' },
              { step: '4', icon: 'ri-emotion-happy-line', title: 'Enjoy Your Yard', desc: 'Relax while we handle everything' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 flex items-center justify-center bg-[#2D5016] text-white text-3xl font-bold rounded-full mx-auto mb-4 shadow-lg shadow-[#2D5016]/30 border-2 border-[#8A9BA8]/30">
                  {item.step}
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-[#1C2B2B] rounded-full mx-auto mb-4 border border-[#8A9BA8]/30">
                  <i className={`${item.icon} text-2xl text-[#2D5016]`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#C0C8CC]">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-[#8A9BA8]/30"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-[#C0C8CC] mb-4">
              <strong className="text-white">Most clients start within 48 hours</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#1C2B2B] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Homeowners Say</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-[#1A2424] p-8 rounded-xl shadow-lg border border-[#8A9BA8]/20">
              <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mb-6">
                <i className="ri-seedling-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Spring</h3>
              <p className="text-[#C0C8CC] mb-4">Prepare your lawn for the growing season</p>
              <ul className="space-y-2 text-[#C0C8CC]">
                <li className="flex items-start space-x-2">
                  <i className="ri-check-line text-[#2D5016] mt-1"></i>
                  <span>Spring cleanup</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-check-line text-[#2D5016] mt-1"></i>
                  <span>Mulch installation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-check-line text-[#2D5016] mt-1"></i>
                  <span>Bed preparation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-check-line text-[#2D5016] mt-1"></i>
                  <span>Pruning and trimming</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1A2424] p-8 rounded-xl shadow-lg border border-[#8A9BA8]/20">
              <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mb-6">
                <i className="ri-leaf-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fall</h3>
              <p className="text-[#C0C8CC] mb-4">Prepare your property for winter</p>
              <ul className="space-y-2 text-[#C0C8CC]">
                <li className="flex items-start space-x-2">
                  <i className="ri-check-line text-[#2D5016] mt-1"></i>
                  <span>Leaf removal</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-check-line text-[#2D5016] mt-1"></i>
                  <span>Gutter cleaning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-check-line text-[#2D5016] mt-1"></i>
                  <span>Bed cleanup</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-check-line text-[#2D5016] mt-1"></i>
                  <span>Winterization prep</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Rich Text Section */}
      <section className="bg-[#1A2424] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Residential Lawn Care Services in Goshen, Elkhart &amp; Bristol, Indiana</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Broadview Solutions provides reliable, professional residential lawn care services to homeowners throughout Goshen, Elkhart, Bristol, Middlebury, and Wakarusa, Indiana. We specialize in the three services that matter most to homeowners: <strong className="text-white">lawn maintenance</strong>, <strong className="text-white">seasonal cleanup</strong>, and <strong className="text-white">snow plowing</strong> — delivered consistently, on schedule, and to a high standard every single visit.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Our residential lawn maintenance program is designed around your schedule and your lawn's specific needs. We offer weekly and bi-weekly mowing plans that include precision edging along driveways, sidewalks, and garden beds, string trimming around obstacles, and a thorough blowdown of all hard surfaces before we leave. The result is a clean, manicured yard that enhances your home's curb appeal and makes your neighbors take notice.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Spring and fall are the most important seasons for your property's appearance. Our seasonal cleanup services go beyond simple leaf removal — we prepare your beds for new growth in spring, apply fresh mulch to retain moisture and suppress weeds, prune overgrown shrubs, and clear away the debris that accumulates over winter. In the fall, we perform thorough leaf removal, final mowing, and winterization prep to protect your turf through the cold months ahead.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                When winter arrives in northern Indiana, our snow plowing service keeps your driveway and walkways safe and accessible. We monitor weather forecasts closely and respond promptly after snowfall events, so you never have to worry about being snowed in or navigating icy paths. We offer both seasonal contracts and on-call service to fit your needs and budget.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Homeowners in Elkhart County Trust Broadview Solutions</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                We understand that inviting a service team onto your property requires trust. That's why we prioritize consistency — you'll see the same familiar faces visit after visit, not a rotating crew of strangers. Our team is background-checked, professionally trained, and genuinely respectful of your home, your landscaping, and your privacy.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Many of our residential clients are busy professionals, families with young children, or seniors who simply want a beautiful yard without the physical demands of maintaining it themselves. We take pride in being the dependable partner that handles the outdoor work so you can focus on what matters most to you. No contracts required for residential service — just reliable, quality care you can count on.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Our pricing is transparent and competitive. We provide free, detailed written estimates before any work begins, so you know exactly what you're getting and what it costs. We don't believe in surprise charges or upselling services you don't need. Our goal is to build long-term relationships with homeowners who value quality and reliability — and that starts with honest, straightforward communication.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                Broadview Solutions is fully licensed, bonded, and insured, giving you complete peace of mind that your property is protected. We use commercial-grade equipment that delivers a superior cut and finish compared to consumer-grade tools, and we maintain our equipment meticulously to ensure consistent results. When you choose Broadview Solutions, you're choosing a team that treats your home with the same care and pride they'd give their own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#1E3A0F] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for a Beautiful Yard?
          </h2>
          <p className="text-xl text-[#C0C8CC] mb-8">
            Get your free estimate today and see why homeowners trust Broadview Solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-[#1E3A0F] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#C0C8CC] transition-colors whitespace-nowrap cursor-pointer shadow-lg"
            >
              Get Free Estimate
            </Link>
            <a 
              href="tel:+15745963633" 
              className="bg-transparent border-2 border-[#8A9BA8] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 hover:border-[#C0C8CC] transition-colors flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line"></i>
              <span>(574) 596-3633</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}