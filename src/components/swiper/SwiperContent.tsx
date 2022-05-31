interface SwiperContentProps {
  img: string;
}

export default function SwiperContent({ img }: SwiperContentProps) {
  return (
    <div>
      <img src={img} alt="fashion people" />
    </div>
  );
}
