import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ui/ErrorBoundary';
import { ToastProvider } from './components/ui/ToastContext';
import { ToastContainer } from './components/ui/Toast';
import Chatbot from './components/chatbot/Chatbot';

const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Tourism = lazy(() => import('./pages/Tourism'));
const Trade = lazy(() => import('./pages/Trade'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

const MBBSInChinaGuide = lazy(() => import('./pages/seo/MBBSInChinaGuide'));
const CSCScholarshipGuide = lazy(() => import('./pages/seo/CSCScholarshipGuide'));
const IndiaChinaTradeGuide = lazy(() => import('./pages/seo/IndiaChinaTradeGuide'));
const EducationFaq = lazy(() => import('./pages/seo/FaqPage'));
const TourismFaq = lazy(() => import('./pages/seo/FaqPage'));
const TradeFaq = lazy(() => import('./pages/seo/FaqPage'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin" />
      <span className="text-sm text-slate-500 font-mono">Loading...</span>
    </div>
  </div>
);

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <ToastProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-body selection:bg-secondary selection:text-white transition-colors duration-300">
          <Navbar />
          <main className="flex-grow pt-[72px]">
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/education/mbbs-in-china-complete-guide" element={<MBBSInChinaGuide />} />
                  <Route path="/education/csc-scholarship-guide-2026" element={<CSCScholarshipGuide />} />
                  <Route path="/education/faq" element={<EducationFaq type={'education' as const} />} />
                  <Route path="/tourism" element={<Tourism />} />
                  <Route path="/tourism/faq" element={<TourismFaq type={'tourism' as const} />} />
                  <Route path="/trade" element={<Trade />} />
                  <Route path="/trade/india-china-trade-guide-2026" element={<IndiaChinaTradeGuide />} />
                  <Route path="/trade/faq" element={<TradeFaq type={'trade' as const} />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfService />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
          <ToastContainer />
          <Chatbot />
        </div>
      </ToastProvider>
    </Router>
  );
}

export default App;
