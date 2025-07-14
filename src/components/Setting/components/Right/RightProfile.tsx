"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CustomProfileForm } from "./Components/CustomProfile";
import { ProfileNotice } from "./Components/ProfileNotice";
import AddressTab from "./Components/AddressTab";
import PaymentMethods from "./Components/PaymentMethods";
import NotificationSettings from "./Components/Notification";
import PasswordStepForm from "./Components/ChangePassword";
import AccountDeletion from "./Components/DeleteAccount";

export default function RightProfile({ user }: { user: any }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-4">
      <Tabs defaultValue="general" className="w-full">
        {/* Tab menu */}
        <TabsList className=" flex w-full justify-start gap-6 ">
          {[
            { value: "general", label: "General" },
            { value: "address", label: "Address" },
            { value: "card", label: "Credit / Debit Card" },
            { value: "notification", label: "Notification Setting" },
            { value: "password", label: "Change Password" },
            { value: "delete", label: "Delete account" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="cursor-pointer relative rounded-none px-1 pb-3 text-base font-medium text-gray-900 bg-transparent shadow-none data-[state=active]:text-red-600 data-[state=active]:font-semibold"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Nội dung từng tab */}
        <TabsContent value="general" className="py-6 space-y-4">
          <ProfileNotice />

          <CustomProfileForm user={user} />
        </TabsContent>

        <TabsContent value="address" className="py-6">
          <ProfileNotice />

          <AddressTab user={user} />
        </TabsContent>

        <TabsContent value="card" className="py-6">
          <ProfileNotice />

          <PaymentMethods user={user} />
        </TabsContent>

        <TabsContent value="notification" className="py-6">
          <ProfileNotice />

          <NotificationSettings />
        </TabsContent>

        <TabsContent value="password" className="py-6">
          <ProfileNotice />

          <PasswordStepForm user={user} />
        </TabsContent>

        <TabsContent value="delete" className="py-6 text-red-600">
          <ProfileNotice />

          <AccountDeletion />
        </TabsContent>
      </Tabs>
    </div>
  );
}