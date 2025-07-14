import { dateFormatter } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface DetailBlogSwiperItemProps {
  item: Blog;
}

const DetailBlogSwiperItem: React.FC<DetailBlogSwiperItemProps> = ({ item }) => {
  return (
    <Link href={`/blogs/${item.category_slug}/${item.slug.toLowerCase()}`}>
      <div className="relative overflow-hidden aspect-[384/260]">
        {item.image && item.image.length > 0 &&
          <Image
            src={item.image[0]}
            alt={item.image_alt}
            fill
            quality={100}
            className="rounded-[10px] object-cover"
          />
        }
      </div>
      <h3 className="hover:text-[#EF4444] hover:underline font-bold text-[18px] leading-[32px] text-[#111827] mt-[16px] overflow-ellipsis line-clamp-2">
        {item.title}
      </h3>

      <p className="font-normal text-[16px] leading-[24px] mt-[8px] line-clamp-2 overflow-ellipsis text-[#687588]">{dateFormatter(item.created_at)}</p>
    </Link>
  );
}

export default DetailBlogSwiperItem;