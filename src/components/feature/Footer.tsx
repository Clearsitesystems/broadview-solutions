import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border-2 border-primary rounded-lg group-hover:bg-primary group-hover:scale-105 transition-all">
                <i className="ri-plant-line text-2xl text-primary group-hover:text-white transition-colors"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-offwhite leading-tight">Broadview</span>
                <span className="text-xs font-medium text-primary leading-tight tracking-wide">SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-silver text-sm mb-4 leading-relaxed">
              Professional landscaping and lawn care services for commercial and residential properties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent mb-4"></div>
            <ul className="space-y-2">
              <li><Link to="/" className="text-silver hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><Link to="/commercial" className="text-silver hover:text-primary text-sm transition-colors">Commercial Division</Link></li>
              <li><Link to="/residential" className="text-silver hover:text-primary text-sm transition-colors">Residential Division</Link></li>
              <li><Link to="/services" className="text-silver hover:text-primary text-sm transition-colors">Services</Link></li>
              <li><Link to="/service-areas" className="text-silver hover:text-primary text-sm transition-colors">Service Areas</Link></li>
              <li><Link to="/about" className="text-silver hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-silver hover:text-primary text-sm transition-colors">Meet Our Team</Link></li>
              <li><Link to="/testimonials" className="text-silver hover:text-primary text-sm transition-colors">Customer Reviews</Link></li>
              <li><Link to="/blog" className="text-silver hover:text-primary text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent mb-4"></div>
            <ul className="space-y-2">
              <li><Link to="/services/lawn-maintenance" className="text-silver hover:text-primary text-sm transition-colors">Lawn Maintenance</Link></li>
              <li><Link to="/services/seasonal-cleanup" className="text-silver hover:text-primary text-sm transition-colors">Seasonal Cleanup</Link></li>
              <li><Link to="/services/snow-plowing" className="text-silver hover:text-primary text-sm transition-colors">Snow Plowing</Link></li>
              <li><Link to="/services/commercial-lawn-care" className="text-silver hover:text-primary text-sm transition-colors">Commercial Lawn Care</Link></li>
              <li><Link to="/services/residential-lawn-care" className="text-silver hover:text-primary text-sm transition-colors">Residential Lawn Care</Link></li>
              <li><Link to="/services/seasonal-cleanup-goshen" className="text-silver hover:text-primary text-sm transition-colors">Spring & Fall Cleanup</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent mb-4"></div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-accent mt-1"></i>
                <span className="text-silver text-sm">Based in Goshen, Indiana</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="ri-phone-line text-accent"></i>
                <a href="tel:+15745963633" className="text-silver hover:text-primary text-sm transition-colors cursor-pointer">(574) 596-3633</a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="ri-mail-line text-accent"></i>
                <a href="mailto:alex28Saucedo@gmail.com" className="text-silver hover:text-primary text-sm transition-colors cursor-pointer">alex28Saucedo@gmail.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-time-line text-accent mt-1"></i>
                <span className="text-silver text-sm">Mon-Fri: 7AM-6PM<br />Sat: 8AM-4PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-silver-dark/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-silver-dark text-sm">
            &copy; 2024 Broadview Solutions. All rights reserved.
          </p>
          <div className="flex items-center space-x-3">
            <a
              href="https://www.facebook.com/BroadViewLawns"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer"
              aria-label="Broadview Solutions on Facebook"
            >
              <i className="ri-facebook-fill text-lg"></i>
            </a>
            <a
              href="https://www.google.com/maps/search/Broadview+Solutions+Goshen+Indiana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer whitespace-nowrap"
              aria-label="Find Broadview Solutions on Google Maps"
            >
              <i className="ri-map-pin-2-fill text-base"></i>
              <span className="text-xs font-semibold">Google Business</span>
            </a>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-silver-dark hover:text-primary text-sm transition-colors cursor-pointer">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-silver-dark hover:text-primary text-sm transition-colors cursor-pointer">Terms of Service</Link>
            <Link to="/sitemap" className="text-silver-dark hover:text-primary text-sm transition-colors cursor-pointer">Sitemap</Link>
          </div>
          <div className="flex items-center space-x-2 text-sm text-silver-dark">
            <i className="ri-shield-check-line text-accent"></i>
            <span>Licensed &amp; Insured</span>
          </div>
        </div>

        {/* Powered By */}
        <div className="border-t border-silver-dark/20 mt-6 pt-6 text-center">
          <p className="text-silver-dark text-sm">
            Powered by <a href="https://www.clearsitesystems.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors cursor-pointer">ClearSite Systems</a>
          </p>
        </div>
      </div>
    </footer>
  );
}