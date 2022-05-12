import { useParams } from 'react-router-dom';
import { useApi, apiResponse } from '@/hooks/useApi';
import { useInputAmount } from '@/hooks/useInputAmount';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import CtaBtn from '@/components/buttons/CtaBtn';
import ProductInputAmount from '@/components/inputs/ProductInputAmount';
import classes from '@/pages/ProductDetails.module.scss';

export default function ProductDetails() {
  const { id } = useParams();

  const { data, error, isLoading }: apiResponse = useApi(
    `https://fakestoreapi.com/products/${id}`
  );

  const {
    productAmount,
    handleChange,
    increaseCountHandler,
    decreaseCountHandler,
  } = useInputAmount();

  const { title, price, description, image } = data;

  console.log(data);

  let output;

  if (isLoading) {
    output = (
      <div className={classes.loadingSpinner}>
        <LoadingSpinner />
      </div>
    );
  } else {
    output = (
      <>
        <div className={classes.social}>
          <SocialMediaTab />
        </div>
        <div className={classes.imgContainer}>
          <img src={image} alt="product" className={classes.img} />
        </div>
        <div className={classes.productInfo}>
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.description}>{description}</p>
          <div className={classes.cta}>
            <CtaBtn color={'green'}>Add to cart</CtaBtn>
            <ProductInputAmount
              productAmount={productAmount}
              onInputChange={handleChange}
              onDecreaseCount={decreaseCountHandler}
              onIncreaseCount={increaseCountHandler}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="container">
      <main className={classes.main}>{output}</main>
    </div>
  );
}
