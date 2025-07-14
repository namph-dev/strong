import { dateFormatter, removeBBCode } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
const { convert } = require('html-to-text');

interface CategoryBlogItem {
  item: Blog;
}

const CategoryBlogItem: React.FC<CategoryBlogItem> = async ({ item }) => {
  const html = item.excerpt || item.content || '';

  const cleanHtml = removeBBCode(html);

  const excerpt = convert(cleanHtml, {
    wordwrap: false,
    selectors: [
      {
        selector: 'h1',
        format: 'inline'
      },
      {
        selector: 'h2',
        format: 'inline'
      },
      {
        selector: 'h3',
        format: 'inline'
      }
    ]
  }).slice(0, 200)

  return (
    <div>
      <Link href={`/blogs/${item.category_slug}/${item.slug.toLowerCase()}`}>
        <div className="relative overflow-hidden aspect-[588/420] cursor-pointer">
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
      </Link>

      <div className="flex gap-[12px] mt-[4px] items-center">
        <p className="flex items-center font-medium text-[16px] leading-[24px] text-[#111827]">
          <span className="text-normal text-[14px] leading-[20px] text-[#111827] pr-[4px]">By</span>
          <Link
            href={`/author/${item.author_id}`}
            className="hover:underline"
          >
            {item.author_name}
          </Link>
        </p>

        <p className="font-normal text-[14px] leading-[20px] text-[#111827] opacity-50">{dateFormatter(item.created_at)}</p>
      </div>

      <Link href={`/blogs/${item.category_slug}/${item.slug.toLowerCase()}`}>
        <p className="font-normal text-[16px] leading-[24px] mt-[8px] line-clamp-2 overflow-ellipsis text-[#687588]">{excerpt}</p>
      </Link>

      <Link
        href={`/blogs/${item.category_slug}`}
        className="hover:underline"
      >
        <p className="font-bold text-[12px] leading-[16px] text-[#0CAF60] bg-[#E7F7EF] rounded-[6px] py-[6px] px-[16px] w-fit mt-[12px]">{item.category_name}</p>
      </Link>
    </div>
  )
}

export default CategoryBlogItem;