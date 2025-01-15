import { FC } from "react";
import LanguageSwitch from "../../components/lang-switch";
import Image from "next/image";

const Article: FC = () => {
  return (
    <div>
      <LanguageSwitch />
      <div className="grid grid-cols-1 gap-9 lg:gap-12">
        <div className="pb-9 border-b border-border lg:pb-12">
          <h1 className="text-center text-4xl font-bold leading-none tracking-[-0.72px] mb-3 lg:text-left lg:text-[56px] lg:leading-[-1.12px] lg:mb-6">
            Working with Templates
          </h1>
          <p className="text-main-light text-center text-sm leading-[1.4] lg:text-left lg:text-lg lg:leading-[1.4]">
            Templates in BCMS define the content structure. You use these
            structures to create entries. Templates can be either multi-entry or
            single-entry. For instance, a Home page template would be
            single-entry, while a Blog post template would be multi-entry.
          </p>
        </div>
        <div className="pb-9 border-b border-border lg:pb-12">
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
        </div>
      </div>
    </div>
  );
};

export default Article;
