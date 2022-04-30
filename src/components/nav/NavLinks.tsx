import classes from '@/components/nav/NavLinks.module.scss';

interface navLinksProps {
  ref: React.Ref<HTMLUListElement>;
}

export default function NavLinks({ ref }: navLinksProps) {
  return (
    <ul className={classes.navLinks} ref={ref}>
      <li className={classes.navLink}>Home</li>
      <li className={classes.navLink}>Shop</li>
      <li className={classes.navLink}>About</li>
      <li className={classes.navLink}>Contact</li>
    </ul>
  );
}
