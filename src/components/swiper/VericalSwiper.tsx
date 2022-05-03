import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import WomanImg from '@/assets/woman.png';
import GreenWomanImg from '@/assets/green-woman.png';
import GreenManImg from '@/assets/green-man.png';

import SwiperContent from '@/components/swiper/SwiperContent';

import '@/components/swiper/VerticalSwiper.scss';

import { Autoplay, Pagination } from 'swiper';

export default function VerticalSwiper() {
  const content = [
    { id: 1, img: GreenWomanImg },
    { id: 2, img: WomanImg },
    { id: 3, img: GreenManImg },
  ];
  return (
    <div className="swiper-container">
      <Swiper
        direction={'vertical'}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {content.map((item) => (
          <SwiperSlide key={item.id}>
            <SwiperContent img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
