import { forwardRef } from 'react';
import classes from '@/components/nav/NavLinks.module.scss';

export default forwardRef<HTMLUListElement>(function NavLinks(props, ref) {
  return (
    <ul className={classes.navLinks} ref={ref}>
      <li className={classes.navLink}>Home</li>
      <li className={classes.navLink}>Shop</li>
      <li className={classes.navLink}>About</li>
      <li className={classes.navLink}>Contact</li>
    </ul>
  );
});
