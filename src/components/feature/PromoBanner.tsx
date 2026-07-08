import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PromoBanner() {
  const [showPromoBanner, setShowPromoBanner] = useState(true);

  if (!showPromoBanner) return null;

  return (
    <div className="sticky top-20 z-[60] bg-[#2D5016] border-b border-[#1a3a0a] transition-all duration-300 relative overflow-hidden">
      {/* Shimmer sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3 min-w-0">
          {/* Pulsing icon */}
          <div className="relative w-8 h-8 flex-shrink-0">
            <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
            <div className="relative w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
              <i className="ri-percent-line text-white text-lg" />
            </div>
          </div>

          {/* Message with NEW badge */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="hidden sm:inline-flex items-center bg-[#D4AF37] text-[#1A2424] px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide animate-pulse flex-shrink-0">
              New
            </span>
            <p className="text-white text-sm font-medium truncate">
              <span className="font-bold">Limited time:</span>{' '}
              New clients save 10% on their first service. Offer ends soon — claim your discount!
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 flex-shrink-0 ml-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center bg-white text-[#2D5016] px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#F4F1EC] transition-colors whitespace-nowrap cursor-pointer"
          >
            Get Free Estimate
          </Link>
          <button
            onClick={() => setShowPromoBanner(false)}
            className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer flex-shrink-0"
            aria-label="Dismiss promo banner"
            type="button"
          >
            <i className="ri-close-line text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}