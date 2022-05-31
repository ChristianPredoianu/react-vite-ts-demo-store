import Cart from '@/components/cart/Cart';
import classes from '@/components/modals/cart-modal/CartModalOverlay.module.scss';

interface CartModalOverlayProps {
  onCloseCartModal: () => void;
}

export default function CartModalOverlay({
  onCloseCartModal,
}: CartModalOverlayProps) {
  return (
    <div className={classes.cartModal}>
      <Cart onCloseCartModal={onCloseCartModal} />
    </div>
  );
}
