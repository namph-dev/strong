import Link from "next/link";

interface AuthorBlockIconProps {
  icon: React.ReactNode;
  href: string;
}

const AuthorBlockIcon: React.FC<AuthorBlockIconProps> = ({icon, href}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-[#1F2C43] cursor-pointer bg-[#F1F2F4] hover:bg-[#E9EAEC] rounded-full p-2">
      {icon}
    </Link>
  )
}

export default AuthorBlockIcon;