import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import SeoHead from '@/components/feature/SeoHead';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://broadviewsolutionsllc.com';

const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteUrl}/about#webpage`,
    "url": `${siteUrl}/about`,
    "name": "About Broadview Solutions | Family-Owned Lawn Care Company Goshen Indiana",
    "description": "Learn about Broadview Solutions — a family-owned lawn care and property maintenance company in Goshen, Indiana. Founded by Alexis Saucedo, we proudly serve Elkhart County with professional lawn maintenance, seasonal cleanup, and snow plowing.",
    "isPartOf": { "@id": `${siteUrl}/#website` },
    "about": { "@id": `${siteUrl}/#organization` },
    "inLanguage": "en-US",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": `${siteUrl}/about` }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "Broadview Solutions",
    "legalName": "Broadview Solutions LLC",
    "description": "Professional lawn care, seasonal cleanup, and snow plowing services for residential and commercial properties in Goshen, Elkhart, Bristol, Middlebury, and Wakarusa, Indiana.",
    "url": siteUrl,
    "logo": "https://static.readdy.ai/image/af8ae33b67f17c82a3c09cb93c97754b/2887571b48c57ebbe859c1035b163ed5.png",
    "image": "https://static.readdy.ai/image/af8ae33b67f17c82a3c09cb93c97754b/ff3f335b62270b3bdcbced9e413ec8b4.webp",
    "telephone": "+1-574-596-3633",
    "email": "alex28Saucedo@gmail.com",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Goshen",
      "addressRegion": "IN",
      "postalCode": "46526",
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "City", "name": "Goshen", "containedInPlace": { "@type": "State", "name": "Indiana" } },
      { "@type": "City", "name": "Elkhart", "containedInPlace": { "@type": "State", "name": "Indiana" } },
      { "@type": "City", "name": "Bristol", "containedInPlace": { "@type": "State", "name": "Indiana" } },
      { "@type": "City", "name": "Middlebury", "containedInPlace": { "@type": "State", "name": "Indiana" } },
      { "@type": "City", "name": "Wakarusa", "containedInPlace": { "@type": "State", "name": "Indiana" } }
    ],
    "sameAs": [
      "https://www.facebook.com/BroadViewLawns",
      "https://www.google.com/maps/search/Broadview+Solutions+Goshen+Indiana"
    ],
    "founder": {
      "@type": "Person",
      "name": "Alexis Saucedo",
      "jobTitle": "Founder & Managing Partner",
      "worksFor": { "@type": "Organization", "name": "Broadview Solutions" }
    },
    "knowsAbout": [
      "Lawn Maintenance",
      "Seasonal Cleanup",
      "Snow Plowing",
      "Landscaping",
      "Property Maintenance",
      "Commercial Grounds Maintenance",
      "Residential Lawn Care"
    ],
    "hasCredential": "Licensed & Insured",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Verified Customer" },
        "reviewBody": "Alex and his team serviced our property in Bristol, Indiana, and they consistently did an excellent job. They're thorough, professional, and always make sure to clean up the grass clippings at our request and blow off our porches before they leave. I would definitely recommend them to others.",
        "datePublished": "2024-07-15"
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Mark T." },
        "reviewBody": "Broadview Solutions has been maintaining our commercial property in Goshen for two seasons now. Reliable, professional, and the lawn always looks immaculate. They show up on schedule every single time — no excuses, no surprises. Highly recommend for any business owner in Elkhart County.",
        "datePublished": "2024-08-20"
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Sarah M." },
        "reviewBody": "We hired Broadview for fall cleanup and were blown away by the results. They cleared every leaf, trimmed the beds, and left the yard looking better than it did all summer. Alexis was easy to communicate with and the pricing was very fair. Will absolutely be using them again.",
        "datePublished": "2024-10-05"
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Dave R." },
        "reviewBody": "Called Broadview after a big snowstorm and they were out plowing within a couple hours. Driveway and walkways were completely clear. Very responsive and professional. This is the kind of local business you want to support — they actually care about doing a good job.",
        "datePublished": "2025-01-18"
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Jennifer K." },
        "reviewBody": "I've tried several lawn care companies in the Elkhart area and Broadview Solutions is by far the best. The crew is friendly, the work is consistent, and they actually listen when you have specific requests. My yard has never looked this good. Five stars without hesitation.",
        "datePublished": "2025-03-10"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Broadview Solutions licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Broadview Solutions is fully licensed and insured in the state of Indiana, carrying comprehensive general liability and workers' compensation coverage. This protects both our crew and your property on every visit."
        }
      },
      {
        "@type": "Question",
        "name": "How long has Broadview Solutions been in business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Broadview Solutions was founded in 2020 by Alexis Saucedo in Goshen, Indiana. Since then, we've grown from a single-truck operation to a full-service property maintenance company serving hundreds of residential and commercial clients across Elkhart County."
        }
      },
      {
        "@type": "Question",
        "name": "What areas does Broadview Solutions serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Goshen, Elkhart, Bristol, Middlebury, Wakarusa, and surrounding communities throughout Elkhart County, Indiana. Contact us to confirm service availability in your specific area."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Broadview Solutions offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Broadview Solutions offers professional lawn maintenance (mowing, edging, trimming, blowing), seasonal cleanup (spring and fall), and 24/7 snow plowing and ice management for both residential and commercial properties in Northern Indiana."
        }
      },
      {
        "@type": "Question",
        "name": "Does Broadview Solutions work with commercial properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We have a dedicated commercial division serving businesses, property managers, and HOAs throughout Elkhart County. We offer seasonal and annual maintenance contracts with consistent scheduling and detailed service reports."
        }
      },
      {
        "@type": "Question",
        "name": "Who founded Broadview Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Broadview Solutions was founded by Alexis Saucedo, a young entrepreneur from Goshen, Indiana, who built the company from the ground up starting in 2020. Alexis continues to lead the company with a hands-on approach and a commitment to quality and community."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a free estimate from Broadview Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can request a free estimate by calling us at (574) 596-3633, emailing alex28Saucedo@gmail.com, or filling out the contact form on our website. We respond within 24 hours and can often schedule a same-day or next-day site visit."
        }
      }
    ]
  }
];

