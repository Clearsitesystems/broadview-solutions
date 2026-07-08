import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SeoHead from '../../components/feature/SeoHead';
import TestimonialCard from '../../components/feature/TestimonialCard';
import PromoBanner from '../../components/feature/PromoBanner';
import { getTestimonialsByService } from '../../mocks/testimonials';

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LawnCareService",
    "name": "Broadview Solutions",
    "telephone": "+15745963633",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Goshen",
      "addressRegion": "IN",
      "postalCode": "46526",
      "addressCountry": "US"
    },
    "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Verified Customer" },
      "reviewBody": "Alex and his team serviced our property in Bristol, Indiana, and they consistently did an excellent job. They're thorough, professional, and always make sure to clean up the grass clippings at our request and blow off our porches before they leave. I would definitely recommend them to others."
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Broadview Solutions Services",
    "description": "Professional lawn maintenance, seasonal cleanup, and snow plowing services in Elkhart County, Indiana.",
    "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Lawn Maintenance",
          "description": "Weekly or bi-weekly professional mowing, edging, trimming, and weed control for residential and commercial properties.",
          "provider": { "@type": "LocalBusiness", "name": "Broadview Solutions" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Seasonal Cleanup",
          "description": "Spring and fall cleanup services including leaf removal, bed preparation, mulch installation, and debris cleanup.",
          "provider": { "@type": "LocalBusiness", "name": "Broadview Solutions" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Snow Plowing",
          "description": "24/7 winter snow plowing, sidewalk clearing, and ice melt application for residential and commercial properties.",
          "provider": { "@type": "LocalBusiness", "name": "Broadview Solutions" }
        }
      }
    ]
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
        "name": "Services",
        "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services`
      }
    ]
  }
];

