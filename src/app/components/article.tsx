import Link from "next/link";
import { FC } from "react";

export interface ArticleProps {
  title: string;
  slug: string;
  subheading: string;
}

const Article: FC<ArticleProps> = ({ title, subheading, slug }) => {
  return (
    <article>
      <Link
        href={`/article/${slug}`}
        className="group flex flex-col w-full pt-[18px] border-t border-border lg:pt-9"
      >
        <h2 className="text-lg font-bold leading-none tracking-[-0.36px] mb-3 transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent lg:text-2xl lg:leading-none lg:tracking-[-0.48px]">
          {title}
        </h2>
        <p className="text-main-light text-xs leading-[1.4] mb-3 lg:text-lg lg:leading-[1.4]">
          {subheading}
        </p>
      </Link>
    </article>
  );
};

export default Article;
