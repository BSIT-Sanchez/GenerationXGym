
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const AutoScroll = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper h-[340px]"
      >
        <SwiperSlide>
          <h1 className='font-bold text-center text-bgButton pb-1'>Step 1</h1>
          <img src="https://res.cloudinary.com/dn60f1sgi/image/upload/v1715387565/fitness/Barbell/legs/half-squat_yjoovt.jpg" className=''/>
        </SwiperSlide>
        <SwiperSlide>
        <h1 className='font-bold text-center text-bgButton pb-1'>Step 2</h1>
          <img src="https://res.cloudinary.com/dn60f1sgi/image/upload/v1715386890/fitness/Barbell/legs/hip-thrust_rlr4gq.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <h1 className='font-bold text-center text-bgButton pb-1'>Step 3</h1> 
          <img src="https://res.cloudinary.com/dn60f1sgi/image/upload/v1715386652/fitness/Barbell/legs/box-squat_y9r5ob.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <h1 className='font-bold text-center text-bgButton pb-1'>Step 4</h1>
          <img src="https://res.cloudinary.com/dn60f1sgi/image/upload/v1715385753/fitness/Barbell/legs/squat_kxxwf4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <h1 className='font-bold text-center text-bgButton pb-1'>Step  5</h1>
          <img src="https://res.cloudinary.com/dn60f1sgi/image/upload/v1715873977/fitness/Barbell/legs/push-press_r1hkeu.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <h1 className='font-bold text-center text-bgButton pb-1'>Step 6</h1>
          <img src="https://res.cloudinary.com/dn60f1sgi/image/upload/v1715874497/fitness/Barbell/legs/lying-tricep-extension.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <h1 className='font-bold text-center text-bgButton pb-1'>Step 7</h1>
          <img src="https://res.cloudinary.com/dn60f1sgi/image/upload/v1715874328/fitness/Barbell/legs/tricep-extension.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <h1 className='font-bold text-center text-bgButton pb-1'>Step 8</h1>
          <img src="https://res.cloudinary.com/dn60f1sgi/image/upload/v1715874147/fitness/Barbell/legs/z-press_qdywig.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <h1 className='font-bold text-center text-bgButton pb-1'>Step 9</h1>
          <img src="https://res.cloudinary.com/dn60f1sgi/image/upload/v1715873860/fitness/Barbell/legs/shoulder-press_nhhfkd.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default AutoScroll