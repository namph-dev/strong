import React from 'react';
import BlogMain from '@/components/Blog/BlogMain';
import DetailCategoryMain from '@/components/DetailCategory/DetailCategoryMain';
import DetailBlogMain from '@/components/DetailBlogs/DetailBlogsMain';
import BlogRightSide from '@/components/RightSideBar/BlogRightSide';
import { getCategoriesByType, getCategoryBySlug } from '@/api/category';
import BreadcrumbMap from '@/components/BreadcrumbMap';
import TopBlog from '@/components/Blog/TopBlog';
import PageTitle from '@/components/PageTitle';
import { getPostByCategorySlug, getPostBySlug } from '@/api/blogs';
import appConfig from '@/config';
import JsonLd from "./json-ld";
import { removeHTMLTags } from '@/lib/utils';
import { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import Pagination from '@/components/common/pagination';

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTranslations('blog');

  if (!slug || slug.length === 0) {
    return {
      title: t('home_title'),
      description: t('home_subtitle')
    };
  }

  if (slug.length === 1) {
    const categorySlug = slug[0];
    const category = await getCategoryBySlug(categorySlug);
    if (!category)
      return {
        title: t('not_found'),
      };
    const url = `/blogs/${categorySlug}`;
    const image = category?.image || null;
    const metadata: Metadata = {
      title: category.name,
      description: category?.description || category.name,
      keywords: category?.keywords ? [category.keywords] : [],
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      alternates: {
        canonical: `${appConfig.HOST}blogs/${categorySlug}`,
        languages: {
          en: `${appConfig.HOST}blogs/${categorySlug}`,
        },
      },
    };
    metadata.openGraph = {
      title: category?.name,
      description: category?.description || category?.name,
      url: url,
      siteName: "Strongbody",
      images: image
        ? [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: category.name,
            type: "image/jpeg",
          },
        ]
        : [],
      locale: "en_US",
      type: "website",
    };
    return metadata;
  }

  if (slug.length === 2) {
    const categorySlug = slug[0];
    const blogSlug = slug[1];
    const blog = await getPostBySlug(blogSlug);
    if (!blog)
      return {
        title: t('not_found'),
      };
    const { title, excerpt, image, image_alt, created_by, created_at, updated_at, params: blogParams } = blog || {};
    const url = `/blogs/${categorySlug}/${blogSlug}`;
    let blogParamsObj: any = blogParams && JSON.parse(blogParams);
    const metadata: Metadata = {
      title: title,
      description:
        blogParamsObj && blogParamsObj.meta_description
          ? blogParamsObj.meta_description
          : removeHTMLTags(excerpt),
      keywords: [blogParamsObj && blogParamsObj.meta_keywords],
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      alternates: {
        canonical: `${appConfig.HOST}blogs/${categorySlug}/${blogSlug}`,
        languages: {
          en: `${appConfig.HOST}blogs/${categorySlug}/${blogSlug}`,
        },
      },
    };
    metadata.openGraph = {
      title: title,
      description:
        blogParamsObj && blogParamsObj.meta_description
          ? blogParamsObj.meta_description
          : removeHTMLTags(excerpt),
      url: url,
      siteName: "Strongbody",
      images: [
        {
          url: image,
          width: 1440,
          height: 720,
          alt: image_alt || "",
          type: "image/jpeg",
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: created_at,
      modifiedTime: updated_at,
      authors: [created_by],
    };
    return metadata;
  }

  return {
    title: t('not_found'),
  };
}

interface BreadcrumbItem {
  title: string;
  href: string;
}

const BlogPage = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  const page = await searchParams?.page ? Number(searchParams.page) : 1;
  const { slug } = await params;

  const t = await getTranslations('blog');

  const type = 'blog';
  const categoriesItems = await getCategoriesByType(type);

  let FirstMainComponent = null;
  let SecondMainComponent = null;

  let blog = null;

  let breadcrumbs: BreadcrumbItem[] = [];

  let totalPages = 0;


  if (!slug || slug.length === 0) {
    breadcrumbs = [
      { title: t('breadcrumbs.home'), href: "/" },
      { title: t('breadcrumbs.blog'), href: "/blogs" },
    ];

    FirstMainComponent = (
      <>
        <PageTitle title={t('home_title')} />
        <TopBlog />
      </>
    );

    SecondMainComponent = <BlogMain categoriesItems={categoriesItems} />;
  } else if (slug.length === 1) {
    const categorySlug = slug[0];
    const postRes = await getPostByCategorySlug(9, page, categorySlug);

    totalPages = postRes.total_page;
    const blogItems = postRes.list;

    if (blogItems && blogItems.length) {
      breadcrumbs = [
        { title: t('breadcrumbs.home'), href: "/" },
        { title: t('breadcrumbs.blog'), href: "/blogs" },
        { title: blogItems[0].category_name, href: `/blogs/${slug[0]}` },
      ];

      FirstMainComponent = <PageTitle title={blogItems[0].category_name} />;
      SecondMainComponent = <DetailCategoryMain blogItems={blogItems} />;
    }
    else {
      SecondMainComponent = t('not_found');
    }
  } else if (slug.length === 2) {
    blog = await getPostBySlug(slug[1]);

    breadcrumbs = [
      { title: t('breadcrumbs.home'), href: "/" },
      { title: t('breadcrumbs.blog'), href: "/blogs" },
      { title: blog.category_name, href: `/blogs/${blog.category_slug}` },
      { title: blog.title, href: `/blogs/${blog.slug}` }
    ]

    SecondMainComponent = <DetailBlogMain blog={blog} />;
  } else {
    SecondMainComponent = t('not_found');
  }

  return (
    <>
      {blog && <JsonLd blog={blog} />}
      <main className="container mb-[20px]">
        <nav aria-label="breadcrumb">
          <BreadcrumbMap breadcrumbItems={breadcrumbs} />
        </nav>
        {FirstMainComponent}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-[25px]">
          <section className="col-span-2">
            {SecondMainComponent}
          </section>
          <aside className="col-span-1">
            <BlogRightSide categoriesItems={categoriesItems} />
          </aside>
        </div>

        {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} />}
      </main>
    </>
  );
};

export default BlogPage;