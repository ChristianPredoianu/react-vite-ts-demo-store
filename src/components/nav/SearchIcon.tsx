import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/nav/SearchIcon.module.scss';

interface SearchIconProps {
  onOpenSearch: () => void;
}

export default function SearchIcon({ onOpenSearch }: SearchIconProps) {
  return (
    <div className={classes.searchIcon}>
      <FontAwesomeIcon icon={faSearch} onClick={onOpenSearch} />
    </div>
  );
}
