import { useInputAmount } from '@/hooks/useInputAmount';
import ProductInputAmount from '@/components/inputs/ProductInputAmount';
import classes from '@/components/cart/Cart.module.scss';
import ProductsImg from '@/assets/products.jpg';

export default function Cart() {
  const {
    productAmount,
    handleChange,
    increaseCountHandler,
    decreaseCountHandler,
  } = useInputAmount();

  return (
    <>
      <div className="container">
        <div className={classes.cartCard}>
          <h1>Your order</h1>
          <div className={classes.cartItem}>
            <img src={ProductsImg} alt="product" className={classes.img} />

            <p className={classes.productTitle}></p>
            <div className={classes.productAmount}>
              <ProductInputAmount
                productAmount={productAmount}
                onInputChange={handleChange}
                onDecreaseCount={decreaseCountHandler}
                onIncreaseCount={increaseCountHandler}
              />
            </div>
            <p className={classes.productPrice}>115$</p>
          </div>
          <div className={classes.cta}>
            <div className={classes.prices}>
              <div className={classes.price}>
                <p>subtotal</p>
                <p>150$</p>
              </div>
              <div className={classes.price}>
                <p>subtotal</p>
                <p>150$</p>
              </div>
              <div className={classes.price}>
                <p>subtotal</p>
                <p>150$</p>
              </div>
            </div>
          </div>
          <button className={classes.ctaBtn}>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
}
