import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { useEffect } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import SeoHead from '../../../components/feature/SeoHead';
import InlineCTA from '../../../components/feature/InlineCTA';
import MobileStickyCTA from '../../../components/feature/MobileStickyCTA';

export default function LawnMaintenancePage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: 'ri-scissors-cut-line',
      title: 'Professional Mowing',
      description: 'Precision cutting with commercial-grade zero-turn mowers for a perfectly manicured lawn every time.'
    },
    {
      icon: 'ri-plant-line',
      title: 'Edging & Trimming',
      description: 'Clean, crisp edges along walkways, driveways, and flower beds for a polished, professional look.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Debris Removal',
      description: 'Complete cleanup of grass clippings and debris, leaving your property spotless after every visit.'
    },
    {
      icon: 'ri-bug-line',
      title: 'Weed Control',
      description: 'Targeted treatments to eliminate weeds and prevent future growth for a pristine lawn.'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Flexible Scheduling',
      description: 'Weekly, bi-weekly, or custom schedules designed around your needs and budget.'
    },
    {
      icon: 'ri-tools-line',
      title: 'Commercial Equipment',
      description: 'Professional-grade zero-turn mowers, edgers, and blowers for superior results on every visit.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Assessment',
      description: 'We evaluate your property size, grass type, and specific needs to create a customized maintenance plan.'
    },
    {
      step: '02',
      title: 'Scheduled Service',
      description: 'Our crew arrives on schedule with professional equipment ready to transform your lawn.'
    },
    {
      step: '03',
      title: 'Quality Execution',
      description: 'Mowing, edging, trimming, and cleanup performed to the highest standards with attention to detail.'
    },
    {
      step: '04',
      title: 'Final Inspection',
      description: 'We walk the property to ensure every detail meets our quality standards before we leave.'
    }
  ];

  const faqs = [
    {
      question: 'How often should I have my lawn mowed?',
      answer: 'Most lawns benefit from weekly mowing during peak growing season (spring and early summer) and bi-weekly during slower growth periods. We customize schedules based on your grass type and growth rate.'
    },
    {
      question: 'Do you provide your own equipment?',
      answer: 'Yes! We bring all professional-grade equipment including commercial zero-turn mowers, edgers, trimmers, and blowers. You don\'t need to provide anything.'
    },
    {
      question: 'What if it rains on my scheduled day?',
      answer: 'We monitor weather closely and will reschedule to the next available day. We never mow wet grass as it can damage your lawn and create an uneven cut.'
    },
    {
      question: 'Do you service both residential and commercial properties?',
      answer: 'Absolutely! We provide lawn maintenance for residential homes, commercial properties, HOAs, and multi-unit complexes throughout Elkhart County.'
    },
    {
      question: 'What is included in a standard lawn maintenance visit?',
      answer: 'Every visit includes professional mowing, precision edging along all walkways and driveways, string trimming around obstacles, and complete debris cleanup. We leave your property spotless every time.'
    }
  ];

  const lawnMaintenanceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Lawn Maintenance",
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
      "serviceType": "Lawn Maintenance",
      "areaServed": { "@type": "AdministrativeArea", "name": "Elkhart County, Indiana" },
      "description": "Professional lawn maintenance including weekly mowing, precision edging, string trimming, weed control, and debris cleanup for residential and commercial properties in Elkhart County, Indiana.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services/lawn-maintenance`,
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
          "name": "Lawn Maintenance",
          "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services/lawn-maintenance`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should I have my lawn mowed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most lawns benefit from weekly mowing during peak growing season (spring and early summer) and bi-weekly during slower growth periods. We customize schedules based on your grass type and growth rate."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide your own equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We bring all professional-grade equipment including commercial zero-turn mowers, edgers, trimmers, and blowers. You don't need to provide anything."
          }
        },
        {
          "@type": "Question",
          "name": "What if it rains on my scheduled day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We monitor weather closely and will reschedule to the next available day. We never mow wet grass as it can damage your lawn and create an uneven cut."
          }
        },
        {
          "@type": "Question",
          "name": "Do you service both residential and commercial properties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We provide lawn maintenance for residential homes, commercial properties, HOAs, and multi-unit complexes throughout Elkhart County."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in a standard lawn maintenance visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every visit includes professional mowing, precision edging along all walkways and driveways, string trimming around obstacles, and complete debris cleanup. We leave your property spotless every time."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SeoHead
        title="Lawn Maintenance Goshen IN | Broadview Solutions"
        description="Professional lawn maintenance in Elkhart County — weekly mowing, edging, trimming & weed control for residential and commercial properties. Licensed & insured. Free estimate: (574) 596-3633."
        keywords="lawn maintenance Goshen Indiana, lawn mowing Elkhart County, professional lawn care Bristol IN, edging trimming weed control, commercial lawn maintenance Indiana"
        canonical="/services/lawn-maintenance"
        ogTitle="Professional Lawn Maintenance | Broadview Solutions Goshen IN"
        ogDescription="Weekly mowing, edging, trimming & weed control for homes and businesses in Elkhart County, IN. Licensed & insured. Free estimates."
        schema={lawnMaintenanceSchema}
      />
      <Navbar />
      <div className="min-h-screen bg-charcoal-dark pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20lawn%20care%20service%20crew%20using%20commercial%20zero%20turn%20mower%20on%20pristine%20green%20residential%20property%20with%20perfectly%20manicured%20grass%20stripes%20and%20clean%20edges%20bright%20sunny%20day%20high%20quality%20professional%20photography&width=1920&height=1080&seq=lawnmaint001&orientation=landscape"
              alt="Professional Lawn Maintenance"
              className="w-full h-full object-cover object-center"
              width={1920}
              height={1080}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/85 via-charcoal-dark/40 to-charcoal-dark/85"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-offwhite">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 reveal-up">
              Lawn Maintenance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-silver-light reveal-up" style={{ animationDelay: '0.1s' }}>
              Professional lawn care that keeps your property looking its absolute best, week after week
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                  Your Lawn, Our Priority
                </h2>
                <p className="text-lg text-silver-light mb-6">
                  At Broadview Solutions, we understand that your lawn is the foundation of your property's curb appeal. Our comprehensive lawn maintenance service goes beyond simple mowing—we provide complete care that keeps your grass healthy, green, and beautiful throughout the entire season.
                </p>
                <p className="text-lg text-silver-light mb-6">
                  Using commercial-grade equipment and proven techniques, our experienced crew delivers consistent, reliable service that transforms ordinary lawns into neighborhood showcases. From precision cutting to meticulous edging and thorough cleanup, we handle every detail so you can enjoy a pristine lawn without lifting a finger.
                </p>
                <p className="text-lg text-silver-light">
                  Whether you need weekly maintenance during peak season or a customized schedule that fits your budget, we're committed to exceeding your expectations with every visit.
                </p>
              </div>
              <div className="reveal-right">
                <img
                  src="https://readdy.ai/api/search-image?query=beautiful%20manicured%20residential%20lawn%20with%20perfect%20green%20grass%20stripes%20clean%20edges%20along%20sidewalk%20and%20flower%20beds%20professional%20landscaping%20bright%20sunny%20day%20high%20quality%20photography&width=800&height=1000&seq=lawnmaint002&orientation=portrait"
                  alt="Beautifully Maintained Lawn"
                  className="w-full h-[600px] object-cover object-center rounded-lg shadow-xl"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <InlineCTA serviceName="Lawn Maintenance" context="service" />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-charcoal-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Complete Lawn Care Services
              </h2>
              <p className="text-xl text-silver-light max-w-3xl mx-auto">
                Everything your lawn needs to thrive, all included in our comprehensive maintenance packages
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

        {/* Process Section */}
        <section className="py-20 bg-charcoal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Our Proven Process
              </h2>
              <p className="text-xl text-silver-light max-w-3xl mx-auto">
                From assessment to completion, we follow a systematic approach that guarantees exceptional results
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

        <section className="py-12 bg-charcoal-dark">
          <div className="max-w-3xl mx-auto px-6">
            <InlineCTA serviceName="Lawn Maintenance" context="service" />
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
                Everything you need to know about our lawn maintenance services
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
              <InlineCTA serviceName="Lawn Maintenance" context="service" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center reveal-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready For A Beautiful Lawn?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get your free estimate today and discover why homeowners throughout Elkhart County trust us with their lawn care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-primary hover:bg-offwhite px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
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