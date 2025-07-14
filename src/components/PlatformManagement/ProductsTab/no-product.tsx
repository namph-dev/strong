import Image from 'next/image';
import { useTranslations } from "next-intl";

export default function NoProduct() {
    const t = useTranslations("management.products.no_product");

    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <div className="mb-6">
                <Image
                    src={require('@/assets/Product/Image/lion.svg')}
                    alt="Lion mascot"
                    width={148}
                    height={297}
                    className="mx-auto"
                />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {t("title")}
            </h2>
            <p className="max-w-xl text-sm font-medium md:text-lg text-gray-900 mb-8 ">
                {t("description")}
            </p>
            <button
                type="button"
                className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-8 py-3 text-base md:text-lg transition-colors"
            >
                {t("add_new_product")}
            </button>
        </div>
    );
}
