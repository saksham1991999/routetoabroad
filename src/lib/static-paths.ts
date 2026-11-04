/**
 * getStaticPaths helpers for the [slug] route shells. Every locale's shell
 * (src/pages/[<locale>/]<section>/[slug].astro) delegates here so the set of
 * generated slugs is defined once; the page markup lives in
 * src/components/pages/<Section>DetailPage.astro.
 *
 * Each helper takes the shell's locale: localized routes generate the same
 * slugs as English, resolved through localizedEntries so a missing
 * translation falls back to the English entry (the route still exists).
 */
import { getCollection } from 'astro:content';
import { DEFAULT_LOCALE, type Locale } from './i18n';
import { localizedEntries, entrySlug } from './content';
import { COMPARISONS } from '../data/comparisons';

export async function blogPaths(locale: Locale = DEFAULT_LOCALE) {
  const entries = localizedEntries(await getCollection('blog'), locale);
  return entries.map((post) => ({ params: { slug: entrySlug(post) }, props: { post } }));
}

export async function guidePaths(locale: Locale = DEFAULT_LOCALE) {
  const entries = localizedEntries(await getCollection('guides'), locale);
  return entries.map((g) => ({ params: { slug: entrySlug(g) }, props: { guide: g } }));
}

export async function cityPaths(locale: Locale = DEFAULT_LOCALE) {
  const entries = localizedEntries(await getCollection('cities'), locale);
  return entries.map((c) => ({ params: { slug: entrySlug(c) }, props: { city: c } }));
}

export async function universityPaths(locale: Locale = DEFAULT_LOCALE) {
  const entries = localizedEntries(await getCollection('universities'), locale);
  return entries.map((u) => ({ params: { slug: entrySlug(u) }, props: { university: u } }));
}

export async function countryPaths(locale: Locale = DEFAULT_LOCALE) {
  const entries = localizedEntries(await getCollection('countries'), locale);
  return entries.map((c) => ({ params: { slug: entrySlug(c) }, props: { country: c } }));
}

export function comparePaths() {
  // Slugs are identical across locales; the en set is the slug source of truth.
  return COMPARISONS.en.map((c) => ({ params: { slug: c.slug }, props: { c } }));
}
