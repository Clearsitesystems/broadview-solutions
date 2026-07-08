import { testimonials, aggregateRating, getRecentTestimonials, type Testimonial } from '../../mocks/testimonials';
import StarRating from './StarRating';

interface TrustBadgeProps {
  variant?: 'compact' | 'expanded' | 'hero';
  showMiniTestimonials?: boolean;
  className?: string;
}

export default function TrustBadge({ variant = 'compact', showMiniTestimonials = false, className = '' }: TrustBadgeProps) {
  const miniReviews = getRecentTestimonials(3);

  if (variant === 'hero') {
    return (
      <div className={`${className}`}>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3 bg-charcoal/80 backdrop-blur-sm border border-silver-dark/30 rounded-xl px-5 py-3">
            <div className="flex items-center gap-1">
              <StarRating rating={aggregateRating.ratingValue} size="md" />
            </div>
            <div className="text-offwhite font-bold text-lg">{aggregateRating.ratingValue}</div>
            <div className="text-silver text-xs">/ {aggregateRating.bestRating}</div>
          </div>
          <div className="text-silver-light text-sm">
            <span className="text-offwhite font-semibold">{aggregateRating.reviewCount}+ Happy Customers</span>
            {' '}in Goshen &amp; Surrounding Areas
          </div>
        </div>

        {showMiniTestimonials && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {miniReviews.map((review) => (
              <MiniTestimonial key={review.id} testimonial={review} />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (variant === 'expanded') {
    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <div className="flex items-center gap-3">
          <StarRating rating={aggregateRating.ratingValue} size="lg" />
          <span className="text-offwhite font-bold text-2xl">{aggregateRating.ratingValue}</span>
          <span className="text-silver text-sm">out of {aggregateRating.bestRating}</span>
        </div>
        <p className="text-silver-light text-sm">
          Based on <span className="text-offwhite font-semibold">{aggregateRating.reviewCount}+ verified reviews</span> from homeowners &amp; businesses across Elkhart County
        </p>
        <div className="flex items-center gap-2 text-xs text-silver">
          <i className="ri-shield-check-line text-accent"></i>
          <span>All reviews are from real customers</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-1">
        <StarRating rating={aggregateRating.ratingValue} size="sm" />
      </div>
      <span className="text-offwhite font-semibold text-sm">{aggregateRating.ratingValue}/5</span>
      <span className="text-silver text-xs">({aggregateRating.reviewCount}+ reviews)</span>
    </div>
  );
}

function MiniTestimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-charcoal/80 backdrop-blur-sm border border-silver-dark/20 rounded-xl p-4 hover:border-primary/30 transition-all">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full flex-shrink-0">
          <i className="ri-user-line text-primary text-sm"></i>
        </div>
        <div>
          <div className="text-offwhite text-xs font-semibold">{testimonial.name}</div>
          <div className="text-silver text-[10px] flex items-center gap-1">
            <i className="ri-map-pin-line"></i>
            {testimonial.location}
          </div>
        </div>
      </div>
      <StarRating rating={testimonial.rating} size="sm" />
      <p className="text-silver-light text-xs mt-2 line-clamp-2 italic">
        &ldquo;{testimonial.text.substring(0, 100)}...&rdquo;
      </p>
    </div>
  );
}