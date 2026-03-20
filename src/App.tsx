import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ui/ErrorBoundary';
import { ToastProvider } from './components/ui/ToastContext';
import { ToastContainer } from './components/ui/Toast';
import Home from './pages/Home';
import Education from './pages/Education';
import Tourism from './pages/Tourism';
import Trade from './pages/Trade';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/tourism" element={<Tourism />} />
                <Route path="/trade" element={<Trade />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
              </Routes>
            </ErrorBoundary>
          </main>
          <Footer />
          <ToastContainer />
        </div>
      </ToastProvider>
    </Router>
  );
}

export default App;
