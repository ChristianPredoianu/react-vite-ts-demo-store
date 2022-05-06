import { ChangeEvent, useState, useRef } from 'react';
import RatingBar from '@/components/ui/RatingBar';
import ProductInputAmount from '@/components/inputs/ProductInputAmount';
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
  const [productAmount, setProductAmount] = useState(1);

  const { image, price, rating, title, description } = product;

  const ratingBarRef = useRef<HTMLDivElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '') setProductAmount(1);
    setProductAmount(+e.target.value);
  }

  function increaseCountHandler() {
    setProductAmount((prevState) => (prevState += 1));
  }

  function decreaseCountHandler() {
    if (productAmount >= 2) setProductAmount((prevState) => (prevState -= 1));
  }

  const cardImg = (
    <div className={classes.cardImg}>
      <img src={image} alt="product" />
    </div>
  );

  const productTitle = <h2 className={classes.productTitle}>{title}</h2>;

  const productDescription = (
    <p className={classes.productDescription}>{description}</p>
  );

  const productRating = (
    <div className={classes.ratingContainer}>
      <p className={classes.rating}>{`Rating: ${rating.rate} / 5`}</p>
    </div>
  );

  const ratingBar = (
    <div className={classes.ratingsContainer}>
      <RatingBar rating={rating} ref={ratingBarRef} />
    </div>
  );

  const productPrice = <p className={classes.price}>{`${price} $`}</p>;

  const cta = (
    <div className={classes.cta}>
      <button className={classes.addBtn}>Add to cart</button>
      <ProductInputAmount
        productAmount={productAmount}
        onInputChange={handleChange}
        onDecreaseCount={decreaseCountHandler}
        onIncreaseCount={increaseCountHandler}
      />
    </div>
  );

  return (
    <div className={classes.card}>
      {cardImg}
      <div className={classes.cardInfo}>
        <div className={classes.flexible}>
          <div className={classes.descriptionContainer}></div>
          {productTitle}
          {productDescription}
        </div>
        {productRating}
        {ratingBar}
        {productPrice}
        {cta}
      </div>
    </div>
  );
}
