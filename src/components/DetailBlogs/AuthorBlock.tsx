import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import author_profile from "@/assets/images/demo/author_profile.png";

interface AuthorBlockProps {
  profile_picture: string;
  author_name: string;
  author_id: number;
  author_email: string;
}

const AuthorBlock: React.FC<AuthorBlockProps> = async ({
  profile_picture,
  author_name,
  author_id,
  author_email
}) => {
  const t = await getTranslations("blog");
  const avatarSrc = profile_picture || author_profile.src;

  return (
    <Link href={`/author/${author_id}`}>
      <section className="my-8">
        <h3 className="font-semibold text-2xl text-gray-900 mb-4">{t("author_title")}</h3>

        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-2xl shadow-sm transition w-fit">
          <Avatar className="w-[64px] h-[64px] ring-2 ring-red-400">
            <AvatarImage src={avatarSrc} alt={author_name} />
          </Avatar>

          <div>
            <h4 className="text-xl font-medium text-gray-900 hover:text-red-500 hover:underline transition">
              {author_name}
            </h4>
            <p className="text-sm text-gray-500 mt-1">{author_email}</p>
          </div>
        </div>
      </section>
    </Link>

  );
};

export default AuthorBlock;
