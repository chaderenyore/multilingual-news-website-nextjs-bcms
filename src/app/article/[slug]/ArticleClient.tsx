// "use client";

// import { FC } from 'react';
// import LanguageSwitch from '../../components/lang-switch';
// import {
//   NewsArticleEntry,
//   NewsArticleEntryMetaItem,
// } from '../../../../bcms/types/ts';
// import { BCMSEntryContentParsedItem } from '../../../../bcms/types/ts';
// import ContentManager from '../../components/ContentManager';

// interface ArticleClientProps {
//   article: NewsArticleEntry;
// }

// const ArticleClient: FC<ArticleClientProps> = ({ article }) => {
//   const data = {
//     meta: article.meta.en as NewsArticleEntryMetaItem,
//     content: article.content.en as BCMSEntryContentParsedItem[],
//   };

//   const handleTranslationClick = async (button: string) => {
//     try {
//       const response = await fetch('/api/translate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           text: data.content.map(item => item.value).join(' '), 
//           targetLanguage: button 
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const { translatedText } = await response.json();
//       console.log(translatedText);
//       return translatedText;
//     } catch (error) {
//       console.error("Error during translation request:", error);
//       throw error;
//     }
    
//   };

//   return (
//     <div>
//       <LanguageSwitch onLanguageChange={handleTranslationClick} />
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

// export default ArticleClient;


"use client";

import { FC, useState } from 'react';
import LanguageSwitch from '../../components/lang-switch';
import {
 NewsArticleEntry,
 NewsArticleEntryMetaItem,
} from '../../../../bcms/types/ts';
import { BCMSEntryContentParsedItem } from '../../../../bcms/types/ts';
import ContentManager from '../../components/ContentManager';

interface ArticleClientProps {
 article: NewsArticleEntry;
}

const ArticleClient: FC<ArticleClientProps> = ({ article }) => {
 const [isLoading, setIsLoading] = useState(false);
 const [translatedContent, setTranslatedContent] = useState<string | null>(null);

 const data = {
   meta: article.meta.en as NewsArticleEntryMetaItem,
   content: article.content.en as BCMSEntryContentParsedItem[],
 };

 const handleTranslationClick = async (button: string) => {
   setIsLoading(true);
   try {
     const response = await fetch('/api/translate', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ 
         text: data.content.map(item => item.value).join(' '), 
         targetLanguage: button 
       }),
     });
 
     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }
 
     const { translatedText } = await response.json();
     setTranslatedContent(translatedText);
   } catch (error) {
     console.error("Error during translation request:", error);
     throw error;
   } finally {
     setIsLoading(false);
   }
 };

 return (
   <div>
     <LanguageSwitch onLanguageChange={handleTranslationClick} />
     <div className="grid grid-cols-1 gap-9 lg:gap-12">
       <div className="pb-9 border-b border-border lg:pb-12">
         <h1 className="text-center text-4xl font-bold leading-none tracking-[-0.72px] mb-3 lg:text-left lg:text-[56px] lg:leading-[-1.12px] lg:mb-6">
           {data.meta.title}
         </h1>
         <p className="text-main-light text-center text-sm leading-[1.4] lg:text-left lg:text-lg lg:leading-[1.4]">
           {data.meta.subheading}
         </p>
       </div>
       {isLoading ? (
         <div className="text-center">Translating content...</div>
       ) : (
         <ContentManager
           items={translatedContent ? [{value: translatedContent, type: 'text'}] : data.content}
           className="prose lg:prose-lg"
         />
       )}
     </div>
   </div>
 );
};

export default ArticleClient;