"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DetailBlogSwiperItem from "./DetailBlogSwiperItem";

interface DetailBlogSwiperProps {
  blogItems: Blog[];
}

const DetailBlogSwiper: React.FC<DetailBlogSwiperProps> = ({ blogItems }) => {
  if (!Array.isArray(blogItems) || blogItems.length === 0) return null;
  return (
    <div className="mt-[24px] w-full pb-[16px]">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        navigation
        loop
        allowTouchMove={false}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
        }}
      >
        {blogItems.map((item) => (
          <SwiperSlide key={item.id}>
            <DetailBlogSwiperItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DetailBlogSwiper;