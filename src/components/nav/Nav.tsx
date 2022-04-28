import { useState, useRef } from 'react';
import NavLogo from '@/assets/fakestore2.png';
import useScreenWidth from '@/hooks/useScreenWidth';
import { CSSTransition } from 'react-transition-group';
import NavLinks from '@/components/nav/NavLinks';
import HamburgerIcon from '@/components/nav/HamburgerIcon';
import classes from '@/components/nav/Nav.module.scss';

export default function Nav() {
  const [screenWidth] = useScreenWidth();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const nodeRef = useRef<HTMLUListElement | null>(null);

  function toggleNavHandler() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <header className="container">
      <nav className={classes.nav}>
        <img src={NavLogo} alt="Logo" />
        <CSSTransition
          in={isNavOpen || screenWidth > 640}
          nodeRef={nodeRef}
          timeout={300}
          classNames={{
            enter: classes.slideEnter,
            enterActive: classes.slideEnterActive,
            exitActive: classes.slideExitActive,
          }}
          unmountOnExit
        >
          {
            <ul className={classes.navLinks} ref={nodeRef}>
              <NavLinks />
            </ul>
          }
        </CSSTransition>
        <HamburgerIcon onToggleNav={toggleNavHandler} />
      </nav>
    </header>
  );
}