export default function Services() {
  const services = [
    {
      slug: 'lawn-maintenance',
      icon: 'ri-plant-line',
      title: 'Lawn Maintenance',
      description: 'Keep your grass healthy and beautiful with regular professional care including mowing, edging, trimming, and weed control.',
      image: 'https://readdy.ai/api/search-image?query=professional%20lawn%20mowing%20service%20landscaper%20cutting%20grass%20commercial%20mower%20manicured%20lawn%20grounds%20maintenance%20worker%20uniform%20clean%20stripes%20healthy%20green%20grass&width=600&height=400&seq=lm001&orientation=landscape',
      features: ['Weekly or bi-weekly mowing', 'Precision edging', 'String trimming', 'Weed control'],
      isCoreService: true
    },
    {
      slug: 'seasonal-cleanup',
      icon: 'ri-leaf-line',
      title: 'Seasonal Cleanup',
      description: 'Prepare your property for changing seasons with comprehensive spring and fall cleanup services.',
      image: 'https://readdy.ai/api/search-image?query=seasonal%20yard%20cleanup%20fall%20leaves%20removal%20spring%20cleanup%20landscaping%20service%20professional%20grounds%20maintenance%20leaf%20collection%20property%20preparation&width=600&height=400&seq=sc001&orientation=landscape',
      features: ['Spring bed preparation', 'Fall leaf removal', 'Debris cleanup', 'Mulch installation', 'Seasonal color']
    },
    {
      slug: 'snow-plowing',
      icon: 'ri-snowy-line',
      title: 'Snow Plowing',
      description: 'Reliable winter services that keep your property safe and accessible during snow and ice events.',
      image: 'https://readdy.ai/api/search-image?query=snow%20removal%20service%20plow%20truck%20clearing%20parking%20lot%20winter%20maintenance%20ice%20management%20commercial%20snow%20plowing%20safe%20access&width=600&height=400&seq=sr001&orientation=landscape',
      features: ['24/7 monitoring', 'Plowing services', 'Sidewalk clearing', 'Ice melt application', 'Priority contracts']
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C2B2B]">
      <SeoHead
        title="Lawn Care & Snow Plowing Services | Broadview Solutions"
        description="Professional lawn maintenance, seasonal cleanup & snow plowing services in Goshen, Elkhart & Bristol, Indiana. Licensed & insured. Call (574) 596-3633 for a free estimate."
        keywords="lawn maintenance Goshen Indiana, seasonal cleanup Elkhart County, snow plowing services Indiana, professional landscaping services Broadview Solutions"
        canonical="/services"
        ogTitle="Professional Property Maintenance Services | Broadview Solutions"
        ogDescription="Lawn maintenance, seasonal cleanup & snow plowing across Elkhart County, IN. Licensed, insured & family-owned. Free estimates."
        schema={servicesSchema}
      />
      <Navbar />

      <PromoBanner />

      {/* Hero Section */}
      <section className="relative min-h-[22rem] flex items-center pt-12 pb-12">
        <img 
          src="https://readdy.ai/api/search-image?query=comprehensive%20landscaping%20services%20professional%20grounds%20maintenance%20variety%20of%20landscape%20work%20commercial%20residential%20property%20care%20full%20service%20landscaping%20company&width=1920&height=600&seq=svchero001&orientation=landscape" 
          alt="Our Services" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2424]/95 via-[#1C2B2B]/90 to-[#1A2424]/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Professional Property Maintenance Services
          </h1>
          <p className="text-base sm:text-xl text-[#C0C8CC] max-w-3xl mx-auto">
            Expert lawn care, seasonal cleanup, and snow plowing services to keep your property pristine year-round
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#1A2424] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Core Service - Full Width Featured */}
          <div className="mb-12">
            <Link 
              to="/services/lawn-maintenance"
              className="group bg-gradient-to-br from-[#2D5016] to-[#1C2B2B] rounded-xl shadow-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(45,80,22,0.5)] transition-all transform hover:-translate-y-2 cursor-pointer border-2 border-[#2D5016] relative block"
            >
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-[#D4AF37] text-[#1A2424] px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-2 shadow-lg">
                  <i className="ri-star-fill"></i>
                  <span>OUR CORE SERVICE</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <img
                    src={services[0].image}
                    alt={services[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={600}
                    height={400}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1A2424]/60 to-transparent"></div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-6 ring-4 ring-[#8A9BA8]/40">
                    <i className={`${services[0].icon} text-3xl text-[#2D5016]`}></i>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {services[0].title}
                  </h3>
                  <p className="text-[#C0C8CC] mb-6 leading-relaxed text-lg">
                    {services[0].description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {services[0].features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 text-[#8A9BA8]">
                        <i className="ri-check-line text-xl text-[#D4AF37]"></i>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-white font-semibold text-lg group-hover:text-[#D4AF37] transition-colors">
                    <span>Learn More About Our Core Service</span>
                    <i className="ri-arrow-right-line ml-2 text-xl group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Supporting Services - Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.slice(1).map((service, index) => (
              <Link 
                key={index}
                to={`/services/${service.slug}`}
                className="group bg-[#1C2B2B] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border-2 border-[#8A9BA8]/20 hover:border-[#2D5016]/60"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2424]/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#2D5016] rounded-full mb-2 ring-2 ring-[#8A9BA8]/40">
                      <i className={`${service.icon} text-2xl text-white`}></i>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#2D5016] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#C0C8CC] mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-[#8A9BA8]">
                        <i className="ri-check-line text-[#2D5016]"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-[#2D5016] font-semibold group-hover:underline">
                    <span>Learn More</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#1C2B2B] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Broadview Solutions?</h2>
            <p className="text-lg text-[#C0C8CC] max-w-3xl mx-auto">
              We combine expertise, reliability, and customer service to deliver exceptional landscaping results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-award-line',
                title: 'Proven Expertise',
                desc: 'Experienced professionals in all aspects of landscaping and property maintenance'
              },
              {
                icon: 'ri-team-line',
                title: 'Professional Team',
                desc: 'Trained professionals who take pride in their work'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Licensed & Insured',
                desc: 'Full coverage for your peace of mind and property protection'
              },
              {
                icon: 'ri-customer-service-line',
                title: 'Responsive Service',
                desc: 'Quick communication and flexible scheduling to meet your needs'
              },
              {
                icon: 'ri-leaf-line',
                title: 'Eco-Friendly',
                desc: 'Sustainable practices that protect the environment'
              },
              {
                icon: 'ri-money-dollar-circle-line',
                title: 'Fair Pricing',
                desc: 'Transparent quotes with no hidden fees or surprises'
              },
              {
                icon: 'ri-tools-line',
                title: 'Modern Equipment',
                desc: 'Professional-grade tools for superior results'
              },
              {
                icon: 'ri-checkbox-circle-line',
                title: 'Satisfaction Guaranteed',
                desc: 'We stand behind our work with a quality guarantee'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-[#2D5016] rounded-full mx-auto mb-4 ring-4 ring-[#8A9BA8]/30">
                  <i className={`${benefit.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-[#8A9BA8] text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials by Service */}
      <section className="bg-[#1C2B2B] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-accent uppercase text-sm font-semibold tracking-wider mb-4">Real Results</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-offwhite mb-4">
              Why Customers Choose <span className="text-primary italic">Broadview</span>
            </h2>
            <p className="text-lg text-silver-light max-w-3xl mx-auto">
              Hear from homeowners and businesses across Elkhart County who trust us with their properties
            </p>
          </div>

          {/* Lawn Maintenance Testimonials */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-lg">
                <i className="ri-plant-line text-primary text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-offwhite">Lawn Maintenance Reviews</h3>
              <div className="ml-auto text-sm text-silver">
                {getTestimonialsByService('lawn-maintenance').length} verified reviews
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getTestimonialsByService('lawn-maintenance').slice(0, 2).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} variant="default" />
              ))}
            </div>
          </div>

          {/* Seasonal Cleanup Testimonials */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-lg">
                <i className="ri-leaf-line text-accent text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-offwhite">Seasonal Cleanup Reviews</h3>
              <div className="ml-auto text-sm text-silver">
                {getTestimonialsByService('seasonal-cleanup').length} verified reviews
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getTestimonialsByService('seasonal-cleanup').slice(0, 2).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} variant="default" />
              ))}
            </div>
          </div>

          {/* Snow Plowing Testimonials */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-lg">
                <i className="ri-snowy-line text-accent text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-offwhite">Snow Plowing Reviews</h3>
              <div className="ml-auto text-sm text-silver">
                {getTestimonialsByService('snow-plowing').length} verified reviews
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getTestimonialsByService('snow-plowing').slice(0, 2).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} variant="default" />
              ))}
            </div>
          </div>

          {/* General / Full-Service Testimonials */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-lg">
                <i className="ri-heart-line text-primary text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-offwhite">Full-Service & General Reviews</h3>
              <div className="ml-auto text-sm text-silver">
                {getTestimonialsByService('general').length} verified reviews
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getTestimonialsByService('general').slice(0, 2).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} variant="default" />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-accent hover:text-offwhite text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>See All {156}+ Customer Reviews</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Rich Text Section */}
      <section className="bg-[#1A2424] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="w-14 h-14 flex items-center justify-center bg-[#2D5016] rounded-full mb-5">
                <i className="ri-plant-line text-2xl text-white"></i>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Lawn Maintenance in Elkhart County</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Our lawn maintenance service is the foundation of everything we do at Broadview Solutions. We provide weekly and bi-weekly mowing programs for residential and commercial properties throughout Goshen, Elkhart, Bristol, Middlebury, and Wakarusa, Indiana. Every visit includes professional mowing at the correct height for your grass type, precision edging along all hard surfaces, string trimming around obstacles, and a complete blowdown cleanup before we leave.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Healthy grass starts with consistent, proper cutting. We monitor your lawn's condition on every visit and deliver reliable mowing, edging, trimming, and cleanup that keeps your turf looking dense, green, and well-kept through Indiana's growing season. Our team uses commercial-grade equipment calibrated for a clean, even cut that promotes healthy growth rather than stressing the grass.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                Whether you manage a single-family home or a large commercial campus, our lawn maintenance program is tailored to your property's specific needs, size, and schedule. We offer flexible service frequencies and transparent, fixed pricing with no hidden fees or surprise charges.
              </p>
            </div>
            <div>
              <div className="w-14 h-14 flex items-center justify-center bg-[#2D5016] rounded-full mb-5">
                <i className="ri-leaf-line text-2xl text-white"></i>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Seasonal Cleanup Services in Northern Indiana</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Northern Indiana's four distinct seasons each bring unique demands for your landscape. Our seasonal cleanup services are designed to transition your property smoothly and efficiently between seasons, protecting your lawn and landscape investment year-round. Spring cleanup is one of the most impactful services we offer — clearing winter debris, refreshing mulch beds, pruning overgrown shrubs, and preparing garden beds for new growth sets the tone for the entire growing season.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Fall cleanup is equally critical. Leaving leaves on your lawn through winter can smother grass, promote disease, and create a messy, uninviting appearance. Our fall cleanup service includes thorough leaf removal, final mowing, bed cleanup, and winterization prep that protects your turf and landscape through the cold months ahead. We haul away all debris, leaving your property clean and ready for winter.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                We also offer mulch installation, seasonal color planting, storm damage cleanup, and holiday decoration services as part of our seasonal offerings. Whether you need a one-time cleanup or a recurring seasonal program, we provide flexible options to fit your schedule and budget.
              </p>
            </div>
            <div>
              <div className="w-14 h-14 flex items-center justify-center bg-[#2D5016] rounded-full mb-5">
                <i className="ri-snowy-line text-2xl text-white"></i>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Snow Plowing &amp; Winter Services in Elkhart County</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Elkhart County winters can bring significant snowfall and dangerous ice conditions that make driveways, parking lots, and walkways hazardous. Broadview Solutions provides professional snow plowing and winter maintenance services for both residential and commercial properties, ensuring safe, accessible grounds throughout the winter season. We monitor weather forecasts 24/7 and dispatch our crews promptly after snowfall events so your property is cleared before the morning rush.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Our winter services include parking lot plowing, driveway clearing, sidewalk and walkway shoveling, and professional ice melt application. For commercial clients, we offer priority seasonal contracts that guarantee rapid response times and consistent service throughout the winter. Residential clients can choose between seasonal contracts for predictable budgeting or on-call service for flexibility.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                We use professional-grade plowing equipment and environmentally responsible ice melt products that are effective on ice without causing unnecessary damage to your pavement, landscaping, or surrounding vegetation. Our goal is to keep your property safe, accessible, and looking professional even in the most challenging winter conditions northern Indiana can deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2D5016] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#C0C8CC] mb-8">
            Contact us today for a free consultation and discover how we can transform your property
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-[#2D5016] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#F4F1EC] transition-colors whitespace-nowrap cursor-pointer"
            >
              Request Free Estimate
            </Link>
            <a 
              href="tel:+15745963633" 
              className="bg-transparent border-2 border-[#8A9BA8] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
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