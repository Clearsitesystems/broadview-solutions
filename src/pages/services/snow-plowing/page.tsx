import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { useEffect } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import SeoHead from '../../../components/feature/SeoHead';
import InlineCTA from '../../../components/feature/InlineCTA';
import MobileStickyCTA from '../../../components/feature/MobileStickyCTA';

export default function SnowPlowingPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: 'ri-time-line',
      title: '24/7 Monitoring',
      description: 'Round-the-clock weather monitoring ensures we\'re ready to clear your property the moment snow starts falling.'
    },
    {
      icon: 'ri-truck-line',
      title: 'Professional Plowing',
      description: 'Commercial-grade plows and experienced operators clear driveways, parking lots, and access roads efficiently.'
    },
    {
      icon: 'ri-footprint-line',
      title: 'Sidewalk Clearing',
      description: 'Complete sidewalk and walkway clearing to ensure safe access for residents, customers, and employees.'
    },
    {
      icon: 'ri-drop-line',
      title: 'Ice Melt Application',
      description: 'Strategic salt and ice melt application prevents dangerous ice buildup and provides lasting traction.'
    },
    {
      icon: 'ri-building-line',
      title: 'Commercial Services',
      description: 'Specialized service for businesses, HOAs, and commercial properties with priority response times.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Liability Protection',
      description: 'Fully insured service with documentation to help protect you from slip-and-fall liability.'
    }
  ];

  const serviceOptions = [
    {
      title: 'Per-Event Service',
      description: 'Pay only when we plow',
      features: [
        'No seasonal contract required',
        'Service on-demand after storms',
        'Flexible scheduling',
        'Ideal for light snowfall areas',
        'Simple per-visit pricing'
      ]
    },
    {
      title: 'Seasonal Contract',
      description: 'Unlimited plowing all winter',
      features: [
        'Priority response guaranteed',
        'Unlimited visits per season',
        'Predictable monthly payments',
        'Automatic service triggers',
        'Best value for heavy snow areas'
      ],
      popular: true
    },
    {
      title: 'Commercial Package',
      description: 'Complete property management',
      features: [
        '24/7 priority response',
        'Parking lot and drive clearing',
        'Sidewalk and entrance service',
        'Salt/ice melt included',
        'Storm documentation for liability'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Weather Monitoring',
      description: 'We track forecasts 24/7 and prepare equipment before storms arrive.'
    },
    {
      step: '02',
      title: 'Automatic Dispatch',
      description: 'When snow reaches trigger depth, crews are automatically dispatched to your property.'
    },
    {
      step: '03',
      title: 'Complete Clearing',
      description: 'Driveways, parking areas, and walkways are cleared with professional equipment.'
    },
    {
      step: '04',
      title: 'Ice Prevention',
      description: 'Salt and ice melt applied to prevent dangerous ice formation and ensure safe access.'
    }
  ];

  const faqs = [
    {
      question: 'How quickly will you arrive after snow starts?',
      answer: 'Seasonal contract customers receive priority service with crews dispatched when snow reaches 2 inches (or your custom trigger depth). Most properties are cleared within 2-4 hours of trigger depth. Per-event customers are serviced based on availability after contract customers.'
    },
    {
      question: 'What is the snow trigger depth?',
      answer: 'Standard trigger depth is 2 inches of snowfall. This can be customized based on your needs—some commercial clients prefer 1-inch triggers for high-traffic areas, while residential clients may choose 3-4 inches to reduce costs.'
    },
    {
      question: 'Do you provide salt and ice melt?',
      answer: 'Yes! Ice melt application is included in all commercial packages and available as an add-on for residential service. We use professional-grade products that work in extreme cold and won\'t damage concrete or landscaping.'
    },
    {
      question: 'What if it snows multiple times in one day?',
      answer: 'Seasonal contract customers receive unlimited visits—if it snows multiple times, we\'ll return as needed at no additional charge. Per-event customers are charged per visit based on accumulation.'
    },
    {
      question: 'Can you handle large commercial parking lots?',
      answer: 'Absolutely! We service commercial properties of all sizes including retail centers, office complexes, HOAs, and industrial facilities. Our commercial packages include parking lot clearing, loading dock access, sidewalks, and complete documentation for liability protection.'
    },
    {
      question: 'When should I sign up for seasonal service?',
      answer: 'We recommend signing seasonal contracts by November 1st to lock in pricing and guarantee priority service. Contracts signed after December 1st may have limited availability or adjusted pricing based on seasonal demand.'
    }
  ];

  const snowPlowingSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Snow Plowing",
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
      "serviceType": "Snow Plowing & Winter Services",
      "areaServed": { "@type": "AdministrativeArea", "name": "Elkhart County, Indiana" },
      "description": "Professional 24/7 snow plowing, sidewalk clearing, and ice melt application for residential and commercial properties in Elkhart County, Indiana.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services/snow-plowing`,
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
          "name": "Snow Plowing",
          "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services/snow-plowing`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly will you arrive after snow starts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seasonal contract customers receive priority service with crews dispatched when snow reaches 2 inches (or your custom trigger depth). Most properties are cleared within 2-4 hours of trigger depth. Per-event customers are serviced based on availability after contract customers."
          }
        },
        {
          "@type": "Question",
          "name": "What is the snow trigger depth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard trigger depth is 2 inches of snowfall. This can be customized based on your needs — some commercial clients prefer 1-inch triggers for high-traffic areas, while residential clients may choose 3-4 inches to reduce costs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide salt and ice melt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Ice melt application is included in all commercial packages and available as an add-on for residential service. We use professional-grade products that work in extreme cold and won't damage concrete or landscaping."
          }
        },
        {
          "@type": "Question",
          "name": "What if it snows multiple times in one day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seasonal contract customers receive unlimited visits — if it snows multiple times, we'll return as needed at no additional charge. Per-event customers are charged per visit based on accumulation."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle large commercial parking lots?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We service commercial properties of all sizes including retail centers, office complexes, HOAs, and industrial facilities. Our commercial packages include parking lot clearing, loading dock access, sidewalks, and complete documentation for liability protection."
          }
        },
        {
          "@type": "Question",
          "name": "When should I sign up for seasonal service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend signing seasonal contracts by November 1st to lock in pricing and guarantee priority service. Contracts signed after December 1st may have limited availability or adjusted pricing based on seasonal demand."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SeoHead
        title="Snow Plowing Goshen IN | 24/7 Service | Broadview"
        description="Professional 24/7 snow plowing & winter snow removal in Elkhart County, IN. Driveway & parking lot clearing, ice melt, seasonal contracts. Licensed & insured. Call (574) 596-3633."
        keywords="snow plowing Goshen Indiana, snow removal Elkhart County, driveway plowing Bristol IN, commercial snow removal Indiana, ice melt application, seasonal snow contract"
        canonical="/services/snow-plowing"
        ogTitle="24/7 Snow Plowing & Winter Services | Broadview Solutions Goshen IN"
        ogDescription="Reliable snow plowing, sidewalk clearing & ice melt in Elkhart County, IN. Seasonal contracts & per-event service. Free estimates."
        schema={snowPlowingSchema}
      />
      <Navbar />
      <div className="min-h-screen bg-charcoal-dark pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20snow%20plow%20truck%20clearing%20residential%20driveway%20during%20heavy%20snowfall%20with%20snow%20covered%20property%20and%20houses%20winter%20scene%20high%20quality%20professional%20photography&width=1920&height=1080&seq=snowplow001&orientation=landscape"
              alt="Professional Snow Plowing"
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
              Snow Plowing
            </h1>
            <p className="text-xl md:text-2xl mb-8 reveal-up text-silver-light" style={{ animationDelay: '0.1s' }}>
              Reliable 24/7 snow removal that keeps your property safe and accessible all winter long
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 reveal-up whitespace-nowrap cursor-pointer shadow-lg shadow-primary/20"
              style={{ animationDelay: '0.2s' }}
            >
              Get Free Estimate
            </Link>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-charcoal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                  Winter Weather, Handled
                </h2>
                <p className="text-lg text-silver-light mb-6">
                  When winter storms hit Elkhart County, you need a snow removal partner you can count on. Our professional snow plowing service combines 24/7 weather monitoring, commercial-grade equipment, and experienced crews to ensure your property is cleared quickly and safely—no matter when snow falls.
                </p>
                <p className="text-lg text-silver-light mb-6">
                  We don't just push snow—we provide complete winter property management including driveway and parking lot plowing, sidewalk clearing, and strategic ice melt application. Whether you're a homeowner who needs reliable driveway access or a business that can't afford downtime, we have the equipment and expertise to keep you operational all winter.
                </p>
                <p className="text-lg text-silver-light">
                  With flexible per-event service and comprehensive seasonal contracts, we offer solutions for every property and budget. Our seasonal contract customers receive priority response with unlimited visits, ensuring you're never stuck when it matters most.
                </p>
              </div>
              <div className="reveal-right">
                <img
                  src="https://readdy.ai/api/search-image?query=snow%20plow%20truck%20clearing%20commercial%20parking%20lot%20during%20winter%20storm%20with%20snow%20covered%20cars%20and%20buildings%20professional%20snow%20removal%20service%20high%20quality&width=800&height=1000&seq=snowplow002&orientation=portrait"
                  alt="Commercial Snow Plowing"
                  className="w-full h-[600px] object-cover object-center rounded-lg shadow-xl"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <InlineCTA serviceName="Snow Plowing" context="service" />
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-charcoal-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Complete Winter Services
              </h2>
              <p className="text-xl text-silver-light max-w-3xl mx-auto">
                Everything you need to stay safe and accessible through winter weather
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

        {/* Service Options */}
        <section className="py-20 bg-charcoal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Service Options
              </h2>
              <p className="text-xl text-silver-light max-w-3xl mx-auto">
                Choose the plan that fits your property and budget
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {serviceOptions.map((option, index) => (
                <div
                  key={index}
                  className={`bg-charcoal-dark rounded-lg border overflow-hidden reveal-up ${
                    option.popular ? 'ring-2 ring-primary border-primary relative' : 'border-silver-dark/30'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {option.popular && (
                    <div className="bg-primary text-white text-center py-2 font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-offwhite">{option.title}</h3>
                    <p className="text-silver mb-6">{option.description}</p>
                    <ul className="space-y-3">
                      {option.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <i className="ri-check-line text-primary text-xl mr-3 mt-1"></i>
                          <span className="text-silver-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`block text-center mt-8 px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                        option.popular
                          ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20'
                          : 'bg-charcoal border border-silver-dark/30 hover:border-primary/50 text-offwhite'
                      }`}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-charcoal">
          <div className="max-w-3xl mx-auto px-6">
            <InlineCTA serviceName="Snow Plowing" context="service" />
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-charcoal-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                How It Works
              </h2>
              <p className="text-xl text-silver-light max-w-3xl mx-auto">
                Our systematic approach ensures fast, reliable service every time it snows
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center reveal-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto shadow-lg shadow-primary/20">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-offwhite">{item.title}</h3>
                  <p className="text-silver-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-charcoal-dark">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-silver-light">
                Everything you need to know about our snow plowing services
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

            <div className="mt-12">
              <InlineCTA serviceName="Snow Plowing" context="service" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center reveal-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't Get Stuck This Winter
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Sign up for seasonal service now and guarantee priority snow removal all winter long
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
              >
                Get Free Estimate
              </Link>
              <Link
                to="/services"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
      <MobileStickyCTA />
      <Footer />
    </>
  );
}