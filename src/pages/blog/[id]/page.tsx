import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import SeoHead from '../../../components/feature/SeoHead';
import InlineCTA from '../../../components/feature/InlineCTA';
import MobileStickyCTA from '../../../components/feature/MobileStickyCTA';
import { blogPosts } from '../../../mocks/blogPosts';
import { useBlogArticles } from '../../../hooks/useBlogStorage';

const shortTitles: Record<number, string> = {
  1: 'Spring Lawn Care Checklist | Broadview Solutions',
  2: 'How to Choose a Landscaping Company | Broadview',
  3: 'DIY vs Professional Lawn Care Costs | Broadview',
  4: 'Native Plants for Low-Maintenance Landscaping',
  5: 'Commercial Landscaping ROI | Broadview Solutions',
  6: 'How to Edge and Trim Like a Pro | Broadview',
  7: 'Fall Planting for Spring Color | Broadview',
  8: 'Why Is My Grass Brown? Causes & Fixes | Broadview',
  9: '5 Signs Your Lawn Needs Professional Care | Broadview',
  10: 'Winter Snow Plowing Guide for Homeowners | Broadview',
  11: 'Spring Lawn Care Checklist for Goshen Residents | Broadview',
};

interface UnifiedPost {
  id: string | number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  isoDate: string;
  isReal: boolean;
}

