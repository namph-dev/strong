import { ReactNode } from "react";
import UserProfile from "./UserProfile";
import MessageList from "./MessageList";
import MainFunctions from "./MainFunctions";
import ActionButton from "./action-button";

interface SideBarProps {
    children?: ReactNode;
    className?: string;
    showDefaultComponents?: boolean;
}

export default function SideBar({
    children,
    className = "",
    showDefaultComponents = false
}: SideBarProps) {
    return (
        <div className={`w-full lg:w-[400px] xl:w-[450px] bg-transparent overflow-hidden h-full ${className}`}>
            <div className="h-full overflow-y-auto scrollbar-hide space-y-4">
                {children ? (
                    children
                ) : showDefaultComponents ? (
                    <>
                        <UserProfile />
                        <MessageList />
                        <MainFunctions />
                        <ActionButton />
                    </>
                ) : null}
            </div>
        </div>
    );
}
