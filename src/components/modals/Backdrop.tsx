import classes from '@/components/modals/Backdrop.module.scss';

interface backdropProps {
  onClose: () => void;
}

export default function Backdrop({ onClose }: backdropProps) {
  return <div className={classes.backdrop} onClick={onClose}></div>;
}
