import { FC } from 'react';
import LanguageSwitch from '../../components/lang-switch';
import Image from 'next/image';
import { bcms } from '../../bcms-client';
import {
  NewsArticleEntry,
  NewsArticleEntryMetaItem,
} from '../../../../bcms/types/ts';
import { BCMSEntryContentParsedItem } from '../../../../bcms/types/ts';
import ContentManager from '../../components/ContentManager';

export async function generateStaticParams() {
  const articles = (await bcms.entry.getAll(
    'news-article'
  )) as NewsArticleEntry[];

  return articles.map((article) => {
    const meta = article.meta.en as NewsArticleEntryMetaItem;
    return {
      slug: meta.slug,
    };
  });
}

const Article: FC = async ({ params }) => {
  const articles = (await bcms.entry.getAll(
    'news-article'
  )) as NewsArticleEntry[];

  const article = await articles.find((e) => e.meta.en?.slug === params.slug);

  if (!article) {
    return 'Not found';
  }
  const data = {
    meta: article.meta.en as NewsArticleEntryMetaItem,
    content: article.content.en as BCMSEntryContentParsedItem[],
  };
  console.log(data);
  return (
    <div>
      <LanguageSwitch />
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
          className="prose max-w-full lg:prose-lg"
        />

        {/* <div className="pb-9 border-b border-border lg:pb-12">
          <h2 className="text-lg font-bold leading-none mb-2 lg:text-[32px] lg:mb-6">
            Creating and Editing a Template
          </h2>
          <p className="text-main-light text-xs leading-[1.4] mb-3 lg:text-lg lg:leading-[1.4] lg:mb-6">
            To create a template, click on Create New Template.
          </p>
          <Image
            src="/article/1.png"
            alt=""
            width={824}
            height={333}
            className="w-full object-contain rounded-xl overflow-hidden mb-6"
          />
          <p className="text-main-light text-xs leading-[1.4] mb-3 lg:text-lg lg:leading-[1.4] lg:mb-6">
            Next, fill in the title, for example, &quot;Blog.&quot;
            <br />
            <br />
            It&apos;s recommended to use singular names for templates. For
            example, use &quot;Blog&quot; instead of &quot;Blogs.&quot; This
            way, button labels will display &quot;Add New Blog&quot; instead of
            &quot;Add New Blogs.&quot; However, the name you choose doesn&apos;t
            affect the functionality.
            <br />
            <br />
            You can also add a description to each template, which is visible
            only inside the CMS. Descriptions are often used to outline internal
            processes, share resources, or explain the template’s purpose.
          </p>
          <Image
            src="/article/2.png"
            alt=""
            width={824}
            height={368}
            className="w-full object-contain rounded-xl overflow-hidden"
          />
        </div>
        <div className="pb-9 border-b border-border lg:pb-12">
          <h2 className="text-lg font-bold leading-none mb-2 lg:text-[32px] lg:mb-6">
            Adding Properties to a Template
          </h2>
          <p className="text-main-light text-xs leading-[1.4] mb-3 lg:text-lg lg:leading-[1.4] lg:mb-6">
            To add properties to your template, select a property from the
            Property List on the right side and drag it into the template. Learn
            more about available{" "}
            <a href="#" className="text-accent hover:underline">
              properties
            </a>
            .
          </p>
          <Image
            src="/article/3.png"
            alt=""
            width={824}
            height={432}
            className="w-full object-contain rounded-xl overflow-hidden"
          />
        </div>
        <div className="pb-9 border-b border-border lg:pb-12">
          <h2 className="text-lg font-bold leading-none mb-2 lg:text-[32px] lg:mb-6">
            Deleting a Template
          </h2>
          <p className="text-main-light text-xs leading-[1.4] mb-3 lg:text-lg lg:leading-[1.4] lg:mb-6">
            To delete a template, click on Edit Template, choose Delete, and
            then confirm.
          </p>
          <Image
            src="/article/4.png"
            alt=""
            width={824}
            height={425}
            className="w-full object-contain rounded-xl overflow-hidden"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Article;
