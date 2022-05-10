import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/modals/search-modal/SearchModalOverlay.module.scss';

interface searchModalOverlayProps {
  onCloseModal: () => void;
}

export default function SearchModalOverlay({
  onCloseModal,
}: searchModalOverlayProps) {
  const closeIcon = (
    <FontAwesomeIcon
      icon={faXmark}
      className={classes.close}
      onClick={onCloseModal}
    />
  );

  return (
    <div className={classes.modalCard}>
      <div className={classes.labelContainer}>
        <label htmlFor="Search">Search</label>
        {closeIcon}
      </div>
      <input type="text" placeholder="Search" className={classes.search} />
    </div>
  );
}
