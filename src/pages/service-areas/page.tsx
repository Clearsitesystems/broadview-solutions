import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SeoHead from '../../components/feature/SeoHead';

const serviceAreasSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Broadview Solutions",
    "description": "Professional lawn care, seasonal cleanup, and snow plowing serving Goshen, Elkhart, Bristol, Middlebury, and Wakarusa in Elkhart County, Indiana.",
    "telephone": "+15745963633",
    "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/service-areas`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Goshen",
      "addressRegion": "IN",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.5742,
      "longitude": -85.8326
    },
    "areaServed": [
      { "@type": "City", "name": "Goshen", "containedInPlace": { "@type": "State", "name": "Indiana" } },
      { "@type": "City", "name": "Elkhart", "containedInPlace": { "@type": "State", "name": "Indiana" } },
      { "@type": "City", "name": "Bristol", "containedInPlace": { "@type": "State", "name": "Indiana" } },
      { "@type": "City", "name": "Middlebury", "containedInPlace": { "@type": "State", "name": "Indiana" } },
      { "@type": "City", "name": "Wakarusa", "containedInPlace": { "@type": "State", "name": "Indiana" } }
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
        "name": "Service Areas",
        "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/service-areas`
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you serve all neighborhoods within Goshen, Elkhart, Bristol, Middlebury, and Wakarusa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we serve properties throughout all five cities and their surrounding areas within Elkhart County. This includes both established neighborhoods and newer developments on the outskirts of each city. If you're unsure whether your specific address falls within our service area, simply give us a call at (574) 596-3633 or submit a contact form and we'll confirm availability right away."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer services to rural properties outside city limits in Elkhart County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many cases, yes. We serve a number of rural and semi-rural properties in Elkhart County, particularly those located along major routes between our five primary service cities. Service availability for rural properties depends on location and the scope of work needed. Contact us to discuss your property and we'll let you know if we can accommodate your needs."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a free estimate for lawn care or snow plowing in my area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Getting a free estimate is easy. You can call us directly at (574) 596-3633, fill out our online contact form, or send us an email. We'll schedule a time to visit your property, assess your needs, and provide a detailed, no-obligation quote. We typically respond to all estimate requests within one business day."
        }
      },
      {
        "@type": "Question",
        "name": "Are your lawn care services available for both residential and commercial properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We serve both residential homeowners and commercial property managers throughout Elkhart County. Our commercial clients include office buildings, retail centers, apartment complexes, HOA communities, industrial facilities, and more. We have the equipment and staffing to handle properties of all sizes, from small residential lots to large commercial campuses."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Broadview Solutions different from other lawn care companies in Elkhart County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We're a locally owned and operated company — we live and work in the same communities we serve. That means we're genuinely invested in the appearance of our neighborhoods, we understand the specific challenges of northern Indiana's climate and soil conditions, and we're accountable to our neighbors in a way that larger national companies simply aren't. We also offer transparent pricing, consistent crews, and a satisfaction guarantee on all of our work."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer recurring lawn care contracts or one-time services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both. Many of our clients choose recurring seasonal maintenance programs for the best results and most convenient experience — we handle everything on a regular schedule so you never have to think about it. But we also provide one-time services for specific needs, including seasonal cleanups, one-time mowing, mulch installation, and snow plowing on an as-needed basis. We're flexible and happy to work with whatever arrangement fits your needs and budget."
        }
      }
    ]
  }
];

