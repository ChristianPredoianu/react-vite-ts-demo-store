import { useState } from 'react';
import NavLogo from '@/assets/fakestore2.png';
import useScreenWidth from '@/hooks/useScreenWidth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/nav/Nav.module.scss';

export default function Nav(): JSX.Element {
  const [screenWidth] = useScreenWidth();

  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNavHandler() {
    setIsNavOpen(!isNavOpen);
  }

  const hamburgerIcon = (
    <FontAwesomeIcon
      icon={faBars}
      className={classes.Hamburger}
      onClick={toggleNavHandler}
    />
  );

  return (
    <header className="container">
      <nav className={classes.Nav}>
        <img src={NavLogo} alt="Logo" />
        {(isNavOpen || screenWidth > 640) && (
          <ul className={classes.NavList}>
            <li className={classes.NavListItem}>Home</li>
            <li className={classes.NavListItem}>Shop</li>
            <li className={classes.NavListItem}>About</li>
            <li className={classes.NavListItem}>Contact</li>
          </ul>
        )}
        {hamburgerIcon}
      </nav>
    </header>
  );
}
