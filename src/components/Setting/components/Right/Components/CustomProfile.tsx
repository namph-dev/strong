"use client";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { updateBuyerProfile } from "@/api/user";
import { useSession } from "next-auth/react";
import { getListCountries } from "@/api/country";

interface Country {
  id: number;
  title: string;
}

export function CustomProfileForm({ user }: { user: any }) {
  const { update } = useSession();
  const [username, setUsername] = useState(`${user.first_name} ${user.last_name}`);
  const [countryId, setCountryId] = useState<number>(user.country_id || 0);
  const [listCountries, setListCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = listCountries?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = async () => {
    try {
      if (!user?.id) throw new Error("User ID is missing");

      await updateBuyerProfile(username, user.accessToken, countryId);

      await update({
        ...user,
        first_name: username,
        country_id: countryId,
        updated_at: Date.now(),
      });

      alert("Cập nhật thành công");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchListCountry = async () => {
      if (!user?.accessToken) return;

      try {
        const res = await getListCountries(user.accessToken);
        setListCountries(res.data);
      } catch (err) {
        console.error("Lỗi khi fetch quốc gia:", err);
      }
    };

    fetchListCountry();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">General</h2>

      <div className="relative w-full">
        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 z-10">
          Public Name
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-xl border border-gray-400 px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>

      <div className="relative w-full">
        <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 z-10">
          Country
        </label>
        <Select
          value={countryId ? countryId.toString() : undefined}
          onValueChange={(val) => setCountryId(parseInt(val))}
        >
          <SelectTrigger className="w-full rounded-xl border border-gray-400 px-4 py-[24px] text-base text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-500">
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>

          <SelectContent className="max-h-[250px] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-2 py-1 border rounded-md text-sm"
              />
            </div>

            {filteredCountries?.length > 0 ? (
              filteredCountries.map((item) => (
                <SelectItem key={item.id} value={item.id.toString()}>
                  {item.title}
                </SelectItem>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">No results</div>
            )}
          </SelectContent>
        </Select>
      </div>

      <div className="flex">
        <button
          onClick={handleSave}
          className="ml-auto bg-black text-white px-6 py-3 rounded-xl hover:opacity-70 transition cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}