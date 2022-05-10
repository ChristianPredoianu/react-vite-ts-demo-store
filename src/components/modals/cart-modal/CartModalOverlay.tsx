import Cart from '@/components/cart/Cart';
import classes from '@/components/modals/cart-modal/CartModalOverlay.module.scss';

interface cartModalOverlayProps {
  onCloseCartModal: () => void;
}

export default function CartModalOverlay({
  onCloseCartModal,
}: cartModalOverlayProps) {
  return (
    <div className={classes.cartModal}>
      <Cart />
    </div>
  );
}
