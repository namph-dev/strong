import { Skeleton } from "@/components/ui/skeleton";

interface BreadcrumbMapSkeletonProps {
  length: number;
}

const BreadcrumbMapSkeleton: React.FC<BreadcrumbMapSkeletonProps> = ({ length }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-4 mt-22 md:mt-0 lg:mt-[15px] lg:mb-[20px]">
      <div className="flex items-center gap-2">
        {Array.from({ length }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <Skeleton className={`h-5 w-${20 + i * 4} rounded bg-[#E9EAEC]`} />
            {i < length - 1 && <span className="text-[#E9EAEC]">/</span>}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default BreadcrumbMapSkeleton;