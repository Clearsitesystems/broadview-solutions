import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-charcoal-light shadow-lg shadow-black/20' : 'bg-charcoal-light/95 backdrop-blur-sm'
    }`}>
      <div className="w-full px-4 xl:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with image */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/readdy-assets/2887571b48c57ebbe859c1035b163ed5.png"
              alt="Broadview Solutions logo"
              className="h-24 w-auto object-contain flex-shrink-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-shrink-0">
            <Link 
              to="/" 
              className={`relative text-sm font-medium transition-colors whitespace-nowrap group ${
                isActive('/') 
                  ? 'text-primary' 
                  : 'text-silver-light hover:text-white'
              }`}
            >
              Home
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/commercial" 
              className={`relative text-sm font-medium transition-colors whitespace-nowrap group ${
                isActive('/commercial') 
                  ? 'text-primary' 
                  : 'text-silver-light hover:text-white'
              }`}
            >
              Commercial
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                isActive('/commercial') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/residential" 
              className={`relative text-sm font-medium transition-colors whitespace-nowrap group ${
                isActive('/residential') 
                  ? 'text-primary' 
                  : 'text-silver-light hover:text-white'
              }`}
            >
              Residential
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                isActive('/residential') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/services" 
              className={`relative text-sm font-medium transition-colors whitespace-nowrap group ${
                isActive('/services') 
                  ? 'text-primary' 
                  : 'text-silver-light hover:text-white'
              }`}
            >
              Services
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                isActive('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/service-areas" 
              className={`relative text-sm font-medium transition-colors whitespace-nowrap group ${
                isActive('/service-areas') 
                  ? 'text-primary' 
                  : 'text-silver-light hover:text-white'
              }`}
            >
              Service Areas
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                isActive('/service-areas') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/team" 
              className={`relative text-sm font-medium transition-colors whitespace-nowrap group ${
                isActive('/team') 
                  ? 'text-primary' 
                  : 'text-silver-light hover:text-white'
              }`}
            >
              Our Team
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                isActive('/team') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/blog" 
              className={`relative text-sm font-medium transition-colors whitespace-nowrap group ${
                isActive('/blog') 
                  ? 'text-primary' 
                  : 'text-silver-light hover:text-white'
              }`}
            >
              Blog
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                isActive('/blog') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <a 
              href="tel:+15745963633" 
              className="flex items-center space-x-1.5 text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer text-silver-light hover:text-white"
            >
              <i className="ri-phone-line"></i>
              <span>(574) 596-3633</span>
            </a>
            <a
              href="https://www.facebook.com/BroadViewLawns"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer flex-shrink-0"
              aria-label="Broadview Solutions on Facebook"
            >
              <i className="ri-facebook-fill text-base"></i>
            </a>
            <Link 
              to="/contact" 
              className="bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors whitespace-nowrap cursor-pointer shadow-lg shadow-primary/20 flex-shrink-0"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors cursor-pointer text-silver-light hover:text-white"
          >
            <i className={`text-2xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-charcoal-light border-t border-silver-dark/30 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-silver-light hover:text-white font-medium px-4 py-2">Home</Link>
              <Link to="/commercial" className="text-silver-light hover:text-white font-medium px-4 py-2">Commercial Division</Link>
              <Link to="/residential" className="text-silver-light hover:text-white font-medium px-4 py-2">Residential Division</Link>
              <Link to="/services" className="text-silver-light hover:text-white font-medium px-4 py-2">Services</Link>
              <Link to="/service-areas" className="text-silver-light hover:text-white font-medium px-4 py-2">Service Areas</Link>
              <Link to="/team" className="text-silver-light hover:text-white font-medium px-4 py-2">Meet Our Team</Link>
              <Link to="/blog" className="text-silver-light hover:text-white font-medium px-4 py-2">Blog</Link>
              <a href="tel:+15745963633" className="text-silver-light hover:text-white font-semibold px-4 py-2 cursor-pointer">
                <i className="ri-phone-line mr-2"></i>(574) 596-3633
              </a>
              <a
                href="https://www.facebook.com/BroadViewLawns"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-silver-light hover:text-primary font-medium px-4 py-2 cursor-pointer transition-colors"
              >
                <i className="ri-facebook-fill text-lg"></i>
                <span>Facebook</span>
              </a>
              <Link to="/contact" className="bg-primary text-white px-4 py-3 rounded-lg font-medium text-center mx-4 cursor-pointer hover:bg-primary-dark transition-colors">
                Get Free Estimate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}