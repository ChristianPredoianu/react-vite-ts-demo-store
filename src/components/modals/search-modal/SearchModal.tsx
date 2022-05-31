import { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '@/components/modals/Backdrop';
import SearchModalOverlay from '@/components/modals/search-modal/SearchModalOverlay';

interface SearchModalProps {
  onCloseModal: () => void;
}

export default forwardRef<HTMLDivElement, SearchModalProps>(
  function SearchModal({ onCloseModal }, ref) {
    return (
      <>
        {ReactDOM.createPortal(
          <Backdrop ref={ref} onClose={onCloseModal} />,
          document.getElementById('backdrop-root') as HTMLElement
        )}

        {ReactDOM.createPortal(
          <SearchModalOverlay onCloseModal={onCloseModal} />,
          document.getElementById('overlay-root') as HTMLElement
        )}
      </>
    );
  }
);
