import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/nav/searchIcon.module.scss';

interface searchProps {
  onOpenSearch: () => void;
}

export default function SearchIcon({ onOpenSearch }: searchProps) {
  return (
    <FontAwesomeIcon
      icon={faSearch}
      className={classes.hamburger}
      onClick={onOpenSearch}
    />
  );
}
