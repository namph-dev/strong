import { dateFormatter } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface MostViewedBlogItemProp {
  item: Blog;
  isFirstItem: Boolean;
}

const MostViewedBlogItem: React.FC<MostViewedBlogItemProp> = ({ item, isFirstItem }) => {
  return (
    <Link href={`/blogs/${item.category_slug}/${item.slug.toLowerCase()}`}>
      {isFirstItem ? (
        <div className="pb-[16px] border-b border-[#E9EAEC] mt-[24px]">
          {item.image && item.image.length > 0 && (
            <div className="relative aspect-[384/260] rounded-[10px] overflow-hidden">
              <Image
                src={item.image[0]}
                alt={item.title}
                fill
                quality={100}
                className="rounded-[10px] object-cover"
              />
            </div>
          )}

          <h3 className="hover:text-[#EF4444] hover:underline mt-[16px] font-bold text-[18px] leading-[32px] text-[#111827] line-clamp-2 overflow-ellipsis">
            {item.title}
          </h3>

          <p className="font-normal text-[14px] leading-[20px] text-[#111827] opacity-50">
            {dateFormatter(item.created_at)}
          </p>
        </div>
      ) : (
        <div className="flex items-center gap-[12px] py-[16px] border-b border-[#E9EAEC] last:border-0">
          {item.image && item.image.length > 0 && (
            <div className="relative w-[124px] aspect-[124/85] shrink-0 rounded-[10px] overflow-hidden">
              <Image
                src={item.image[0]}
                alt={item.title}
                fill
                quality={100}
                className="object-cover"
              />
            </div>
          )}

          <div className="flex-1">
            <h4 className="hover:text-[#EF4444] hover:underline font-semibold text-[16px] leading-[24px] text-[#111827] line-clamp-2">
              {item.title}
            </h4>

            <p className="mt-[8px] font-normal text-[12px] leading-[16px] text-[#111827] opacity-50">
              {dateFormatter(item.created_at)}
            </p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default MostViewedBlogItem;