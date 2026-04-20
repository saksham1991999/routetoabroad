import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '../utils/cn';
import { useEffect, useMemo } from 'react';
import Badge from '../components/ui/Badge';
import Reveal from '../components/animation/Reveal';
import { BLOGS } from '../data/blogs';
import type { BlogCategory, ContentBlock } from '../data/blogs';
import { articleSchema, breadcrumbSchema } from '../components/seo';

const categoryColorBar: Record<BlogCategory, string> = {
  education: 'bg-blue-500',
  tourism: 'bg-emerald-500',
  trade: 'bg-violet-500',
};

function renderBlock(block: ContentBlock, idx: number) {
  if (block.type === 'heading') {
    return (
      <h2 key={idx} className="text-2xl font-headline font-bold text-slate-900 dark:text-slate-100 mt-10 mb-4">
        {block.content}
      </h2>
    );
  }
  if (block.type === 'list') {
    return (
      <div key={idx} className="my-4">
        {block.content && (
          <p className="text-base text-slate-700 dark:text-slate-300 mb-3 font-semibold">{block.content}</p>
        )}
        <ul className="space-y-2 pl-4">
          {block.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined text-secondary text-base mt-0.5 flex-shrink-0" style={{ fontVariationSettings: '"FILL" 1' }}>
                check_circle
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <p key={idx} className="text-base text-slate-600 dark:text-slate-400 leading-relaxed my-4">
      {block.content}
    </p>
  );
}

function parseDate(dateStr: string): string {
  const months: Record<string, string> = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04',
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12'
  };
  const parts = dateStr.split(' ');
  if (parts.length === 3) {
    const month = months[parts[0]] || '01';
    const day = parts[1].replace(',', '').padStart(2, '0');
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
  return dateStr;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const categoryLabels = useMemo<Record<BlogCategory, string>>(
    () => ({
      education: t('blog.categories.education'),
      tourism: t('blog.categories.tourism'),
      trade: t('blog.categories.trade'),
    }),
    [t],
  );

  const post = BLOGS.find((b) => b.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | ${categoryLabels[post.category]} | RouteToAbroad`;
    }
    return () => {
      document.title = 'RouteToAbroad | Education. Tourism. Trade.';
    };
  }, [categoryLabels, post]);

  useEffect(() => {
    if (!post) return;

    const publishedTime = parseDate(post.date);
    const articleSchemaData = articleSchema({
      title: post.title,
      description: post.excerpt,
      url: `https://routetoabroad.com/blog/${post.slug}`,
      image: post.coverImage,
      author: post.author,
      authorRole: post.authorRole || 'Contributor',
      publishedTime,
      modifiedTime: publishedTime,
      category: post.category,
      tags: post.tags,
    });

    const breadcrumbData = breadcrumbSchema([
      { name: t('nav.home'), url: 'https://routetoabroad.com/' },
      { name: t('nav.blog'), url: 'https://routetoabroad.com/blog' },
      { name: categoryLabels[post.category], url: `https://routetoabroad.com/blog?category=${post.category}` },
      { name: post.title, url: `https://routetoabroad.com/blog/${post.slug}` },
    ]);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-schema';
    script.textContent = JSON.stringify([articleSchemaData, breadcrumbData]);
    
    const existing = document.getElementById('article-schema');
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('article-schema');
      if (el) el.remove();
    };
  }, [categoryLabels, post, t]);

  if (!post) {
    return (
      <div className="max-w-[1440px] mx-auto px-8 py-32 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">{t('blog.not_found_title')}</h1>
        <p className="text-slate-500 mb-8">{t('blog.not_found_desc')}</p>
        <Link to="/blog" className="text-secondary font-bold hover:underline">
          ← {t('blog.back_to_blog')}
        </Link>
      </div>
    );
  }

  const related = BLOGS.filter((b) => b.category === post.category && b.id !== post.id).slice(0, 2);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-slate-50 dark:bg-slate-900 py-3 px-4" aria-label={t('common.accessibility.breadcrumb')}>
        <div className="max-w-[1440px] mx-auto">
          <ol className="flex items-center gap-2 text-sm font-mono">
            <li>
              <Link to="/" className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
                {t('nav.home')}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-400">/</span>
              <Link to="/blog" className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
                {t('nav.blog')}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-400">/</span>
              <Link to={`/blog?category=${post.category}`} className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
                {categoryLabels[post.category]}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-400">/</span>
              <span className="text-slate-900 dark:text-white truncate max-w-[200px]">{post.title}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-950 relative overflow-hidden">
        {post.coverImage && (
          <div className="absolute inset-0">
            <img
              src={post.coverImage}
              alt={post.title}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover opacity-20"
              width={1200}
              height={630}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
          </div>
        )}
        {!post.coverImage && (
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] pointer-events-none" />
        )}
        <div className="max-w-[800px] mx-auto px-8 py-20 relative z-10">
          <Badge variant={post.category} size="md" className="mb-6">
            {categoryLabels[post.category]}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">{t('blog.by')}</span>
              <span className="text-white font-semibold">{post.author}</span>
              {post.authorRole && <span className="text-slate-500">({post.authorRole})</span>}
            </div>
            <span className="font-mono">{post.date}</span>
            <span className="font-mono bg-slate-800 px-3 py-1 rounded-full">{post.readTime} {t('blog.min_read')}</span>
          </div>
        </div>
      </section>

      {/* Category accent bar */}
      <div className={cn('h-1 w-full', categoryColorBar[post.category])} />

      {/* Article body */}
      <Reveal variant="fade">
        <article className="max-w-[800px] mx-auto px-8 py-16">
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium border-l-4 border-secondary pl-6 italic">
            {post.excerpt}
          </p>
          <div className="prose-like">
            {post.content.map((block, idx) => renderBlock(block, idx))}
          </div>
        </article>
      </Reveal>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="max-w-[800px] mx-auto px-8 pb-12 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono font-medium px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-slate-50 dark:bg-slate-900 py-16 px-8">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-2xl font-headline font-bold text-slate-900 dark:text-slate-100 mb-8">
              {t('blog.related')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {related.map((b) => (
                <Link
                  key={b.id}
                  to={`/blog/${b.slug}`}
                  className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  {b.coverImage && (
                    <div className="h-36 overflow-hidden">
                      <img
                        src={b.coverImage}
                        alt={b.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width={400}
                        height={200}
                      />
                    </div>
                  )}
                  {!b.coverImage && <div className={cn('h-1.5', categoryColorBar[b.category])} />}
                  <div className="p-6">
                    <Badge variant={b.category} size="sm" className="mb-3">
                      {b.category.charAt(0).toUpperCase() + b.category.slice(1)}
                    </Badge>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-secondary transition-colors mb-2">
                      {b.title}
                    </h3>
                    <div className="text-xs text-slate-400 font-mono">{b.date} · {b.readTime} {t('blog.min_read')}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Strip */}
      <section className="bg-secondary-container py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 grain-overlay mix-blend-overlay" />
        <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-white mb-8">
            {t('home.cta_strip.title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/education" className="bg-white text-secondary-container px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-slate-50 transition-all active:scale-95">
              {t('home.cta_strip.edu')}
            </Link>
            <Link to="/tourism" className="bg-white text-secondary-container px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-slate-50 transition-all active:scale-95">
              {t('home.cta_strip.tourism')}
            </Link>
            <Link to="/trade" className="bg-white text-secondary-container px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-slate-50 transition-all active:scale-95">
              {t('home.cta_strip.trade')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
