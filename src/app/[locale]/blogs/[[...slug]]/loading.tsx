"use client";

import TopBlogSkeleton from "@/components/Blog/TopBlogSkeleton";
import BreadcrumbMapSkeleton from "@/components/BreadcrumbMap/BreadcrumbMapSkeleton";
import DetailCategoryBlogItemSkeleton from "@/components/DetailCategory/DetailCategoryBlogItemSkeleton";
import PageTitleSkeleton from "@/components/PageTitle/PageTitleSkeleton";
import { usePathname } from "next/navigation";

const Loading = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="container">
      <BreadcrumbMapSkeleton length={segments.length + 1} />

      <PageTitleSkeleton />

      {segments.length === 1 && (
        <TopBlogSkeleton />
      )}

      {segments.length === 2 && (
        <div className="flex flex-col gap-[32px] lg:gap-[24px] lg:col-span-2">
          {Array(3).fill(0).map((_, i) => (
            <DetailCategoryBlogItemSkeleton key={i} />
          ))}
        </div>
      )}

      {segments.length > 2 && (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-[#DA1F27] h-12 w-12 mb-4"></div>
        </div>
      )}
    </div>
  );
};

export default Loading;