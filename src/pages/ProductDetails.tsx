import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '@/hooks/useApi';
import CartContext from '@/store/cart-context/cartContext';
import { ApiResponse } from '@/types/apiData.interface';
import { ProductItem } from '@/types/productItem.interface';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import CtaBtn from '@/components/buttons/CtaBtn';
import classes from '@/pages/ProductDetails.module.scss';

export default function ProductDetails() {
  const { id } = useParams();

  const {
    data = null,
    error,
    isLoading,
  } = useApi<ApiResponse>(`https://fakestoreapi.com/products/${id}`);

  const { title, price, description, image } = data || {};

  const cartCtx = useContext(CartContext);

  function addToCartHandler() {
    let productItem;

    if (id && title && image && price) {
      productItem = {
        id: parseInt(id),
        title,
        image,
        price,
        amount: 1,
      };
      cartCtx.addToCart(productItem);
    }
  }

  let output;

  if (isLoading) {
    output = <LoadingSpinner />;
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
          <p className={classes.price}>{`${price} $`}</p>
          <div className={classes.cta}>
            <CtaBtn
              type={'card-btn'}
              color={'green'}
              handleClick={addToCartHandler}
            >
              Add to cart
            </CtaBtn>
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
