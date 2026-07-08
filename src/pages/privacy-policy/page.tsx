import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import SeoHead from "../../components/feature/SeoHead";

export default function PrivacyPolicy() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://broad-viewsolutions.com';

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy",
      "description": "Privacy Policy for Broadview Solutions. Learn how we collect, use, and protect your personal information when you use our lawn care and landscaping services.",
      "url": `${siteUrl}/privacy-policy`,
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
            "name": "Privacy Policy",
            "item": `${siteUrl}/privacy-policy`
          }
        ]
      }
    }
  ];

  return (
    <>
      <SeoHead
        title="Privacy Policy | Broadview Solutions"
        description="Privacy Policy for Broadview Solutions. Learn how we collect, use, and protect your personal information when you use our lawn care and landscaping services."
        keywords="privacy policy, data protection, Broadview Solutions"
        canonical="/privacy-policy"
        schema={schema}
      />
      <div className="min-h-screen bg-[#1C2B2B] text-white">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400 mb-12">Last Updated: January 2025</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
                <p>
                  Broadview Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our lawn care and landscaping services in Goshen, Indiana and surrounding areas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                <p className="mb-3">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, property address, and other contact details you provide when requesting estimates or services.</li>
                  <li><strong>Property Information:</strong> Property type (residential or commercial), service area, and specific service needs.</li>
                  <li><strong>Communication Data:</strong> Messages, inquiries, and feedback you send through our contact forms or email.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, and website usage data collected through cookies and analytics tools.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our lawn care and landscaping services</li>
                  <li>Respond to your inquiries and service requests</li>
                  <li>Send you estimates, invoices, and service updates</li>
                  <li>Communicate with you about appointments, scheduling, and service changes</li>
                  <li>Improve our website and customer experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Send promotional materials and newsletters (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking Technologies</h2>
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
                <p className="mb-3">
                  We may use third-party service providers to help us operate our business and website, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Analytics services (e.g., Google Analytics) to understand website usage</li>
                  <li>Email service providers for communications</li>
                  <li>Payment processors for billing and invoicing</li>
                  <li>Mapping services for service area visualization</li>
                </ul>
                <p className="mt-3">
                  These third parties have access to your information only to perform specific tasks on our behalf and are obligated to protect your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Service records and communication history may be retained for business and legal purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Object to certain processing of your data</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <p className="mb-3">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-[#2A3F3F] p-6 rounded-lg">
                  <p className="mb-2"><strong>Broadview Solutions</strong></p>
                  <p className="mb-2">Based in Goshen, Indiana</p>
                  <p className="mb-2">Email: alex28Saucedo@gmail.com</p>
                  <p>Phone: (574) 555-0123</p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}