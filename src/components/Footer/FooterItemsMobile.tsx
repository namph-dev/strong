'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface FooterSectionProps {
  labels: Record<string, string>;
}

const FooterAboutUs = ({ labels }: FooterSectionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex gap-[6px] items-center cursor-pointer"
      >
        <h3 className="text-[16px] font-bold">{labels["about_us"]}</h3>
        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </div>

      <ul
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
          space-y-2
        `}
      >
        <li>
          <Link href="/about">{labels["contact_us"]}</Link>
        </li>
        <li>
          <Link href="/pricing">{labels["pricing"]}</Link>
        </li>
        <li>
          <Link href="/blogs">{labels["blogs"]}</Link>
        </li>
        <li>
          <Link href="/help_center">{labels["help_center"]}</Link>
        </li>
        <li>
          <Link href="/our_founder">{labels["our_founder"]}</Link>
        </li>
        <li>
          <Link href="/brand_stories">{labels["brand_stories"]}</Link>
        </li>
        <li>
          <Link href="/referral_program">{labels["referral_program"]}</Link>
        </li>
      </ul>
    </div>
  );
};


const FooterUserBuyer = ({ labels }: FooterSectionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex gap-[6px] items-center cursor-pointer"
      >
        <h3 className="text-[16px] font-bold">{labels["for_user_buyer"]}</h3>
        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </div>

      <ul
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
          space-y-2
        `}
      >
        <li><Link href="/my_dashboard_message">{labels['my_dashboard_message']}</Link></li>
        <li><Link href="/post_a_request">{labels['post_a_request']}</Link></li>
        <li><Link href="/help_center">{labels['find_your_expert']}</Link></li>
      </ul>
    </div>
  )
};

const FooterForSaler = ({ labels }: FooterSectionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex gap-[6px] items-center cursor-pointer"
      >
        <h3 className="text-[16px] font-bold">{labels["for_seller"]}</h3>
        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </div>

      <ul
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
          space-y-2
        `}
      >
        <li><Link href="/become_an_online_expert">{labels['become_an_online_expert']}</Link></li>
        <li><Link href="/create_your_service">{labels['create_your_service']}</Link></li>
        <li><Link href="/landing/create-shop">{labels['create_your_shop']}</Link></li>
        <li><Link href="/create_your_blog">{labels['create_your_blog']}</Link></li>
      </ul>
    </div>
  )
};

const FooterForPublisher = ({ labels }: FooterSectionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex gap-[6px] items-center cursor-pointer"
      >
        <h3 className="text-[16px] font-bold">{labels["for_publisher"]}</h3>
        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </div>

      <ul
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
          space-y-2
        `}
      >
        <li><Link href="/refer_a_friend">{labels['refer_a_friend']}</Link></li>
        <li><Link href="/become_a_publisher_and_earn">{labels['become_a_publisher_and_earn']}</Link></li>
        <li><Link href="/learn_and_earn">{labels['learn_and_earn']}</Link></li>
        <li><Link href="/referral_management">{labels['referral_management']}</Link></li>
        <li><Link href="/convert_followers_into_revenue">{labels['convert_followers_into_revenue']}</Link></li>
      </ul>
    </div>
  )
};

const FooterForSupplier = ({ labels }: FooterSectionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex gap-[6px] items-center cursor-pointer"
      >
        <h3 className="text-[16px] font-bold">{labels["for_supplier_organization"]}</h3>
        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </div>

      <ul
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
          space-y-2
        `}
      >
      <li><Link href="/strongbody_collection">{labels['strongbody_collection']}</Link></li>
      <li><Link href="/become_a_supplier">{labels['become_a_supplier']}</Link></li>
      {/* <li><Link href="/create_organization_for_hospital">{labels['create_organization_for_hospital']}</Link></li> */}
    </ul>
  </div>
)};

export {
  FooterAboutUs,
  FooterUserBuyer,
  FooterForSaler,
  FooterForPublisher,
  FooterForSupplier
};
