import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import WomanImg from '@/assets/woman.png';
import GreenWomanImg from '@/assets/green-woman.png';
import GreenManImg from '@/assets/green-man.png';

import SwiperContent from '@/components/swiper/SwiperContent';

import '@/components/swiper/VerticalSwiper.scss';

import { Pagination } from 'swiper';

export default function VerticalSwiper() {
  const content = [
    { img: GreenWomanImg },
    { img: WomanImg },
    { img: GreenManImg },
  ];
  return (
    <div className="swiper-container">
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {content.map((item) => (
          <SwiperSlide>
            <SwiperContent key={item.img} img={item.img} />
          </SwiperSlide>
        ))}

        {/*   <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>  */}
      </Swiper>
    </div>
  );
}
