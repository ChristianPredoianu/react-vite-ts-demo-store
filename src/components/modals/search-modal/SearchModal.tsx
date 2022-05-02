import ReactDOM from 'react-dom';
import Backdrop from '@/components/modals/Backdrop';
import SearchModalOverlay from '@/components/modals/search-modal/SearchModalOverlay';

interface searchModalProps {
  onCloseSearchModal: () => void;
}

export default function SearchModal({ onCloseSearchModal }: searchModalProps) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onCloseSearchModal} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}

      {ReactDOM.createPortal(
        <SearchModalOverlay onCloseSearchModal={onCloseSearchModal} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
}
