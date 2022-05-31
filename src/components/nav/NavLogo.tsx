import { Link } from 'react-router-dom';
import Logo from '@/assets/logo.png';
import classes from '@/components/nav/NavLogo.module.scss';

export default function NavLogo() {
  return (
    <Link to={'/'}>
      <img src={Logo} alt="Logo" className={classes.logo} />
    </Link>
  );
}
