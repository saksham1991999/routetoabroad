import Seo from '../components/seo/Seo';
import { COMPANY } from '../constants';

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | RouteToAbroad"
        description="Learn how RouteToAbroad collects, uses, and protects your personal information."
      />
      <main className="py-24 px-4 sm:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-[720px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold mb-6 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.1] mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-12">Last updated: March 2025</p>

          <div className="prose prose-slate prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-10">

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Information We Collect</h2>
              <p>
                When you use RouteToAbroad's services, we may collect information you provide directly, such as your name,
                email address, phone number, nationality, and educational background when you submit an inquiry or contact form.
                We also collect standard technical data automatically, including IP address, browser type, and pages visited,
                to help us improve the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Respond to your inquiries and provide the services you requested</li>
                <li>Send relevant updates about programs, destinations, and trade opportunities</li>
                <li>Improve our website, services, and user experience</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Third-Party Services</h2>
              <p>
                Our site may use third-party services including analytics providers, form processors, and cloud hosting
                platforms. These services have their own privacy policies and we encourage you to review them. We only
                share data with third parties as necessary to deliver our services or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfil the purpose for which it was
                collected, or as required by applicable law. Inquiry data is typically retained for up to 3 years.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or delete your personal data,
                object to or restrict its processing, and request data portability. To exercise any of these rights,
                please contact us at the details below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Cookies</h2>
              <p>
                We use cookies and similar technologies to remember your preferences (such as language and theme) and
                to analyse site traffic. You can control cookie settings through your browser at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your data, please reach out:
              </p>
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
