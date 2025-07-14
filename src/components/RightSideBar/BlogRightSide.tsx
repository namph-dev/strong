import Categories from "./Categories";
import MostViewedBlog from "./MostViewedBlog";
import SignUpBlock from "./SignUpBlock";

interface BlogRightSideProp {
  categoriesItems: Category[] | undefined;
}

const BlogRightSide: React.FC<BlogRightSideProp> = ({ categoriesItems}) => {
  return (
    <>
      <Categories categoriesItems={categoriesItems} />
      <MostViewedBlog />
      <SignUpBlock />
    </>
  )
}

export default BlogRightSide;