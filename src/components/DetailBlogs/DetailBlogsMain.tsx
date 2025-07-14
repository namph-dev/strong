import { getPostByCategoryId } from "@/api/blogs";
import { dateFormatter, removeBBCode, wrapTablesWithResponsiveDiv } from "@/lib/utils";
import AuthorBlock from "./AuthorBlock";
import PageTitle from "../PageTitle";
import { parseHeadingsFromHtml } from '@/lib/parseHeadings';
import TableOfContents from "../TableOfContent";
import CategoryTitle from "../CategoryTitle";
import DetailBlogSwiper from "./DetailBlogSwiper";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

interface DetailBlogsMainProp {
  blog: Blog;
}

const DetailBlogsMain: React.FC<DetailBlogsMainProp> = async ({ blog }) => {
  const t = await getTranslations('blog');

  const blogItems = await getPostByCategoryId(6, 1, blog.category_id);
  blogItems.list = blogItems.list.filter((item: Blog) => item.id !== blog.id);

  const cleanContent = removeBBCode(blog.content);

  const { headings, contentWithIds } = parseHeadingsFromHtml(cleanContent);
  const contentWithResponsiveTable = wrapTablesWithResponsiveDiv(contentWithIds);

  if (!blog) return null;

  return (
    <>
      <header>
        <PageTitle title={blog.title} />

        <p className="font-normal text-[16px] leading-[20px] text-[#111827] opacity-50 mt-[12px]">
          {dateFormatter(blog.created_at)}
        </p>

        <p className="font-bold text-[12px] leading-[16px] text-[#0CAF60] bg-[#E7F7EF] rounded-[6px] py-[6px] px-[16px] w-fit mb-[24px] mt-[16px]">
          <Link
            href={`/blogs/${blog.category_slug}`}
            className="hover:underline"
          >
            {blog.category_name}
          </Link>
        </p>

        {headings.length > 0 && (
          <TableOfContents headings={headings} />
        )}
      </header>

      <section
        className="prose max-w-none col-span-2 mt-[16px]"
        dangerouslySetInnerHTML={{ __html: contentWithResponsiveTable }}
      />

      <AuthorBlock profile_picture={blog.author_profile_picture} author_name={blog.author_name} author_id={blog.author_id} author_email={blog.author_email} />

      <CategoryTitle title={t("also_like_title")} slug={blog.category_slug} />

      <DetailBlogSwiper blogItems={blogItems.list} />
    </>
  );
};

export default DetailBlogsMain;