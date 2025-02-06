"use client";

import { FC } from 'react';
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
  const data = {
    meta: article.meta.en as NewsArticleEntryMetaItem,
    content: article.content.en as BCMSEntryContentParsedItem[],
  };
  console.log(data.content)

  const handleTranslationClick = async (button: string) => {
    try {
      // var strippedHtml = data.replace(/<[^>]+>/g, '');

      const response = await fetch('/api/translation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: [data.content], targetLanguage: button }),
      });
  
      if (!response.ok) {
        const errorData = await response.json(); // Try to parse error response
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
  
      const returnedContent = await response.json();
      console.log(returnedContent.translatedText)
      return returnedContent.translatedText; // Access the translated text
    } catch (error) {
      console.error("Error during translation request:", error);
      // Handle the error appropriately, e.g., display an error message to the user
      throw error; // Re-throw the error to be handled by the caller if needed.
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
        <ContentManager
          items={data.content}
          className="prose lg:prose-lg"
        />
      </div>
    </div>
  );
};

export default ArticleClient;