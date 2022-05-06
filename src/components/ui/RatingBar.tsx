import { forwardRef, useEffect } from 'react';
import classes from '@/components/ui/RatingBar.module.scss';

interface ratingBarProps {
  rating: { rate: number };
}

export default forwardRef<HTMLDivElement, ratingBarProps>(function RatingBar(
  { rating },
  ref
) {
  function fillRatingBar() {
    const ratingTotal = 5;
    const ratingPercentage = (rating.rate / ratingTotal) * 100;
    const ratingPercentageRounded = `${
      Math.round(ratingPercentage / 10) * 10
    }%`;

    if (ref != null && typeof ref !== 'function') {
      if (ref.current?.style) {
        ref.current.style.width = ratingPercentageRounded;
      }
    }
  }

  useEffect(() => {
    fillRatingBar();
  }, []);

  return <div className={classes.ratingBar} ref={ref}></div>;
});