export default function BlogPost() {
  const { id } = useParams();
  const { getArticleBySlug, publishedArticles } = useBlogArticles();
  const [post, setPost] = useState<UnifiedPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<UnifiedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function resolvePost() {
      if (!id) {
        setLoading(false);
        return;
      }

      // Try real article by slug first
      const realArticle = await getArticleBySlug(id);
      if (realArticle && realArticle.status === 'published') {
        const pubDate = realArticle.published_at
          ? new Date(realArticle.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
          : new Date(realArticle.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const isoDate = realArticle.published_at
          ? realArticle.published_at.split('T')[0]
          : realArticle.created_at.split('T')[0];
        const readTime = `${Math.max(3, Math.ceil(realArticle.content.split(' ').length / 200))} min read`;

        const unified: UnifiedPost = {
          id: realArticle.slug,
          title: realArticle.title,
          excerpt: realArticle.excerpt || realArticle.seo_description,
          category: realArticle.category,
          date: pubDate,
          readTime,
          image: realArticle.featured_image || 'https://readdy.ai/api/search-image?query=professional%20landscaping%20lawn%20care%20green%20grass%20garden%20maintenance%20outdoor%20yard%20work%20beautiful%20residential%20property&width=800&height=500&seq=fallback002&orientation=landscape',
          content: realArticle.content,
          isoDate,
          isReal: true,
        };
        setPost(unified);

        // Related posts from other real articles + mocks
        const otherReals = publishedArticles
          .filter((a) => a.slug !== realArticle.slug)
          .map((a) => {
            const d = a.published_at
              ? new Date(a.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
              : new Date(a.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
            return {
              id: a.slug,
              title: a.title,
              excerpt: a.excerpt || a.seo_description,
              category: a.category,
              date: d,
              readTime: `${Math.max(3, Math.ceil(a.content.split(' ').length / 200))} min read`,
              image: a.featured_image || 'https://readdy.ai/api/search-image?query=professional%20landscaping%20lawn%20care%20green%20grass%20garden%20maintenance%20outdoor%20yard%20work%20beautiful%20residential%20property&width=800&height=500&seq=fallback003&orientation=landscape',
              content: a.content,
              isoDate: a.published_at ? a.published_at.split('T')[0] : a.created_at.split('T')[0],
              isReal: true,
            } as UnifiedPost;
          });

        const sameCat = otherReals.filter((p) => p.category === unified.category);
        const otherCat = otherReals.filter((p) => p.category !== unified.category);
        const mockUnified = blogPosts
          .filter((p) => p.category === unified.category)
          .map((p) => ({
            id: p.id,
            title: p.title,
            excerpt: p.excerpt,
            category: p.category,
            date: p.date,
            readTime: p.readTime,
            image: p.image,
            content: p.content,
            isoDate: new Date(p.date).toISOString().split('T')[0],
            isReal: false,
          } as UnifiedPost));

        setRelatedPosts([...sameCat, ...mockUnified, ...otherCat].slice(0, 2));
        setLoading(false);
        return;
      }

      // Fallback to mock data by numeric ID
      const mockPost = blogPosts.find((p) => p.id === Number(id));
      if (mockPost) {
        const isoDate = new Date(mockPost.date).toISOString().split('T')[0];
        const unified: UnifiedPost = {
          id: mockPost.id,
          title: mockPost.title,
          excerpt: mockPost.excerpt,
          category: mockPost.category,
          date: mockPost.date,
          readTime: mockPost.readTime,
          image: mockPost.image,
          content: mockPost.content,
          isoDate,
          isReal: false,
        };
        setPost(unified);

        const sameCategoryPosts = blogPosts.filter((p) => p.category === mockPost.category && p.id !== mockPost.id);
        const otherPosts = blogPosts.filter((p) => p.id !== mockPost.id && p.category !== mockPost.category);
        const realRelated = publishedArticles
          .filter((a) => a.category === mockPost.category)
          .map((a) => {
            const d = a.published_at
              ? new Date(a.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
              : new Date(a.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
            return {
              id: a.slug,
              title: a.title,
              excerpt: a.excerpt || a.seo_description,
              category: a.category,
              date: d,
              readTime: `${Math.max(3, Math.ceil(a.content.split(' ').length / 200))} min read`,
              image: a.featured_image || 'https://readdy.ai/api/search-image?query=professional%20landscaping%20lawn%20care%20green%20grass%20garden%20maintenance%20outdoor%20yard%20work%20beautiful%20residential%20property&width=800&height=500&seq=fallback004&orientation=landscape',
              content: a.content,
              isoDate: a.published_at ? a.published_at.split('T')[0] : a.created_at.split('T')[0],
              isReal: true,
            } as UnifiedPost;
          });

        setRelatedPosts([...realRelated, ...sameCategoryPosts, ...otherPosts].slice(0, 2));
      }
      setLoading(false);
    }

    resolvePost();
  }, [id, getArticleBySlug, publishedArticles]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1C2B2B]">
        <Navbar />
        <div className="flex items-center justify-center h-[60vh]">
          <i className="ri-loader-4-line animate-spin text-3xl text-[#2D5016]"></i>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#1C2B2B]">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-[#2D5016] hover:underline">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const blogPostSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "datePublished": post.isoDate,
      "dateModified": post.isoDate,
      "author": {
        "@type": "Organization",
        "name": "Broadview Solutions"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Broadview Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/favicon.svg`
        }
      },
      "url": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/blog/${post.id}`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/blog/${post.id}`
      },
      "articleSection": post.category,
      "keywords": `lawn care Goshen Indiana, ${post.category.toLowerCase()}, landscaping Elkhart County, Broadview Solutions`
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/blog`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `${import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com'}/blog/${post.id}`
        }
      ]
    }
  ];

  const pageTitle = typeof post.id === 'number'
    ? (shortTitles[post.id] ?? `${post.title} | Broadview`)
    : `${post.title} | Broadview`;

  return (
    <div className="min-h-screen bg-[#1C2B2B]">
      <SeoHead
        title={pageTitle}
        description={post.excerpt}
        keywords={`${post.category} lawn care Goshen Indiana, landscaping tips Elkhart County, Broadview Solutions blog`}
        canonical={`/blog/${post.id}`}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        schema={blogPostSchema}
      />
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-[#8A9BA8]">
              <li><Link to="/" className="hover:text-[#2D5016] cursor-pointer">Home</Link></li>
              <li><i className="ri-arrow-right-s-line"></i></li>
              <li><Link to="/blog" className="hover:text-[#2D5016] cursor-pointer">Blog</Link></li>
              <li><i className="ri-arrow-right-s-line"></i></li>
              <li className="text-[#C0C8CC]">{post.category}</li>
            </ol>
          </nav>

          <div className="mb-6">
            <span className="inline-block bg-[#2D5016]/20 text-[#2D5016] border border-[#2D5016] px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4 mb-8 text-[#8A9BA8]">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-12 border-2 border-[#8A9BA8]/30">
            <img
              src={post.image}
              alt={post.title}
              title={`${post.title} - Broadview Solutions`}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-16 bg-gradient-to-br from-[#2D5016] to-[#1E3A0F] rounded-2xl p-12 text-center border-2 border-[#8A9BA8]/30 cv-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-xl text-[#C0C8CC] mb-8 max-w-2xl mx-auto">
              Let Broadview Solutions bring professional lawn care and landscaping expertise to your property in Goshen, Elkhart County, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-white text-[#2D5016] px-8 py-4 rounded-lg font-semibold hover:bg-[#F4F1EC] transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Get Free Quote</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
              <a
                href="tel:+15745963633"
                className="inline-flex items-center justify-center space-x-2 bg-[#1C2B2B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1A2424] transition-colors whitespace-nowrap cursor-pointer border-2 border-white/20"
              >
                <i className="ri-phone-line"></i>
                <span>(574) 596-3633</span>
              </a>
            </div>
          </div>

          <div className="mt-12">
            <InlineCTA context="blog" />
          </div>

          <div className="mt-12 pt-8 border-t-2 border-[#8A9BA8]/30">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Related Articles</h3>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="bg-[#1A2424] rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden group cursor-pointer border-2 border-[#8A9BA8]/20 hover:border-[#8A9BA8]/60"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        title={`${relatedPost.title} — Broadview Solutions Blog`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#2D5016] transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-[#8A9BA8]">{relatedPost.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
}