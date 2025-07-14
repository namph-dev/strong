import { getPostByCategoryId } from "@/api/blogs";
import CategoryTitle from "../CategoryTitle";
import CategoryBlogItem from "./CategoryBlogItem";

interface CategoryBlogListProps {
  categoryItem: Category
}

const CategoryBlogList: React.FC<CategoryBlogListProps> = async ({ categoryItem }) => {
  const res = await getPostByCategoryId(4, 1, categoryItem.id);
  const blogItems = res.list;

  return (
    <>
      {blogItems && blogItems.length > 0 &&
        <div className="mb-[24px]">
          <CategoryTitle title={categoryItem.name} slug={categoryItem.slug} />

          <div className="grid lg:grid-cols-2 gap-y-[32px] gap-x-[24px] flex-wrap">
            {blogItems.map((item: Blog) => (
              <CategoryBlogItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default CategoryBlogList;