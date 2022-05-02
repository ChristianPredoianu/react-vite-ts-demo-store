import { useState, useRef } from 'react';
import useScreenWidth from '@/hooks/useScreenWidth';
import { CSSTransition } from 'react-transition-group';
import NavLogo from '@/components/nav/NavLogo';
import NavLinks from '@/components/nav/NavLinks';
import SearchIcon from '@/components/nav/SearchIcon';
import CartIcon from '@/components/nav/CartIcon';
import HamburgerIcon from '@/components/nav/HamburgerIcon';
import SearchModal from '@/components/modals/search-modal/SearchModal';
import classes from '@/components/nav/Nav.module.scss';
import classNames from 'classnames';

export default function Nav() {
  const [screenWidth] = useScreenWidth();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const navLinksRef = useRef<HTMLUListElement>(null);

  const navLinks = (
    <CSSTransition
      in={isNavOpen || screenWidth > 640}
      nodeRef={navLinksRef}
      timeout={300}
      unmountOnExit
      classNames={{
        enter: classes.slideEnter,
        enterActive: classes.slideEnterActive,
        exitActive: classes.slideExitActive,
      }}
    >
      <NavLinks ref={navLinksRef} />
    </CSSTransition>
  );

  function toggleNavHandler() {
    setIsNavOpen(!isNavOpen);
  }

  function openSearchModalHandler() {
    setIsSearchModalOpen(true);
  }

  function closeSearchModalHandler() {
    setIsSearchModalOpen(false);
  }

  return (
    <>
      <header className={classNames('container', classes.header)}>
        <nav className={classes.nav}>
          <NavLogo />
          {navLinks}
          <div className={classes.icons}>
            <SearchIcon onOpenSearch={openSearchModalHandler} />
            <CartIcon />
            <HamburgerIcon onToggleNav={toggleNavHandler} />
          </div>
        </nav>
      </header>
      {isSearchModalOpen && (
        <SearchModal onCloseSearchModal={closeSearchModalHandler} />
      )}
    </>
  );
}
