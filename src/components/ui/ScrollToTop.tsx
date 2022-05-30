import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/ui/ScrollToTop.module.scss';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const upArrow = <FontAwesomeIcon icon={faChevronUp} />;

  function scrollToTopHandler() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    function toggleVisibility() {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    }

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className={classes.scrollToTop} onClick={scrollToTopHandler}>
          {upArrow}
        </div>
      )}
    </>
  );
}
