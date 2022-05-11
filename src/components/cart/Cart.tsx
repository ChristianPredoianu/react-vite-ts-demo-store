import { useState, ChangeEvent, useContext } from 'react';
import cartContext from '@/store/cart-context/cartContext';
import CartItem from '@/components/cart/CartItem';
import classes from '@/components/cart/Cart.module.scss';

export default function Cart() {
  const [productAmount, setProductAmount] = useState(1);

  const cartCtx = useContext(cartContext);
  const { cartItems, totalAmount, addToCart, removeFromCart } = cartCtx;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '') setProductAmount(1);
    setProductAmount(+e.target.value);
  }

  function increaseCountHandler(item: {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
  }) {
    setProductAmount((prevState) => (prevState += 1));
    addToCart(item);
  }

  function decreaseCountHandler() {
    if (productAmount >= 2) setProductAmount((prevState) => (prevState -= 1));
  }

  const shipping = 10;

  const totalPrice = shipping + totalAmount;

  const cartItem = cartItems.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      productAmount={productAmount}
      handleChange={handleChange}
      increaseCountHandler={() => increaseCountHandler(item)}
      decreaseCountHandler={() => decreaseCountHandler(item)}
    />
  ));

  return (
    <>
      <div className="container">
        <div className={classes.cartCard}>
          <h1>Your order</h1>
          {cartItem}

          <div className={classes.cta}>
            <div className={classes.prices}>
              <div className={classes.price}>
                <p>Subtotal</p>
                <p>{`${cartCtx.totalAmount} $`}</p>
              </div>
              <div className={classes.price}>
                <p>Shipping</p>
                <p>{`${shipping} $`}</p>
              </div>
              <div className={classes.price}>
                <p>Total</p>
                <p>{`${totalPrice} $`}</p>
              </div>
            </div>
          </div>
          <button className={classes.ctaBtn}>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
}
