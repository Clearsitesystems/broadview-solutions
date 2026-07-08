import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { useEffect } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import SeoHead from '../../../components/feature/SeoHead';

export default function SeasonalCleanupGoshenPage() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: 'ri-calendar-event-line',
      title: 'Seasonal Timing Expertise',
      description: 'We know exactly when northern Indiana lawns and beds need attention. Spring prep starts in late March. Fall cleanup ramps up in October. We time every service for maximum impact.'
    },
    {
      icon: 'ri-delete-bin-line',
      title: 'Complete Debris Removal',
      description: 'All leaves, branches, and yard waste are hauled away and properly disposed of. You never have to bag, drag, or haul anything to the curb.'
    },
    {
      icon: 'ri-plant-line',
      title: 'Bed Preparation & Mulch',
      description: 'We edge, weed, and refresh every bed with a clean layer of mulch that suppresses weeds, retains moisture, and gives your landscape a polished, professional appearance.'
    },
    {
      icon: 'ri-drop-line',
      title: 'Gutter & Downspout Cleaning',
      description: 'Clogged gutters cause water damage, foundation issues, and ice dams. We clear every gutter and downspout as part of our seasonal cleanup packages.'
    },
    {
      icon: 'ri-tools-line',
      title: 'Pruning & Winterization',
      description: 'Dead branches are removed, perennials are cut back, and shrubs are shaped to promote healthy spring growth and prevent winter breakage.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Property Protection',
      description: 'Thorough fall cleanup prevents lawn smothering, mold growth, and pest habitats. Spring prep eliminates winter debris that blocks new growth and invites disease.'
    }
  ];

  const springServices = [
    'Removal of winter debris, sticks, and dead growth from lawns and beds',
    'Bed edging and reshaping for clean, defined borders',
    'Weed removal from mulch beds and landscape areas',
    'Fresh mulch installation at 2 to 3 inch depth',
    'Pruning of dead or damaged branches from shrubs and trees',
    'Gutter and downspout cleaning for proper drainage',
    'First mow of the season with complete edging and cleanup'
  ];

  const fallServices = [
    'Complete leaf removal from lawns, beds, and landscape areas',
    'Multiple visits scheduled as leaves drop for thorough coverage',
    'Final bed cleanup and cutting back of perennials',
    'Gutter and downspout debris removal before winter',
    'Mulch refresh to protect root systems through cold months',
    'Branch and storm debris removal and hauling',
    'Lawn winterization preparation and final season blowdown'
  ];

  const trustSignals = [
    {
      icon: 'ri-shield-check-line',
      label: 'Licensed & Insured',
      detail: 'Full coverage on every cleanup visit for your peace of mind'
    },
    {
      icon: 'ri-map-pin-line',
      label: 'Goshen & Elkhart County',
      detail: 'Local crews who understand Indiana seasonal cycles'
    },
    {
      icon: 'ri-time-line',
      label: 'On-Time Seasonal Windows',
      detail: 'Spring and fall slots fill fast, book early for priority scheduling'
    },
    {
      icon: 'ri-award-line',
      label: 'Satisfaction Guaranteed',
      detail: 'We do not leave until every bed, gutter, and lawn area is clean'
    }
  ];

  const faqs = [
    {
      question: 'When is the best time to schedule spring cleanup in Goshen?',
      answer: 'For northern Indiana, the ideal spring cleanup window is late March through mid-April, once the ground has thawed and before new growth begins. Booking by early March guarantees your preferred date, since spring slots fill quickly once the weather breaks. We monitor soil temperatures and will adjust your service date if an early thaw or late frost shifts the timing.'
    },
    {
      question: 'How many fall cleanup visits will my property need?',
      answer: 'Most properties in Elkhart County need 2 to 3 visits during fall, depending on tree coverage. We schedule the first visit in mid-October, a second in early November, and a final comprehensive cleanup after all leaves have dropped. This staged approach keeps your lawn clear and healthy rather than smothered under a thick leaf layer for weeks.'
    },
    {
      question: 'Do you haul away all the debris and leaves?',
      answer: 'Yes, absolutely. All leaves, branches, yard waste, and gutter debris are removed from your property and hauled to proper disposal or composting facilities. You do not need to provide bags, trailers, or dump runs. We handle the entire process from cleanup to disposal, leaving your property pristine.'
    },
    {
      question: 'Can I add mulch installation to my cleanup service?',
      answer: 'Mulch installation is one of our most popular add-ons for both spring and fall cleanups. In spring, fresh mulch gives beds a clean start and suppresses early weeds. In fall, a mulch refresh insulates root systems through winter. We measure your bed square footage and provide a transparent quote before starting.'
    },
    {
      question: 'What happens if the weather delays my scheduled cleanup?',
      answer: 'Spring and fall weather in Indiana can be unpredictable. If rain, snow, or frozen ground delays your service, we automatically reschedule to the next workable day and notify you by text or call. For fall leaf removal, we may shift timing slightly if high winds cause a sudden leaf drop, ensuring we catch the bulk of debris efficiently.'
    }
  ];

  const seasonalSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Spring & Fall Cleanup Services",
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
      "serviceType": "Seasonal Landscape Cleanup",
      "areaServed": { "@type": "AdministrativeArea", "name": "Elkhart County, Indiana" },
      "description": "Spring and fall cleanup services in Goshen, Indiana. Leaf removal, debris hauling, mulch installation, bed preparation & gutter cleaning. Licensed & insured landscaping professionals. Call (574) 596-3633.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services/seasonal-cleanup-goshen`,
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
          "name": "Seasonal Cleanup Goshen",
          "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/services/seasonal-cleanup-goshen`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When is the best time to schedule spring cleanup in Goshen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For northern Indiana, the ideal spring cleanup window is late March through mid-April, once the ground has thawed and before new growth begins. Booking by early March guarantees your preferred date, since spring slots fill quickly once the weather breaks. We monitor soil temperatures and will adjust your service date if an early thaw or late frost shifts the timing."
          }
        },
        {
          "@type": "Question",
          "name": "How many fall cleanup visits will my property need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most properties in Elkhart County need 2 to 3 visits during fall, depending on tree coverage. We schedule the first visit in mid-October, a second in early November, and a final comprehensive cleanup after all leaves have dropped. This staged approach keeps your lawn clear and healthy rather than smothered under a thick leaf layer for weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Do you haul away all the debris and leaves?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. All leaves, branches, yard waste, and gutter debris are removed from your property and hauled to proper disposal or composting facilities. You do not need to provide bags, trailers, or dump runs. We handle the entire process from cleanup to disposal, leaving your property pristine."
          }
        },
        {
          "@type": "Question",
          "name": "Can I add mulch installation to my cleanup service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mulch installation is one of our most popular add-ons for both spring and fall cleanups. In spring, fresh mulch gives beds a clean start and suppresses early weeds. In fall, a mulch refresh insulates root systems through winter. We measure your bed square footage and provide a transparent quote before starting."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if the weather delays my scheduled cleanup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Spring and fall weather in Indiana can be unpredictable. If rain, snow, or frozen ground delays your service, we automatically reschedule to the next workable day and notify you by text or call. For fall leaf removal, we may shift timing slightly if high winds cause a sudden leaf drop, ensuring we catch the bulk of debris efficiently."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SeoHead
        title="Spring & Fall Cleanup Services | Goshen, Indiana Landscaping"
        description="Professional spring & fall cleanup services in Goshen, Indiana. Leaf removal, debris hauling, mulch installation, bed preparation & gutter cleaning. Licensed & insured. Call (574) 596-3633."
        keywords="spring cleanup Goshen Indiana, fall leaf removal Elkhart County, seasonal landscaping Bristol IN, mulch installation Goshen, gutter cleaning Indiana, Broadview Solutions cleanup"
        canonical="/services/seasonal-cleanup-goshen"
        ogTitle="Spring & Fall Cleanup Services | Goshen, Indiana Landscaping"
        ogDescription="Complete spring & fall cleanup in Goshen & Elkhart County. Leaf removal, mulch, debris hauling & gutter cleaning. Free estimates."
        schema={seasonalSchema}
      />
      <Navbar />
      <div className="min-h-screen bg-charcoal-dark pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20landscaping%20crew%20performing%20spring%20cleanup%20on%20residential%20property%20removing%20winter%20debris%20raking%20leaves%20fresh%20mulch%20in%20flower%20beds%20bright%20sunny%20day%20green%20grass%20beginning%20to%20grow%20high%20quality%20professional%20photography&width=1920&height=1080&seq=seasclean001&orientation=landscape"
              alt="Spring and Fall Cleanup Services in Goshen Indiana"
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
              Spring & Fall Cleanup Services in Goshen, Indiana
            </h1>
            <p className="text-xl md:text-2xl mb-8 reveal-up text-silver-light" style={{ animationDelay: '0.1s' }}>
              Professional seasonal cleanup that prepares your property for every change in the Indiana weather
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
                  Transition Your Property Like a Pro
                </h2>
                <p className="text-lg text-silver-light mb-6">
                  Indiana's four distinct seasons are beautiful, but they each leave a mess behind. Winter drops branches and compacted debris. Spring unleashes weeds and dead growth. Summer ends with falling leaves that smother lawns if left untouched. Without thorough seasonal cleanup, your landscape suffers, your curb appeal drops, and small problems become expensive fixes.
                </p>
                <p className="text-lg text-silver-light mb-6">
                  At Broadview Solutions, we specialize in spring and fall cleanup services that do more than rake leaves. We remove every stick, edge every bed, refresh every mulch layer, and clear every gutter so your property transitions smoothly into the next season. Our crews understand northern Indiana's seasonal timing. We know when to start spring prep before the growing season kicks into gear. We know how to stage fall visits so leaves never sit on your lawn long enough to cause damage.
                </p>
                <p className="text-lg text-silver-light">
                  Whether you need a one-time seasonal refresh or a recurring cleanup program bundled with weekly mowing, we handle the heavy lifting, hauling, and detail work so you can enjoy your yard instead of fighting it.
                </p>
              </div>
              <div className="reveal-right">
                <img
                  src="https://readdy.ai/api/search-image?query=beautiful%20residential%20property%20after%20professional%20fall%20cleanup%20with%20all%20leaves%20removed%20clean%20lawn%20fresh%20mulch%20in%20beds%20trimmed%20bushes%20ready%20for%20winter%20bright%20autumn%20day%20high%20quality%20photography&width=800&height=1000&seq=seasclean002&orientation=portrait"
                  alt="Property after seasonal cleanup in Goshen Indiana"
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
                Cleanup Services Built for Indiana Seasons
              </h2>
              <p className="text-xl text-silver-light max-w-3xl mx-auto">
                Every service is designed around the unique demands of northern Indiana's spring thaw and fall leaf drop
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

        {/* Spring vs Fall Packages */}
        <section className="py-20 bg-charcoal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Spring & Fall Cleanup Packages
              </h2>
              <p className="text-xl text-silver-light max-w-3xl mx-auto">
                Two focused services, each timed for maximum impact on your property
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
                  Wake your property up from winter with a complete refresh that sets the tone for the entire growing season.
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

        {/* Trust Signals */}
        <section className="py-20 bg-charcoal-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Why Goshen Homeowners Trust Broadview
              </h2>
              <p className="text-xl text-silver-light max-w-3xl mx-auto">
                Local crews, seasonal expertise, and a guarantee that your property will be clean when we leave
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustSignals.map((signal, index) => (
                <div
                  key={index}
                  className="bg-charcoal p-6 rounded-lg border border-silver-dark/30 text-center reveal-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${signal.icon} text-2xl text-primary`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-offwhite mb-1">{signal.label}</h3>
                  <p className="text-silver-light text-sm">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-charcoal">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Seasonal Cleanup FAQs
              </h2>
              <p className="text-xl text-silver-light">
                Common questions about spring and fall cleanup in Goshen and Elkhart County
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center reveal-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Seasonal Cleanup Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Spring and fall slots fill fast in Elkhart County. Reserve your spot now and let us handle the heavy lifting.
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