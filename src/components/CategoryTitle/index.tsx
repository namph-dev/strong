import Link from "next/link";

interface CategoryTitle {
  title: string;
  slug?: string;
}

const CategoryTitle: React.FC<CategoryTitle> = ({ title, slug }) => {
  let href = null;
  if (slug) href = `/blogs/${slug}`;

  return (
    <div className="border-b border-[#E9EAEC] mb-[24px]">
      {!href ? (
        <h2
          className="relative font-bold text-[20px] leading-[30px] text-[#111827] pb-[12px] pr-5 border-b-2 border-[#DA1F27] w-fit"
        >
          {title}
        </h2>
      ) : (
        <Link href={href} className="inline-block">
          <h2
            className="
            relative
            font-bold text-[20px] leading-[30px] text-[#111827]
            pb-[12px] pr-5 border-b-2 border-[#DA1F27] w-fit
            transition-all duration-300 ease-in-out
          hover:text-[#DA1F27] hover:-translate-y-[2px]
          "
          >
            {title}
          </h2>
        </Link>
      )}
    </div>
  );
};

export default CategoryTitle;