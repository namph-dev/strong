import CategoryBlogList from "./CategoryBlogList";

interface BlogMainProps {
  categoriesItems: Category[];
}

const BlogMain: React.FC<BlogMainProps> = async ({ categoriesItems }) => {
  return (
    <>
      {categoriesItems?.map((item: Category) => (
        <CategoryBlogList key={item.id} categoryItem={item} />
      ))}
    </>
  )
}

export default BlogMain;