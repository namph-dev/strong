import SideBar from "@/components/PlatformManagement/SideBar";
import NextIntlProvider from "@/components/providers/NextIntlProvider";
import { ManagementProvider } from "@/components/PlatformManagement/context/ManagementContext";

export default function ManagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <NextIntlProvider>
            <ManagementProvider>
                <div className="min-h-screen bg-[#FAFAFA]">
                    <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
                        <div className="flex flex-col lg:flex-row lg:gap-2 xl:gap-3 py-3 lg:py-4 h-screen">
                            {/* Sidebar */}
                            <SideBar />

                            {/* Main Content */}
                            <div className="flex-1 bg-white overflow-hidden h-full">
                                <div className="h-full overflow-y-auto scrollbar-hide">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ManagementProvider>
        </NextIntlProvider>
    );
}
