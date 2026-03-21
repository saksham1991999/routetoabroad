import Seo from '../components/seo/Seo';
import { COMPANY } from '../constants';

export default function TermsOfService() {
  return (
    <>
      <Seo
        title="Terms of Service | RouteToAbroad"
        description="Read the terms and conditions governing the use of RouteToAbroad's website and services."
      />
      <main className="py-24 px-4 sm:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-[720px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold mb-6 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.1] mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-12">Last updated: March 2025</p>

          <div className="prose prose-slate prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-10">

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the RouteToAbroad website and services, you agree to be bound by these Terms of
                Service and our Privacy Policy. If you do not agree with any part of these terms, please do not use
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Our Services</h2>
              <p>
                RouteToAbroad provides consultancy and facilitation services in three areas: education (university
                placement and student visa support), tourism (travel planning and destination packages), and trade
                (India–China import/export facilitation). We act as an intermediary and do not guarantee outcomes
                from third-party institutions, embassies, or partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Accuracy of Information</h2>
              <p>
                We strive to keep information on our website current and accurate, but we make no warranties regarding
                the completeness, accuracy, or reliability of any content. University admission requirements, visa
                regulations, and trade policies change frequently — always verify critical details with the relevant
                authority or institution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website — including text, images, logos, and design — is the property of
                RouteToAbroad or its licensors and is protected by applicable intellectual property laws. You may not
                reproduce, distribute, or create derivative works without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, RouteToAbroad shall not be liable for any indirect, incidental,
                special, or consequential damages arising from your use of our website or reliance on any information
                provided. Our total liability for any claim shall not exceed the amount you paid us for the service
                giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of India. Any disputes arising
                under these Terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms at any time. Changes will be posted on this page with an
                updated date. Continued use of the site after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Contact Us</h2>
              <p>For any questions about these Terms, please contact:</p>
              <address className="not-italic mt-3 space-y-1">
                <p className="font-semibold text-slate-900 dark:text-white">{COMPANY.name}</p>
                <p>{COMPANY.address.india}</p>
                <p>
                  Email:{' '}
                  <a href={`mailto:${COMPANY.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {COMPANY.email}
                  </a>
                </p>
                <p>Phone: {COMPANY.phone.india}</p>
              </address>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
