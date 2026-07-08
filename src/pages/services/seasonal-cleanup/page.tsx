import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { useEffect } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import SeoHead from '../../../components/feature/SeoHead';
import InlineCTA from '../../../components/feature/InlineCTA';
import MobileStickyCTA from '../../../components/feature/MobileStickyCTA';

export default function SeasonalCleanupPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: 'ri-sun-line',
      title: 'Spring Cleanup',
      description: 'Remove winter debris, prepare beds, refresh mulch, and get your property ready for the growing season.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Fall Leaf Removal',
      description: 'Complete leaf removal from lawns, beds, and gutters to protect your landscape through winter.'
    },
    {
      icon: 'ri-plant-line',
      title: 'Bed Preparation',
      description: 'Clear old growth, edge beds, and prepare planting areas for seasonal flowers and plants.'
    },
    {
      icon: 'ri-recycle-line',
      title: 'Debris Removal',
      description: 'Haul away branches, leaves, and yard waste—we handle all disposal so you don\'t have to.'
    },
    {
      icon: 'ri-contrast-drop-line',
      title: 'Mulch Installation',
      description: 'Fresh mulch application to suppress weeds, retain moisture, and give beds a polished look.'
    },
    {
      icon: 'ri-tools-line',
      title: 'Gutter Cleaning',
      description: 'Remove leaves and debris from gutters to prevent water damage and ice dams in winter.'
    }
  ];

  const springServices = [
    'Winter debris removal from lawns and beds',
    'Bed edging and reshaping',
    'Fresh mulch installation (2-3 inch layer)',
    'Pruning of dead branches and winter damage',
    'Gutter cleaning and downspout clearing',
    'First mow of the season with cleanup'
  ];

  const fallServices = [
    'Complete leaf removal (multiple visits if needed)',
    'Gutter and downspout cleaning',
    'Bed cleanup and cutting back perennials',
    'Final mulch refresh before winter',
    'Branch and storm debris removal',
    'Lawn winterization preparation',
    'Property-wide debris hauling'
  ];

  const faqs = [
    {
      question: 'When should I schedule spring cleanup?',
      answer: 'We recommend scheduling spring cleanup in late March or early April, once the ground has thawed and before new growth begins. This timing allows us to remove winter debris and prepare your beds before the growing season starts.'
    },
    {
      question: 'How many fall cleanup visits will I need?',
      answer: 'Most properties require 2-3 visits during fall depending on tree coverage. We typically schedule visits as leaves drop, with a final cleanup after all leaves have fallen to ensure your property is completely clear before winter.'
    },
    {
      question: 'Do you haul away all the debris?',
      answer: 'Yes! All leaves, branches, and yard waste are removed from your property and properly disposed of. You won\'t have to worry about bagging, hauling, or disposal—we handle everything.'
    },
    {
      question: 'Is mulch included in cleanup services?',
      answer: 'Mulch installation is available as an add-on to our cleanup services. We can refresh existing mulch or install a fresh 2-3 inch layer in all beds. We\'ll provide a separate quote based on your bed square footage.'
    },
    {
      question: 'Can you clean gutters as part of seasonal cleanup?',
      answer: 'Absolutely! Gutter cleaning is included in both our spring and fall cleanup packages. We remove all debris from gutters and downspouts to ensure proper drainage and prevent ice dams.'
    }
  ];

  const seasonalCleanupSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Seasonal Cleanup",
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
      "serviceType": "Seasonal Cleanup",
      "areaServed": { "@type": "AdministrativeArea", "name": "Elkhart County, Indiana" },
      "description": "Professional spring and fall seasonal cleanup services including leaf removal, debris hauling, mulch installation, bed preparation, and gutter cleaning in Elkhart County, Indiana.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services/seasonal-cleanup`,
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
          "name": "Seasonal Cleanup",
          "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services/seasonal-cleanup`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When should I schedule spring cleanup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend scheduling spring cleanup in late March or early April, once the ground has thawed and before new growth begins. This timing allows us to remove winter debris and prepare your beds before the growing season starts."
          }
        },
        {
          "@type": "Question",
          "name": "How many fall cleanup visits will I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most properties require 2-3 visits during fall depending on tree coverage. We typically schedule visits as leaves drop, with a final cleanup after all leaves have fallen to ensure your property is completely clear before winter."
          }
        },
        {
          "@type": "Question",
          "name": "Do you haul away all the debris?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! All leaves, branches, and yard waste are removed from your property and properly disposed of. You won't have to worry about bagging, hauling, or disposal — we handle everything."
          }
        },
        {
          "@type": "Question",
          "name": "Is mulch included in cleanup services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mulch installation is available as an add-on to our cleanup services. We can refresh existing mulch or install a fresh 2-3 inch layer in all beds. We'll provide a separate quote based on your bed square footage."
          }
        },
        {
          "@type": "Question",
          "name": "Can you clean gutters as part of seasonal cleanup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Gutter cleaning is included in both our spring and fall cleanup packages. We remove all debris from gutters and downspouts to ensure proper drainage and prevent ice dams."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SeoHead
        title="Seasonal Cleanup Elkhart County | Broadview Solutions"
        description="Professional spring & fall seasonal cleanup in Elkhart County, IN — leaf removal, debris hauling, mulch installation & gutter cleaning. Licensed & insured. Call (574) 596-3633."
        keywords="seasonal cleanup Goshen Indiana, fall leaf removal Elkhart County, spring cleanup Bristol IN, mulch installation Indiana, gutter cleaning Broadview Solutions"
        canonical="/services/seasonal-cleanup"
        ogTitle="Spring & Fall Seasonal Cleanup | Broadview Solutions Goshen IN"
        ogDescription="Complete spring and fall cleanup services in Elkhart County, IN. Leaf removal, debris hauling, mulch & gutter cleaning. Free estimates."
        schema={seasonalCleanupSchema}
      />
      <Navbar />
      <div className="min-h-screen bg-charcoal-dark">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20landscaping%20crew%20performing%20fall%20leaf%20cleanup%20service%20with%20leaf%20blowers%20and%20rakes%20on%20residential%20property%20covered%20with%20autumn%20leaves%20bright%20sunny%20day%20high%20quality%20professional%20photography&width=1920&height=1080&seq=seasonal001&orientation=landscape"
              alt="Seasonal Cleanup Services"
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
              Seasonal Cleanup
            </h1>
            <p className="text-xl md:text-2xl mb-8 reveal-up text-silver-light" style={{ animationDelay: '0.1s' }}>
              Comprehensive spring and fall cleanup services that prepare your property for every season
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 reveal-up whitespace-nowrap cursor-pointer shadow-lg shadow-primary/20"
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
                <img
                  src="https://readdy.ai/api/search-image?query=beautiful%20residential%20property%20after%20professional%20spring%20cleanup%20with%20fresh%20mulch%20in%20flower%20beds%20clean%20lawn%20and%20trimmed%20bushes%20bright%20sunny%20spring%20day%20high%20quality%20photography&width=800&height=1000&seq=seasonal002&orientation=portrait"
                  alt="Professional Seasonal Cleanup"
                  className="w-full h-[600px] object-cover object-center rounded-lg shadow-xl"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="reveal-right">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                  Seasonal Transitions Made Easy
                </h2>
                <p className="text-lg text-silver-light mb-6">
                  Seasonal changes bring unique challenges to your landscape. From winter debris and dead growth in spring to endless leaves in fall, these transitions require thorough cleanup to keep your property healthy and beautiful year-round.
                </p>
                <p className="text-lg text-silver-light mb-6">
                  Our comprehensive seasonal cleanup services handle all the heavy lifting, hauling, and detail work that transforms your property between seasons. Whether you need spring preparation to jumpstart growth or fall cleanup to protect your landscape through winter, we have the equipment, experience, and crew to get it done right.
                </p>
                <p className="text-lg text-silver-light">
                  We don't just remove debris—we prepare your entire property for the season ahead with bed edging, mulch installation, gutter cleaning, and complete hauling services that leave your landscape pristine and ready to thrive.
                </p>
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <InlineCTA serviceName="Seasonal Cleanup" context="service" />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-charcoal-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Complete Seasonal Services
              </h2>
              <p className="text-xl text-silver-light max-w-3xl mx-auto">
                Everything your property needs to transition smoothly between seasons
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

        {/* Spring vs Fall Services */}
        <section className="py-20 bg-charcoal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Spring &amp; Fall Packages
              </h2>
              <p className="text-xl text-silver-light max-w-3xl mx-auto">
                Tailored services for each season's unique needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Spring Cleanup */}
              <div className="bg-gradient-to-br from-primary/20 to-charcoal-dark p-8 rounded-lg border border-primary/30 reveal-left">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                    <i className="ri-sun-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-offwhite">Spring Cleanup</h3>
                </div>
                <p className="text-silver-light mb-6 text-lg">
                  Prepare your property for the growing season with comprehensive cleanup and bed preparation.
                </p>
                <ul className="space-y-3">
                  {springServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <i className="ri-check-line text-primary text-xl mr-3 mt-1"></i>
                      <span className="text-silver-light">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fall Cleanup */}
              <div className="bg-gradient-to-br from-accent/10 to-charcoal-dark p-8 rounded-lg border border-accent/30 reveal-right">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mr-4">
                    <i className="ri-leaf-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-offwhite">Fall Cleanup</h3>
                </div>
                <p className="text-silver-light mb-6 text-lg">
                  Protect your landscape through winter with thorough leaf removal and property preparation.
                </p>
                <ul className="space-y-3">
                  {fallServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <i className="ri-check-line text-accent text-xl mr-3 mt-1"></i>
                      <span className="text-silver-light">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-charcoal">
          <div className="max-w-3xl mx-auto px-6">
            <InlineCTA serviceName="Seasonal Cleanup" context="service" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-charcoal">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-silver-light">
                Common questions about our seasonal cleanup services
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-charcoal-dark p-8 rounded-lg border border-silver-dark/30 reveal-up"
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
              <InlineCTA serviceName="Seasonal Cleanup" context="service" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center reveal-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready To Prepare Your Property?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule your seasonal cleanup today and let us handle all the heavy lifting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-primary hover:bg-offwhite px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
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