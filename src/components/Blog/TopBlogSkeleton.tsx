import { Skeleton } from "@/components/ui/skeleton";

const TopBlogSkeleton = () => {
  return (
    <div className="space-y-[24px]">
      {/* Top 2 items for desktop */}
      <div className="grid lg:grid-cols-3 gap-[24px]">
        <div className="col-span-2">
          <div className="relative rounded-[10px] overflow-hidden aspect-[384/303] lg:aspect-[768/303] bg-muted">
            <div className="absolute inset-0 p-[24px] flex flex-col justify-between">
              <Skeleton className="h-[20px] w-[100px] rounded-[6px] bg-[#E7F7EF]" />
              <div className="space-y-2">
                <Skeleton className="h-[28px] w-full" />
                <Skeleton className="h-[28px] w-5/6" />
                <div className="flex justify-between mt-[12px]">
                  <Skeleton className="h-[16px] w-[100px]" />
                  <Skeleton className="h-[16px] w-[80px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block col-span-1">
          <div className="relative rounded-[10px] overflow-hidden aspect-[384/303] bg-muted">
            <div className="absolute inset-0 p-[24px] flex flex-col justify-between">
              <Skeleton className="h-[20px] w-[100px] rounded-[6px] bg-[#E7F7EF]" />
              <div className="space-y-2">
                <Skeleton className="h-[28px] w-full" />
                <Skeleton className="h-[28px] w-5/6" />
                <div className="flex justify-between mt-[12px]">
                  <Skeleton className="h-[16px] w-[100px]" />
                  <Skeleton className="h-[16px] w-[80px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop grid for remaining items */}
      <div className="hidden lg:grid grid-cols-3 gap-[24px] mt-[24px]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative rounded-[10px] overflow-hidden aspect-[384/303] bg-muted">
            <div className="absolute inset-0 p-[24px] flex flex-col justify-between">
              <Skeleton className="h-[20px] w-[100px] rounded-[6px] bg-[#E7F7EF]" />
              <div className="space-y-2">
                <Skeleton className="h-[28px] w-full" />
                <Skeleton className="h-[28px] w-5/6" />
                <div className="flex justify-between mt-[12px]">
                  <Skeleton className="h-[16px] w-[100px]" />
                  <Skeleton className="h-[16px] w-[80px]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile slider skeleton */}
      <div className="lg:hidden mt-[24px]">
        <div className="flex gap-[16px] overflow-x-auto pb-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-w-[280px] max-w-[320px] relative rounded-[10px] overflow-hidden aspect-[384/303] bg-muted">
              <div className="absolute inset-0 p-[24px] flex flex-col justify-between">
                <Skeleton className="h-[20px] w-[100px] rounded-[6px] bg-[#E7F7EF]" />
                <div className="space-y-2">
                  <Skeleton className="h-[28px] w-full" />
                  <Skeleton className="h-[28px] w-5/6" />
                  <div className="flex justify-between mt-[12px]">
                    <Skeleton className="h-[16px] w-[100px]" />
                    <Skeleton className="h-[16px] w-[80px]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBlogSkeleton;