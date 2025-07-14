import Avatar from "./components/Avatar";
import MessageList from "./components/Mess";
import SidebarSetting from "./components/SidebarSetting";

export default function LeftProfile() {
    return (
        <div className="bg-white p-4 rounded-xl shadow space-y-4">
            {/* Phần 1: Thông tin cá nhân */}
            <div >
                <Avatar />
            </div>

            {/* Phần 2: Tin nhắn */}
            <div className=" border-b border-gray-300">
                <MessageList />
            </div>

            {/* Phần 3: Nút Settings */}
            <div>
                <SidebarSetting />
            </div>
        </div>
    );
}
