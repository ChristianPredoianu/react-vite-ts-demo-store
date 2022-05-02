import classes from '@/components/swiper/SwiperContent.module.scss';

interface swiperContentProps {
  img: string;
}

export default function SwiperContent({ img }: swiperContentProps) {
  return (
    <div className="">
      <img src={img} alt="" />
    </div>
  );
}
