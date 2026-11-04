import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { localizedEntries } from '../lib/content';
import { DEFAULT_LOCALE } from '../lib/i18n';
import { SITE } from '../lib/site';

export async function GET(context: APIContext) {
  // The feed is English-only: localizedEntries with the default locale drops
  // the localized copies now living under src/content/blog/<locale>/.
  const posts = localizedEntries(await getCollection('blog'), DEFAULT_LOCALE).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: `${SITE.name} Insights`,
    description: 'Field notes on studying, travelling and trading across the India–East Asia corridor.',
    site: context.site ?? SITE.url,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: '<language>en</language>',
  });
}
