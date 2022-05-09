import classes from './CtaBtn.module.scss';
import classNames from 'classnames';

interface CtaBtnProps {
  color: string;
  children: string;
  handleClick: () => void;
}

export default function CtaBtn({ children, color, handleClick }: CtaBtnProps) {
  return (
    <button
      className={classNames(classes.ctaBtn, {
        [classes.blue]: color === 'blue',
        [classes.green]: color === 'green',
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
