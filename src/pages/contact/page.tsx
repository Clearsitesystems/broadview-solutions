import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SeoHead from '../../components/feature/SeoHead';
import ABTestButton from '../../components/feature/ABTestButton';
import InlineCTA from '../../components/feature/InlineCTA';
import TestimonialCard from '../../components/feature/TestimonialCard';
import TrustBadge from '../../components/feature/TrustBadge';
import PromoBanner from '../../components/feature/PromoBanner';
import { getRecentTestimonials } from '../../mocks/testimonials';
import { useState, useRef } from 'react';
import { useABTest, FORM_FIELDS_TEST } from '../../hooks/useABTest';

const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Broadview Solutions",
    "description": "Request a free estimate for lawn care, seasonal cleanup, or snow plowing services in Goshen, Elkhart, Bristol, Middlebury, and Wakarusa, Indiana.",
    "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/contact`,
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Broadview Solutions",
      "telephone": "+15745963633",
      "email": "alex28Saucedo@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Goshen",
        "addressRegion": "IN",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "07:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "16:00"
        }
      ]
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
        "name": "Contact",
        "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/contact`
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can you provide an estimate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically provide estimates within 24-48 hours of your initial contact. For urgent requests, we can often schedule a same-day site visit."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All estimates are completely free with no obligation. We'll visit your property, assess your needs, and provide a detailed written proposal."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We are fully licensed, bonded, and insured with comprehensive liability and workers' compensation coverage for your protection."
        }
      },
      {
        "@type": "Question",
        "name": "Do you require contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For residential clients, contracts are optional. For commercial properties, we typically work with seasonal or annual contracts to ensure consistent service and predictable budgeting."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Goshen, Elkhart, Bristol, Middlebury, and Wakarusa, Indiana — and surrounding communities in Elkhart County. Contact us to confirm service in your specific area."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept cash, checks, all major credit cards, and ACH bank transfers. We also offer convenient monthly billing for ongoing maintenance contracts."
        }
      },
      {
        "@type": "Question",
        "name": "How often will you mow my lawn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most residential clients in Goshen and Elkhart County are on a weekly or bi-weekly schedule during the growing season (typically April through October). We'll recommend the right frequency based on your grass type, property size, and personal preference."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer snow plowing for residential driveways?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer 24/7 snow plowing and ice management for both residential driveways and commercial parking lots throughout Elkhart County. We monitor weather forecasts and dispatch crews proactively so your property is clear before you need it."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your seasonal cleanup service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our seasonal cleanup service includes leaf removal, bed cleanup, trimming of ornamental grasses and perennials, debris hauling, and edging of beds and walkways. Spring cleanup prepares your property for the growing season; fall cleanup protects it through winter."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a same-day estimate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many cases, yes. Call us at (574) 596-3633 and we'll do our best to schedule a same-day or next-day site visit. For non-urgent requests, we typically respond within 24 hours and schedule a visit within 2-3 business days."
        }
      },
      {
        "@type": "Question",
        "name": "Do you service commercial properties in Elkhart County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We have a dedicated commercial division serving businesses, retail centers, office parks, and HOAs throughout Goshen, Elkhart, Bristol, Middlebury, and Wakarusa. We offer flexible seasonal and annual contracts tailored to commercial property needs."
        }
      }
    ]
  }
];

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formStarted, setFormStarted] = useState(false);
  const { variant: formVariant, trackEvent } = useABTest(FORM_FIELDS_TEST);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormInteraction = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent('form_start', 'contact_form');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d6isfputn3rcgj1rb8qg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormStatus('success');
        trackEvent('form_submit', 'contact_form');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#1C2B2B]">
      <SeoHead
        title="Free Lawn Care Estimate Goshen IN | Contact Broadview Solutions"
        description="Request a free estimate for lawn maintenance, seasonal cleanup & snow plowing in Goshen, Elkhart & Bristol, Indiana. Call (574) 596-3633 or fill out our online form. 24-hour response."
        keywords="free lawn care estimate Goshen Indiana, contact Broadview Solutions, landscaping quote Elkhart County, snow plowing estimate Bristol IN"
        canonical="/contact"
        ogTitle="Get a Free Estimate | Broadview Solutions"
        ogDescription="Contact Broadview Solutions for a free lawn care, seasonal cleanup or snow plowing estimate in Elkhart County, Indiana. Fast 24-hour response."
        schema={contactSchema}
      />
      <Navbar />

      <PromoBanner />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <img 
          src="https://readdy.ai/api/search-image?query=professional%20landscaping%20consultation%20customer%20service%20friendly%20team%20contact%20us%20business%20communication%20professional%20meeting%20outdoor%20setting&width=1920&height=600&seq=contacthero001&orientation=landscape" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2424]/95 via-[#1C2B2B]/90 to-[#1A2424]/95"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <div className="inline-block px-4 py-1.5 bg-[#8A9BA8]/20 border border-[#8A9BA8]/30 rounded-full mb-6">
            <span className="text-[#C0C8CC] text-sm font-medium">Let's Connect</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Free Lawn Care Estimate — Contact Broadview Solutions in Goshen, IN
          </h1>
          <p className="text-xl text-[#C0C8CC] max-w-3xl mx-auto">
            Ready to transform your property? Contact us today for a no-obligation consultation
          </p>
        </div>
      </section>

      {/* Testimonials Above Form */}
      <section className="bg-[#1C2B2B] py-16 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-primary/20 border border-primary/30 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <i className="ri-shield-check-line mr-2"></i>
              Join 150+ Satisfied Customers
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-offwhite mb-4">
              Your Neighbors Already Trust Broadview
            </h2>
            <p className="text-lg text-silver-light max-w-2xl mx-auto">
              Before you fill out the form, hear what homeowners and businesses across Elkhart County are saying about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {getRecentTestimonials(3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} variant="compact" />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <TrustBadge variant="expanded" />
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-accent hover:text-offwhite text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>View All 156+ Reviews</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-[#1C2B2B] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#2D5016] to-[#B8A882] mb-6"></div>
                <p className="text-[#C0C8CC] leading-relaxed mb-8">
                  We're here to answer your questions and provide expert advice for all your landscaping needs.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#2D5016] rounded-lg flex-shrink-0 relative">
                      <div className="absolute inset-0 border-2 border-[#8A9BA8]/30 rounded-lg"></div>
                      <i className="ri-phone-line text-white text-xl relative z-10"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <a href="tel:+15745963633" className="text-[#2D5016] hover:text-[#B8A882] transition-colors cursor-pointer">
                        (574) 596-3633
                      </a>
                      <p className="text-sm text-[#8A9BA8] mt-1">Mon-Fri: 7AM-6PM<br />Sat: 8AM-4PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#2D5016] rounded-lg flex-shrink-0 relative">
                      <div className="absolute inset-0 border-2 border-[#8A9BA8]/30 rounded-lg"></div>
                      <i className="ri-mail-line text-white text-xl relative z-10"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <a href="mailto:alex28Saucedo@gmail.com" className="text-[#2D5016] hover:text-[#B8A882] transition-colors cursor-pointer">
                        alex28Saucedo@gmail.com
                      </a>
                      <p className="text-sm text-[#8A9BA8] mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#2D5016] rounded-lg flex-shrink-0 relative">
                      <div className="absolute inset-0 border-2 border-[#8A9BA8]/30 rounded-lg"></div>
                      <i className="ri-map-pin-line text-white text-xl relative z-10"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Service Area</h3>
                      <p className="text-[#C0C8CC]">
                        Servicing ALL of Elkhart County,<br />
                        and surrounding areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#2D5016] rounded-lg flex-shrink-0 relative">
                      <div className="absolute inset-0 border-2 border-[#8A9BA8]/30 rounded-lg"></div>
                      <i className="ri-time-line text-white text-xl relative z-10"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                      <p className="text-[#C0C8CC]">
                        Monday - Friday: 7:00 AM - 6:00 PM<br />
                        Saturday: 8:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-2xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-white mb-4">Request Your Free Estimate</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#2D5016] to-[#B8A882] mb-6"></div>
                <p className="text-[#C0C8CC] mb-8">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed estimate.
                </p>

                {formStatus === 'success' && (
                  <div className="mb-6 bg-[#2D5016]/20 border border-[#2D5016] text-[#2D5016] px-6 py-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <i className="ri-checkbox-circle-line text-xl"></i>
                      <span className="font-semibold">Thank you! We'll contact you soon.</span>
                    </div>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="mb-6 bg-red-900/20 border border-red-500 text-red-400 px-6 py-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <i className="ri-error-warning-line text-xl"></i>
                      <span className="font-semibold">Something went wrong. Please try again.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-form" ref={formRef} onFocus={handleFormInteraction}>
                  <input type="hidden" name="_forward" value="admin@clearsitesystems.com" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email Address {formVariant === 'B' ? '(Optional)' : '*'}
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required={formVariant !== 'B'}
                        className="w-full px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="property_type" className="block text-sm font-semibold text-white mb-2">
                        Property Type *
                      </label>
                      {formVariant === 'B' ? (
                        <div className="grid grid-cols-2 gap-3">
                          <label className="cursor-pointer">
                            <input type="radio" name="property_type" value="residential" required className="peer sr-only" />
                            <div className="flex flex-col items-center gap-2 p-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 rounded-lg peer-checked:border-[#2D5016] peer-checked:bg-[#2D5016]/10 transition-all">
                              <i className="ri-home-4-line text-2xl text-[#8A9BA8] peer-checked:text-[#2D5016]"></i>
                              <span className="text-xs text-[#C0C8CC]">Residential</span>
                            </div>
                          </label>
                          <label className="cursor-pointer">
                            <input type="radio" name="property_type" value="commercial" className="peer sr-only" />
                            <div className="flex flex-col items-center gap-2 p-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 rounded-lg peer-checked:border-[#2D5016] peer-checked:bg-[#2D5016]/10 transition-all">
                              <i className="ri-building-line text-2xl text-[#8A9BA8] peer-checked:text-[#2D5016]"></i>
                              <span className="text-xs text-[#C0C8CC]">Commercial</span>
                            </div>
                          </label>
                          <label className="cursor-pointer">
                            <input type="radio" name="property_type" value="hoa" className="peer sr-only" />
                            <div className="flex flex-col items-center gap-2 p-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 rounded-lg peer-checked:border-[#2D5016] peer-checked:bg-[#2D5016]/10 transition-all">
                              <i className="ri-community-line text-2xl text-[#8A9BA8] peer-checked:text-[#2D5016]"></i>
                              <span className="text-xs text-[#C0C8CC]">HOA</span>
                            </div>
                          </label>
                          <label className="cursor-pointer">
                            <input type="radio" name="property_type" value="other" className="peer sr-only" />
                            <div className="flex flex-col items-center gap-2 p-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 rounded-lg peer-checked:border-[#2D5016] peer-checked:bg-[#2D5016]/10 transition-all">
                              <i className="ri-more-line text-2xl text-[#8A9BA8] peer-checked:text-[#2D5016]"></i>
                              <span className="text-xs text-[#C0C8CC]">Other</span>
                            </div>
                          </label>
                        </div>
                      ) : (
                        <select 
                          id="property_type"
                          name="property_type"
                          required
                          className="w-full px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm"
                        >
                          <option value="">Select Property Type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="hoa">HOA/Community</option>
                          <option value="other">Other</option>
                        </select>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-white mb-2">
                      Property Address
                    </label>
                    <input 
                      type="text" 
                      id="address"
                      name="address"
                      className="w-full px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
                      placeholder="123 Main Street, City, ST 12345"
                    />
                  </div>

                  <div>
                    <label htmlFor="service_interest" className="block text-sm font-semibold text-white mb-2">
                      Services Interested In *
                    </label>
                    <select 
                      id="service_interest"
                      name="service_interest"
                      required
                      className="w-full px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm"
                    >
                      <option value="">Select Service</option>
                      <option value="lawn-maintenance">Lawn Maintenance</option>
                      <option value="seasonal-cleanup">Seasonal Cleanup</option>
                      <option value="snow-plowing">Snow Plowing</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Project Details
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none resize-none text-sm placeholder-[#8A9BA8]"
                      placeholder="Tell us about your project, property size, specific needs, or any questions you have... (Max 500 characters)"
                    ></textarea>
                    <p className="text-xs text-[#8A9BA8] mt-1">Maximum 500 characters</p>
                  </div>

                  <div>
                    <label htmlFor="preferred_contact" className="block text-sm font-semibold text-white mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="preferred_contact" value="phone" className="text-[#2D5016] focus:ring-[#2D5016]" />
                        <span className="text-sm text-[#C0C8CC]">Phone</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="preferred_contact" value="email" className="text-[#2D5016] focus:ring-[#2D5016]" defaultChecked />
                        <span className="text-sm text-[#C0C8CC]">Email</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="preferred_contact" value="either" className="text-[#2D5016] focus:ring-[#2D5016]" />
                        <span className="text-sm text-[#C0C8CC]">Either</span>
                      </label>
                    </div>
                  </div>

                  <ABTestButton 
                    testId="form"
                    elementId="contact_form_submit"
                    size="lg"
                    variant="primary"
                    className="w-full"
                    onClick={() => {}}
                  />

                  <div className="flex flex-wrap justify-center gap-6 text-sm text-[#C0C8CC] pt-4">
                    <div className="flex items-center space-x-2">
                      <i className="ri-shield-check-line text-[#B8A882]"></i>
                      <span>Licensed &amp; Insured</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-money-dollar-circle-line text-[#B8A882]"></i>
                      <span>Free Estimates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-time-line text-[#B8A882]"></i>
                      <span>24-Hour Response</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1C2B2B] py-12 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <InlineCTA context="general" />
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#1A2424] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Service Area</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#2D5016] to-[#B8A882] mx-auto mb-6"></div>
            <p className="text-lg text-[#C0C8CC]">
              Proudly serving Goshen, Indiana and the surrounding communities across Elkhart County
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-[#8A9BA8]/20 shadow-2xl">
            <iframe
              src="https://maps.google.com/maps?q=Goshen,Indiana&t=&z=11&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="480"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Broadview Solutions Service Area — Goshen, Indiana"
            ></iframe>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Goshen', 'Elkhart', 'Bristol', 'Middlebury', 'Wakarusa'].map((city) => (
              <div key={city} className="bg-[#1C2B2B] border border-[#8A9BA8]/20 rounded-xl px-4 py-3 flex items-center space-x-2">
                <i className="ri-map-pin-fill text-[#2D5016] text-lg"></i>
                <span className="text-white text-sm font-medium">{city}, IN</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Rich Text Section */}
      <section className="bg-[#1C2B2B] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Getting a Free Lawn Care Estimate in Elkhart County</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Requesting a free estimate from Broadview Solutions is simple and straightforward. Fill out the contact form above or give us a call at <a href="tel:+15745963633" className="text-[#2D5016] hover:text-[#B8A882] transition-colors">(574) 596-3633</a>, and one of our team members will respond within 24 hours to schedule a convenient time for a site visit. We serve Goshen, Elkhart, Bristol, Middlebury, Wakarusa, and surrounding communities throughout Elkhart County, Indiana.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                During your free consultation, we'll visit your property, assess your lawn's current condition, discuss your goals and preferences, and provide a detailed written proposal outlining exactly what services we recommend, how often we'll visit, and what the cost will be. There's no obligation, no pressure, and no hidden fees — just honest, professional advice from a team that genuinely cares about your property.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                We provide estimates for all of our core services — <strong className="text-white">lawn maintenance</strong>, <strong className="text-white">seasonal cleanup</strong>, and <strong className="text-white">snow plowing</strong> — as well as bundled packages for clients who want comprehensive year-round property care. Commercial clients can request proposals for ongoing grounds maintenance contracts, seasonal service agreements, or one-time project work.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                Most clients receive their written estimate within 24–48 hours of the initial site visit. For urgent requests or time-sensitive projects, we can often accommodate same-day or next-day consultations. We understand that your time is valuable, and we work efficiently to get you the information you need to make a confident decision.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What to Expect When You Work With Broadview Solutions</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                From your very first contact with Broadview Solutions, you'll notice a difference in how we communicate and operate. We respond promptly, show up when we say we will, and keep you informed throughout every step of the process. Our team is approachable, professional, and genuinely invested in delivering results that exceed your expectations.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Once you approve your estimate and we begin service, you can expect consistent, reliable visits on your agreed schedule. We use the same crew members on your property whenever possible, so you'll recognize familiar faces and build a relationship with the people caring for your lawn. Our team respects your property, your privacy, and your time — we work efficiently and leave no mess behind.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Communication is easy with Broadview Solutions. You can reach us by phone, email, or through our website contact form. We respond to all inquiries within one business day, and for existing clients, we're always available to address questions, adjust schedules, or add services as your needs change throughout the season.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                We accept cash, checks, all major credit cards, and ACH bank transfers. For ongoing maintenance clients, we offer convenient monthly billing that simplifies your budgeting and eliminates the need to manage individual invoices. Our goal is to make the entire experience — from first contact to final invoice — as smooth and stress-free as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#1C2B2B] py-20 cv-auto">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#2D5016] to-[#B8A882] mx-auto"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How quickly can you provide an estimate?',
                answer: 'We typically provide estimates within 24-48 hours of your initial contact. For urgent requests, we can often schedule a same-day site visit.'
              },
              {
                question: 'Do you offer free estimates?',
                answer: 'Yes! All estimates are completely free with no obligation. We\'ll visit your property, assess your needs, and provide a detailed written proposal.'
              },
              {
                question: 'Are you licensed and insured?',
                answer: 'Absolutely. We are fully licensed, bonded, and insured with comprehensive liability and workers\' compensation coverage for your protection.'
              },
              {
                question: 'Do you require contracts?',
                answer: 'For residential clients, contracts are optional. For commercial properties, we typically work with seasonal or annual contracts to ensure consistent service and predictable budgeting.'
              },
              {
                question: 'What areas do you serve?',
                answer: 'We serve Goshen, Elkhart, Bristol, Middlebury, and Wakarusa, Indiana — and surrounding communities in Elkhart County. Contact us to confirm service in your specific area.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept cash, checks, all major credit cards, and ACH bank transfers. We also offer convenient monthly billing for ongoing maintenance contracts.'
              },
              {
                question: 'How often will you mow my lawn?',
                answer: 'Most residential clients in Goshen and Elkhart County are on a weekly or bi-weekly schedule during the growing season (typically April through October). We\'ll recommend the right frequency based on your grass type, property size, and personal preference.'
              },
              {
                question: 'Do you offer snow plowing for residential driveways?',
                answer: 'Yes! We offer 24/7 snow plowing and ice management for both residential driveways and commercial parking lots throughout Elkhart County. We monitor weather forecasts and dispatch crews proactively so your property is clear before you need it.'
              },
              {
                question: 'What is included in your seasonal cleanup service?',
                answer: 'Our seasonal cleanup service includes leaf removal, bed cleanup, trimming of ornamental grasses and perennials, debris hauling, and edging of beds and walkways. Spring cleanup prepares your property for the growing season; fall cleanup protects it through winter.'
              },
              {
                question: 'Can I get a same-day estimate?',
                answer: 'In many cases, yes. Call us at (574) 596-3633 and we\'ll do our best to schedule a same-day or next-day site visit. For non-urgent requests, we typically respond within 24 hours and schedule a visit within 2-3 business days.'
              },
              {
                question: 'Do you service commercial properties in Elkhart County?',
                answer: 'Absolutely. We have a dedicated commercial division serving businesses, retail centers, office parks, and HOAs throughout Goshen, Elkhart, Bristol, Middlebury, and Wakarusa. We offer flexible seasonal and annual contracts tailored to commercial property needs.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-xl p-6 group hover:border-[#2D5016]/50 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-lg">
                  <span>{faq.question}</span>
                  <i className="ri-arrow-down-s-line text-2xl text-[#8A9BA8] group-open:rotate-180 group-open:text-[#2D5016] transition-all"></i>
                </summary>
                <p className="mt-4 text-[#C0C8CC] leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}