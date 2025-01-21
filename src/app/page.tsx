import { FC } from "react";
import { bcms } from './bcms-client';
import { NewsArticleEntry, NewsArticleEntryMetaItem } from '../../bcms/types/ts';
import Article, { ArticleProps } from "./components/article";
import LanguageSwitch from "./components/lang-switch";

const Home: FC = async () => {
  const newsArticles = (await bcms.entry.getAll('news-article')) as NewsArticleEntry[];

    const items = newsArticles.map((newsArticle) => {
        return newsArticle.meta.en as NewsArticleEntryMetaItem;
    }); 

  return (
    <div>
      <div className="mb-9 lg:mb-20">
        <h1 className="text-center text-4xl font-bold leading-none tracking-[-0.72px] mb-3 lg:text-left lg:text-[56px] lg:leading-[-1.12px] lg:mb-6">
          Welcome to our Blog
        </h1>
        <p className="text-main-light text-center text-sm leading-[1.4] lg:text-left lg:text-lg lg:leading-[1.4]">
          Welcome to our blog page. Below you’ll find a list of posts on a
          variety of topics, all aimed at sparking thought and conversation.
          Whether you’re looking for helpful tips or personal reflections, we
          hope you enjoy browsing through what we’ve shared. Feel free to leave
          your own thoughts in the comments.
        </p>
      </div>
      <LanguageSwitch />
      <div className="grid grid-cols-1 gap-[18px] lg:gap-9">
        {items.map((item) => {
          return <Article {...item} key={item.slug} />;
        })}
      </div>
    </div>
  );
};

export default Home;
