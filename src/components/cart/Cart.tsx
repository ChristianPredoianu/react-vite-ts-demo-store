import { useContext } from 'react';
import cartContext from '@/store/cart-context/cartContext';
import CartItem from '@/components/cart/CartItem';
import classes from '@/components/cart/Cart.module.scss';

export default function Cart() {
  const cartCtx = useContext(cartContext);
  const { cartItems, totalAmount } = cartCtx;

  let shipping;
  totalAmount === 0 ? (shipping = 0) : (shipping = 10);

  const cartItem = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return (
    <div className="container">
      <div className={classes.cartCard}>
        <h1>Your order</h1>
        {cartItem}
        <div className={classes.price}>
          <p>Subtotal</p>
          <p>{`${cartCtx.totalAmount} $`}</p>
        </div>
        <div className={classes.price}>
          <p>Shipping</p>
          <p>{`${shipping} $`}</p>
        </div>
        <div className={classes.price}>
          <p className={classes.total}>Total:</p>
          <p className={classes.totalAmount}>{`${totalAmount} $`}</p>
        </div>
        <button className={classes.ctaBtn}>Proceed to checkout</button>
      </div>
    </div>
  );
}
