import { useState, useEffect } from 'react';

export default function CallNowButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="tel:+15745963633"
      aria-label="Call Broadview Solutions now"
      className={`md:hidden fixed bottom-5 right-4 z-50 flex items-center space-x-2 bg-[#2D5016] text-white px-5 py-3 rounded-full shadow-lg transition-all duration-500 cursor-pointer whitespace-nowrap ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <span className="flex items-center justify-center w-5 h-5">
        <i className="ri-phone-fill text-base animate-pulse"></i>
      </span>
      <span className="text-sm font-bold tracking-wide">Call Now</span>
    </a>
  );
}
