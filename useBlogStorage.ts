import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  schema?: object | object[];
  noIndex?: boolean;
}

export default function SeoHead({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  schema,
  noIndex = false,
}: SeoHeadProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  const fullCanonical = `${siteUrl}${canonical}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('last-modified', new Date().toISOString().split('T')[0]);

    // Set noindex if specified
    if (noIndex) {
      setMeta('robots', 'noindex, nofollow');
    } else {
      // Remove noindex meta if it exists
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.remove();
      }
    }

    setMeta('og:title', ogTitle || title, 'property');
    setMeta('og:description', ogDescription || description, 'property');
    setMeta('og:url', fullCanonical, 'property');
    setMeta('twitter:title', ogTitle || title, 'name');
    setMeta('twitter:description', ogDescription || description, 'name');

    setLink('canonical', fullCanonical);

    // Inject JSON-LD
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
      existingScripts.forEach(s => s.remove());

      schemas.forEach((s, i) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-jsonld', String(i));
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach(s => s.remove());
    };
  }, [title, description, keywords, fullCanonical, ogTitle, ogDescription, schema, noIndex]);

  return null;
}