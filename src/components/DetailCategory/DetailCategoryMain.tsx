import { getPostByCategorySlug } from "@/api/blogs";
import DetailCategoryBlogItems from "./DetailCategoryBlogItems";

interface DetailCategoryMainProp {
  blogItems: Blog[];
}

const DetailCategoryMain: React.FC<DetailCategoryMainProp> = async ({ blogItems }) => {
  return (
    <>
      <div className="mt-[24px] md:mt-[16px] flex flex-col gap-[32px] lg:gap-[24px] lg:col-span-2 mb-[16px] lg:mb-[24px]">
        {blogItems.length > 0 &&
          blogItems.map((item: Blog) => (
            <DetailCategoryBlogItems key={item.id} item={item} />
          ))
        }
      </div>
    </>
  );
};

export default DetailCategoryMain;