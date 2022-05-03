import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import classes from '@/components/nav/NavLinks.module.scss';

export default forwardRef<HTMLUListElement>(function NavLinks(props, ref) {
  return (
    <>
      <ul className={classes.navLinks} ref={ref}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.activeLink : '')}
        >
          <li className={classes.navLink}>Home</li>
        </NavLink>
        <li className={classes.navLink}>Shop</li>
        <li className={classes.navLink}>About</li>
        <li className={classes.navLink}>Contact</li>
      </ul>
    </>
  );
});
