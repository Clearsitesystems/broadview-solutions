import { useEffect, useRef } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SeoHead from '../../components/feature/SeoHead';

export default function Team() {
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            (entry.target as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: 'Martin Saucedo Ortiz',
      title: 'Team Lead',
      age: 25,
      image: 'https://static.readdy.ai/image/af8ae33b67f17c82a3c09cb93c97754b/78dade6f35c5724931a974c40bbcc332.webp',
      bio: 'Life shaped me to move differently — and I wouldn\'t have it any other way. I choose peace over chaos, loyalty over convenience, and a future I built with my own hands. That\'s not just a mindset; it\'s the standard I hold myself to every day.',
      featured: false,
    },
    {
      name: 'Alexis Saucedo',
      title: 'Founder & Managing Partner',
      age: 20,
      image: 'https://static.readdy.ai/image/af8ae33b67f17c82a3c09cb93c97754b/7ab8e2e993a6457d3837fd4938783164.webp',
      bio: 'Hard seasons don\'t last — but the people who push through them do. Pressure isn\'t a setback; it\'s a privilege that sharpens purpose. I move forward not in spite of the challenge, but because of it.',
      featured: true,
    },
    {
      name: 'Jose Saucedo',
      title: 'Managing Partner',
      age: 28,
      image: 'https://static.readdy.ai/image/af8ae33b67f17c82a3c09cb93c97754b/84c1463cdd5d137cb154b6a5e8c5231a.webp',
      bio: 'Every morning I rise fueled by the belief of those who invested in my journey. That faith turns obstacles into stepping stones and ambition into real results. No dream is too big when purpose leads the way.',
      featured: false,
    },
  ];

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com';

  const teamSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${siteUrl}/team#webpage`,
        url: `${siteUrl}/team`,
        name: 'Meet Our Team | Broadview Solutions | Lawn Care Experts in Northern Indiana',
        description: 'Meet the dedicated team behind Broadview Solutions. Our experienced professionals provide top-quality lawn care, landscaping, and snow removal services across Northern Indiana.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Broadview Solutions',
        url: siteUrl,
        employee: teamMembers.map((member) => ({
          '@type': 'Person',
          name: member.name,
          jobTitle: member.title,
          image: member.image,
          description: member.bio,
          worksFor: {
            '@type': 'Organization',
            name: 'Broadview Solutions',
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/team#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Our Team',
            item: `${siteUrl}/team`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SeoHead
        title="Meet the Team | Broadview Solutions Goshen"
        description="Meet the dedicated team behind Broadview Solutions. Our experienced professionals provide top-quality lawn care, landscaping, and snow removal services across Northern Indiana including South Bend, Mishawaka, and Elkhart."
        keywords="lawn care team, landscaping professionals, Broadview Solutions team, South Bend lawn care experts, Northern Indiana landscaping team"
        canonical="/team"
        ogTitle="Meet Our Team | Broadview Solutions — Lawn Care Experts in Northern Indiana"
        ogDescription="Meet the dedicated professionals behind Broadview Solutions. Expert lawn care, landscaping, and snow removal services across Goshen, Elkhart, and Northern Indiana."
        schema={teamSchema}
      />
      <div className="min-h-screen bg-charcoal">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/50 via-charcoal to-charcoal"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                <i className="ri-team-line mr-2"></i>
                Our Leadership
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-silver-light max-w-3xl mx-auto leading-relaxed">
              The dedicated professionals behind Broadview Solutions, committed to delivering exceptional lawn care and landscaping services across Northern Indiana.
            </p>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-20 bg-charcoal">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-end">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) revealRefs.current[index] = el;
                  }}
                  className={`opacity-0 translate-y-8 ${member.featured ? '-mt-8' : 'mt-8'}`}
                >
                  <div className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
                    member.featured
                      ? 'bg-gradient-to-b from-primary/10 to-charcoal-light border-primary/60 hover:border-primary shadow-xl shadow-primary/20 scale-105'
                      : 'bg-charcoal-light border-silver-dark/30 hover:border-primary/50 hover:shadow-primary/20'
                  }`}>
                    {member.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary text-white text-xs font-semibold shadow-lg">
                          <i className="ri-star-fill mr-1.5"></i>
                          Founder
                        </span>
                      </div>
                    )}

                    {/* Photo with Green Glow */}
                    <div className={`relative overflow-hidden ${member.featured ? 'aspect-[3/4]' : 'aspect-[3/4]'}`}>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal-light/90 z-10"></div>
                      <div className={`absolute inset-0 ring-4 ring-inset transition-all duration-500 ${
                        member.featured
                          ? 'ring-primary/60 group-hover:ring-primary shadow-[inset_0_0_40px_rgba(74,222,128,0.4)] group-hover:shadow-[inset_0_0_60px_rgba(74,222,128,0.6)]'
                          : 'ring-primary/40 group-hover:ring-primary/60 shadow-[inset_0_0_30px_rgba(74,222,128,0.3)] group-hover:shadow-[inset_0_0_40px_rgba(74,222,128,0.5)]'
                      }`}></div>
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.title}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Info Section */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className={`font-bold text-white mb-1 group-hover:text-primary transition-colors ${member.featured ? 'text-2xl' : 'text-xl'}`}>
                            {member.name}
                          </h3>
                          <p className="text-primary font-medium text-sm">
                            {member.title}
                          </p>
                        </div>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold flex-shrink-0">
                          {member.age}
                        </span>
                      </div>
                      <p className="text-silver-light text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-charcoal to-charcoal-light">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-charcoal-light rounded-3xl p-12 border border-silver-dark/30 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
              <div className="relative">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Outdoor Space?
                </h2>
                <p className="text-xl text-silver-light mb-8 max-w-2xl mx-auto">
                  Our experienced team is here to help. Get a free estimate today and discover why Northern Indiana trusts Broadview Solutions.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  Get Free Estimate
                  <i className="ri-arrow-right-line ml-2 text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}