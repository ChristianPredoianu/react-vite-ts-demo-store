import VerticalSwiper from '@/components/swiper/VericalSwiper';
import BlobSvg from '@/assets/blob.svg';
import classes from '@/pages/Home.module.scss';
import classNames from 'classnames';

export default function Home() {
  return (
    <>
      <main className={classNames('container', classes.main)}>
        <div className={classes.heroCta}>
          <h1 className={classes.heroHeading}>It's not just a shop</h1>
          <h2 className={classes.heroSubHeading}>
            It's <span className={classes.headingSpan}>Drip Shop</span>
          </h2>
          <p className={classes.heroParagraph}>
            Through our collections, we blur the boundaries between fashion and
            best performance. Our lives are constantly changing. Becoming more
            and more versatile. And Shop Drip designs with this in mind.
          </p>
          <button className={classes.ctaBtn}>Shop</button>
        </div>
        <VerticalSwiper />
      </main>

      <div className={classes.circle}></div>
    </>
  );
}
