import { Link } from 'react-router-dom';
import { useABTest, CTA_BUTTON_TEST } from '../../hooks/useABTest';

interface InlineCTAProps {
  serviceName?: string;
  context?: 'testimonial' | 'service' | 'blog' | 'value' | 'general';
  className?: string;
  showPhone?: boolean;
}

export default function InlineCTA({
  serviceName,
  context = 'general',
  className = '',
  showPhone = true,
}: InlineCTAProps) {
  const { variant: assignedVariant, trackEvent } = useABTest(CTA_BUTTON_TEST);

  const messages: Record<string, string> = {
    testimonial: 'Ready to join our happy customers?',
    service: serviceName ? `Get a Free Estimate for ${serviceName}` : 'Get Your Free Estimate Today',
    blog: 'Need professional lawn care? We are here to help.',
    value: 'Take the first step toward a beautiful property.',
    general: 'Get your free, no-obligation estimate today.',
  };

  const variantText: Record<string, string> = {
    A: 'Get Free Estimate',
    B: 'Free Quote — No Obligation',
    C: 'Schedule Your Inspection',
  };

  const text = variantText[assignedVariant] || 'Get Free Estimate';
  const message = messages[context];

  return (
    <div className={`bg-gradient-to-r from-primary/10 to-charcoal-dark border border-primary/30 rounded-xl p-6 md:p-8 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-silver-light text-sm mb-1">{message}</p>
          <p className="text-offwhite font-semibold text-lg">
            Call <a href="tel:+15745963633" className="text-primary hover:text-primary-light transition-colors" onClick={() => trackEvent('phone_click', `inline_cta_${context}`)}>(574) 596-3633</a> or request online
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg shadow-primary/20"
            onClick={() => trackEvent('cta_click', `inline_cta_${context}`)}
            data-ab-element={`inline_cta_${context}`}
          >
            <span>{text}</span>
            <i className="ri-arrow-right-line"></i>
          </Link>
          {showPhone && (
            <a
              href="tel:+15745963633"
              className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-silver-dark/50 text-offwhite hover:border-primary hover:text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
              onClick={() => trackEvent('phone_click', `inline_cta_${context}_phone`)}
            >
              <i className="ri-phone-line"></i>
              <span>Call Now</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}