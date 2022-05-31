import { forwardRef } from 'react';
import classes from '@/components/modals/Backdrop.module.scss';

interface BackdropProps {
  onClose: () => void;
}

export default forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(
  { onClose },
  ref
) {
  return <div className={classes.backdrop} ref={ref} onClick={onClose}></div>;
});