const values = [
  {
    icon: 'ri-shield-check-line',
    title: 'Reliability You Can Count On',
    description: 'We show up on schedule, every time. No excuses, no no-shows. When you book Broadview Solutions, you get a crew that treats your schedule as seriously as their own.'
  },
  {
    icon: 'ri-tools-line',
    title: 'Professional-Grade Quality',
    description: 'We invest in commercial equipment because your property deserves a professional finish — clean cuts, crisp edges, and a spotless cleanup every single visit.'
  },
  {
    icon: 'ri-heart-line',
    title: 'Community-First Mentality',
    description: "We're not just a vendor — we're your neighbors. We go above and beyond the job description because genuine care for people is part of who we are."
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Transparent Pricing',
    description: 'No surprise fees, no hidden charges. We provide clear written estimates before any work begins and stand behind our quotes 100%.'
  },
  {
    icon: 'ri-leaf-line',
    title: 'Environmental Responsibility',
    description: 'We use responsible products and sustainable practices that protect your landscape and the environment — including eco-friendly ice melt options.'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Responsive Communication',
    description: "Have a question or concern? We actually pick up the phone. Easy, direct communication with no runaround — you'll always know where things stand."
  }
];

const milestones = [
  { year: '2020', label: 'Founded', desc: 'Broadview Solutions launched in Goshen, IN with a single truck and a commitment to quality.' },
  { year: '2021', label: 'Expanded', desc: 'Grew to serve all of Elkhart County including Elkhart, Bristol, and Middlebury.' },
  { year: '2022', label: 'Commercial Division', desc: 'Added commercial property management services for businesses and HOAs.' },
  { year: '2023', label: 'Snow Division', desc: 'Launched 24/7 winter snow plowing and ice management services.' },
  { year: '2024', label: 'Growing Strong', desc: 'Serving hundreds of residential and commercial clients across Northern Indiana.' }
];

