import ReactDOM from 'react-dom';
import Backdrop from '@/components/modals/Backdrop';
import SearchModalOverlay from '@/components/modals/search-modal/SearchModalOverlay';

interface searchModalProps {
  onCloseModal: () => void;
}

export default function SearchModal({ onCloseModal }: searchModalProps) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onCloseModal} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}

      {ReactDOM.createPortal(
        <SearchModalOverlay onCloseModal={onCloseModal} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
}
