// import { bcms } from '../../bcms-client';
// import { NewsArticleEntry } from '../../../../bcms/types/ts';

// export async function generateStaticParams() {
//   const articles = (await bcms.entry.getAll(
//     'news-article'
//   )) as NewsArticleEntry[];

//   return articles.map((article) => {
//     const meta = article.meta.en;
//     return {
//       slug: meta?.slug,
//     };
//   });
// }

// export async function getArticle(slug: string) {
//   const articles = (await bcms.entry.getAll(
//     'news-article'
//   )) as NewsArticleEntry[];

//   return articles.find((e) => e.meta.en?.slug === slug);
// }

import { bcms } from '../../bcms-client';
import { NewsArticleEntry } from '../../../../bcms/types/ts';

export async function generateStaticParams() {
  const articles = await bcms.entry.getAll('news-article') as NewsArticleEntry[];

  return articles.map((article) => ({
    slug: article.meta.en?.slug,
  }));
}