const reviews = [
  {
    author: 'Verified Customer',
    location: 'Bristol, Indiana',
    date: 'July 2024',
    text: 'Alex and his team serviced our property in Bristol, Indiana, and they consistently did an excellent job. They\'re thorough, professional, and always make sure to clean up the grass clippings at our request and blow off our porches before they leave. I would definitely recommend them to others.',
    stars: 5,
  },
  {
    author: 'Mark T.',
    location: 'Goshen, Indiana',
    date: 'August 2024',
    text: 'Broadview Solutions has been maintaining our commercial property in Goshen for two seasons now. Reliable, professional, and the lawn always looks immaculate. They show up on schedule every single time — no excuses, no surprises. Highly recommend for any business owner in Elkhart County.',
    stars: 5,
  },
  {
    author: 'Sarah M.',
    location: 'Elkhart, Indiana',
    date: 'October 2024',
    text: 'We hired Broadview for fall cleanup and were blown away by the results. They cleared every leaf, trimmed the beds, and left the yard looking better than it did all summer. Alexis was easy to communicate with and the pricing was very fair. Will absolutely be using them again.',
    stars: 5,
  },
  {
    author: 'Dave R.',
    location: 'Middlebury, Indiana',
    date: 'January 2025',
    text: 'Called Broadview after a big snowstorm and they were out plowing within a couple hours. Driveway and walkways were completely clear. Very responsive and professional. This is the kind of local business you want to support — they actually care about doing a good job.',
    stars: 5,
  },
  {
    author: 'Jennifer K.',
    location: 'Elkhart, Indiana',
    date: 'March 2025',
    text: 'I\'ve tried several lawn care companies in the Elkhart area and Broadview Solutions is by far the best. The crew is friendly, the work is consistent, and they actually listen when you have specific requests. My yard has never looked this good. Five stars without hesitation.',
    stars: 5,
  },
];

const faqs = [
  {
    question: 'Is Broadview Solutions licensed and insured?',
    answer: 'Yes. Broadview Solutions is fully licensed and insured in the state of Indiana, carrying comprehensive general liability and workers\' compensation coverage. This protects both our crew and your property on every visit.'
  },
  {
    question: 'How long has Broadview Solutions been in business?',
    answer: 'Broadview Solutions was founded in 2020 by Alexis Saucedo in Goshen, Indiana. Since then, we\'ve grown from a single-truck operation to a full-service property maintenance company serving hundreds of residential and commercial clients across Elkhart County.'
  },
  {
    question: 'What areas does Broadview Solutions serve?',
    answer: 'We serve Goshen, Elkhart, Bristol, Middlebury, Wakarusa, and surrounding communities throughout Elkhart County, Indiana. Contact us to confirm service availability in your specific area.'
  },
  {
    question: 'What services does Broadview Solutions offer?',
    answer: 'Broadview Solutions offers professional lawn maintenance (mowing, edging, trimming, blowing), seasonal cleanup (spring and fall), and 24/7 snow plowing and ice management for both residential and commercial properties in Northern Indiana.'
  },
  {
    question: 'Does Broadview Solutions work with commercial properties?',
    answer: 'Yes. We have a dedicated commercial division serving businesses, property managers, and HOAs throughout Elkhart County. We offer seasonal and annual maintenance contracts with consistent scheduling and detailed service reports.'
  },
  {
    question: 'Who founded Broadview Solutions?',
    answer: 'Broadview Solutions was founded by Alexis Saucedo, a young entrepreneur from Goshen, Indiana, who built the company from the ground up starting in 2020. Alexis continues to lead the company with a hands-on approach and a commitment to quality and community.'
  },
  {
    question: 'How do I get a free estimate from Broadview Solutions?',
    answer: 'You can request a free estimate by calling us at (574) 596-3633, emailing alex28Saucedo@gmail.com, or filling out the contact form on our website. We respond within 24 hours and can often schedule a same-day or next-day site visit.'
  },
];

