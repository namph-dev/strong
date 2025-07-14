import { getServerSession } from "next-auth";
import LeftProfile from "./components/Left/LeftProfile";
import RightProfile from "./components/Right/RightProfile";
import { authOptions } from "@/util/authOptions";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-7 gap-6">
      <div className="col-span-2">
        <LeftProfile />
      </div>
      {session?.user && <div className="col-span-5">
        <RightProfile user={session?.user} />
      </div>}
    </div>
  );
}