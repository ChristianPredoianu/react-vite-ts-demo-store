import { useContext } from 'react';
import cartContext from '@/store/cart-context/cartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/nav/CartIcon.module.scss';

interface cartIconProps {
  onOpenCart: () => void;
}

export default function CartIcon({ onOpenCart }: cartIconProps) {
  const cartCtx = useContext(cartContext);
  const { cartItems } = cartCtx;

  const cartItemsCount = cartItems.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <div className={classes.cart}>
      <FontAwesomeIcon icon={faCartShopping} onClick={onOpenCart} />
      <div className={classes.cartCount}>{cartItemsCount}</div>
    </div>
  );
}
