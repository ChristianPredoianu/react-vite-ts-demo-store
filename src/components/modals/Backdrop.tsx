import { forwardRef } from 'react';
import classes from '@/components/modals/Backdrop.module.scss';

interface backdropProps {
  onClose: () => void;
}

export default forwardRef<HTMLDivElement, backdropProps>(function Backdrop(
  { onClose },
  ref
) {
  return <div className={classes.backdrop} ref={ref} onClick={onClose}></div>;
});
