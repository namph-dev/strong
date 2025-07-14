import heartTickIcon from '@/assets/Product/Icon/MainFunctionIcon/heart-tick.svg';
import Image from 'next/image';

export default function UpgradeNotice() {
    return (
        <div className="bg-[#E7F7EF] border border-green-600 rounded-lg p-4 mb-4 flex items-start gap-4">
            <div className="text-green-600 mt-1">
                <Image src={heartTickIcon} alt="heart tick icon" width={20} height={20} />
            </div>
            <div className="flex-1">
                <div className="font-bold text-[#0CAF60] mb-1">We offer an attractive combo package.</div>
                <div className="text-[#0CAF60] text-sm">
                    We offer an attractive combo package that lets you list <b>10 products for just $10</b> (only $1 per product).
                    You&apos;ll also have the exclusive opportunity to <b>write blog posts promoting your products</b> by sharing insights on treatments, nutrition, and researched ingredients.
                </div>
            </div>
            <button className="bg-[#0CAF60] font-medium text-base text-white px-4 py-2 rounded-md hover:bg-green-700 self-center">
                Upgrade plan
            </button>
        </div>
    );
}
