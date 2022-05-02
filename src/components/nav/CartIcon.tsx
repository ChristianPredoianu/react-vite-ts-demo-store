import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/nav/CartIcon.module.scss';

export default function CartIcon() {
  return (
    <div className={classes.cart}>
      <FontAwesomeIcon icon={faCartShopping} />
      <div className={classes.cartCount}>0</div>
    </div>
  );
}
