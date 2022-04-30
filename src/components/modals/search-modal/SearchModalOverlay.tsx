import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/modals/search-modal/SearchModalOverlay.module.scss';

export default function SearchModalOverlay() {
  const closeIcon = (
    <FontAwesomeIcon
      icon={faXmark}
      className={classes.close}
      /*    onClick={onToggleNav} */
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
