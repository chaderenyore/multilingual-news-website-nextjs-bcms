import { FC } from "react";
import { bcms } from './bcms-client';
import { NewsArticleEntry, NewsArticleEntryMetaItem } from '../../bcms/types/ts';
import Article, { ArticleProps } from "./components/article";
import LanguageSwitch from "./components/lang-switch";

const Home: FC = async () => {
  const newsArticles = (await bcms.entry.getAll('News_Article')) as NewsArticleEntry[];

    const items = newsArticles.map((newsArticle) => {
        return newsArticle.meta.en as NewsArticleEntryMetaItem;
    });

    console.log(items)

  const articles: ArticleProps[] = [
    {
      title: "Working with Templates",
      slug: "working-with-templates",
      description:
        "Templates in BCMS define the content structure. You use these structures to create entries. Templates can be either multi-entry or single-entry. For instance, a Home page template would be single-entry, while a Blog post template would be multi-entry.",
    },
    {
      title: "Working with Entries",
      slug: "working-with-entries",
      description:
        "Each entry in BCMS is a single record based on a template. The structure of an entry depends on the properties defined in its template. These properties will appear in the meta section of every entry. In addition to the meta section, each entry includes a content area where you can add rich text and widgets.",
    },
    {
      title: "Working with Groups",
      slug: "working-with-groups",
      description:
        "Groups in BCMS are reusable building blocks made up of multiple properties. You can include groups in any template, widget, or even within other groups. Like most BCMS properties, groups can also be used as arrays.",
    },
    {
      title: "Working with Media",
      slug: "working-with-media",
      description:
        "The media manager lets you store images, videos, and other files, with various ways to organize them using folders.",
    },
  ];

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
        {articles.map((article) => {
          return <Article {...article} key={article.slug} />;
        })}
      </div>
    </div>
  );
};

export default Home;
