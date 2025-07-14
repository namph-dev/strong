import RightArrow from "@/components/icon/RightArrow";
import Link from "next/link";
import CategoryTitle from "../CategoryTitle";
import { getTranslations } from "next-intl/server";

interface CategoriesProp {
  categoriesItems: Category[] | undefined;
}

const Categories: React.FC<CategoriesProp> = async ({ categoriesItems }) => {
  const t = await getTranslations('blog');
  const categoryTitle = t('category_title');

  return (
    <>
      <CategoryTitle title={categoryTitle} />

      {categoriesItems && (
        <ul className="text-[#111827] !p-0 lg:!pb-[24px]">
          {categoriesItems.map((cat, index) => (
            <li key={index} className="pl-[5px] list-none hover:text-[#EF4444] font-normal text-[16px] leading-[24px] pb-[12px] border-b-1 border-[#E9EAEC] mt-[8px] first:mt-0">
              <Link href={`/blogs/${cat.slug}`}>
                <div className="flex items-center gap-[8px]">
                  <RightArrow />
                  <span className="hover:underline">{cat.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Categories;