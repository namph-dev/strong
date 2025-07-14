interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <h1 className="font-bold text-[24px] md:text-[28px] leading-[36px] lg:leading-[42px] text-[#111827]">
      {title}
    </h1>
  );
}

export default PageTitle;