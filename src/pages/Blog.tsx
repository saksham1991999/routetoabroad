import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '../utils/cn';
import Badge from '../components/ui/Badge';
import Reveal from '../components/animation/Reveal';
import { BLOGS } from '../data/blogs';
import type { BlogCategory } from '../data/blogs';

type FilterCategory = BlogCategory | 'all';

export default function Blog() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filtered = activeFilter === 'all' ? BLOGS : BLOGS.filter((b) => b.category === activeFilter);

  const filters: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: t('blog.all') },
    { key: 'education', label: t('blog.filter_education') },
    { key: 'tourism', label: t('blog.filter_tourism') },
    { key: 'trade', label: t('blog.filter_trade') },
  ];

  const categoryColorBar: Record<BlogCategory, string> = {
    education: 'bg-blue-500',
    tourism: 'bg-emerald-500',
    trade: 'bg-violet-500',
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4 block">
            {t('nav.blog')}
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.05] tracking-tight mb-6 max-w-3xl">
            {t('blog.hero_title')}
          </h1>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            {t('blog.hero_desc')}
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-4 sm:px-8 max-w-[1440px] mx-auto">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                activeFilter === key
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((blog, i) => (
            <Reveal key={blog.id} variant="slide-up" delay={i * 80}>
              <Link
                to={`/blog/${blog.slug}`}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full"
              >
                {/* Cover image */}
                <div className="relative h-48 overflow-hidden">
                  {blog.coverImage ? (
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className={cn('w-full h-full', categoryColorBar[blog.category], 'opacity-20')} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <Badge variant={blog.category} size="sm">
                      {t(`blog.categories.${blog.category}`)}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug mb-3 group-hover:text-secondary transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                    {blog.excerpt}
                  </p>
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300">{blog.author}</div>
                      <div className="text-xs text-slate-400 font-mono">{blog.date}</div>
                    </div>
                    <span className="text-xs text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                      {blog.readTime} {t('blog.min_read')}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
