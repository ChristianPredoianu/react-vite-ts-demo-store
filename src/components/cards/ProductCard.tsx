import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cartContext from '@/store/cart-context/cartContext';
import { ProductItem } from '@/types/productItem.interface';
import RatingBar from '@/components/ui/RatingBar';
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
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { id, image, price, rating, title } = product;

  const cartCtx = useContext(cartContext);

  const navigate = useNavigate();

  const ratingBarRef = useRef<HTMLDivElement>(null);

  function goToProductDetails() {
    navigate(`/shop/product-details/${id}`);
  }

  function addToCartHandler() {
    const productItem: ProductItem = {
      id,
      title,
      image,
      price,
      amount: 1,
    };
    cartCtx.addToCart(productItem);
    setIsAddedToCart(true);
  }

  useEffect(() => {
    const addedToCartTimeout = setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);

    return () => {
      clearTimeout(addedToCartTimeout);
    };
  });

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
      <CtaBtn type={'card-btn'} color={'blue'} handleClick={addToCartHandler}>
        Add to cart
      </CtaBtn>
      <CtaBtn
        type={'card-btn'}
        color={'green'}
        handleClick={goToProductDetails}
      >
        More info
      </CtaBtn>
    </div>
  );

  return (
    <div className={classes.card}>
      {cardImg}
      <div className={classes.cardInfo}>
        <div className={classes.flexible}>{productTitle}</div>
        {productRating}
        {ratingBar}
        {productPrice}
        {cta}
        {isAddedToCart && (
          <p className={classes.addedMsg}>Product added to cart</p>
        )}
      </div>
    </div>
  );
}
