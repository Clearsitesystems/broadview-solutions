import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SeoHead from '../../components/feature/SeoHead';
import TestimonialCard from '../../components/feature/TestimonialCard';
import { getTestimonialsByService } from '../../mocks/testimonials';
import { useState } from 'react';

const commercialSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Landscaping & Grounds Maintenance",
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
    "serviceType": "Commercial Landscaping",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Elkhart County, Indiana"
    },
    "description": "Professional commercial landscaping, lawn maintenance, seasonal cleanup, and snow plowing for offices, retail centers, HOAs, and industrial facilities in Elkhart County, Indiana.",
    "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/commercial`
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Commercial Services",
        "item": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/commercial`
      }
    ]
  }
];

export default function Commercial() {
  const [activeTab, setActiveTab] = useState('lawn-maintenance');

  const services = {
    'lawn-maintenance': {
      title: 'Lawn Maintenance',
      image: '/readdy-assets/search-gm_zt_industrial_001.jpg',
      description: 'Comprehensive routine maintenance that keeps your property looking pristine year-round.',
      includes: [
        'Weekly or bi-weekly mowing and edging',
        'String trimming around obstacles',
        'Blowing and cleanup of all hard surfaces',
        'Mulch replenishment',
        'Pruning and trimming of shrubs',
        'Debris removal'
      ]
    },
    'seasonal-cleanup': {
      title: 'Seasonal CleanUp',
      image: '/readdy-assets/search-ss001.jpg',
      description: 'Prepare your property for changing seasons with comprehensive transition services.',
      includes: [
        'Spring cleanup and bed preparation',
        'Fall leaf removal',
        'Seasonal color installation',
        'Pre-emergent weed control',
        'Holiday decoration services',
        'Storm damage cleanup',
        'Debris and waste removal'
      ]
    },
    'snow-plowing': {
      title: 'Snow Plowing',
      image: '/readdy-assets/search-sim001.jpg',
      description: 'Reliable winter services that keep your property safe and accessible for employees and customers.',
      includes: [
        '24/7 storm monitoring',
        'Parking lot plowing',
        'Sidewalk clearing',
        'Ice melt application',
        'Hauling services for large accumulations',
        'Post-storm cleanup',
        'Seasonal contracts available',
        'Priority service options'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#1C2B2B]">
      <SeoHead
        title="Commercial Lawn Care & Property Maintenance | Goshen, IN"
        description="Professional commercial lawn maintenance, seasonal cleanup & snow plowing for offices, retail centers & HOAs in Elkhart County, Indiana. Licensed & insured. Call (574) 596-3633."
        keywords="commercial landscaping Goshen Indiana, commercial lawn maintenance Elkhart County, snow plowing commercial property Indiana, grounds maintenance HOA"
        canonical="/commercial"
        ogTitle="Commercial Landscaping Services | Broadview Solutions"
        ogDescription="Expert commercial grounds maintenance, seasonal cleanup & snow plowing across Elkhart County, IN. Free consultation available."
        schema={commercialSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <img
          src="/readdy-assets/search-comhero001.jpg"
          alt="Commercial landscaping services"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2B2B]/95 via-[#1C2B2B]/80 to-[#1C2B2B]/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <nav className="text-sm text-[#C0C8CC] mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span>Commercial Services</span>
            </nav>
            
            <div className="inline-flex items-center space-x-2 bg-[#2D5016] text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[#B8A882]/30">
              <i className="ri-building-line"></i>
              <span>B2B Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Landscaping That Enhances Your Business Image
            </h1>
            
            <p className="text-xl text-[#C0C8CC] mb-8">
              Professional lawn maintenance, seasonal cleanup, and snow plowing for offices, retail centers, HOAs, and industrial facilities
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="bg-[#2D5016] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1E3A0F] transition-all flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer shadow-lg shadow-[#2D5016]/30"
              >
                <span>Schedule Consultation</span>
                <i className="ri-calendar-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-[#1A2424] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 flex items-center justify-center bg-[#1C2B2B] rounded-full mx-auto mb-6 border-2 border-[#8A9BA8]/30 shadow-lg">
                <div className="w-20 h-20 flex items-center justify-center bg-[#2D5016] rounded-full">
                  <i className="ri-building-line text-4xl text-white"></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Boost Curb Appeal</h3>
              <p className="text-[#C0C8CC] leading-relaxed">
                First impressions matter. Our professional landscaping creates an inviting atmosphere that attracts customers, impresses clients, and increases property value by up to 15%.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 flex items-center justify-center bg-[#1C2B2B] rounded-full mx-auto mb-6 border-2 border-[#8A9BA8]/30 shadow-lg">
                <div className="w-20 h-20 flex items-center justify-center bg-[#2D5016] rounded-full">
                  <i className="ri-shield-check-line text-4xl text-white"></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Reduce Liability</h3>
              <p className="text-[#C0C8CC] leading-relaxed">
                Proper maintenance prevents slip hazards, overgrown vegetation, and drainage issues. We're fully insured and follow all safety protocols to protect your business.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 flex items-center justify-center bg-[#1C2B2B] rounded-full mx-auto mb-6 border-2 border-[#8A9BA8]/30 shadow-lg">
                <div className="w-20 h-20 flex items-center justify-center bg-[#2D5016] rounded-full">
                  <i className="ri-money-dollar-circle-line text-4xl text-white"></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Predictable Budgeting</h3>
              <p className="text-[#C0C8CC] leading-relaxed">
                Fixed monthly rates with no surprise charges. Our transparent pricing and detailed contracts make budgeting simple and eliminate unexpected maintenance costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section id="services" className="bg-[#1C2B2B] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Commercial Services</h2>
            <p className="text-lg text-[#C0C8CC] max-w-3xl mx-auto">
              From routine lawn maintenance to seasonal cleanup and winter snow plowing, we provide complete solutions for commercial properties of all sizes.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tab Navigation */}
            <div className="lg:w-1/3">
              <div className="space-y-2 sticky top-24 bg-[#1A2424] p-4 rounded-xl border border-[#8A9BA8]/20">
                {Object.entries(services).map(([key, service]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left px-6 py-4 rounded-lg transition-all flex items-center space-x-3 cursor-pointer ${
                      activeTab === key 
                        ? 'bg-[#2D5016] border-l-4 border-[#B8A882] text-white font-semibold shadow-lg' 
                        : 'bg-[#1C2B2B] hover:bg-[#1C2B2B]/80 text-[#C0C8CC] hover:text-white border border-transparent hover:border-[#8A9BA8]/30'
                    }`}
                  >
                    <i className="ri-checkbox-circle-line text-xl"></i>
                    <span>{service.title}</span>
                    {key === 'lawn-maintenance' && (
                      <span className="ml-auto text-xs bg-[#B8A882] text-[#1C2B2B] px-2 py-1 rounded-full font-bold">CORE</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="lg:w-2/3">
              <div className="bg-[#1A2424] rounded-xl shadow-2xl overflow-hidden border border-[#8A9BA8]/20">
                <img 
                  src={services[activeTab as keyof typeof services].image}
                  alt={services[activeTab as keyof typeof services].title}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {services[activeTab as keyof typeof services].title}
                  </h3>
                  <p className="text-lg text-[#C0C8CC] mb-6">
                    {services[activeTab as keyof typeof services].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-4">What's Included:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services[activeTab as keyof typeof services].includes.map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <i className="ri-check-line text-[#2D5016] text-xl mt-0.5"></i>
                          <span className="text-[#C0C8CC]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-block bg-[#2D5016] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1E3A0F] transition-colors whitespace-nowrap cursor-pointer shadow-lg shadow-[#2D5016]/30"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Specializations */}
      <section className="bg-[#1A2424] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-lg text-[#C0C8CC]">Specialized expertise for your specific property type</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'ri-building-4-line', title: 'Office Parks', desc: 'Professional environments that reflect your corporate image' },
              { icon: 'ri-store-2-line', title: 'Retail Centers', desc: 'Attractive landscapes that draw customers and increase foot traffic' },
              { icon: 'ri-community-line', title: 'HOAs', desc: 'Consistent maintenance that enhances property values and resident satisfaction' },
              { icon: 'ri-hospital-line', title: 'Healthcare Facilities', desc: 'Healing environments with low-allergen, accessible landscapes' },
              { icon: 'ri-school-line', title: 'Educational Institutions', desc: 'Safe, beautiful grounds that support learning environments' },
              { icon: 'ri-factory-line', title: 'Industrial Sites', desc: 'Functional landscapes that meet compliance and safety requirements' }
            ].map((industry, index) => (
              <div key={index} className="bg-[#1C2B2B] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-[#8A9BA8]/20 hover:border-[#8A9BA8]/50 group">
                <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <i className={`${industry.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                <p className="text-[#C0C8CC]">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Client Testimonials */}
      <section className="bg-[#1C2B2B] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-[#2D5016]/20 border border-[#2D5016]/30 text-[#B8A882] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="ri-building-line mr-2"></i>
              Commercial Client Feedback
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Businesses Across Elkhart County</h2>
            <p className="text-lg text-[#C0C8CC] max-w-3xl mx-auto">
              Property managers, business owners, and HOA boards rely on Broadview for consistent, professional grounds maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {getTestimonialsByService('lawn-maintenance')
              .filter((t) => t.highlight?.includes('Commercial') || t.highlight?.includes('property manager') || t.highlight?.includes('communication'))
              .slice(0, 3)
              .map((t) => (
                <TestimonialCard key={t.id} testimonial={t} variant="featured" />
              ))}
            
            {/* Fallback if not enough filtered */}
            {getTestimonialsByService('general')
              .filter((t) => t.highlight?.includes('Property') || t.highlight?.includes('Full-service'))
              .slice(0, Math.max(0, 3 - (getTestimonialsByService('lawn-maintenance').filter((t) => t.highlight?.includes('Commercial') || t.highlight?.includes('property manager') || t.highlight?.includes('communication')).length)))
              .map((t) => (
                <TestimonialCard key={t.id} testimonial={t} variant="featured" />
              ))}
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-1">4.9</div>
              <div className="text-sm text-[#C0C8CC]">Average Rating</div>
            </div>
            <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-1">156+</div>
              <div className="text-sm text-[#C0C8CC]">Happy Customers</div>
            </div>
            <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-1">98%</div>
              <div className="text-sm text-[#C0C8CC]">Would Recommend</div>
            </div>
            <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-1">5+</div>
              <div className="text-sm text-[#C0C8CC]">Years in Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-[#1C2B2B] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Commitment to Excellence</h2>
            <p className="text-lg text-[#C0C8CC]">Professional service that enhances your property value</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A2424] p-8 rounded-xl shadow-lg border border-[#8A9BA8]/20">
              <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mb-6">
                <i className="ri-building-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Office Parks</h3>
              <p className="text-[#C0C8CC] leading-relaxed">
                We maintain professional environments that reflect your corporate image and create positive first impressions for clients and employees.
              </p>
            </div>

            <div className="bg-[#1A2424] p-8 rounded-xl shadow-lg border border-[#8A9BA8]/20">
              <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mb-6">
                <i className="ri-store-2-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Retail Centers</h3>
              <p className="text-[#C0C8CC] leading-relaxed">
                Attractive, well-maintained landscapes that draw customers and create inviting shopping experiences that keep them coming back.
              </p>
            </div>

            <div className="bg-[#1A2424] p-8 rounded-xl shadow-lg border border-[#8A9BA8]/20">
              <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mb-6">
                <i className="ri-community-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">HOA Communities</h3>
              <p className="text-[#C0C8CC] leading-relaxed">
                Consistent, reliable maintenance that enhances property values and keeps residents satisfied with their community appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Rich Text Section */}
      <section className="bg-[#1C2B2B] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Commercial Landscaping &amp; Grounds Maintenance in Elkhart County, Indiana</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Broadview Solutions delivers professional commercial landscaping and grounds maintenance services to businesses, office parks, retail centers, HOAs, healthcare facilities, and industrial properties throughout Elkhart County, Indiana. We understand that your property's exterior is a direct reflection of your brand — and we take that responsibility seriously.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Our commercial lawn maintenance programs are built around consistency and reliability. We work on a fixed schedule so your property always looks its best, whether clients are arriving for a meeting, customers are visiting your retail location, or residents are enjoying their community. Every visit includes professional mowing, precision edging, string trimming, hard surface cleanup, and a thorough final inspection.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Seasonal transitions require specialized attention for commercial properties. Our spring cleanup services prepare your grounds for the growing season — clearing winter debris, refreshing mulch beds, pruning overgrown shrubs, and removing early weeds. In the fall, we handle comprehensive leaf removal, bed cleanup, and winterization to protect your landscape investment through the cold months ahead.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                Winter weather in northern Indiana demands a proactive approach to snow and ice management. Our commercial snow plowing service includes 24/7 storm monitoring, priority dispatch for contracted clients, parking lot plowing, sidewalk clearing, and professional ice melt application. We help you maintain safe, accessible properties for employees, customers, and visitors throughout the winter season.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Business Case for Professional Commercial Grounds Care</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Studies consistently show that well-maintained commercial landscapes increase property values by up to 15%, improve customer perception, and contribute to higher employee satisfaction. First impressions are formed within seconds of arrival — and your grounds are the first thing visitors see. Investing in professional landscaping is investing in your business's image and bottom line.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Beyond aesthetics, proper grounds maintenance reduces liability exposure. Overgrown vegetation, uneven turf, and icy walkways create hazards that can lead to costly accidents and legal claims. Our team follows strict safety protocols and maintains comprehensive liability insurance, giving your business an added layer of protection with every service visit.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                We offer flexible commercial service agreements — monthly, seasonal, or annual — with transparent, fixed pricing that makes budgeting simple. No surprise invoices, no scope creep, no hidden fees. Our detailed service contracts outline exactly what's included, how often we visit, and what standards we're held to, so you always know what to expect.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                As a locally owned and operated company based in Goshen, Indiana, we bring genuine community investment to every commercial property we maintain. We're not a national franchise — we're your neighbors, and we care about the appearance of our shared community. That local pride drives us to deliver a higher standard of service on every job, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A0F] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Property?
          </h2>
          <p className="text-xl text-[#C0C8CC] mb-8">
            Schedule a free consultation and discover how professional landscaping can enhance your business image.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-[#1E3A0F] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#C0C8CC] transition-colors whitespace-nowrap cursor-pointer shadow-lg"
            >
              Get Free Consultation
            </Link>
            <a 
              href="tel:+15745963633" 
              className="bg-transparent border-2 border-[#8A9BA8] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 hover:border-[#C0C8CC] transition-colors whitespace-nowrap cursor-pointer"
            >
              Call (574) 596-3633
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}