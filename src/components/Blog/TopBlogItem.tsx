import { dateFormatter } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link";

interface TopBlogItemProp {
  item: Blog;
  isFirstItem: boolean;
}

const TopBlogItem: React.FC<TopBlogItemProp> = ({ item, isFirstItem }) => {
  return (
    <div
      key={item.id}
      className={`relative rounded-[10px] overflow-hidden aspect-[384/303] ${isFirstItem ? 'lg:aspect-[792/303]' : 'aspect-[384/303]'} cursor-pointer`}
    >
      <Link href={`/blogs/${item.category_slug}/${item.slug.toLowerCase()}`}>
        {item.image && item.image.length > 0 &&
          <Image
            src={item.image[0]}
            alt={item.title}
            fill
            quality={100}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        }
      </Link>

      <div className="absolute inset-0 p-[24px] flex flex-col justify-between overflow-hidden bg-[linear-gradient(180deg,_rgba(24,59,86,0)_0%,_rgba(31,44,67,0.8)_100%)] transition-all duration-500">
        <Link
          href={`/blogs/${item.category_slug}`}
          className="hover:underline"
        >
          <p className="hover:underline text-[#0CAF60] font-bold text-[12px] leading-[16px] tracking-[0.2px] py-[6px] px-[16px] bg-[#E7F7EF] rounded-[6px] w-fit">
            {item.category_name}
          </p>
        </Link>

        <div>
          <Link href={`/blogs/${item.category_slug}/${item.slug.toLowerCase()}`}>
            <h3 className="hover:underline font-bold text-[18px] lg:text-[24px] leading-[28px] lg:leading-[36px] text-[#FFFFFF] line-clamp-2 transform transition-transform duration-500 group-hover:-translate-y-[4px]">
              {item.title}
            </h3>
          </Link>

          <div className="flex justify-between items-center mt-[12px]">
            <p className="text-[#FFFFFF] font-semibold text-[14px] lg:text-[16px] leading-[24px] flex items-center">
              <span className="text-[#C6C6C6] font-normal text-[12px] lg:text-[14px] leading-[20px] pr-[4px]">By</span>
              <Link
                href={`/author/${item.author_id}`}
                className="hover:underline"
              >
                {item.author_name}
              </Link>
            </p>

            <p className="text-[#C6C6C6] font-normal text-[12px] lg:text-[14px] leading-[20px]">
              {dateFormatter(item.created_at)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBlogItem;