import { Skeleton } from "@/components/ui/skeleton";

const DetailCategoryBlogItemSkeleton = () => {
  return (
    <div className="lg:flex lg:gap-[24px] animate-pulse">
      <div className="relative lg:w-full lg:max-w-[384px] aspect-[384/268] overflow-hidden rounded-[10px] shrink-0 bg-muted">
        <Skeleton className="h-full w-full absolute inset-0 rounded-[10px]" />
      </div>

      <div className="flex-1 mt-[16px] lg:mt-0 space-y-3">
        <Skeleton className="h-[32px] w-3/4" />

        <div className="flex gap-[12px] items-center">
          <Skeleton className="h-[20px] w-[120px]" />
          <Skeleton className="h-[20px] w-[80px]" />
        </div>

        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-5/6" />
        <Skeleton className="h-[20px] w-2/3" />

        <Skeleton className="h-[32px] w-[100px] rounded-[6px]" />
      </div>
    </div>
  );
};

export default DetailCategoryBlogItemSkeleton;