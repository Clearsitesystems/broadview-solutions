import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { useEffect } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import SeoHead from '../../../components/feature/SeoHead';

export default function ResidentialLawnCarePage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: 'ri-home-smile-line',
      title: 'Personalized Care Plans',
      description: 'Every lawn is different. We assess your grass type, soil condition, sun exposure, and usage to build a mowing and care schedule tailored specifically to your yard.'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Lawn Health Focus',
      description: 'We mow at the correct height for your grass variety, alternate cutting patterns to prevent ruts, and watch for signs of stress, disease, or pest issues before they spread.'
    },
    {
      icon: 'ri-parent-line',
      title: 'Family-Friendly Approach',
      description: 'We work respectfully around your family schedule, keep gates closed, and leave your yard safe for kids and pets with every visit completed and cleaned up.'
    },
    {
      icon: 'ri-chat-smile-line',
      title: 'Transparent Communication',
      description: 'You will know exactly when we are coming, what we did, and what we noticed. No surprises, no hidden fees, and easy scheduling changes by text or call.'
    },
    {
      icon: 'ri-map-pin-user-line',
      title: 'Neighborhood Focus',
      description: 'We group routes by neighborhood, which means lower travel time, lower emissions, and consistent service timing for homes in the same area of Goshen and Elkhart County.'
    },
    {
      icon: 'ri-seedling-line',
      title: 'Seasonal Adjustments',
      description: 'As temperatures and growth rates change, we adjust mowing frequency, cutting height, and edging intensity to keep your lawn healthy through every phase of the Indiana growing season.'
    }
  ];

  const includedServices = [
    'Weekly or bi-weekly mowing at the optimal height for your grass type',
    'Precision edging along driveways, sidewalks, and flower beds',
    'String trimming around trees, fences, and landscape features',
    'Complete blowdown of clippings and debris from all hard surfaces',
    'Weed control along edges and in mulch beds during each visit',
    'Seasonal bed cleanup and mulch refresh available as add-ons',
    'Lawn health observations shared with you after each visit'
  ];

  const trustSignals = [
    {
      icon: 'ri-shield-check-line',
      label: 'Licensed & Insured',
      detail: 'Full coverage for your property and our crew on every visit'
    },
    {
      icon: 'ri-map-pin-line',
      label: 'Local to Elkhart County',
      detail: 'Goshen, Elkhart, Bristol, Middlebury & Wakarusa homes served'
    },
    {
      icon: 'ri-time-line',
      label: 'Reliable Scheduling',
      detail: 'Same-day service, every week, with automatic weather rescheduling'
    },
    {
      icon: 'ri-award-line',
      label: 'Satisfaction Guaranteed',
      detail: 'If something is not right, we come back and fix it at no charge'
    }
  ];

  const faqs = [
    {
      question: 'How do I know what mowing schedule is right for my lawn?',
      answer: 'During your free estimate, we evaluate your grass type, sun exposure, soil condition, and irrigation setup. Most Kentucky bluegrass and tall fescue lawns in northern Indiana do best with weekly mowing from April through October, with bi-weekly service during slower growth periods. We will recommend the schedule that keeps your lawn healthiest, not the one that costs the most.'
    },
    {
      question: 'Will mowing damage my lawn if it has been wet?',
      answer: 'We never mow wet grass. Our team checks conditions before every visit, and if your lawn is too wet from rain or irrigation, we automatically reschedule to the next dry day at no extra charge. Mowing wet grass creates ruts, spreads disease, and leaves an uneven cut, so we would rather wait a day than risk your lawn health.'
    },
    {
      question: 'Do I need to be home when you service the lawn?',
      answer: 'No. Most of our residential clients provide gate access or leave gates unlocked on service days. Our crews are background-checked, uniformed, and trained to secure your property before leaving. You will receive a service notification when work begins and ends, along with any observations we made about your lawn.'
    },
    {
      question: 'What if I want to skip a week or change my schedule?',
      answer: 'Life happens. You can pause, skip, or reschedule any visit by texting or calling us directly. There are no contracts locking you into a rigid schedule. We ask for 48 hours notice when possible so we can adjust routing for other neighbors on your route.'
    },
    {
      question: 'Can you help with more than just mowing?',
      answer: 'Absolutely. Many of our residential clients add seasonal cleanup, mulch installation, shrub trimming, and snow plowing to their service plan. Bundling services saves you money, simplifies billing, and ensures your entire property is maintained by one team that knows your yard inside and out.'
    }
  ];

  const residentialSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Residential Lawn Care Service",
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
      "serviceType": "Residential Lawn Maintenance",
      "areaServed": { "@type": "AdministrativeArea", "name": "Elkhart County, Indiana" },
      "description": "Residential lawn care service in Goshen, IN. Weekly mowing, edging, trimming & weed control for homeowners. Personalized care, family-friendly approach & transparent pricing. Licensed & insured.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services/residential-lawn-care`,
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
          "name": "Residential Lawn Care",
          "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services/residential-lawn-care`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I know what mowing schedule is right for my lawn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During your free estimate, we evaluate your grass type, sun exposure, soil condition, and irrigation setup. Most Kentucky bluegrass and tall fescue lawns in northern Indiana do best with weekly mowing from April through October, with bi-weekly service during slower growth periods. We will recommend the schedule that keeps your lawn healthiest, not the one that costs the most."
          }
        },
        {
          "@type": "Question",
          "name": "Will mowing damage my lawn if it has been wet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We never mow wet grass. Our team checks conditions before every visit, and if your lawn is too wet from rain or irrigation, we automatically reschedule to the next dry day at no extra charge. Mowing wet grass creates ruts, spreads disease, and leaves an uneven cut, so we would rather wait a day than risk your lawn health."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be home when you service the lawn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Most of our residential clients provide gate access or leave gates unlocked on service days. Our crews are background-checked, uniformed, and trained to secure your property before leaving. You will receive a service notification when work begins and ends, along with any observations we made about your lawn."
          }
        },
        {
          "@type": "Question",
          "name": "What if I want to skip a week or change my schedule?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Life happens. You can pause, skip, or reschedule any visit by texting or calling us directly. There are no contracts locking you into a rigid schedule. We ask for 48 hours notice when possible so we can adjust routing for other neighbors on your route."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with more than just mowing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Many of our residential clients add seasonal cleanup, mulch installation, shrub trimming, and snow plowing to their service plan. Bundling services saves you money, simplifies billing, and ensures your entire property is maintained by one team that knows your yard inside and out."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SeoHead
        title="Residential Lawn Care Service | Goshen, IN - Broadview Solutions"
        description="Professional residential lawn care in Goshen, IN. Weekly mowing, edging, trimming & weed control for homeowners. Personalized plans, family-friendly service & transparent pricing. Call (574) 596-3633."
        keywords="residential lawn care Goshen IN, home lawn mowing Elkhart County, backyard maintenance Bristol Indiana, family lawn service, weekly mowing Goshen, Broadview Solutions residential"
        canonical="/services/residential-lawn-care"
        ogTitle="Residential Lawn Care Service | Goshen, IN - Broadview Solutions"
        ogDescription="Weekly lawn mowing, edging & trimming for homeowners in Goshen & Elkhart County. Personalized care, no contracts, family-friendly crews. Free estimates."
        schema={residentialSchema}
      />
      <Navbar />
      <div className="min-h-screen bg-charcoal-dark pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=beautiful%20residential%20backyard%20with%20perfectly%20manicured%20green%20lawn%20clean%20edges%20along%20flower%20beds%20and%20walkway%20family%20friendly%20home%20landscaping%20bright%20sunny%20day%20children%20playing%20in%20background%20high%20quality%20professional%20photography&width=1920&height=1080&seq=reslawn001&orientation=landscape"
              alt="Residential Lawn Care in Goshen Indiana"
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
              Residential Lawn Care Service in Goshen, IN
            </h1>
            <p className="text-xl md:text-2xl mb-8 reveal-up text-silver-light" style={{ animationDelay: '0.1s' }}>
              Personalized lawn care that keeps your home looking beautiful, your family safe, and your weekends free
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
              <div className="reveal-left order-2 md:order-1">
                <img
                  src="https://readdy.ai/api/search-image?query=beautiful%20home%20front%20yard%20with%20lush%20green%20grass%20striped%20mowing%20pattern%20clean%20edges%20along%20driveway%20flower%20beds%20with%20colorful%20plants%20well%20maintained%20suburban%20home%20bright%20sunny%20day%20high%20quality%20photography&width=800&height=1000&seq=reslawn002&orientation=portrait"
                  alt="Beautiful residential lawn in Goshen Indiana"
                  className="w-full h-[600px] object-cover object-center rounded-lg shadow-xl"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="reveal-right order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                  Your Lawn, Your Pride, Our Priority
                </h2>
                <p className="text-lg text-silver-light mb-6">
                  Nothing makes a home feel more welcoming than a thick, green lawn with crisp edges and clean walkways. At Broadview Solutions, we treat your yard like it is our own, delivering residential lawn care that combines professional results with a personal touch. We are not a faceless franchise crew. We are a local team that knows Goshen neighborhoods, understands Indiana grass types, and shows up with the same care we would give our own family lawns.
                </p>
                <p className="text-lg text-silver-light mb-6">
                  Our residential service goes far beyond pushing a mower. We assess your turf condition on every visit, adjust cutting height as temperatures change, and flag issues like thinning grass, weed pressure, or irrigation problems before they become expensive fixes. We communicate clearly, schedule reliably, and never leave clippings on your driveway or porches. When we finish, your property looks finished.
                </p>
                <p className="text-lg text-silver-light">
                  Whether you want basic weekly mowing or a complete lawn health program, we build a plan around your budget, your schedule, and your goals. No contracts, no surprises, and no weekend chores. Just a beautiful lawn you can actually enjoy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-charcoal-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Why Homeowners Choose Broadview
              </h2>
              <p className="text-xl text-silver-light max-w-3xl mx-auto">
                Lawn care built around your family, your schedule, and the unique needs of your yard
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
                  Every residential visit is a complete lawn care service, not just a quick mow. We edge, trim, clean, and inspect so your yard looks its best every single week.
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
                  Local Trust You Can Count On
                </h2>
                <p className="text-lg text-silver-light mb-8">
                  We live and work in the same communities we serve. That means real accountability, real relationships, and real pride in every yard we maintain.
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
                Residential Lawn Care FAQs
              </h2>
              <p className="text-xl text-silver-light">
                Common questions from homeowners in Goshen and Elkhart County
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
              Reclaim Your Weekends
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free lawn care estimate in minutes. No contracts, no pressure, just honest pricing for beautiful results.
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