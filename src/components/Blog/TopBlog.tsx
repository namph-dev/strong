import { getLimitPost } from "@/api/blogs";
import TopBlogItem from "./TopBlogItem";
import TopBlogSwiper from "./TopBlogSwiper";

const TopBlog = async () => {
  let blogs = await getLimitPost(5);
  if (!blogs || blogs.length === 0) return null;

  const [firstItem, ...blogItems] = blogs;

  return (
    <div className="mt-[24px] mb-[40px]">
      {firstItem && (
        <div className="grid lg:grid-cols-3 gap-[24px]">
          <div className="col-span-2">
            <TopBlogItem item={firstItem} isFirstItem={true} />
          </div>
          {/* Desktop grid */}
          {blogItems && blogItems.length > 0 && blogItems.map((item: Blog) => (
            <div className="hidden lg:block col-span-1" key={item.id}>
              <TopBlogItem item={item} isFirstItem={false} />
            </div>
          ))}
        </div>
      )}
      {/* Mobile slider */}
      {blogItems && blogItems.length > 0 && <TopBlogSwiper blogItems={blogItems} />}
    </div>
  );
};

export default TopBlog;