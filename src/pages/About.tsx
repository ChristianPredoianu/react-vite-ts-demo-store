import classes from '@/pages/About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faHandshake,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import ClothesImg from '@/assets/clothes.jpg';
import ClothesImg2 from '@/assets/products.jpg';
import GirlFieldsImg from '@/assets/girl-fields.jpg';
import classNames from 'classnames';

export default function About() {
  return (
    <>
      <div className="container">
        <main className={classes.main}>
          <div className={classNames(classes.gridCard, classes.gridCard1)}>
            <FontAwesomeIcon icon={faCamera} className={classes.gridCardIcon} />
            <h2 className={classes.gridCardHeading}>Our mission</h2>
            <p className={classes.gridCardParagraph}>
              Interactively procrastinate high-payoff products without
              backward-compatible data. Quickly cultivate optimal processes and
              tactical architectures.
            </p>
          </div>
          <div className={classNames(classes.gridCard, classes.gridCard2)}>
            <img src={ClothesImg} alt="clothes" />
          </div>
          <div className={classNames(classes.gridCard, classes.gridCard3)}>
            <FontAwesomeIcon icon={faPerson} className={classes.gridCardIcon} />
            <h2 className={classes.gridCardHeading}>Our Services</h2>
            <p className={classes.gridCardParagraph}>
              We offer high quality products to fit your daily needs. Our
              shipping is one of the fastest shipping in the country.
            </p>
          </div>
          <div className={classNames(classes.gridCard, classes.gridCard4)}>
            <img src={ClothesImg2} alt="clothes" />
          </div>
          <div className={classNames(classes.gridCard, classes.gridCard5)}>
            <FontAwesomeIcon
              icon={faHandshake}
              className={classes.gridCardIcon}
            />
            <h2 className={classes.gridCardHeading}>About Shop drip</h2>
            <p className={classes.gridCardParagraph}>
              Shop drip was founded by two friends, John and Doe, in 1990 in
              east Los Angeles. John and Doe had a vision to offer only the best
              products and services to their customers. The shop is still
              offering the best quality as of today. Nullam eu erat bibendum,
              tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus
              tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam.
              Donec condimentum euismod tortor, eget facilisis diam faucibus et.
              Morbi a tempor elit. Donec gravida lorem elit, quis condimentum ex
              semper sit amet. Fusce eget ligula magna. Aliquam aliquam
              imperdiet sodales. Ut fringilla turpis in vehicula vehicula.
              Pellentesque congue ac orci ut gravida. Aliquam erat volutpat.
            </p>
          </div>
          <div className={classNames(classes.gridCard, classes.gridCard6)}>
            <img src={GirlFieldsImg} alt="clothes" />
          </div>
        </main>
      </div>
    </>
  );
}
