import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/nav/SearchIcon.module.scss';

interface searchProps {
  onOpenSearch: () => void;
}

export default function SearchIcon({ onOpenSearch }: searchProps) {
  console.log(classes.searchIcon);
  return (
    <div className={classes.searchIcon}>
      <FontAwesomeIcon icon={faSearch} onClick={onOpenSearch} />
    </div>
  );
}
