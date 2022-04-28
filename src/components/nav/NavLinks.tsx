import classes from '@/components/nav/NavLinks.module.scss';

export default function NavLinks() {
  return (
    <>
      <li className={classes.navLink}>Home</li>
      <li className={classes.navLink}>Shop</li>
      <li className={classes.navLink}>About</li>
      <li className={classes.navLink}>Contact</li>
    </>
  );
}
