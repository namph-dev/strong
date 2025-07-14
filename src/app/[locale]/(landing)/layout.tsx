// Landing pages now use the same layout as other pages (with Header/Footer)
// This layout simply passes through children to the main layout

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
} 