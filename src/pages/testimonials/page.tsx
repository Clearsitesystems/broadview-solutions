import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SeoHead from '../../components/feature/SeoHead';
import TestimonialCard from '../../components/feature/TestimonialCard';
import StarRating from '../../components/feature/StarRating';
import ABTestButton from '../../components/feature/ABTestButton';
import { testimonials, aggregateRating, getTestimonialsByService } from '../../mocks/testimonials';

const testimonialsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Broadview Solutions",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": String(aggregateRating.ratingValue),
      "reviewCount": String(aggregateRating.reviewCount),
      "bestRating": String(aggregateRating.bestRating),
      "worstRating": String(aggregateRating.worstRating)
    },
    "review": testimonials.slice(0, 10).map((t) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": String(t.rating),
        "bestRating": "5"
      },
      "author": { "@type": "Person", "name": t.name },
      "reviewBody": t.text,
      "datePublished": t.date
    }))
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
        "name": "Testimonials",
        "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/testimonials`
      }
    ]
  }
];

type FilterType = 'all' | 'lawn-maintenance' | 'seasonal-cleanup' | 'snow-plowing' | 'general';

const serviceLabels: Record<FilterType, string> = {
  all: 'All Reviews',
  'lawn-maintenance': 'Lawn Maintenance',
  'seasonal-cleanup': 'Seasonal Cleanup',
  'snow-plowing': 'Snow Plowing',
  general: 'General Services',
};

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'rating'>('recent');

  const filtered = activeFilter === 'all'
    ? [...testimonials]
    : getTestimonialsByService(activeFilter);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.rating - a.rating;
  });

  const serviceCounts = {
    all: testimonials.length,
    'lawn-maintenance': getTestimonialsByService('lawn-maintenance').length,
    'seasonal-cleanup': getTestimonialsByService('seasonal-cleanup').length,
    'snow-plowing': getTestimonialsByService('snow-plowing').length,
    general: getTestimonialsByService('general').length,
  };

  return (
    <div className="min-h-screen bg-charcoal-dark">
      <SeoHead
        title="Customer Reviews & Testimonials | Broadview Solutions Goshen, IN"
        description={`Read ${aggregateRating.reviewCount}+ verified customer reviews for Broadview Solutions lawn care, seasonal cleanup & snow plowing in Goshen, Elkhart & Bristol, Indiana. ${aggregateRating.ratingValue}/5 star average rating.`}
        keywords="Broadview Solutions reviews, lawn care testimonials Goshen Indiana, snow plowing reviews Elkhart County, landscaping customer reviews"
        canonical="/testimonials"
        ogTitle="Customer Reviews & Testimonials | Broadview Solutions"
        ogDescription={`${aggregateRating.reviewCount}+ verified reviews with a ${aggregateRating.ratingValue}/5 star average. See what homeowners & businesses say about Broadview Solutions.`}
        schema={testimonialsSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[28rem] flex items-center pt-28 pb-12">
        <img
          src="https://readdy.ai/api/search-image?query=happy%20homeowner%20standing%20in%20beautiful%20well%20maintained%20green%20lawn%20front%20yard%20suburban%20home%20sunny%20day%20satisfied%20customer%20smiling%20beautiful%20landscaping%20residential%20property%20pride%20of%20ownership%20natural%20lighting%20authentic%20moment&width=1920&height=600&seq=testhero001&orientation=landscape"
          alt="Happy Broadview Solutions customers"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/95 via-charcoal/85 to-charcoal-dark/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <div className="inline-flex items-center bg-primary/20 backdrop-blur-sm border border-primary/30 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="ri-shield-check-line mr-2"></i>
            Verified Customer Reviews
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-offwhite mb-6">
            What Our Customers Are Saying
          </h1>
          <p className="text-xl text-silver-light max-w-3xl mx-auto mb-8">
            Real reviews from real neighbors across Elkhart County. See why {aggregateRating.reviewCount}+ homeowners &amp; businesses trust Broadview Solutions.
          </p>

          {/* Big Rating Display */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="bg-charcoal/80 backdrop-blur-sm border border-silver-dark/30 rounded-2xl px-8 py-6 text-center">
              <div className="text-5xl font-bold text-offwhite mb-1">{aggregateRating.ratingValue}</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                <StarRating rating={aggregateRating.ratingValue} size="lg" />
              </div>
              <div className="text-silver text-sm">out of {aggregateRating.bestRating} stars</div>
            </div>
            <div className="bg-charcoal/80 backdrop-blur-sm border border-silver-dark/30 rounded-2xl px-8 py-6 text-center">
              <div className="text-5xl font-bold text-offwhite mb-1">{aggregateRating.reviewCount}+</div>
              <div className="text-accent font-semibold mb-1">Verified Reviews</div>
              <div className="text-silver text-sm">from Elkhart County</div>
            </div>
            <div className="bg-charcoal/80 backdrop-blur-sm border border-silver-dark/30 rounded-2xl px-8 py-6 text-center">
              <div className="text-5xl font-bold text-primary mb-1">98%</div>
              <div className="text-accent font-semibold mb-1">Would Recommend</div>
              <div className="text-silver text-sm">to friends &amp; family</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Sort */}
      <section className="bg-charcoal py-8 border-b border-silver-dark/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(serviceLabels) as FilterType[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-primary text-white'
                      : 'bg-charcoal-dark text-silver border border-silver-dark/30 hover:border-primary/50 hover:text-offwhite'
                  }`}
                >
                  {serviceLabels[filter]}
                  <span className={`ml-2 text-xs ${activeFilter === filter ? 'text-white/70' : 'text-silver-dark'}`}>
                    ({serviceCounts[filter]})
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-silver text-sm">Sort by:</span>
              <button
                onClick={() => setSortBy('recent')}
                className={`px-3 py-1.5 rounded-lg text-sm cursor-pointer ${
                  sortBy === 'recent'
                    ? 'bg-primary/20 text-accent border border-primary/30'
                    : 'text-silver hover:text-offwhite'
                }`}
              >
                Most Recent
              </button>
              <button
                onClick={() => setSortBy('rating')}
                className={`px-3 py-1.5 rounded-lg text-sm cursor-pointer ${
                  sortBy === 'rating'
                    ? 'bg-primary/20 text-accent border border-primary/30'
                    : 'text-silver hover:text-offwhite'
                }`}
              >
                Highest Rated
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-charcoal py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((t) => (
              <TestimonialCard
                key={t.id}
                testimonial={t}
                variant="featured"
              />
            ))}
          </div>

          {sorted.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 flex items-center justify-center bg-silver-dark/20 rounded-full mx-auto mb-4">
                <i className="ri-inbox-line text-3xl text-silver"></i>
              </div>
              <p className="text-silver text-lg">No reviews found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="bg-charcoal-dark py-12 border-t border-silver-dark/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-primary/15 rounded-xl mx-auto mb-3">
                <i className="ri-shield-check-line text-2xl text-primary"></i>
              </div>
              <div className="text-offwhite font-semibold text-sm">Licensed &amp; Insured</div>
              <div className="text-silver text-xs mt-1">Full coverage protection</div>
            </div>
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-primary/15 rounded-xl mx-auto mb-3">
                <i className="ri-time-line text-2xl text-primary"></i>
              </div>
              <div className="text-offwhite font-semibold text-sm">5+ Years Experience</div>
              <div className="text-silver text-xs mt-1">Serving Elkhart County</div>
            </div>
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-primary/15 rounded-xl mx-auto mb-3">
                <i className="ri-map-pin-line text-2xl text-primary"></i>
              </div>
              <div className="text-offwhite font-semibold text-sm">5 City Coverage</div>
              <div className="text-silver text-xs mt-1">Goshen, Elkhart &amp; more</div>
            </div>
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-primary/15 rounded-xl mx-auto mb-3">
                <i className="ri-heart-line text-2xl text-primary"></i>
              </div>
              <div className="text-offwhite font-semibold text-sm">Satisfaction Guaranteed</div>
              <div className="text-silver text-xs mt-1">We make it right</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal-dark py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-charcoal border border-silver-dark/20 rounded-2xl p-10 lg:p-14">
            <div className="w-16 h-16 flex items-center justify-center bg-accent/15 rounded-full mx-auto mb-6">
              <i className="ri-star-line text-3xl text-accent"></i>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-offwhite mb-4">
              Join Our Happy Customers
            </h2>
            <p className="text-lg text-silver-light mb-8 max-w-2xl mx-auto">
              Ready to experience the Broadview Solutions difference? Get your free estimate today and see why {aggregateRating.reviewCount}+ neighbors across Elkhart County trust us with their properties.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <ABTestButton
                to="/contact"
                elementId="testimonials_cta_primary"
                size="lg"
                variant="primary"
              />
              <a
                href="https://www.google.com/maps/search/Broadview+Solutions+Goshen+Indiana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-charcoal-dark border-2 border-silver-dark/30 text-offwhite px-8 py-4 rounded-lg text-lg font-semibold hover:border-accent hover:text-accent transition-all whitespace-nowrap cursor-pointer"
              >
                <i className="ri-google-fill"></i>
                <span>Leave a Google Review</span>
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-silver">
              <div className="flex items-center gap-2">
                <i className="ri-phone-line text-accent"></i>
                <a href="tel:+15745963633" className="hover:text-offwhite transition-colors cursor-pointer">(574) 596-3633</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-time-line text-accent"></i>
                <span>24-Hour Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}