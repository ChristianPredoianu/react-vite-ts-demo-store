import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/nav/HamburgerIcon.module.scss';

interface hamburgerProps {
  onToggleNav: () => void;
}

export default function HamburgerIcon({ onToggleNav }: hamburgerProps) {
  const hamburgerIcon = (
    <FontAwesomeIcon
      icon={faBars}
      className={classes.hamburger}
      onClick={onToggleNav}
    />
  );

  return { hamburgerIcon };
}
