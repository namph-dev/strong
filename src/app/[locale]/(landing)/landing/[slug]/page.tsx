import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { landingPagesData } from '@/data/landingPages';
import CreateCourseTemplate from '@/components/landing/templates/CreateCourseTemplate';
import CreateShopTemplate from '@/components/landing/templates/CreateShopTemplate';
import RecruitmentTemplate from '@/components/landing/templates/RecruitmentTemplate';
import LionRoseTemplate from '@/components/landing/templates/LionRoseTemplate';

interface PageProps {
    params: Promise<{
        slug: string;
        locale: string;
    }>;
}

// Generate static params for all landing pages
export async function generateStaticParams() {
    return Object.keys(landingPagesData).map((slug) => ({
        slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const landingPage = landingPagesData[resolvedParams.slug];

    if (!landingPage) {
        return { title: 'Page Not Found' };
    }

    return {
        title: landingPage.seo.title,
        description: landingPage.seo.description,
        keywords: landingPage.seo.keywords,
        openGraph: {
            title: landingPage.seo.title,
            description: landingPage.seo.description,
            images: [landingPage.seo.ogImage],
        },
    };
}

export default async function LandingPage({ params }: PageProps) {
    const resolvedParams = await params;
    const landingPage = landingPagesData[resolvedParams.slug];

    if (!landingPage) {
        notFound();
    }

    // Render template dựa trên template field
    switch (landingPage.template) {
        case 'create-course':
            return <CreateCourseTemplate data={landingPage} />;
        case 'create-shop':
            return <CreateShopTemplate data={landingPage} />;
        case 'recruitment':
            return <RecruitmentTemplate data={landingPage} />;
        case 'lion-rose':
            return <LionRoseTemplate data={landingPage} />;
        default:
            return <div>Template not found</div>;
    }
} 