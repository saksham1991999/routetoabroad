/**
 * getStaticPaths helpers for the [slug] route shells. Every locale's shell
 * (src/pages/[<locale>/]<section>/[slug].astro) delegates here so the set of
 * generated slugs is defined once; the page markup lives in
 * src/components/pages/<Section>DetailPage.astro.
 */
import { getCollection } from 'astro:content';
import { COMPARISONS } from '../data/comparisons';

export async function blogPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export async function guidePaths() {
  const guides = await getCollection('guides');
  return guides.map((g) => ({ params: { slug: g.id }, props: { guide: g } }));
}

export async function cityPaths() {
  const cities = await getCollection('cities');
  return cities.map((c) => ({ params: { slug: c.id }, props: { city: c } }));
}

export async function universityPaths() {
  const universities = await getCollection('universities');
  return universities.map((u) => ({ params: { slug: u.id }, props: { university: u } }));
}

export async function countryPaths() {
  const countries = await getCollection('countries');
  return countries.map((c) => ({ params: { slug: c.id }, props: { country: c } }));
}

export function comparePaths() {
  return COMPARISONS.map((c) => ({ params: { slug: c.slug }, props: { c } }));
}
