import React from 'react';
import Image from 'next/image';
import NotFound from '@/assets/images/backgrounds/not-found-404.png';

const Page404 = () => (
  <div className="relative inset-0 pt-32 pb-10 bg-white z-100 nc-Page404">
    <div className="mx-auto">
      <div className="flex flex-col items-center justify-center gap-5 md:items-end md:flex-row">
        <Image
          width={200}
          height={68}
          src={NotFound.src}
          alt="logo"
          className="object-cover p-2 rounded-lg"
        />
        <div className="">
          <div className="mb-3 text-2xl font-bold">Oops...</div>
          <div>We can't find that page.</div>
          <div>Let's get you back on the right track.</div>
          <div>Try another search, or click below.</div>
          <div className="pt-8">
            <a href="/" className="px-5 py-3 text-white rounded-lg bg-primary">
              Return Home Page
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page404;
