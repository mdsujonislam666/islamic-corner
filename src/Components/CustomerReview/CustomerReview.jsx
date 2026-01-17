import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import ReviewCard from './ReviewCard';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ChooseUs = () => {
  return (
    <>
            <div>
                <div className='py-10 space-y-5'>
                    <h2 className='text-5xl font-bold text-center'>Customer <span className='text-red-600'>Reviews</span></h2>
                    <p className='text-center font-bold text-2xl'>Every customer review tells a story of trust, value, and the impact of choosing the right service.</p>
                </div>
            </div>
      <Swiper
        loop={true}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper my-10"
      >
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default ChooseUs;
