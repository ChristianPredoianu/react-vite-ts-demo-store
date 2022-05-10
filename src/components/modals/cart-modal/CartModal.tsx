import ReactDOM from 'react-dom';
import Backdrop from '@/components/modals/Backdrop';
import CartModalOverlay from './CartModalOverlay';

interface cartModalProps {
  onCloseModal: () => void;
}

export default function CartModal({ onCloseModal }: cartModalProps) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onCloseModal} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}

      {ReactDOM.createPortal(
        <CartModalOverlay onCloseCartModal={onCloseModal} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
}
