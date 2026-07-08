import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { useEffect } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import SeoHead from '../../../components/feature/SeoHead';

export default function CommercialLawnCarePage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: 'ri-truck-line',
      title: 'Commercial-Grade Equipment',
      description: 'Zero-turn mowers, wide-deck riders, and professional tools built for large properties, parking islands, and multi-acre campuses.'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Consistent Scheduling',
      description: 'Locked-in weekly or bi-weekly routes with backup crews. Your property gets serviced on the same day every week, rain or shine.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Liability-Aware Service',
      description: 'Fully licensed and insured with detailed service logs. We understand slip-and-fall exposure and keep walkways clear and documented.'
    },
    {
      icon: 'ri-building-line',
      title: 'Professional Image',
      description: 'Uniformed crews, branded vehicles, and crisp edging that reinforces your brand from the curb to the front door.'
    },
    {
      icon: 'ri-seedling-line',
      title: 'Bed & Turf Health',
      description: 'Seasonal bed maintenance, mulch refresh, and turf monitoring to prevent brown patches before tenants or customers notice them.'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Dedicated Account Manager',
      description: 'One point of contact who knows your property, your priorities, and your budget. No call centers, ever.'
    }
  ];

  const includedServices = [
    'Weekly or bi-weekly professional mowing at optimal height',
    'Precision edging along walkways, curbs, and parking islands',
    'String trimming around signs, poles, and landscape features',
    'Complete blowdown of hardscapes and entryways after every visit',
    'Seasonal bed cleanup, weed removal, and mulch touch-ups',
    'Storm debris removal and emergency cleanup as needed',
    'Service documentation with photos for property management records'
  ];

  const trustSignals = [
    {
      icon: 'ri-shield-check-line',
      label: 'Licensed & Insured',
      detail: 'Full general liability & workers compensation coverage'
    },
    {
      icon: 'ri-map-pin-line',
      label: 'Elkhart County Coverage',
      detail: 'Goshen, Elkhart, Bristol, Middlebury & Wakarusa'
    },
    {
      icon: 'ri-time-line',
      label: 'Years of Experience',
      detail: 'Trusted by local businesses & property managers'
    },
    {
      icon: 'ri-award-line',
      label: 'Satisfaction Guaranteed',
      detail: 'Quality check on every visit before we leave'
    }
  ];

  const faqs = [
    {
      question: 'Do you service office parks, retail centers, and HOAs?',
      answer: 'Yes. We maintain office complexes, retail plazas, apartment communities, HOA common areas, and industrial facilities throughout Elkhart County. Every commercial contract is scoped to your property size, traffic patterns, and compliance needs.'
    },
    {
      question: 'How do you handle properties with high foot traffic or liability concerns?',
      answer: 'We schedule mowing and maintenance during low-traffic hours when possible, post temporary signage if needed, and always edge and blow off walkways before leaving. Our crews are trained to spot hazards like broken pavement or irrigation leaks and report them immediately.'
    },
    {
      question: 'Can you work with our property management schedule?',
      answer: 'Absolutely. We coordinate directly with property managers, facility teams, and tenant liaisons. We can adjust mowing days around events, deliveries, or seasonal demands, and we provide weekly summary reports with photos if requested.'
    },
    {
      question: 'What happens if weather delays service?',
      answer: 'We monitor radar daily. If rain or storms delay your scheduled visit, we automatically reschedule to the next dry day and notify your account manager. For commercial clients, we prioritize catch-up visits to ensure your property never looks neglected.'
    },
    {
      question: 'Is commercial snow removal included?',
      answer: 'Snow plowing and ice management are available as a bundled winter service or a standalone seasonal contract. We recommend bundling lawn and snow service for priority routing, consistent documentation, and simplified billing year-round.'
    }
  ];

  const commercialSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Commercial Lawn Care & Property Maintenance",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Broadview Solutions",
        "telephone": "+15745963633",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Goshen",
          "addressRegion": "IN",
          "postalCode": "46526",
          "addressCountry": "US"
        }
      },
      "serviceType": "Commercial Lawn Maintenance",
      "areaServed": { "@type": "AdministrativeArea", "name": "Elkhart County, Indiana" },
      "description": "Commercial lawn care and property maintenance services in Goshen, Indiana. Weekly mowing, edging, trimming, and seasonal bed care for businesses, retail centers, and HOAs. Licensed & insured.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services/commercial-lawn-care`,
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Commercial Lawn Care",
          "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services/commercial-lawn-care`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you service office parks, retail centers, and HOAs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We maintain office complexes, retail plazas, apartment communities, HOA common areas, and industrial facilities throughout Elkhart County. Every commercial contract is scoped to your property size, traffic patterns, and compliance needs."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle properties with high foot traffic or liability concerns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We schedule mowing and maintenance during low-traffic hours when possible, post temporary signage if needed, and always edge and blow off walkways before leaving. Our crews are trained to spot hazards like broken pavement or irrigation leaks and report them immediately."
          }
        },
        {
          "@type": "Question",
          "name": "Can you work with our property management schedule?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We coordinate directly with property managers, facility teams, and tenant liaisons. We can adjust mowing days around events, deliveries, or seasonal demands, and we provide weekly summary reports with photos if requested."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if weather delays service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We monitor radar daily. If rain or storms delay your scheduled visit, we automatically reschedule to the next dry day and notify your account manager. For commercial clients, we prioritize catch-up visits to ensure your property never looks neglected."
          }
        },
        {
          "@type": "Question",
          "name": "Is commercial snow removal included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Snow plowing and ice management are available as a bundled winter service or a standalone seasonal contract. We recommend bundling lawn and snow service for priority routing, consistent documentation, and simplified billing year-round."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SeoHead
        title="Commercial Lawn Care & Property Maintenance | Goshen, Indiana"
        description="Professional commercial lawn care & property maintenance in Goshen, Indiana. Weekly mowing, edging, trimming & seasonal bed care for businesses, retail centers & HOAs. Licensed & insured. Call (574) 596-3633."
        keywords="commercial lawn care Goshen Indiana, property maintenance Elkhart County, commercial mowing Bristol IN, business grounds upkeep, HOA landscaping Indiana, Broadview Solutions commercial"
        canonical="/services/commercial-lawn-care"
        ogTitle="Commercial Lawn Care & Property Maintenance | Goshen, Indiana"
        ogDescription="Weekly commercial lawn maintenance for businesses, retail centers & HOAs in Elkhart County, IN. Licensed, insured & reliable. Free estimates."
        schema={commercialSchema}
      />
      <Navbar />
      <div className="min-h-screen bg-charcoal-dark pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20commercial%20lawn%20care%20crew%20mowing%20large%20business%20property%20with%20zero%20turn%20mowers%20clean%20parking%20lot%20landscaping%20well%20maintained%20office%20park%20green%20grass%20bright%20sunny%20day%20high%20quality%20professional%20photography&width=1920&height=1080&seq=commlawn001&orientation=landscape"
              alt="Commercial Lawn Care in Goshen Indiana"
              className="w-full h-full object-cover object-center"
              width={1920}
              height={1080}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/85 via-charcoal-dark/60 to-charcoal-dark/85"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-offwhite">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 reveal-up">
              Commercial Lawn Care & Property Maintenance in Goshen, Indiana
            </h1>
            <p className="text-xl md:text-2xl mb-8 reveal-up text-silver-light" style={{ animationDelay: '0.1s' }}>
              Keep your business property looking professional, safe, and inviting with reliable weekly grounds maintenance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-up" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/contact"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg shadow-primary/20"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+15745963633"
                className="inline-block bg-transparent border-2 border-offwhite text-offwhite hover:bg-offwhite hover:text-charcoal-dark px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line mr-2"></i>
                Call (574) 596-3633
              </a>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-charcoal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                  First Impressions Start at the Curb
                </h2>
                <p className="text-lg text-silver-light mb-6">
                  Your landscape is the first thing customers, tenants, and visitors see when they arrive. A well-maintained property sends a clear message: you pay attention to detail, you care about safety, and you invest in quality. At Broadview Solutions, we provide commercial lawn care and property maintenance that protects your professional image while freeing your team to focus on running the business.
                </p>
                <p className="text-lg text-silver-light mb-6">
                  We serve office parks, retail plazas, apartment communities, HOAs, and industrial facilities throughout Goshen, Elkhart, Bristol, Middlebury, and Wakarusa. Every commercial contract begins with a thorough property walkthrough to identify high-traffic zones, liability-sensitive areas, and seasonal priorities. From there, we build a custom maintenance plan with locked-in scheduling, commercial-grade equipment, and crew assignments that stay consistent week after week.
                </p>
                <p className="text-lg text-silver-light">
                  Our crews arrive in uniform with branded vehicles, complete every service with a full blowdown of walkways and entryways, and document their work so you have records if questions ever arise. Whether you need basic weekly mowing or a full grounds management program, we deliver reliable service that makes your property look its best every single day.
                </p>
              </div>
              <div className="reveal-right">
                <img
                  src="https://readdy.ai/api/search-image?query=well%20maintained%20commercial%20property%20with%20manicured%20green%20lawn%20clean%20parking%20lot%20professional%20landscaping%20around%20office%20building%20entrance%20bright%20sunny%20day%20high%20quality%20photography&width=800&height=1000&seq=commlawn002&orientation=portrait"
                  alt="Well maintained commercial property in Goshen Indiana"
                  className="w-full h-[600px] object-cover object-center rounded-lg shadow-xl"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-charcoal-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Built for Commercial Properties
              </h2>
              <p className="text-xl text-silver-light max-w-3xl mx-auto">
                Features and capabilities designed specifically for businesses, retail centers, and multi-unit properties
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-charcoal p-8 rounded-lg border border-silver-dark/30 hover:border-primary/50 transition-all duration-300 reveal-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-3xl text-primary`}></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-offwhite">{feature.title}</h3>
                  <p className="text-silver-light leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included + Trust Signals */}
        <section className="py-20 bg-charcoal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* What's Included */}
              <div className="reveal-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-offwhite">
                  What Is Included
                </h2>
                <p className="text-lg text-silver-light mb-8">
                  Every commercial maintenance visit is comprehensive. We do not cut corners, and we do not leave until the property looks finished.
                </p>
                <ul className="space-y-4">
                  {includedServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full mr-4 mt-0.5 flex-shrink-0">
                        <i className="ri-check-line text-primary"></i>
                      </div>
                      <span className="text-silver-light text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Signals */}
              <div className="reveal-right">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-offwhite">
                  Why Businesses Trust Broadview
                </h2>
                <p className="text-lg text-silver-light mb-8">
                  Local accountability, professional standards, and a commitment to showing up when we say we will.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {trustSignals.map((signal, index) => (
                    <div
                      key={index}
                      className="bg-charcoal-dark p-6 rounded-lg border border-silver-dark/30 reveal-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                        <i className={`${signal.icon} text-2xl text-primary`}></i>
                      </div>
                      <h3 className="text-lg font-bold text-offwhite mb-1">{signal.label}</h3>
                      <p className="text-silver-light text-sm">{signal.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-charcoal-dark">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Commercial Lawn Care FAQs
              </h2>
              <p className="text-xl text-silver-light">
                Common questions from property managers and business owners in Elkhart County
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-charcoal p-8 rounded-lg border border-silver-dark/30 reveal-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-4 flex items-start text-offwhite">
                    <i className="ri-question-line text-primary mr-3 mt-1"></i>
                    {faq.question}
                  </h3>
                  <p className="text-silver-light leading-relaxed ml-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center reveal-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get a Free Commercial Property Assessment
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Call us today or request a quote online. We will visit your property, assess your needs, and deliver a transparent proposal within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-primary hover:bg-offwhite px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+15745963633"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line mr-2"></i>
                (574) 596-3633
              </a>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Serving Goshen, Elkhart, Bristol, Middlebury & Wakarusa, Indiana
            </p>
          </div>
        </section>

        {/* Link back to services */}
        <section className="py-12 bg-charcoal border-t border-silver-dark/20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-silver-light">
              Looking for other services?{' '}
              <Link to="/services" className="text-primary hover:text-primary-light font-semibold transition-colors">
                View all Broadview Solutions services
              </Link>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}