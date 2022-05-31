import classes from '@/components/swiper/SwiperContent.module.scss';

interface swiperContentProps {
  img: string;
}

export default function SwiperContent({ img }: swiperContentProps) {
  return (
    <div>
      <img src={img} alt="fashion people" />
    </div>
  );
}
