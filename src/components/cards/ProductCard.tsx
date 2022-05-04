import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/cards/ProductCard.module.scss';

interface productCardProps {
  product: {
    image: string;
    price: number;
    rating: object;
    title: string;
    description: string;
  };
}

export default function ProductCard({ product }: productCardProps) {
  const { image, price, rating, title, description } = product;

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
