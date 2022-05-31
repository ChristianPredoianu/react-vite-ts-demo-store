import { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '@/components/modals/Backdrop';
import CartModalOverlay from './CartModalOverlay';

interface CartModalProps {
  onCloseModal: () => void;
}

export default forwardRef<HTMLDivElement, CartModalProps>(function CartModal(
  { onCloseModal },
  ref
) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop ref={ref} onClose={onCloseModal} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}

      {ReactDOM.createPortal(
        <CartModalOverlay onCloseCartModal={onCloseModal} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
});
