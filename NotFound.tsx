import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SeoHead from '../../components/feature/SeoHead';
import InlineCTA from '../../components/feature/InlineCTA';
import MobileStickyCTA from '../../components/feature/MobileStickyCTA';
import { useState, useMemo } from 'react';
import { blogPosts } from '../../mocks/blogPosts';
import { useBlogArticles } from '../../hooks/useBlogStorage';

const blogSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Broadview Solutions Landscaping Blog",
    "description": "Expert lawn care tips, seasonal guides, and landscaping insights for homeowners and businesses in Goshen, Elkhart County, Indiana.",
    "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/blog`,
    "publisher": {
      "@type": "LocalBusiness",
      "name": "Broadview Solutions",
      "telephone": "+15745963633"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/blog`
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When should I start lawn care in the spring in Goshen, Indiana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Goshen and the broader Elkhart County area, spring lawn care typically begins in late March or early April, depending on the year's weather. Light raking and cleanup can begin as soon as the ground thaws and dries out enough to walk on without compacting the soil. We recommend scheduling your first professional mowing in mid-to-late April once grass is actively growing and reaches about 4.5-5 inches tall."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I mow my lawn in northern Indiana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "During the active growing season (May through September), most Elkhart County lawns need mowing every 5 to 7 days. In spring and early fall when growth is most vigorous, you may need to mow every 5 days. During summer heat and drought, growth slows and you can extend to every 7 to 10 days. The key rule is never to remove more than one-third of the grass blade in a single mowing — this is more important than sticking to a rigid schedule."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in a standard lawn maintenance visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every Broadview Solutions lawn maintenance visit includes professional mowing at the correct height for your grass type, precision edging along all walkways and driveways, string trimming around obstacles like fences and trees, and a complete blowdown cleanup of all hard surfaces. We leave your property spotless every time. Optional add-ons include weed control treatments and seasonal cleanup services."
        }
      },
      {
        "@type": "Question",
        "name": "What is the ideal mowing height for lawns in northern Indiana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For cool-season grasses common in northern Indiana — primarily Kentucky bluegrass, tall fescue, and perennial ryegrass — the ideal mowing height is 3 to 3.5 inches during the growing season. Taller grass develops deeper roots, shades out weeds, and retains moisture better. During peak summer heat, raise your mowing height to 4 inches to reduce heat stress. Never cut lower than 2.5 inches."
        }
      },
      {
        "@type": "Question",
        "name": "How do I prepare my lawn for winter in Elkhart County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A proper fall lawn care routine in Elkhart County includes: thorough leaf removal to prevent smothering and disease, a final mowing at a slightly lower height (around 2.5 inches) to reduce the risk of snow mold, and any necessary pruning of dead branches. Landscape beds benefit from a fresh layer of mulch to insulate plant roots through the winter. We also recommend scheduling a fall cleanup service to handle all the heavy lifting and hauling."
        }
      },
      {
        "@type": "Question",
        "name": "Does Broadview Solutions offer one-time lawn care services or only recurring contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both! While many of our clients choose recurring seasonal maintenance programs for the best results and most convenient experience, we also provide one-time services for specific needs — including seasonal cleanups, one-time mowing, mulch installation, and snow plowing on an as-needed basis. Contact us to discuss what arrangement works best for your property and budget."
        }
      }
    ]
  }
];

interface DisplayPost {
  id: string | number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { publishedArticles, loading: articlesLoading, error: articlesError } = useBlogArticles();

  const allPosts: DisplayPost[] = useMemo(() => {
    const realPosts: DisplayPost[] = publishedArticles.map((a) => ({
      id: a.slug,
      title: a.title,
      excerpt: a.excerpt || a.seo_description,
      category: a.category,
      date: a.published_at
        ? new Date(a.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        : new Date(a.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: `${Math.max(3, Math.ceil(a.content.split(' ').length / 200))} min read`,
      image: a.featured_image || '/readdy-assets/search-fallback001.jpg',
      content: a.content,
    }));
    const mockMapped: DisplayPost[] = blogPosts.map((p) => ({
      id: p.id,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      date: p.date,
      readTime: p.readTime,
      image: p.image,
      content: p.content,
    }));
    return [...realPosts, ...mockMapped];
  }, [publishedArticles]);

  const categories = ['All', 'Lawn Care', 'Design Ideas', 'Seasonal Tips', 'Commercial', 'Residential', 'How-To'];

  const filteredPosts = selectedCategory === 'All'
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  const featuredPost = allPosts[0];

  // Loading state
  if (articlesLoading) {
    return (
      <div className="min-h-screen bg-[#1C2B2B]">
        <SeoHead
          title="Lawn Care Tips & Seasonal Maintenance Blog | Broadview Solutions"
          description="Expert lawn care tips, seasonal cleanup guides & landscaping advice for Goshen, Elkhart & Bristol, Indiana homeowners. Read the Broadview Solutions blog."
          keywords="lawn care tips Goshen Indiana, landscaping blog Elkhart County, seasonal cleanup advice Indiana, snow plowing tips northern Indiana"
          canonical="/blog"
          ogTitle="Landscaping Insights & Tips | Broadview Solutions Blog"
          ogDescription="Expert lawn care, seasonal cleanup & landscaping advice for Elkhart County, Indiana homeowners and businesses."
          schema={blogSchema}
        />
        <Navbar />
        <div className="flex items-center justify-center h-[80vh]">
          <div className="text-center">
            <i className="ri-loader-4-line animate-spin text-5xl text-[#2D5016] mb-4"></i>
            <p className="text-[#C0C8CC] text-lg">Loading articles...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Empty state
  const isEmpty = allPosts.length === 0;

  return (
    <div className="min-h-screen bg-[#1C2B2B]">
      <SeoHead
        title="Lawn Care Tips & Seasonal Maintenance Blog | Broadview Solutions"
        description="Expert lawn care tips, seasonal cleanup guides & landscaping advice for Goshen, Elkhart & Bristol, Indiana homeowners. Read the Broadview Solutions blog."
        keywords="lawn care tips Goshen Indiana, landscaping blog Elkhart County, seasonal cleanup advice Indiana, snow plowing tips northern Indiana"
        canonical="/blog"
        ogTitle="Landscaping Insights & Tips | Broadview Solutions Blog"
        ogDescription="Expert lawn care, seasonal cleanup & landscaping advice for Elkhart County, Indiana homeowners and businesses."
        schema={blogSchema}
      />
      <Navbar />

      {/* Blog Header */}
      <section className="bg-gradient-to-br from-[#1A2424] via-[#1C2B2B] to-[#2D5016] py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Landscaping Insights &amp; Tips</h1>
          <p className="text-xl text-[#C0C8CC] mb-8 max-w-3xl mx-auto">
            Expert advice, seasonal guides, and industry insights to help you maintain beautiful outdoor spaces
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full px-6 py-4 rounded-full text-lg border-2 border-[#8A9BA8]/30 bg-[#1C2B2B]/50 backdrop-blur-sm text-white placeholder-[#8A9BA8] focus:outline-none focus:border-[#2D5016]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#2D5016] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1E3A0F] transition-colors whitespace-nowrap cursor-pointer">
                <i className="ri-search-line"></i>
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer border-2 ${
                  selectedCategory === category
                    ? 'bg-[#2D5016] text-white border-[#2D5016]'
                    : 'bg-[#1C2B2B]/50 text-[#C0C8CC] border-[#8A9BA8]/30 hover:border-[#8A9BA8]/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {articlesError && (
        <section className="bg-[#1A2424] py-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-red-900/30 border border-red-500/30 rounded-lg px-6 py-4 flex items-center space-x-3">
              <i className="ri-error-warning-line text-red-400 text-xl"></i>
              <p className="text-red-200 text-sm">{articlesError}. Showing available articles.</p>
            </div>
          </div>
        </section>
      )}

      {/* Featured Post */}
      {!isEmpty && featuredPost && (
        <section className="bg-[#1A2424] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-[#1C2B2B] rounded-2xl shadow-2xl overflow-hidden border-2 border-[#8A9BA8]/30">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    title={`${featuredPost.title} — Broadview Solutions Landscaping Blog`}
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#2D5016] text-white px-4 py-2 rounded-full text-sm font-semibold ring-2 ring-[#8A9BA8]/40">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-12 flex flex-col justify-center">
                  <div className="inline-block bg-[#2D5016]/20 text-[#2D5016] border border-[#2D5016] px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                    {featuredPost.category}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-[#C0C8CC] mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-6 text-sm text-[#8A9BA8]">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center space-x-2 bg-[#2D5016] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1E3A0F] transition-colors w-fit whitespace-nowrap cursor-pointer"
                  >
                    <span>Read Article</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="bg-[#1C2B2B] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {isEmpty ? (
                <div className="bg-[#1A2424] rounded-xl p-12 text-center border-2 border-[#8A9BA8]/20">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#2D5016]/20 rounded-full mx-auto mb-4">
                    <i className="ri-article-line text-3xl text-[#2D5016]"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">No Articles Found</h3>
                  <p className="text-[#C0C8CC]">Check back soon for new landscaping tips and seasonal guides.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.slice(1).map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="bg-[#1A2424] rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden group cursor-pointer border-2 border-[#8A9BA8]/20 hover:border-[#8A9BA8]/60"
                      >
                        <div className="relative h-56 overflow-hidden">
                          <img 
                            src={post.image}
                            alt={post.title}
                            title={`${post.title} — Broadview Solutions Blog`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#2D5016] text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#2D5016] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-[#C0C8CC] mb-4 text-sm leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center space-x-3 text-xs text-[#8A9BA8]">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center items-center space-x-2 mt-12">
                    <button className="px-4 py-2 rounded-lg bg-[#1A2424] text-[#C0C8CC] hover:bg-[#2D5016] hover:text-white transition-colors cursor-pointer border border-[#8A9BA8]/30">
                      <i className="ri-arrow-left-line"></i>
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-[#2D5016] text-white font-semibold cursor-pointer">1</button>
                    <button className="px-4 py-2 rounded-lg bg-[#1A2424] text-[#C0C8CC] hover:bg-[#2D5016] hover:text-white transition-colors cursor-pointer border border-[#8A9BA8]/30">2</button>
                    <button className="px-4 py-2 rounded-lg bg-[#1A2424] text-[#C0C8CC] hover:bg-[#2D5016] hover:text-white transition-colors cursor-pointer border border-[#8A9BA8]/30">3</button>
                    <button className="px-4 py-2 rounded-lg bg-[#1A2424] text-[#C0C8CC] hover:bg-[#2D5016] hover:text-white transition-colors cursor-pointer border border-[#8A9BA8]/30">
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                {/* Newsletter Signup */}
                <div className="bg-[#2D5016] text-white p-8 rounded-xl border-2 border-[#8A9BA8]/30">
                  <h3 className="text-2xl font-bold mb-4">Get Landscaping Tips</h3>
                  <p className="text-[#C0C8CC] mb-6 text-sm">
                    Subscribe to receive seasonal tips, exclusive offers, and expert advice delivered to your inbox.
                  </p>
                  <form 
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="space-y-3" 
                    data-readdy-form 
                    id="newsletter-form"
                  >
                    <input type="hidden" name="access_key" value="18a949f6-137e-4396-8425-d25193b23fd1" />
                    <input type="hidden" name="cc" value="alex28saucedo@gmail.com" />
                    <input type="hidden" name="subject" value="New Newsletter Signup - Broadview Solutions" />
                    <input type="hidden" name="from_name" value="Broadview Solutions Website" />
                    <input type="hidden" name="redirect" value="https://broad-viewsolutions.com/?subscribed=1" />
                    <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your email address" 
                      required
                      className="w-full px-4 py-3 rounded-lg text-[#1C2B2B] bg-white focus:outline-none focus:ring-2 focus:ring-[#8A9BA8] text-sm"
                    />
                    <button 
                      type="submit"
                      className="w-full bg-white text-[#2D5016] py-3 rounded-lg font-semibold hover:bg-[#F4F1EC] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Subscribe Now
                    </button>
                  </form>
                </div>

                {/* Popular Posts */}
                {!isEmpty && (
                  <div className="bg-[#1A2424] p-8 rounded-xl shadow-sm border-2 border-[#8A9BA8]/30">
                    <h3 className="text-xl font-bold text-white mb-6">Popular Articles</h3>
                    <div className="space-y-4">
                      {allPosts.slice(0, 5).map((post) => (
                        <Link 
                          key={post.id}
                          to={`/blog/${post.id}`}
                          className="flex space-x-3 group cursor-pointer"
                        >
                          <img 
                            src={post.image}
                            alt={post.title}
                            title={`${post.title} — Broadview Solutions Blog`}
                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0 border border-[#8A9BA8]/30"
                            loading="lazy"
                            decoding="async"
                          />
                          <div>
                            <h4 className="text-sm font-semibold text-white group-hover:text-[#2D5016] transition-colors line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <p className="text-xs text-[#8A9BA8]">{post.date}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Categories */}
                <div className="bg-[#1A2424] p-8 rounded-xl shadow-sm border-2 border-[#8A9BA8]/30">
                  <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
                  <div className="space-y-2">
                    {categories.filter(cat => cat !== 'All').map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="w-full text-left px-4 py-2 rounded-lg text-[#C0C8CC] hover:bg-[#1C2B2B] hover:text-[#2D5016] transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>{category}</span>
                        <i className="ri-arrow-right-s-line"></i>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Rich Text Section */}
      <section className="bg-[#1A2424] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Expert Lawn Care Tips &amp; Landscaping Advice for Elkhart County</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                The Broadview Solutions blog is your go-to resource for practical, locally relevant lawn care guidance tailored to homeowners and businesses in Goshen, Elkhart, Bristol, Middlebury, and Wakarusa, Indiana. Our articles are written from real field experience — not generic advice — so you can trust that what works in our guides will work in your yard.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Northern Indiana's climate presents unique challenges for lawn care. Cold, snowy winters, wet springs, hot summers, and colorful falls each demand a different approach to keeping your property healthy and attractive. Our seasonal guides walk you through exactly what to do and when — from the first spring thaw to the last snow of winter.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Whether you're a first-time homeowner trying to understand mowing schedules, a commercial property manager looking for efficient grounds maintenance strategies, or a seasoned gardener wanting to refine your technique, our blog has content for every experience level. We cover topics like proper mowing height, weed prevention, mulch selection, and much more.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                We also share insights specific to Elkhart County's climate patterns, seasonal property care timing, and how to prepare your landscape for the region's sometimes harsh winters. Our goal is to help you make informed decisions about your property — whether you choose to do it yourself or hire a professional team like ours.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Seasonal Lawn Care Guides for Northern Indiana Homeowners</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                <strong className="text-white">Spring</strong> is the most critical season for setting your lawn up for success. Our spring guides cover everything from early cleanup and bed preparation to the right time to start your mowing schedule. Getting these steps right in March and April pays dividends all the way through October.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                <strong className="text-white">Summer</strong> lawn care in Indiana is all about consistency and stress management. We share tips on proper mowing frequency, maintaining healthy grass during heat and drought, and how to identify and address common summer lawn issues before they spread.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                <strong className="text-white">Fall</strong> lawn care in Indiana is all about protecting your investment. Our fall articles explain the importance of a final cleanup and mowing for winter readiness, and the most efficient methods for leaf removal that protect your turf.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                <strong className="text-white">Winter</strong> preparation and snow management are topics we know well. From protecting your landscape beds before the first freeze to understanding when and how to apply ice melt safely without damaging your lawn or hardscaping, our winter guides keep your property safe and ready for spring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lawn Care Tips Deep Dive */}
      <section className="bg-[#1C2B2B] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Essential Lawn Care Knowledge for Elkhart County Properties</h2>
            <p className="text-lg text-[#C0C8CC] max-w-3xl mx-auto">
              Practical, field-tested guidance from our professional landscaping team — built specifically for northern Indiana's climate and conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#1A2424] rounded-xl p-8 border-2 border-[#8A9BA8]/20">
              <div className="w-14 h-14 flex items-center justify-center bg-[#2D5016] rounded-full mb-5 ring-4 ring-[#8A9BA8]/20">
                <i className="ri-seedling-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Spring Cleanup &amp; Bed Prep</h3>
              <p className="text-[#C0C8CC] text-sm leading-relaxed mb-3">
                Spring is the most impactful season for your property's curb appeal. A thorough cleanup — removing winter debris, redefining bed edges, and installing fresh mulch — sets the tone for the entire growing season. Most Elkhart County properties benefit from professional spring cleanup in mid-to-late April.
              </p>
              <p className="text-[#C0C8CC] text-sm leading-relaxed">
                Professional bed edging with commercial tools delivers crisp, consistent lines that hand tools simply cannot match. Combined with a 2-3 inch mulch layer, your landscape beds will suppress weeds, retain moisture, and look polished through fall.
              </p>
            </div>

            <div className="bg-[#1A2424] rounded-xl p-8 border-2 border-[#8A9BA8]/20">
              <div className="w-14 h-14 flex items-center justify-center bg-[#2D5016] rounded-full mb-5 ring-4 ring-[#8A9BA8]/20">
                <i className="ri-scissors-cut-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mowing Best Practices</h3>
              <p className="text-[#C0C8CC] text-sm leading-relaxed mb-3">
                The single most common lawn care mistake we see in Goshen and Elkhart is cutting grass too short. For cool-season grasses in northern Indiana, the ideal mowing height is 3 to 3.5 inches during the growing season. Taller grass shades the soil, reduces water evaporation, and naturally suppresses weed germination.
              </p>
              <p className="text-[#C0C8CC] text-sm leading-relaxed">
                Never remove more than one-third of the blade length in a single mowing. During peak summer heat, raise your mowing height to 4 inches to reduce heat stress. Keep mower blades sharp — dull blades tear grass rather than cutting it cleanly, leaving ragged edges that turn brown and invite disease.
              </p>
            </div>

            <div className="bg-[#1A2424] rounded-xl p-8 border-2 border-[#8A9BA8]/20">
              <div className="w-14 h-14 flex items-center justify-center bg-[#2D5016] rounded-full mb-5 ring-4 ring-[#8A9BA8]/20">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Consistent Maintenance Programs</h3>
              <p className="text-[#C0C8CC] text-sm leading-relaxed mb-3">
                Sporadic mowing and inconsistent care produce stressed, patchy lawns that require more recovery time. A regular weekly or bi-weekly mowing program with proper edging, trimming, and cleanup keeps grass at optimal height and prevents the shock of overgrowth recovery.
              </p>
              <p className="text-[#C0C8CC] text-sm leading-relaxed">
                Our crews treat every property with the same attention to detail — crisp edges, thorough blowdown, and debris-free hard surfaces. This consistency is why recurring maintenance clients see better long-term results than sporadic DIY efforts.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1A2424] rounded-xl p-8 border-2 border-[#8A9BA8]/20">
              <h3 className="text-2xl font-bold text-white mb-5">Weed Control &amp; Prevention Strategies</h3>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Effective weed control in Goshen and Elkhart County starts with prevention, not reaction. A thick, healthy lawn maintained at proper mowing height is your best defense against weeds — dense turf simply leaves no room for weed seeds to germinate and establish.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Removing early weeds by hand in spring — typically when they first appear in late March to early April in northern Indiana — prevents crabgrass and other annual weeds from spreading. Catching them early keeps beds and lawn edges clean before they take hold.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Post-emergent spot treatments target existing broadleaf weeds like dandelions and clover. Spot treatments are preferable to blanket applications when weed pressure is moderate, as they minimize chemical use. In landscape beds, a 2-3 inch mulch layer is often more effective than herbicides for preventing weed growth.
              </p>
            </div>

            <div className="bg-[#1A2424] rounded-xl p-8 border-2 border-[#8A9BA8]/20">
              <h3 className="text-2xl font-bold text-white mb-5">Seasonal Transitions &amp; Cleanup</h3>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Northern Indiana's four distinct seasons each bring unique demands. Spring cleanup is one of the most impactful services — clearing winter debris, refreshing mulch beds, and preparing garden beds sets the tone for the entire growing season. Fall cleanup is equally critical for protecting your landscape through winter.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Leaving leaves on your lawn through winter can smother grass, promote disease, and create a messy appearance. Our fall cleanup includes thorough leaf removal, final mowing, bed cleanup, and winterization prep. We haul away all debris, leaving your property clean and ready for winter.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed">
                Mulch installation is a key part of both spring and fall transitions. Fresh mulch suppresses weeds, insulates roots from temperature swings, and gives beds a polished, professional appearance. We recommend refreshing mulch annually for the best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#1A2424] py-20 cv-auto">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Lawn Care Questions</h2>
            <p className="text-lg text-[#C0C8CC]">
              Answers to the most common questions we receive from Elkhart County homeowners and property managers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "When should I start lawn care in the spring in Goshen, Indiana?",
                a: "In Goshen and the broader Elkhart County area, spring lawn care typically begins in late March or early April, depending on the year's weather. Light raking and cleanup can begin as soon as the ground thaws and dries out enough to walk on without compacting the soil. We recommend scheduling your first professional mowing in mid-to-late April once grass is actively growing and reaches about 4.5-5 inches tall."
              },
              {
                q: "How often should I mow my lawn in northern Indiana?",
                a: "During the active growing season (May through September), most Elkhart County lawns need mowing every 5 to 7 days. In spring and early fall when growth is most vigorous, you may need to mow every 5 days. During summer heat and drought, growth slows and you can extend to every 7 to 10 days. The key rule is never to remove more than one-third of the grass blade in a single mowing — this is more important than sticking to a rigid schedule."
              },
              {
                q: "What is included in a standard lawn maintenance visit?",
                a: "Every Broadview Solutions lawn maintenance visit includes professional mowing at the correct height for your grass type, precision edging along all walkways and driveways, string trimming around obstacles like fences and trees, and a complete blowdown cleanup of all hard surfaces. We leave your property spotless every time. Optional add-ons include weed control treatments and seasonal cleanup services."
              },
              {
                q: "How do I prepare my lawn for winter in Elkhart County?",
                a: "A proper fall lawn care routine in Elkhart County includes: thorough leaf removal to prevent smothering and disease, a final mowing at a slightly lower height (around 2.5 inches) to reduce the risk of snow mold, and any necessary pruning of dead branches. Landscape beds benefit from a fresh layer of mulch to insulate plant roots through the winter. We also recommend scheduling a fall cleanup service to handle all the heavy lifting and hauling."
              },
              {
                q: "Does Broadview Solutions offer one-time lawn care services or only recurring contracts?",
                a: "We offer both! While many of our clients choose recurring seasonal maintenance programs for the best results and most convenient experience, we also provide one-time services for specific needs — including seasonal cleanups, one-time mowing, mulch installation, and snow plowing on an as-needed basis. Contact us to discuss what arrangement works best for your property and budget."
              },
              {
                q: "What is the ideal mowing height for lawns in northern Indiana?",
                a: "For cool-season grasses common in northern Indiana — primarily Kentucky bluegrass, tall fescue, and perennial ryegrass — the ideal mowing height is 3 to 3.5 inches during the growing season. Taller grass develops deeper roots, shades out weeds, and retains moisture better. During peak summer heat, raise your mowing height to 4 inches to reduce heat stress. Never cut lower than 2.5 inches."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#1C2B2B] rounded-xl p-8 border-2 border-[#8A9BA8]/20">
                <h3 className="text-lg font-bold text-white mb-3 flex items-start space-x-3">
                  <span className="w-7 h-7 flex items-center justify-center bg-[#2D5016] rounded-full text-sm flex-shrink-0 mt-0.5">Q</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-[#C0C8CC] leading-relaxed pl-10 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Blog CTA */}
      <section className="bg-[#1C2B2B] py-20 cv-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Written by Landscaping Professionals Who Work in Your Community</h2>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                The Broadview Solutions blog draws on over a decade of hands-on experience in Elkhart County landscaping, combined with professional content development to ensure accuracy and clarity. Our articles reflect real conditions in Goshen, Elkhart, Bristol, Middlebury, and Wakarusa — the same soil types, weather patterns, and plant hardiness zones our crews work in every day. We review and fact-check every piece to make sure the advice is practical and relevant for local property owners.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-4">
                Our goal with this blog is simple: to help you make better decisions about your property. Whether that means giving you the knowledge to handle a task yourself, helping you understand what a professional service involves, or simply keeping you informed about the best timing for seasonal lawn care tasks, we want every article to deliver real, actionable value.
              </p>
              <p className="text-[#C0C8CC] leading-relaxed mb-6">
                We publish new content regularly throughout the year, with a focus on timely, seasonal topics. Subscribe to our newsletter to get new articles delivered directly to your inbox, along with exclusive tips and occasional special offers for our service area clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center space-x-2 bg-[#2D5016] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1E3A0F] transition-colors whitespace-nowrap cursor-pointer">
                  <span>Get a Free Estimate</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-[#8A9BA8]/50 text-white px-8 py-3 rounded-lg font-semibold hover:border-[#8A9BA8] transition-colors whitespace-nowrap cursor-pointer">
                  <span>View Our Services</span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'ri-article-line', label: 'Articles Published', value: '50+' },
                { icon: 'ri-calendar-check-line', label: 'Years of Experience', value: '10+' },
                { icon: 'ri-map-pin-line', label: 'Cities Covered', value: '5' },
                { icon: 'ri-leaf-line', label: 'Topics Covered', value: '7' },
              ].map((stat, i) => (
                <div key={i} className="bg-[#1A2424] rounded-xl p-6 text-center border-2 border-[#8A9BA8]/20">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#2D5016] rounded-full mx-auto mb-3">
                    <i className={`${stat.icon} text-xl text-white`}></i>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-[#C0C8CC]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#1C2B2B] py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <InlineCTA context="blog" />
        </div>
      </div>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
}