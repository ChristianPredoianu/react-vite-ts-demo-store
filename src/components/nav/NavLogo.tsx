import Logo from '@/assets/logo.png';
import classes from '@/components/nav/NavLogo.module.scss';

export default function NavLogo() {
  return <img src={Logo} alt="Logo" className={classes.logo} />;
}
