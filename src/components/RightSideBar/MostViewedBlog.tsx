import CategoryTitle from "../CategoryTitle";
import { getLimitPost } from "@/api/blogs";
import MostViewedBlogItem from "./MostViewedBlogItem";
import { getTranslations } from "next-intl/server";

const MostViewedBlog = async () => {
  const t = await getTranslations('blog');

  const res = await getLimitPost(5);
  const [firstItem, ...blogItems] = res;

  return (
    <>
      <CategoryTitle title={t("most_viewed_title")} />
      <div className="mt-[24px]">
        {firstItem && <MostViewedBlogItem item={firstItem} isFirstItem={true} />}

        {blogItems && blogItems.map((item: Blog) => (
          <MostViewedBlogItem key={item.id} item={item} isFirstItem={false} />
        ))}
      </div>
    </>
  )
}

export default MostViewedBlog;