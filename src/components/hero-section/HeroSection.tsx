import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import CtaBtn from '@/components/buttons/CtaBtn';
import VerticalSwiper from '@/components/swiper/VericalSwiper';
import Circle from '@/components/ui/Circle';
import classes from '@/components/hero-section/HeroSection.module.scss';
import classNames from 'classnames';

export default function HeroSection() {
  const navigate = useNavigate();

  const heroHeadingsContainerRef = useRef(null);
  const ctaBtnRef = useRef(null);

  function goToProductDetails() {
    navigate('/shop');
  }

  const q = gsap.utils.selector(heroHeadingsContainerRef);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(q('.text'), {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
    tl.from(ctaBtnRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <>
      <div className={classes.heroCta} ref={heroHeadingsContainerRef}>
        <h1 className={classNames(classes.heroHeading, 'text')}>
          It's not just a shop
        </h1>
        <h2 className={classNames(classes.heroSubHeading, 'text')}>
          It's <span className={classes.headingSpan}>Drip Shop</span>
        </h2>
        <p className={classNames(classes.heroParagraph, 'text')}>
          Through our collections, we blur the boundaries between fashion and
          best performance. Our lives are constantly changing. Becoming more and
          more versatile. And Shop Drip designs with this in mind.
        </p>
        <CtaBtn
          type={'hero-cta'}
          color={'green'}
          ref={ctaBtnRef}
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
