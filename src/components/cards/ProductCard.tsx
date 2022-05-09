import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInputAmount } from '@/hooks/useInputAmount';
import RatingBar from '@/components/ui/RatingBar';
import ProductInputAmount from '@/components/inputs/ProductInputAmount';
import CtaBtn from '@/components/buttons/CtaBtn';
import classes from '@/components/cards/ProductCard.module.scss';

interface productCardProps {
  product: {
    id: number;
    image: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
  };
}

export default function ProductCard({ product }: productCardProps) {
  const { id, image, price, rating, title } = product;

  const {
    productAmount,
    handleChange,
    increaseCountHandler,
    decreaseCountHandler,
  } = useInputAmount();

  const navigate = useNavigate();

  const ratingBarRef = useRef<HTMLDivElement>(null);

  function goToProductDetails() {
    navigate(`/shop/product-details/${id}`);
  }

  const cardImg = (
    <div className={classes.cardImg}>
      <img src={image} alt="product" />
    </div>
  );

  const productTitle = <h2 className={classes.productTitle}>{title}</h2>;

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
      <div className={classes.buttons}>
        {/*     <CtaBtn color={'blue'}>Add to cart</CtaBtn> */}
        <CtaBtn color={'green'} handleClick={goToProductDetails}>
          More info
        </CtaBtn>
      </div>
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
        </div>
        {productRating}
        {ratingBar}
        {productPrice}
        {cta}
      </div>
    </div>
  );
}
