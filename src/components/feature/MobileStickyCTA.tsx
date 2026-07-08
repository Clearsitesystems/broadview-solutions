import { Link } from 'react-router-dom';
import { useABTest, CTA_BUTTON_TEST } from '../../hooks/useABTest';

export default function MobileStickyCTA() {
  const { variant: assignedVariant, trackEvent } = useABTest(CTA_BUTTON_TEST);

  const variantText: Record<string, string> = {
    A: 'Get Free Estimate',
    B: 'Free Quote — No Obligation',
    C: 'Schedule Your Inspection',
  };

  const text = variantText[assignedVariant] || 'Get Free Estimate';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal-dark/95 backdrop-blur-md border-t border-silver-dark/30 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-silver-light truncate">Free estimate in 24 hours</p>
          <p className="text-sm font-semibold text-offwhite truncate">{text}</p>
        </div>
        <Link
          to="/contact"
          className="flex-shrink-0 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer shadow-lg"
          onClick={() => trackEvent('cta_click', 'mobile_sticky_cta')}
          data-ab-element="mobile_sticky_cta"
        >
          <i className="ri-arrow-right-line mr-1"></i>
          Get Started
        </Link>
      </div>
    </div>
  );
}