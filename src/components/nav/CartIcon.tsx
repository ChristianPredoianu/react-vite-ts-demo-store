import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/nav/CartIcon.module.scss';

interface cartIconProps {
  onOpenCart: () => void;
}

export default function CartIcon({ onOpenCart }: cartIconProps) {
  return (
    <div className={classes.cart}>
      <FontAwesomeIcon icon={faCartShopping} onClick={onOpenCart} />
      <div className={classes.cartCount}>0</div>
    </div>
  );
}
