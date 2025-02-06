// import { FC } from 'react';
// import LanguageSwitch from '../../components/lang-switch';
// import Image from 'next/image';
// import { bcms } from '../../bcms-client';
// import {
//   NewsArticleEntry,
//   NewsArticleEntryMetaItem,
// } from '../../../../bcms/types/ts';
// import { BCMSEntryContentParsedItem } from '../../../../bcms/types/ts';
// import ContentManager from '../../components/ContentManager';

// export async function generateStaticParams() {
//   const articles = (await bcms.entry.getAll(
//     'news-article'
//   )) as NewsArticleEntry[];

//   return articles.map((article) => {
//     const meta = article.meta.en as NewsArticleEntryMetaItem;
//     return {
//       slug: meta.slug,
//     };
//   });
// }

// const Article: FC = async ({ params }) => {
//   const articles = (await bcms.entry.getAll(
//     'news-article'
//   )) as NewsArticleEntry[];

//   const article = await articles.find((e) => e.meta.en?.slug === params.slug);

//   if (!article) {
//     return 'Not found';
//   }
//   const data = {
//     meta: article.meta.en as NewsArticleEntryMetaItem,
//     content: article.content.en as BCMSEntryContentParsedItem[],
//   };
//   console.log(data);

//   const handleTranslationClick = (button: Text) => {
//     console.log('button clicked is:' + button)
//   };

//   return (
//     <div>
//       <LanguageSwitch onLanguageChange={handleTranslationClick}  />
//       <div className="grid grid-cols-1 gap-9 lg:gap-12">
//         <div className="pb-9 border-b border-border lg:pb-12">
//           <h1 className="text-center text-4xl font-bold leading-none tracking-[-0.72px] mb-3 lg:text-left lg:text-[56px] lg:leading-[-1.12px] lg:mb-6">
//             {data.meta.title}
//           </h1>
//           <p className="text-main-light text-center text-sm leading-[1.4] lg:text-left lg:text-lg lg:leading-[1.4]">
//             {data.meta.subheading}
//           </p>
//         </div>
//         <ContentManager
//           items={data.content}
//           className="prose lg:prose-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Article;


// "use client";

// import { FC } from 'react';
// import LanguageSwitch from '../../components/lang-switch';
// import Image from 'next/image';
// import { bcms } from '../../bcms-client';
// import {
//   NewsArticleEntry,
//   NewsArticleEntryMetaItem,
// } from '../../../../bcms/types/ts';
// import { BCMSEntryContentParsedItem } from '../../../../bcms/types/ts';
// import ContentManager from '../../components/ContentManager';
// import { useEffect, useState } from 'react';
// import { getArticle } from './server';


// const Article: FC = ({ params }) => {
//   const [articleData, setArticleData] = useState(null);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       const article = await getArticle(params.slug);
//       if (article) {
//         const data = {
//           meta: article.meta.en as NewsArticleEntryMetaItem,
//           content: article.content.en as BCMSEntryContentParsedItem[],
//         };
//         setArticleData(data);
//       }
//     };
  
//     fetchArticle();
//     fetchArticle();
//   }, [params.slug]);

//   const handleTranslationClick = (button: string) => {
//     console.log('button clicked is:' + button);
//   };

//   if (!articleData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <LanguageSwitch onLanguageChange={handleTranslationClick} />
//       <div className="grid grid-cols-1 gap-9 lg:gap-12">
//         <div className="pb-9 border-b border-border lg:pb-12">
//           <h1 className="text-center text-4xl font-bold leading-none tracking-[-0.72px] mb-3 lg:text-left lg:text-[56px] lg:leading-[-1.12px] lg:mb-6">
//             {articleData.meta.title}
//           </h1>
//           <p className="text-main-light text-center text-sm leading-[1.4] lg:text-left lg:text-lg lg:leading-[1.4]">
//             {articleData.meta.subheading}
//           </p>
//         </div>
//         <ContentManager
//           items={articleData.content}
//           className="prose lg:prose-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Article;

import { bcms } from '../../bcms-client';
import { NewsArticleEntry } from '../../../../bcms/types/ts';
import ArticleClient from './ArticleClient';

async function Page({ params }: { params: { slug: string } }) {
  const articles = await bcms.entry.getAll('news-article') as NewsArticleEntry[];
  const article = articles.find((e) => e.meta.en?.slug === params.slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticleClient article={article} />;
}

export default Page;