export default function ServiceAreas() {
  const serviceAreas = [
    {
      id: 'goshen',
      city: 'Goshen',
      state: 'Indiana',
      mapQuery: 'Goshen,Indiana',
      neighborhoods: ['Downtown Goshen', 'College Avenue District', 'Millrace Park Area', 'Greencroft Community'],
      description: 'Broadview Solutions proudly serves Goshen, Indiana with comprehensive lawn care, landscaping, and snow removal services. As Elkhart County\'s Maple City, Goshen homeowners and businesses trust us for professional grounds maintenance, seasonal cleanup, spring and fall yard preparation, and reliable winter snow plowing. From historic downtown properties to growing residential communities, we deliver consistent, quality service throughout Goshen year-round.',
      image: 'https://readdy.ai/api/search-image?query=goshen%20indiana%20downtown%20maple%20city%20residential%20neighborhood%20tree%20lined%20streets%20community%20parks%20historic%20homes%20suburban%20landscape%20northern%20indiana&width=600&height=400&seq=goshen001&orientation=landscape'
    },
    {
      id: 'elkhart',
      city: 'Elkhart',
      state: 'Indiana',
      mapQuery: 'Elkhart,Indiana',
      neighborhoods: ['Downtown Elkhart', 'Beardsley Avenue', 'Riverwalk District', 'Prairie Heights'],
      description: 'Serving Elkhart, Indiana with expert landscaping, lawn maintenance, and snow removal services for residential and commercial properties. Elkhart\'s diverse neighborhoods—from riverfront homes to established suburban areas—rely on Broadview Solutions for professional grounds care, seasonal yard services, mulching, trimming, and dependable winter snow clearing. We understand Elkhart\'s unique landscape needs and deliver tailored solutions across the city.',
      image: 'https://readdy.ai/api/search-image?query=elkhart%20indiana%20residential%20neighborhood%20suburban%20homes%20community%20streets%20northern%20indiana%20city%20landscape%20family%20neighborhoods%20tree%20lined%20properties&width=600&height=400&seq=elkhart001&orientation=landscape'
    },
    {
      id: 'bristol',
      city: 'Bristol',
      state: 'Indiana',
      mapQuery: 'Bristol,Indiana',
      neighborhoods: ['Downtown Bristol', 'Bristol Gardens', 'Vistula Road Area', 'County Road 17'],
      description: 'Broadview Solutions provides trusted lawn care, landscaping, and snow removal services throughout Bristol, Indiana. Bristol homeowners and local businesses count on us for thorough lawn mowing, edging, seasonal cleanup, leaf removal, and prompt winter snow plowing. Our team knows Bristol\'s community well and delivers personalized service that keeps properties looking their best in every season across Elkhart County.',
      image: 'https://readdy.ai/api/search-image?query=bristol%20indiana%20small%20town%20residential%20area%20suburban%20neighborhood%20community%20homes%20northern%20indiana%20rural%20landscape%20peaceful%20streets%20family%20community&width=600&height=400&seq=bristol001&orientation=landscape'
    },
    {
      id: 'middlebury',
      city: 'Middlebury',
      state: 'Indiana',
      mapQuery: 'Middlebury,Indiana',
      neighborhoods: ['Downtown Middlebury', 'Crystal Valley', 'Northridge', 'US 20 Corridor'],
      description: 'Middlebury, Indiana residents and businesses trust Broadview Solutions for professional lawn maintenance, landscaping design, seasonal yard services, and reliable snow removal. From charming residential neighborhoods to commercial properties along the US 20 corridor, we provide consistent, high-quality grounds care tailored to Middlebury\'s community. Our local expertise ensures your property stays beautiful and well-maintained throughout the year in Elkhart County.',
      image: 'https://readdy.ai/api/search-image?query=middlebury%20indiana%20small%20town%20residential%20neighborhood%20suburban%20homes%20community%20landscape%20northern%20indiana%20peaceful%20streets%20family%20neighborhoods&width=600&height=400&seq=middlebury001&orientation=landscape'
    },
    {
      id: 'wakarusa',
      city: 'Wakarusa',
      state: 'Indiana',
      mapQuery: 'Wakarusa,Indiana',
      neighborhoods: ['Downtown Wakarusa', 'Waterford Mills Area', 'County Road 109', 'State Road 19'],
      description: 'Delivering quality landscaping, lawn care, and snow removal services to Wakarusa, Indiana and surrounding rural properties in Elkhart County. Wakarusa\'s close-knit community relies on Broadview Solutions for dependable grounds maintenance, seasonal cleanup, mulching, trimming, and winter snow clearing. We understand the unique needs of both residential and rural properties and provide personalized service that reflects our commitment to the Wakarusa area.',
      image: 'https://readdy.ai/api/search-image?query=wakarusa%20indiana%20small%20town%20residential%20area%20rural%20community%20homes%20northern%20indiana%20countryside%20landscape%20peaceful%20neighborhood%20family%20properties&width=600&height=400&seq=wakarusa001&orientation=landscape'
    }
  ];

  const handleCityClick = (cityId: string) => {
    const element = document.getElementById(cityId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1C2B2B]">
      <SeoHead
        title="Lawn Care Service Areas | Elkhart County, IN"
        description="Broadview Solutions serves Goshen, Elkhart, Bristol, Middlebury & Wakarusa, Indiana with professional lawn care, seasonal cleanup & snow plowing. Elkhart County's trusted local team. Call (574) 596-3633."
        keywords="lawn care service areas Elkhart County Indiana, landscaping Goshen Elkhart Bristol, snow plowing Middlebury Wakarusa Indiana"
        canonical="/service-areas"
        ogTitle="Service Areas — Elkhart County Indiana | Broadview Solutions"
        ogDescription="Serving Goshen, Elkhart, Bristol, Middlebury & Wakarusa with professional lawn care, seasonal cleanup & snow plowing. Free estimates."
        schema={serviceAreasSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center pt-24 pb-12 md:pt-0 md:h-96 mt-0 md:mt-20">
        <img 
          src="https://readdy.ai/api/search-image?query=northern%20indiana%20elkhart%20county%20regional%20map%20service%20area%20coverage%20local%20community%20service%20territory%20neighborhood%20coverage%20area%20map%20professional%20service%20region&width=1920&height=600&seq=sahero002&orientation=landscape"
          alt="Lawn Care & Snow Removal Service Areas in Northern Indiana"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={600}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2424]/95 via-[#1C2B2B]/90 to-[#1A2424]/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Lawn Care &amp; Snow Removal Service Areas — Elkhart County, Indiana
          </h1>
          <p className="text-base md:text-xl text-[#C0C8CC] max-w-3xl mx-auto">
            Professional landscaping, grounds maintenance, and seasonal services across Goshen, Elkhart, Bristol, Middlebury &amp; Wakarusa — with local expertise and personalized care
          </p>
        </div>
      </section>

      {/* Company Facts Section */}
      <section className="bg-[#1A2424] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#1C2B2B] rounded-2xl p-8 border-2 border-[#8A9BA8]/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mx-auto mb-4 ring-4 ring-[#8A9BA8]/30">
                  <i className="ri-calendar-line text-3xl text-white"></i>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Since 2020</h3>
                <p className="text-[#C0C8CC]">Established and Growing</p>
              </div>
              
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mx-auto mb-4 ring-4 ring-[#8A9BA8]/30">
                  <i className="ri-team-line text-3xl text-white"></i>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">10+ Years</h3>
                <p className="text-[#C0C8CC]">Combined Team Experience</p>
              </div>
              
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mx-auto mb-4 ring-4 ring-[#8A9BA8]/30">
                  <i className="ri-map-pin-line text-3xl text-white"></i>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">5 Cities</h3>
                <p className="text-[#C0C8CC]">Across Elkhart County</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="bg-[#1A2424] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Map */}
            <div className="lg:col-span-3">
              <div className="bg-[#1C2B2B] rounded-2xl p-6 md:p-8 h-full border-2 border-[#8A9BA8]/20">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Elkhart County Service Coverage</h2>
                <div className="relative h-72 md:h-96 bg-[#1A2424] rounded-xl overflow-hidden shadow-inner border border-[#8A9BA8]/30">
                  <iframe
                    src="https://maps.google.com/maps?q=Elkhart+County,Indiana&t=&z=10&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Elkhart County Service Area Map"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Service Area List */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cities We Serve in Elkhart County</h2>
              <div className="space-y-3 md:space-y-4">
                {serviceAreas.map((area, index) => (
                  <button
                    key={index}
                    onClick={() => handleCityClick(area.id)}
                    className="w-full text-left bg-[#1C2B2B] border-2 border-[#8A9BA8]/30 rounded-xl p-4 md:p-6 hover:border-[#2D5016] hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#2D5016] transition-colors">
                        {area.city}, {area.state}
                      </h3>
                      <i className="ri-map-pin-fill text-xl md:text-2xl text-[#2D5016]"></i>
                    </div>
                    <p className="text-sm text-[#C0C8CC]">
                      {area.neighborhoods.slice(0, 2).join(', ')}
                      {area.neighborhoods.length > 2 && ` +${area.neighborhoods.length - 2} more`}
                    </p>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 md:mt-8 bg-[#1C2B2B] p-5 md:p-6 rounded-xl border-2 border-[#8A9BA8]/30">
                <p className="text-[#C0C8CC] mb-4 text-sm md:text-base">
                  <strong className="text-white">Don't see your area?</strong> We may still serve you! Contact us to check service availability.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-[#2D5016] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E3A0F] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Check Availability
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Cards */}
      <section className="bg-[#1C2B2B] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Landscaping Services Across Northern Indiana</h2>
            <p className="text-lg text-[#C0C8CC]">
              Lawn care, seasonal cleanup, snow removal, and grounds maintenance in your Elkhart County community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                id={area.id}
                className="group bg-[#1A2424] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-[#8A9BA8]/20 hover:border-[#8A9BA8]/60 scroll-mt-32"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={area.image}
                    alt={`Lawn Care & Landscaping Services in ${area.city}, ${area.state}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2424]/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{area.city}, {area.state}</h3>
                    <div className="flex items-center space-x-2 text-[#C0C8CC] text-sm">
                      <i className="ri-map-pin-line text-[#2D5016]"></i>
                      <span>Elkhart County</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-[#C0C8CC] mb-4 text-sm leading-relaxed">
                    {area.description}
                  </p>
                  
                  {/* City Map Embed */}
                  <div className="mb-4 h-48 rounded-lg overflow-hidden border border-[#8A9BA8]/30">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(area.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${area.city} Map`}
                    ></iframe>
                  </div>
                  
                  <h4 className="font-semibold text-white mb-3">Areas Served:</h4>
                  <ul className="space-y-2 mb-6">
                    {area.neighborhoods.map((neighborhood, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-[#C0C8CC]">
                        <i className="ri-checkbox-circle-line text-[#2D5016]"></i>
                        <span>{neighborhood}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3 pt-4 border-t border-[#8A9BA8]/30">
                    <Link 
                      to="/contact" 
                      className="block w-full text-center bg-[#2D5016] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#1E3A0F] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Get Free Estimate
                    </Link>
                    <a 
                      href="tel:+15745963633" 
                      className="block w-full text-center bg-transparent border-2 border-[#8A9BA8] text-white px-4 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-phone-line"></i>
                      <span>(574) 596-3633</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="bg-[#1A2424] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Explore Our Services</h2>
            <p className="text-lg text-[#C0C8CC]">
              Discover the full range of professional landscaping and grounds maintenance services we offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              to="/services" 
              className="bg-[#1C2B2B] border-2 border-[#8A9BA8]/30 rounded-xl p-8 hover:border-[#2D5016] hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mb-4 ring-4 ring-[#8A9BA8]/30">
                <i className="ri-scissors-cut-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#2D5016] transition-colors">
                Our Services
              </h3>
              <p className="text-[#C0C8CC] mb-4">
                View our complete list of lawn care, landscaping, seasonal cleanup, and snow removal services.
              </p>
              <span className="text-[#2D5016] font-semibold flex items-center space-x-2">
                <span>Learn More</span>
                <i className="ri-arrow-right-line"></i>
              </span>
            </Link>

            <Link 
              to="/commercial" 
              className="bg-[#1C2B2B] border-2 border-[#8A9BA8]/30 rounded-xl p-8 hover:border-[#2D5016] hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mb-4 ring-4 ring-[#8A9BA8]/30">
                <i className="ri-building-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#2D5016] transition-colors">
                Commercial Services
              </h3>
              <p className="text-[#C0C8CC] mb-4">
                Professional grounds maintenance for businesses, offices, and commercial properties.
              </p>
              <span className="text-[#2D5016] font-semibold flex items-center space-x-2">
                <span>Learn More</span>
                <i className="ri-arrow-right-line"></i>
              </span>
            </Link>

            <Link 
              to="/contact" 
              className="bg-[#1C2B2B] border-2 border-[#8A9BA8]/30 rounded-xl p-8 hover:border-[#2D5016] hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mb-4 ring-4 ring-[#8A9BA8]/30">
                <i className="ri-mail-send-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#2D5016] transition-colors">
                Get Free Estimate
              </h3>
              <p className="text-[#C0C8CC] mb-4">
                Contact us today for a free consultation and personalized quote for your property.
              </p>
              <span className="text-[#2D5016] font-semibold flex items-center space-x-2">
                <span>Contact Us</span>
                <i className="ri-arrow-right-line"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="bg-[#1C2B2B] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Local Expertise Matters in Northern Indiana</h2>
            <p className="text-lg text-[#C0C8CC] max-w-3xl mx-auto">
              Our deep understanding of Elkhart County's climate, soil conditions, and community needs ensures superior landscaping results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-[#2D5016] rounded-full mx-auto mb-4 ring-4 ring-[#8A9BA8]/30">
                <i className="ri-plant-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Climate Knowledge</h3>
              <p className="text-[#C0C8CC]">
                We understand Northern Indiana's weather patterns, growing seasons, and which plants thrive in your specific microclimate.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-[#2D5016] rounded-full mx-auto mb-4 ring-4 ring-[#8A9BA8]/30">
                <i className="ri-community-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community Connections</h3>
              <p className="text-[#C0C8CC]">
                As local residents ourselves, we're invested in making our community beautiful and take pride in every property.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-[#2D5016] rounded-full mx-auto mb-4 ring-4 ring-[#8A9BA8]/30">
                <i className="ri-time-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quick Response</h3>
              <p className="text-[#C0C8CC]">
                Being local means faster response times for emergencies, seasonal changes, and your service needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Rich Text Section */}
      <section className="bg-[#1A2424] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Lawn Care &amp; Landscaping Services Across Elkhart County, Indiana</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Broadview Solutions is Elkhart County's trusted local provider of professional lawn care, seasonal cleanup, and snow plowing services. We serve homeowners and businesses in Goshen, Elkhart, Bristol, Middlebury, and Wakarusa — bringing the same high standard of quality and reliability to every community we work in. As a locally owned and operated company, we're deeply invested in the appearance and well-being of the neighborhoods we call home.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Our service area covers the full breadth of Elkhart County, from the urban neighborhoods of Elkhart and Goshen to the quieter residential streets of Bristol and Wakarusa. We understand that each community has its own character, and we tailor our approach to fit the specific needs of each property and client we serve. Whether you're a homeowner in a historic Goshen neighborhood or a business owner managing a commercial campus in Elkhart, we have the experience and equipment to deliver outstanding results.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Northern Indiana's climate demands a year-round approach to property maintenance. Our lawn maintenance programs run from early spring through late fall, keeping your grass healthy, green, and well-manicured throughout the growing season. When winter arrives, our snow plowing service transitions seamlessly to keep your property safe and accessible through every storm. And our seasonal cleanup services bridge the gaps — preparing your landscape for each new season with thorough, professional care.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                We are fully licensed, bonded, and insured, and we bring commercial-grade equipment to every job. Our team is trained, professional, and committed to leaving every property better than we found it. We offer free estimates with no obligation, transparent pricing with no hidden fees, and a satisfaction guarantee on all of our work.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Serving Goshen, Elkhart, Bristol, Middlebury &amp; Wakarusa</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                <strong className="text-white">Goshen, Indiana</strong> — As Elkhart County's county seat and the Maple City, Goshen is home to a diverse mix of historic neighborhoods, growing residential developments, and thriving commercial districts. We provide comprehensive lawn care and grounds maintenance services throughout Goshen, from the tree-lined streets near downtown to the newer subdivisions on the city's outskirts.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                <strong className="text-white">Elkhart, Indiana</strong> — Indiana's RV capital is also home to thousands of residential and commercial properties that rely on professional grounds care. Our Elkhart clients range from single-family homeowners along the St. Joseph River to large commercial property managers overseeing multi-building campuses. We understand Elkhart's unique landscape needs and deliver tailored solutions across the city.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                <strong className="text-white">Bristol, Indiana</strong> — This charming Elkhart County community is where many of our longest-standing client relationships were built. Bristol homeowners trust us for consistent, reliable lawn care that keeps their properties looking their best season after season. Our team knows Bristol's neighborhoods well and delivers personalized service that reflects our genuine care for the community.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                <strong className="text-white">Middlebury &amp; Wakarusa, Indiana</strong> — These close-knit communities in the heart of Elkhart County rely on Broadview Solutions for dependable grounds maintenance, seasonal cleanup, and winter snow removal. We serve both residential properties and commercial clients along the US 20 corridor and State Road 19, bringing the same professional standards to every property regardless of size or location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Season Section */}
      <section className="bg-[#1C2B2B] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Year-Round Lawn Care Services in Elkhart County</h2>
            <p className="text-lg text-[#C0C8CC] max-w-3xl mx-auto">
              From the first spring thaw to the last winter storm, Broadview Solutions keeps properties across Goshen, Elkhart, Bristol, Middlebury, and Wakarusa looking their best in every season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#1A2424] rounded-xl p-8 border-2 border-[#8A9BA8]/20">
              <div className="flex items-center space-x-4 mb-5">
                <div className="w-14 h-14 flex items-center justify-center bg-[#2D5016] rounded-full ring-4 ring-[#8A9BA8]/20 flex-shrink-0">
                  <i className="ri-sun-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Spring &amp; Summer Services</h3>
              </div>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Spring is the most important season for setting your Elkhart County property up for a successful year. Our spring cleanup services include debris removal, edging, and the first mowing of the season. We remove early weeds by hand to prevent crabgrass and other annual weeds before they spread.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Through the summer months, our regular lawn maintenance program keeps your grass at the ideal height and ensures your property always looks well-maintained. We adjust mowing frequency and height based on growth rates and weather conditions, and we're always watching for signs of pest pressure or drought stress.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                Mulch installation in spring is one of the most cost-effective investments you can make for your landscape beds. Fresh mulch suppresses weeds, retains soil moisture, regulates soil temperature, and gives your property a clean, finished appearance. We install mulch throughout our service area in Goshen, Elkhart, Bristol, Middlebury, and Wakarusa.
              </p>
            </div>

            <div className="bg-[#1A2424] rounded-xl p-8 border-2 border-[#8A9BA8]/20">
              <div className="flex items-center space-x-4 mb-5">
                <div className="w-14 h-14 flex items-center justify-center bg-[#2D5016] rounded-full ring-4 ring-[#8A9BA8]/20 flex-shrink-0">
                  <i className="ri-snowy-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Fall &amp; Winter Services</h3>
              </div>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Fall is the best time to invest in your lawn's long-term health. Our fall cleanup services include thorough leaf removal, final mowing, bed cleanup, and winterization of landscape features to protect your turf before winter sets in.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                When northern Indiana winters arrive, our snow plowing service keeps your driveways, parking lots, and walkways safe and accessible. We monitor weather forecasts closely and mobilize our equipment proactively so your property is cleared before the morning rush. We serve residential and commercial clients throughout Goshen, Elkhart, Bristol, Middlebury, and Wakarusa.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                Our winter services also include ice management — the careful application of de-icing materials to prevent dangerous ice buildup on paved surfaces. We use products that are effective at low temperatures while minimizing damage to concrete, asphalt, and surrounding vegetation. Safety is our top priority in every winter service we provide.
              </p>
            </div>
          </div>

          <div className="bg-[#1A2424] rounded-xl p-8 border-2 border-[#8A9BA8]/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">What's Included in Our Elkhart County Lawn Care Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lawn Maintenance",
                  items: ["Weekly or bi-weekly mowing", "Precision edging along all borders", "Trimming around obstacles", "Blowing clippings from hard surfaces", "Seasonal height adjustments", "Equipment sanitized between properties"]
                },
                {
                  title: "Seasonal Cleanup",
                  items: ["Spring debris and leaf removal", "Bed edging and cleanup", "Mulch installation and refresh", "Fall leaf removal (all passes)", "Final mowing and winterization", "Shrub and ornamental trimming"]
                },
                {
                  title: "Snow Plowing",
                  items: ["Residential driveway plowing", "Commercial lot clearing", "Sidewalk and walkway shoveling", "Ice management and de-icing", "24/7 storm response availability", "Proactive weather monitoring"]
                }
              ].map((service, i) => (
                <div key={i}>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                    <i className="ri-checkbox-circle-fill text-[#2D5016]"></i>
                    <span>{service.title}</span>
                  </h4>
                  <ul className="space-y-2">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start space-x-2 text-sm text-[#C0C8CC]">
                        <i className="ri-arrow-right-s-line text-[#2D5016] mt-0.5 flex-shrink-0"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#1A2424] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions About Our Service Areas</h2>
            <p className="text-lg text-[#C0C8CC]">
              Common questions from homeowners and businesses across Elkhart County, Indiana.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                q: "Do you serve all neighborhoods within Goshen, Elkhart, Bristol, Middlebury, and Wakarusa?",
                a: "Yes — we serve properties throughout all five cities and their surrounding areas within Elkhart County. This includes both established neighborhoods and newer developments on the outskirts of each city. If you're unsure whether your specific address falls within our service area, simply give us a call at (574) 596-3633 or submit a contact form and we'll confirm availability right away."
              },
              {
                q: "Do you offer services to rural properties outside city limits in Elkhart County?",
                a: "In many cases, yes. We serve a number of rural and semi-rural properties in Elkhart County, particularly those located along major routes between our five primary service cities. Service availability for rural properties depends on location and the scope of work needed. Contact us to discuss your property and we'll let you know if we can accommodate your needs."
              },
              {
                q: "How do I get a free estimate for lawn care or snow plowing in my area?",
                a: "Getting a free estimate is easy. You can call us directly at (574) 596-3633, fill out our online contact form, or send us an email. We'll schedule a time to visit your property, assess your needs, and provide a detailed, no-obligation quote. We typically respond to all estimate requests within one business day."
              },
              {
                q: "Are your lawn care services available for both residential and commercial properties?",
                a: "Absolutely. We serve both residential homeowners and commercial property managers throughout Elkhart County. Our commercial clients include office buildings, retail centers, apartment complexes, HOA communities, industrial facilities, and more. We have the equipment and staffing to handle properties of all sizes, from small residential lots to large commercial campuses."
              },
              {
                q: "What makes Broadview Solutions different from other lawn care companies in Elkhart County?",
                a: "We're a locally owned and operated company — we live and work in the same communities we serve. That means we're genuinely invested in the appearance of our neighborhoods, we understand the specific challenges of northern Indiana's climate and soil conditions, and we're accountable to our neighbors in a way that larger national companies simply aren't. We also offer transparent pricing, consistent crews, and a satisfaction guarantee on all of our work."
              },
              {
                q: "Do you offer recurring lawn care contracts or one-time services?",
                a: "We offer both. Many of our clients choose recurring seasonal maintenance programs for the best results and most convenient experience — we handle everything on a regular schedule so you never have to think about it. But we also provide one-time services for specific needs, including seasonal cleanups, one-time mowing, mulch installation, and snow plowing on an as-needed basis. We're flexible and happy to work with whatever arrangement fits your needs and budget."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#1C2B2B] rounded-xl p-8 border-2 border-[#8A9BA8]/20">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start space-x-3">
                  <span className="w-7 h-7 flex items-center justify-center bg-[#2D5016] rounded-full text-sm flex-shrink-0 mt-0.5">Q</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-[#C0C8CC] leading-relaxed pl-10 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[#1C2B2B] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What to Expect When You Hire Broadview Solutions</h2>
            <p className="text-lg text-[#C0C8CC] max-w-3xl mx-auto">
              A simple, transparent process from your first call to a beautifully maintained property — serving all of Elkhart County, Indiana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: "ri-phone-line",
                title: "Contact Us",
                desc: "Call (574) 596-3633 or fill out our online form. We respond to all inquiries within one business day and are happy to answer any questions about our services or your specific property needs."
              },
              {
                step: "02",
                icon: "ri-map-pin-line",
                title: "Free Property Visit",
                desc: "We visit your property in Goshen, Elkhart, Bristol, Middlebury, or Wakarusa to assess your needs and take measurements. This allows us to provide an accurate, detailed quote with no surprises."
              },
              {
                step: "03",
                icon: "ri-file-list-3-line",
                title: "Receive Your Quote",
                desc: "We provide a clear, itemized estimate with transparent pricing. No hidden fees, no vague line items. You'll know exactly what you're getting and what it costs before you commit to anything."
              },
              {
                step: "04",
                icon: "ri-leaf-line",
                title: "Enjoy Your Property",
                desc: "Once you approve the quote, we get to work. Our professional team arrives on schedule, completes the job to our high standards, and leaves your property looking its best — every single visit."
              }
            ].map((step, i) => (
              <div key={i} className="bg-[#1A2424] rounded-xl p-8 border-2 border-[#8A9BA8]/20 text-center relative">
                <div className="text-6xl font-bold text-[#2D5016]/20 absolute top-4 right-4 leading-none">{step.step}</div>
                <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full mx-auto mb-5 ring-4 ring-[#8A9BA8]/20">
                  <i className={`${step.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#C0C8CC] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#1A2424] rounded-2xl p-10 border-2 border-[#8A9BA8]/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Commitment to Every Community We Serve</h3>
                <p className="text-[#C0C8CC] leading-relaxed mb-4">
                  Broadview Solutions was founded on a simple belief: that every property in Elkhart County deserves professional, reliable grounds care — and that the people providing that care should be your neighbors, not a distant corporation. We're proud to be a locally owned business that reinvests in the communities of Goshen, Elkhart, Bristol, Middlebury, and Wakarusa.
                </p>
                <p className="text-[#C0C8CC] leading-relaxed mb-4">
                  We hold ourselves to a high standard on every property we service. That means showing up on time, communicating clearly, doing the work right the first time, and standing behind our results. If you're ever unsatisfied with our work, we'll make it right — no questions asked.
                </p>
                <p className="text-[#C0C8CC] leading-relaxed">
                  Our team members are background-checked, professionally trained, and take genuine pride in their craft. When you hire Broadview Solutions, you're not just getting a lawn service — you're getting a team that cares about your property as much as you do.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "ri-shield-check-line", label: "Fully Licensed & Insured" },
                  { icon: "ri-thumb-up-line", label: "Satisfaction Guaranteed" },
                  { icon: "ri-price-tag-3-line", label: "Transparent Pricing" },
                  { icon: "ri-time-line", label: "On-Time Service" },
                  { icon: "ri-team-line", label: "Background-Checked Team" },
                  { icon: "ri-tools-line", label: "Commercial-Grade Equipment" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#1C2B2B] rounded-lg p-4 flex items-center space-x-3 border border-[#8A9BA8]/20">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#2D5016] rounded-full flex-shrink-0">
                      <i className={`${item.icon} text-lg text-white`}></i>
                    </div>
                    <span className="text-sm font-medium text-white">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2D5016] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started in Your Area?
          </h2>
          <p className="text-xl text-[#C0C8CC] mb-8">
            Contact us today for a free consultation and see why your neighbors trust Broadview Solutions
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