export default function AboutPage() {
  const heroReveal = useScrollReveal();
  const storyReveal = useScrollReveal({ threshold: 0.2 });
  const valuesReveal = useScrollReveal({ threshold: 0.1 });
  const timelineReveal = useScrollReveal({ threshold: 0.1 });
  const reviewReveal = useScrollReveal({ threshold: 0.2 });
  const faqReveal = useScrollReveal({ threshold: 0.1 });
  const ctaReveal = useScrollReveal({ threshold: 0.3 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead
        title="About Broadview Solutions | Family-Owned Lawn Care Goshen IN"
        description="Broadview Solutions is a family-owned lawn care company in Goshen, Indiana. Founded by Alexis Saucedo, we provide professional lawn maintenance, seasonal cleanup & snow plowing across Elkhart County. Licensed & insured."
        keywords="about Broadview Solutions, family-owned lawn care Goshen Indiana, local landscaping company Elkhart County, Alexis Saucedo lawn care, professional lawn service Northern Indiana"
        canonical="/about"
        ogTitle="About Broadview Solutions | Family-Owned Lawn Care in Goshen, Indiana"
        ogDescription="Meet the team behind Broadview Solutions — a family-owned, licensed & insured lawn care company serving Goshen, Elkhart, Bristol, and all of Elkhart County, IN since 2020."
        schema={aboutSchema}
      />
      <div className="min-h-screen bg-[#1A2424]">
        <Navbar />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20lawn%20care%20team%20working%20together%20on%20a%20beautifully%20manicured%20green%20residential%20property%20sunny%20day%20family%20owned%20small%20business%20crew%20wearing%20matching%20uniforms%20green%20lush%20grass%20clean%20yard%20northern%20indiana%20summer%20warm%20golden%20light%20outdoor%20photography&width=1920&height=900&seq=about_hero_001&orientation=landscape"
            alt="Broadview Solutions team at work"
            className="absolute inset-0 w-full h-full object-cover object-top"
            width={1920}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2424]/95 via-[#1A2424]/80 to-[#1A2424]/50"></div>
          <div
            ref={heroReveal.ref}
            className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full transition-all duration-700 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2D5016]/20 border border-[#2D5016]/40 text-[#4ade80] text-sm font-medium mb-6">
                <i className="ri-map-pin-line mr-2"></i>
                Goshen, Indiana — Serving Elkhart County Since 2020
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                More Than Lawn Care — <span className="text-[#4ade80]">We're Your Neighbors</span>
              </h1>
              <p className="text-xl text-[#C0C8CC] mb-8 leading-relaxed">
                Broadview Solutions is a family-owned, licensed and insured property maintenance company built on hard work, integrity, and a genuine commitment to the communities we serve across Elkhart County.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-[#2D5016] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2D5016]/80 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+15745963633"
                  className="bg-transparent border-2 border-[#8A9BA8] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all flex items-center space-x-2 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-line"></i>
                  <span>(574) 596-3633</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="bg-[#1C2B2B] border-y border-[#8A9BA8]/10 py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {[
                { icon: 'ri-shield-check-line', text: 'Licensed & Insured', color: 'text-[#4ade80]' },
                { icon: 'ri-map-pin-2-line', text: 'Goshen, Indiana Based', color: 'text-[#D4AF37]' },
                { icon: 'ri-calendar-check-line', text: 'Serving Since 2020', color: 'text-[#4ade80]' },
                { icon: 'ri-star-fill', text: '5-Star Rated Service', color: 'text-[#D4AF37]' },
                { icon: 'ri-home-heart-line', text: 'Family-Owned & Operated', color: 'text-[#4ade80]' },
              ].map((badge, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <i className={`${badge.icon} text-lg ${badge.color}`}></i>
                  <span className="text-[#C0C8CC] text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-[#1A2424] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              ref={storyReveal.ref}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${storyReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div>
                <div className="text-[#D4AF37] uppercase text-sm font-semibold tracking-wider mb-4">Our Story</div>
                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                  Built on Hard Work, Pride, and a Vision for Something Better
                </h2>
                <p className="text-[#C0C8CC] leading-relaxed mb-5">
                  Broadview Solutions was founded in 2020 by Alexis Saucedo — a young entrepreneur from Goshen, Indiana, who believed that professional lawn care could be done better. Better quality, better communication, and a genuine commitment to the people behind each property.
                </p>
                <p className="text-[#C0C8CC] leading-relaxed mb-5">
                  What started as a single-truck operation serving a handful of residential clients in Goshen quickly grew into a full-service property maintenance company serving hundreds of homes and businesses across Elkhart County. Today, Broadview Solutions provides lawn maintenance, seasonal cleanup, and 24/7 snow plowing for residential homeowners, commercial property managers, and HOAs throughout Northern Indiana.
                </p>
                <p className="text-[#C0C8CC] leading-relaxed mb-5">
                  Our growth has been intentional and grounded. We don't cut corners, oversell, or take on more than we can handle. Every client who trusts us with their property gets the same level of care and attention — whether they have a small residential yard or a large commercial campus.
                </p>
                <p className="text-[#C0C8CC] leading-relaxed">
                  We are fully <strong className="text-white">licensed and insured</strong>, giving every client complete peace of mind. And we stand behind our work — if something isn't right, we make it right.
                </p>
              </div>
              <div className="relative">
                <div className="relative h-[500px] rounded-2xl overflow-hidden"
                  style={{ boxShadow: '0 0 30px 8px rgba(45,80,22,0.35), 0 0 0 2px rgba(45,80,22,0.4)' }}
                >
                  <img
                    src="https://static.readdy.ai/image/af8ae33b67f17c82a3c09cb93c97754b/ff3f335b62270b3bdcbced9e413ec8b4.webp"
                    alt="Broadview Solutions crew — family-owned lawn care team in Goshen Indiana"
                    title="Broadview Solutions Crew — Licensed & Insured Lawn Care Company in Goshen, Indiana"
                    className="w-full h-full object-contain object-center"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2424]/60 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-5 -right-5 bg-[#2D5016] text-white px-6 py-4 rounded-xl">
                  <div className="text-2xl font-bold">Family</div>
                  <div className="text-xs font-medium opacity-90">Owned &amp; Operated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-[#1C2B2B] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              ref={valuesReveal.ref}
              className={`transition-all duration-700 ${valuesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center mb-14">
                <div className="text-[#D4AF37] uppercase text-sm font-semibold tracking-wider mb-4">What We Stand For</div>
                <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
                <p className="text-[#C0C8CC] max-w-2xl mx-auto leading-relaxed">
                  These aren't words on a wall — they're the principles we bring to every property, every visit, every season.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, i) => (
                  <div key={i} className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-7 hover:border-[#2D5016]/50 transition-all duration-300">
                    <div className="w-14 h-14 flex items-center justify-center bg-[#2D5016]/20 rounded-xl mb-5">
                      <i className={`${value.icon} text-2xl text-[#4ade80]`}></i>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-[#C0C8CC] text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-[#1A2424] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              ref={timelineReveal.ref}
              className={`transition-all duration-700 ${timelineReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center mb-14">
                <div className="text-[#D4AF37] uppercase text-sm font-semibold tracking-wider mb-4">Our Journey</div>
                <h2 className="text-4xl font-bold text-white mb-4">How We've Grown</h2>
                <p className="text-[#C0C8CC] max-w-2xl mx-auto">
                  From a single truck in Goshen to a full-service operation across Elkhart County — here's how Broadview Solutions has evolved.
                </p>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#2D5016]/40 hidden lg:block"></div>
                <div className="space-y-10">
                  {milestones.map((m, i) => (
                    <div key={i} className={`flex flex-col lg:flex-row items-center gap-6 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className="bg-[#1C2B2B] border border-[#8A9BA8]/20 rounded-xl p-6 inline-block max-w-sm hover:border-[#2D5016]/50 transition-all">
                          <div className="text-[#4ade80] font-bold text-sm mb-1">{m.label}</div>
                          <p className="text-[#C0C8CC] text-sm">{m.desc}</p>
                        </div>
                      </div>
                      <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-[#2D5016] rounded-full text-white font-bold text-sm flex-shrink-0">
                        {m.year}
                      </div>
                      <div className="flex-1 hidden lg:block"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial + E-E-A-T Proof */}
        <section className="bg-[#1C2B2B] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              ref={reviewReveal.ref}
              className={`transition-all duration-700 ${reviewReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center mb-14">
                <div className="text-[#D4AF37] uppercase text-sm font-semibold tracking-wider mb-4">Google Reviews</div>
                <h2 className="text-4xl font-bold text-white mb-4">What Customers Say About Us</h2>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#D4AF37] text-2xl"></i>
                  ))}
                </div>
                <p className="text-[#8A9BA8] text-sm">5.0 average rating &bull; 5 Google reviews</p>
              </div>

              {/* Reviews Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {reviews.map((review, i) => (
                  <div key={i} className={`bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-6 hover:border-[#2D5016]/50 transition-all duration-300 ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(review.stars)].map((_, si) => (
                          <i key={si} className="ri-star-fill text-[#D4AF37] text-base"></i>
                        ))}
                      </div>
                      <span className="text-[#8A9BA8] text-xs">{review.date}</span>
                    </div>
                    <i className="ri-double-quotes-l text-2xl text-[#8A9BA8]/30 mb-3 block"></i>
                    <p className="text-[#C0C8CC] text-sm leading-relaxed mb-5 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="flex items-center space-x-3 pt-4 border-t border-[#8A9BA8]/10">
                      <div className="w-9 h-9 flex items-center justify-center bg-[#2D5016]/30 rounded-full flex-shrink-0">
                        <i className="ri-user-line text-[#4ade80] text-sm"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{review.author}</div>
                        <div className="text-xs text-[#8A9BA8] flex items-center space-x-1">
                          <i className="ri-map-pin-line text-xs"></i>
                          <span>{review.location}</span>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <i className="ri-google-fill text-[#8A9BA8] text-base"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Credentials + CTA */}
              <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-5">Why Customers Trust Us</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { icon: 'ri-shield-check-line', text: 'Fully Licensed & Insured in Indiana' },
                        { icon: 'ri-map-pin-line', text: 'Local to Goshen — we know this area' },
                        { icon: 'ri-team-line', text: 'Consistent crew — same faces every visit' },
                        { icon: 'ri-star-line', text: '5-star rated on Google' },
                        { icon: 'ri-facebook-circle-line', text: 'Active on Facebook as BroadViewLawns' },
                        { icon: 'ri-calendar-check-line', text: 'Reliable schedule, zero no-shows' },
                      ].map((item, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <i className={`${item.icon} text-[#4ade80] text-base`}></i>
                          <span className="text-[#C0C8CC] text-sm">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.google.com/maps/search/Broadview+Solutions+Goshen+Indiana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-[#2D5016]/20 border border-[#2D5016]/40 text-[#4ade80] px-4 py-3 rounded-lg hover:bg-[#2D5016]/30 transition-all cursor-pointer text-sm font-medium"
                    >
                      <i className="ri-map-pin-2-line"></i>
                      <span>View on Google Business</span>
                    </a>
                    <a
                      href="https://www.google.com/maps/search/Broadview+Solutions+Goshen+Indiana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-3 rounded-lg hover:bg-[#D4AF37]/20 transition-all cursor-pointer text-sm font-medium"
                    >
                      <i className="ri-star-line"></i>
                      <span>Leave Us a Review</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Image Strip */}
        <section className="bg-[#1A2424] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-[#D4AF37] uppercase text-sm font-semibold tracking-wider mb-4">Where We Work</div>
                <h2 className="text-3xl font-bold text-white mb-5">Proudly Serving Elkhart County</h2>
                <p className="text-[#C0C8CC] leading-relaxed mb-6">
                  We provide professional lawn care and property maintenance throughout Elkhart County, Indiana — including Goshen, Elkhart, Bristol, Middlebury, and Wakarusa. As a locally-based company, we understand the unique seasonal demands of Northern Indiana and schedule our services accordingly.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {['Goshen', 'Elkhart', 'Bristol', 'Middlebury', 'Wakarusa', 'Elkhart County'].map((city) => (
                    <div key={city} className="flex items-center space-x-2 bg-[#1C2B2B] border border-[#8A9BA8]/20 rounded-lg px-4 py-2">
                      <i className="ri-map-pin-line text-[#4ade80] text-sm"></i>
                      <span className="text-[#C0C8CC] text-sm">{city}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/service-areas"
                  className="inline-flex items-center space-x-2 text-[#4ade80] font-semibold hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  <span>See All Service Areas</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=aerial%20view%20of%20residential%20neighborhoods%20in%20northern%20indiana%20midwest%20suburbs%20green%20lawns%20well-maintained%20properties%20elkhart%20county%20goshen%20sunny%20day%20from%20above%20bird%20eye%20view%20peaceful%20community&width=800&height=500&seq=about_service_area_001&orientation=landscape"
                  alt="Elkhart County service area — Broadview Solutions covers Goshen, Elkhart, Bristol, Middlebury, Wakarusa"
                  title="Broadview Solutions Service Area — Elkhart County, Northern Indiana"
                  className="w-full h-full object-cover object-top"
                  width={800}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2424]/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#1C2B2B] py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div
              ref={faqReveal.ref}
              className={`transition-all duration-700 ${faqReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center mb-14">
                <div className="text-[#D4AF37] uppercase text-sm font-semibold tracking-wider mb-4">Common Questions</div>
                <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                <p className="text-[#C0C8CC] max-w-xl mx-auto">
                  Everything you want to know about Broadview Solutions — who we are, what we do, and how we work.
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-6 group hover:border-[#2D5016]/50 transition-colors cursor-pointer">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                      <span>{faq.question}</span>
                      <i className="ri-arrow-down-s-line text-2xl text-[#8A9BA8] group-open:rotate-180 group-open:text-[#4ade80] transition-all flex-shrink-0 ml-4"></i>
                    </summary>
                    <p className="mt-4 text-[#C0C8CC] leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-[#8A9BA8] text-sm mb-4">Still have questions? We&apos;re happy to help.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-[#2D5016] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2D5016]/80 transition-colors whitespace-nowrap cursor-pointer text-sm"
                >
                  <i className="ri-question-answer-line"></i>
                  <span>Ask Us Anything</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#2D5016] py-20">
          <div
            ref={ctaReveal.ref}
            className={`max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${ctaReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation estimate today. We'll respond within 24 hours and let you know exactly what we can do for your property.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#2D5016] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#F4F1EC] transition-colors whitespace-nowrap cursor-pointer"
              >
                Request Free Estimate
              </Link>
              <Link
                to="/team"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-team-line"></i>
                <span>Meet Our Team</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
