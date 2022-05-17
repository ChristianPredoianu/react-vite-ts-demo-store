import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import classes from '@/components/nav/NavLinks.module.scss';

interface NavLinksProps {
  onCloseNav: () => void;
}

export default forwardRef<HTMLUListElement, NavLinksProps>(function NavLinks(
  { onCloseNav },
  ref
) {
  return (
    <>
      <ul className={classes.navLinks} ref={ref}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.inactiveLink
          }
          onClick={onCloseNav}
        >
          <li className={classes.navLink}>Home</li>
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.inactiveLink
          }
          onClick={onCloseNav}
        >
          <li className={classes.navLink}>Shop</li>
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.inactiveLink
          }
          onClick={onCloseNav}
        >
          <li className={classes.navLink}>About</li>
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.inactiveLink
          }
          onClick={onCloseNav}
        >
          <li className={classes.navLink}>Contact</li>
        </NavLink>
      </ul>
    </>
  );
});
