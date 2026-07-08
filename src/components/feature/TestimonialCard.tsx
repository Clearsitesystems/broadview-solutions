import type { Testimonial } from '../../mocks/testimonials';
import StarRating from './StarRating';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

export default function TestimonialCard({ testimonial, variant = 'default', className = '' }: TestimonialCardProps) {
  if (variant === 'featured') {
    return (
      <div className={`bg-charcoal-dark border border-silver-dark/20 rounded-xl p-8 hover:border-primary/40 transition-all duration-300 ${className}`}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1">
            <StarRating rating={testimonial.rating} size="md" />
          </div>
          {testimonial.highlight && (
            <span className="text-[10px] uppercase tracking-wider font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
              {testimonial.highlight}
            </span>
          )}
        </div>
        <i className="ri-double-quotes-l text-3xl text-silver-dark/40 mb-3 block"></i>
        <p className="text-silver-light text-base leading-relaxed mb-6 italic">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="flex items-center gap-4 pt-5 border-t border-silver-dark/10">
          <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full flex-shrink-0">
            <i className="ri-user-line text-primary text-lg"></i>
          </div>
          <div>
            <div className="font-semibold text-offwhite">{testimonial.name}</div>
            <div className="text-sm text-silver flex items-center gap-1">
              <i className="ri-map-pin-line text-xs"></i>
              <span>{testimonial.location}</span>
            </div>
          </div>
          <div className="ml-auto text-xs text-silver-dark">
            {new Date(testimonial.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-charcoal-dark/80 border border-silver-dark/15 rounded-lg p-5 hover:border-primary/30 transition-all ${className}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 flex items-center justify-center bg-primary/15 rounded-full flex-shrink-0">
            <i className="ri-user-line text-primary"></i>
          </div>
          <div className="min-w-0">
            <div className="text-offwhite text-sm font-semibold truncate">{testimonial.name}</div>
            <div className="text-silver text-xs flex items-center gap-1">
              <i className="ri-map-pin-line text-[10px]"></i>
              <span>{testimonial.location}</span>
            </div>
          </div>
          <div className="ml-auto flex-shrink-0">
            <StarRating rating={testimonial.rating} size="sm" />
          </div>
        </div>
        <p className="text-silver-light text-sm leading-relaxed italic line-clamp-3">
          &ldquo;{testimonial.text}&rdquo;
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-charcoal-dark border border-silver-dark/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <StarRating rating={testimonial.rating} size="sm" />
        </div>
        <span className="text-silver text-xs">{new Date(testimonial.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
      </div>
      <i className="ri-double-quotes-l text-2xl text-silver-dark/40 mb-2 block"></i>
      <p className="text-silver-light text-sm leading-relaxed mb-5 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-silver-dark/10">
        <div className="w-9 h-9 flex items-center justify-center bg-primary/20 rounded-full flex-shrink-0">
          <i className="ri-user-line text-primary text-sm"></i>
        </div>
        <div>
          <div className="font-semibold text-offwhite text-sm">{testimonial.name}</div>
          <div className="text-xs text-silver flex items-center gap-1">
            <i className="ri-map-pin-line text-[10px]"></i>
            <span>{testimonial.location}</span>
          </div>
        </div>
        {testimonial.highlight && (
          <span className="ml-auto text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded-full">
            {testimonial.highlight}
          </span>
        )}
      </div>
    </div>
  );
}