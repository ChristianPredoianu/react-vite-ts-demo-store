import { useNavigate } from 'react-router-dom';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import CtaBtn from '@/components/buttons/CtaBtn';
import VerticalSwiper from '@/components/swiper/VericalSwiper';
import Circle from '@/components/ui/Circle';
import classes from '@/components/hero-section/HeroSection.module.scss';

export default function HeroSection() {
  const navigate = useNavigate();

  function goToProductDetails() {
    navigate('/shop');
  }

  return (
    <>
      <div className={classes.heroCta}>
        <h1 className={classes.heroHeading}>It's not just a shop</h1>
        <h2 className={classes.heroSubHeading}>
          It's <span className={classes.headingSpan}>Drip Shop</span>
        </h2>
        <p className={classes.heroParagraph}>
          Through our collections, we blur the boundaries between fashion and
          best performance. Our lives are constantly changing. Becoming more and
          more versatile. And Shop Drip designs with this in mind.
        </p>
        <CtaBtn
          type={'hero-cta'}
          color={'green'}
          handleClick={goToProductDetails}
        >
          Shop
        </CtaBtn>
      </div>
      <div className={classes.swiperContainer}>
        <VerticalSwiper />
      </div>
      <div className={classes.social}>
        <SocialMediaTab />
      </div>
      <Circle />
    </>
  );
}
