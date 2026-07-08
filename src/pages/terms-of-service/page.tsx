import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import SeoHead from "../../components/feature/SeoHead";

export default function TermsOfService() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com';

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service",
      "description": "Terms of Service for Broadview Solutions. Review the terms and conditions governing the use of our lawn care and landscaping services in Goshen, Indiana.",
      "url": `${siteUrl}/terms-of-service`,
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
            "name": "Terms of Service",
            "item": `${siteUrl}/terms-of-service`
          }
        ]
      }
    }
  ];

  return (
    <>
      <SeoHead
        title="Terms of Service | Broadview Solutions"
        description="Terms of Service for Broadview Solutions. Review the terms and conditions governing the use of our lawn care and landscaping services in Goshen, Indiana."
        keywords="terms of service, terms and conditions, Broadview Solutions"
        canonical="/terms-of-service"
        schema={schema}
      />
      <div className="min-h-screen bg-[#1C2B2B] text-white">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400 mb-12">Last Updated: January 2025</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
                <p>
                  By accessing or using the services provided by Broadview Solutions ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services or website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Services Description</h2>
                <p className="mb-3">
                  Broadview Solutions provides professional lawn care and landscaping services in Goshen, Indiana and surrounding areas, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lawn maintenance (mowing, edging, trimming)</li>
                  <li>Landscape design and installation</li>
                  <li>Seasonal cleanup services</li>
                  <li>Snow plowing and winter services</li>
                  <li>Commercial and residential property maintenance</li>
                </ul>
                <p className="mt-3">
                  Service availability, pricing, and scope may vary based on location, season, and specific customer needs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Service Agreements and Estimates</h2>
                <p>
                  All services are provided based on written or verbal agreements between the Company and the customer. Estimates provided are approximate and may be subject to change based on actual conditions, scope changes, or unforeseen circumstances. Final pricing will be confirmed before work begins or as outlined in your service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is due upon completion of services unless otherwise agreed in writing</li>
                  <li>We accept cash, check, and major credit cards</li>
                  <li>Late payments may be subject to interest charges and collection fees</li>
                  <li>Recurring service customers may be billed on a scheduled basis as outlined in their service agreement</li>
                  <li>Prices are subject to change with 30 days' notice for ongoing service contracts</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Scheduling and Cancellations</h2>
                <p className="mb-3">
                  <strong>Scheduling:</strong> Services are scheduled based on availability, weather conditions, and seasonal demand. We will make reasonable efforts to accommodate your preferred schedule.
                </p>
                <p className="mb-3">
                  <strong>Cancellations:</strong> Customers may cancel or reschedule services with at least 24 hours' notice without penalty. Cancellations with less than 24 hours' notice may be subject to a cancellation fee.
                </p>
                <p>
                  <strong>Weather:</strong> Services may be postponed or rescheduled due to inclement weather, unsafe conditions, or equipment issues. We will notify you as soon as possible of any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Property Access and Responsibilities</h2>
                <p className="mb-3">By engaging our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide safe and clear access to the service area</li>
                  <li>Mark or identify any underground utilities, sprinkler systems, or hidden obstacles</li>
                  <li>Secure pets and ensure they do not interfere with service personnel</li>
                  <li>Remove or identify any valuable items, decorations, or fragile objects in the service area</li>
                  <li>Notify us of any special conditions, hazards, or concerns before service begins</li>
                </ul>
                <p className="mt-3">
                  The Company is not responsible for damage to unmarked or hidden items, utilities, or obstacles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Broadview Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to our services. Our total liability for any claim shall not exceed the amount paid by the customer for the specific service giving rise to the claim.
                </p>
                <p className="mt-3">
                  We maintain appropriate insurance coverage for our operations. Claims for property damage or service issues must be reported within 7 days of service completion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Warranty and Service Guarantee</h2>
                <p>
                  We stand behind the quality of our work. If you are not satisfied with our services, please contact us within 7 days, and we will work to resolve the issue. Our warranty does not cover damage caused by weather, pests, disease, or factors beyond our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
                <p>
                  All content on our website, including text, graphics, logos, images, and software, is the property of Broadview Solutions or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
                <p>
                  Either party may terminate ongoing service agreements with 30 days' written notice. The Company reserves the right to refuse service or terminate agreements immediately for non-payment, unsafe conditions, abusive behavior, or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Governing Law and Dispute Resolution</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of Indiana, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be resolved in the courts of Elkhart County, Indiana.
                </p>
                <p className="mt-3">
                  Both parties agree to attempt to resolve disputes through good-faith negotiation before pursuing legal action.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Broadview Solutions, its employees, and contractors from any claims, damages, or expenses arising from your violation of these Terms, your use of our services, or your failure to provide accurate information or safe property access.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Severability</h2>
                <p>
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                <p className="mb-3">
                  For questions, concerns, or notices regarding these Terms of Service, please contact us:
                </p>
                <div className="bg-[#2A3F3F] p-6 rounded-lg">
                  <p className="mb-2"><strong>Broadview Solutions</strong></p>
                  <p className="mb-2">Based in Goshen, Indiana</p>
                  <p className="mb-2">Email: alex28Saucedo@gmail.com</p>
                  <p>Phone: (574) 555-0123</p>
                </div>
              </section>

              <section className="pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}