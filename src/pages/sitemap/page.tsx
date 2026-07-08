import { Link } from 'react-router-dom';
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import SeoHead from "../../components/feature/SeoHead";

interface SitemapSection {
  title: string;
  links: {
    name: string;
    path: string;
    description?: string;
  }[];
}

const sitemapSections: SitemapSection[] = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", path: "/", description: "Professional landscaping and lawn care services" },
      { name: "About Us", path: "/about", description: "Our story, values, and team behind Broadview Solutions" },
      { name: "Commercial Division", path: "/commercial", description: "Commercial property maintenance services" },
      { name: "Residential Division", path: "/residential", description: "Residential lawn care and landscaping" },
      { name: "Service Areas", path: "/service-areas", description: "Areas we serve in Indiana" },
      { name: "Our Team", path: "/team", description: "Meet the Broadview Solutions team" },
      { name: "Contact Us", path: "/contact", description: "Get in touch for a free estimate" },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "All Services", path: "/services", description: "Complete list of our landscaping services" },
      { name: "Lawn Maintenance", path: "/services/lawn-maintenance", description: "Regular mowing, edging, and maintenance" },
      { name: "Seasonal Cleanup", path: "/services/seasonal-cleanup", description: "Spring and fall yard cleanup services" },
      { name: "Snow Plowing", path: "/services/snow-plowing", description: "Winter snow removal services" },
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", path: "/blog", description: "Landscaping tips and industry insights" },
      { name: "Blog Post 1", path: "/blog/1", description: "Spring Lawn Care Tips for Indiana Homeowners" },
      { name: "Blog Post 2", path: "/blog/2", description: "Commercial Property Maintenance Guide" },
      { name: "Blog Post 3", path: "/blog/3", description: "Winterizing Your Landscape: A Complete Checklist" },
      { name: "Blog Post 4", path: "/blog/4", description: "The Benefits of Professional Lawn Maintenance" },
      { name: "Blog Post 5", path: "/blog/5", description: "Seasonal Cleanup: Why Timing Matters" },
      { name: "Blog Post 6", path: "/blog/6", description: "Snow Removal Safety Tips for Property Managers" },
      { name: "Blog Post 7", path: "/blog/7", description: "Creating a Year-Round Landscape Maintenance Plan" },
      { name: "Blog Post 8", path: "/blog/8", description: "Eco-Friendly Landscaping Practices for Indiana" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/privacy-policy", description: "How we protect your information" },
      { name: "Terms of Service", path: "/terms-of-service", description: "Terms and conditions of use" },
      { name: "XML Sitemap", path: "/sitemap.xml", description: "Machine-readable sitemap for search engines" },
    ]
  }
];

export default function Sitemap() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com';

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Sitemap",
      "description": "Complete sitemap of Broadview Solutions website. Find all pages, services, and resources organized by category.",
      "url": `${siteUrl}/sitemap`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Sitemap",
            "item": `${siteUrl}/sitemap`
          }
        ]
      }
    }
  ];

  return (
    <>
      <SeoHead
        title="Sitemap | Broadview Solutions"
        description="Complete sitemap of Broadview Solutions website. Find all pages, services, and resources organized by category."
        keywords="sitemap, site map, Broadview Solutions, navigation"
        canonical="/sitemap"
        schema={schema}
      />
      <div className="min-h-screen bg-[#1C2B2B] text-white">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                Find your way around the Broadview Solutions website. Browse all pages, services, and resources organized by category.
              </p>
            </div>

            {/* Sitemap Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sitemapSections.map((section) => (
                <div 
                  key={section.title}
                  className="bg-[#2A3F3F] rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-lg mr-3">
                      <i className="ri-folder-line text-primary"></i>
                    </span>
                    {section.title}
                  </h2>
                  <div className="w-full h-px bg-gradient-to-r from-primary/30 to-transparent mb-4"></div>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.path}>
                        {link.path.startsWith('http') || link.path.endsWith('.xml') ? (
                          <a 
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start space-x-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <span className="w-5 h-5 flex items-center justify-center mt-0.5">
                              <i className="ri-external-link-line text-primary/60 group-hover:text-primary transition-colors text-sm"></i>
                            </span>
                            <div>
                              <span className="text-white group-hover:text-primary transition-colors font-medium">
                                {link.name}
                              </span>
                              {link.description && (
                                <p className="text-gray-500 text-sm mt-0.5">{link.description}</p>
                              )}
                            </div>
                          </a>
                        ) : (
                          <Link 
                            to={link.path}
                            className="group flex items-start space-x-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <span className="w-5 h-5 flex items-center justify-center mt-0.5">
                              <i className="ri-arrow-right-s-line text-primary/60 group-hover:text-primary group-hover:translate-x-0.5 transition-all text-sm"></i>
                            </span>
                            <div>
                              <span className="text-white group-hover:text-primary transition-colors font-medium">
                                {link.name}
                              </span>
                              {link.description && (
                                <p className="text-gray-500 text-sm mt-0.5">{link.description}</p>
                              )}
                            </div>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="mt-12 bg-gradient-to-r from-primary/10 to-transparent rounded-xl p-8 border border-primary/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Need Help Finding Something?</h3>
                  <p className="text-gray-400">
                    Can&apos;t find what you&apos;re looking for? Contact us directly and we&apos;ll be happy to help.
                  </p>
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                >
                  <i className="ri-mail-line mr-2"></i>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}