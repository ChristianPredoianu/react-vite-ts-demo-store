import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/nav/HamburgerIcon.module.scss';

interface HamburgerIconProps {
  onToggleNav: () => void;
}

export default function HamburgerIcon({ onToggleNav }: HamburgerIconProps) {
  return (
    <div className={classes.hamburger}>
      <FontAwesomeIcon icon={faBars} onClick={onToggleNav} />
    </div>
  );
}
