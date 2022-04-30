import { useState, useRef } from 'react';
import NavLogo from '@/assets/logo.png';
import useScreenWidth from '@/hooks/useScreenWidth';
import { CSSTransition } from 'react-transition-group';
import NavLinks from '@/components/nav/NavLinks';
import HamburgerIcon from '@/components/nav/HamburgerIcon';
import SearchIcon from '@/components/nav/SearchIcon';
import SearchModal from '@/components/modals/search-modal/SearchModal';
import classes from '@/components/nav/Nav.module.scss';

export default function Nav() {
  const [screenWidth] = useScreenWidth();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const nodeRef = useRef<HTMLUListElement>(null);

  function toggleNavHandler() {
    setIsNavOpen(!isNavOpen);
  }

  function openSearchModalHandler() {
    setIsSearchModalOpen(true);
  }

  function closeSearchModalHandler() {
    setIsSearchModalOpen(false);
    console.log('closed');
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
          <NavLinks ref={nodeRef} />
        </CSSTransition>
        <HamburgerIcon onToggleNav={toggleNavHandler} />
        <SearchIcon onOpenSearch={openSearchModalHandler} />
      </nav>
      {isSearchModalOpen && (
        <SearchModal onCloseSearchModal={closeSearchModalHandler} />
      )}
    </header>
  );
}
