'use client';

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopBlogItem from "./TopBlogItem";

interface TopBlogSwiperProps {
  blogItems: Blog[]
}

export const TopBlogSwiper: React.FC<TopBlogSwiperProps> = ({ blogItems }) => {
  return (
    <div className="lg:hidden mt-[24px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
      >
        {blogItems && blogItems.map(item => (
          <SwiperSlide key={item.id}>
            <TopBlogItem item={item} isFirstItem={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopBlogSwiper;