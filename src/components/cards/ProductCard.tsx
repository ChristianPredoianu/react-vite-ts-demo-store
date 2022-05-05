import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/cards/ProductCard.module.scss';

interface productCardProps {
  product: {
    image: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
    description: string;
  };
}

export default function ProductCard({ product }: productCardProps) {
  const { image, price, rating, title, description } = product;

  const stars = useRef<HTMLDivElement>(null);

  console.log(rating);

  const starTotal = 5;

  useEffect(() => {
    const starPercentage = (rating.rate / starTotal) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    console.log(starPercentageRounded);
    if (stars.current) {
      stars.current.style.width = starPercentageRounded;
    }
  }, []);

  function increaseCountHandler() {}

  function decreaseCountHandler() {}

  return (
    <div className={classes.card}>
      <div className={classes.cardImg}>
        <img src={image} alt="product" />
      </div>
      <div className={classes.cardInfo}>
        <div className={classes.descriptionContainer}>
          <h2 className={classes.productTitle}>{title}</h2>
          <p className={classes.productDescription}>{description}</p>
          <div
            className={classes.ratingScore}
          >{`Rating: ${rating.rate} / 5`}</div>
          <div className={classes.ratingsContainer}>
            <div className={classes.ratings} ref={stars}></div>
          </div>
        </div>
        <div className={classes.cta}>
          <button className={classes.addBtn}>Add to cart</button>
          <div className={classes.inputContainer}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={decreaseCountHandler}
            />
            <input type="number" className={classes.input}></input>
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={increaseCountHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
