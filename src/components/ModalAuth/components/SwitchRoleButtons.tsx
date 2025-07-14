'use client'

import { Briefcase, ShoppingBag, User } from "lucide-react";

interface ButtonProp {
  setRole: (role: string) => void;
  role: string;
}

const SwitchRoleButtons: React.FC<ButtonProp> = ({ setRole, role }) => {
  return (
    <div className="relative w-full inline-flex bg-gray-100 rounded-[12px]">
      <button
        onClick={() => setRole('buyer')}
        className={`
          flex items-center text-[20px] gap-[3px] flex-1 justify-center py-[14px] rounded-[12px] transition-all
          ${role === 'buyer'
            ? 'bg-[#2083C6] font-bold text-white z-10'
            : 'bg-[#F8F8F8] font-normal text-[#687588] z-0'}
        `}
      >
        <User fontSize={24} />
        Buyer
      </button>

      <button
        onClick={() => setRole('seller')}
        className={`
          flex items-center text-[20px] gap-[3px] flex-1 justify-center py-[14px] rounded-[12px] transition-all
          ${role === 'seller'
            ? 'bg-[#2083C6] font-bold text-white z-10'
            : 'bg-[#F8F8F8] font-normal text-[#687588] z-0'}
        `}
      >
        <ShoppingBag fontSize={24}/>
        Seller
      </button>
    </div>
  )
}

export default SwitchRoleButtons;