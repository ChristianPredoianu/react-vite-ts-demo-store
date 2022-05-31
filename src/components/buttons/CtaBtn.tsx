import { forwardRef } from 'react';
import classes from './CtaBtn.module.scss';
import classNames from 'classnames';

interface CtaBtnProps {
  type: string;
  color: string;
  children: string;
  handleClick: () => void;
}

export default forwardRef<HTMLButtonElement, CtaBtnProps>(function CtaBtn(
  { children, color, type, handleClick },
  ref
) {
  return (
    <button
      className={classNames(classes.ctaBtn, {
        [classes.blue]: color === 'blue',
        [classes.green]: color === 'green',
        [classes.heroCta]: type === 'hero-cta',
        [classes.cardBtn]: type === 'card-btn',
      })}
      onClick={handleClick}
      ref={ref}
    >
      {children}
    </button>
  );
});
