import { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import classes from '@/components/inputs/ProductInputAmount.module.scss';

interface ProductInputAmountProps {
  productAmount: number;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDecreaseCount: () => void;
  onIncreaseCount: () => void;
}

export default function ProductInputAmount({
  productAmount,
  onInputChange,
  onIncreaseCount,
  onDecreaseCount,
}: ProductInputAmountProps) {
  return (
    <div className={classes.inputContainer}>
      <FontAwesomeIcon
        icon={faAngleLeft}
        onClick={onDecreaseCount}
        className={classes.arrowLeft}
      />
      <div>
        <label htmlFor="Amount"></label>
      </div>
      <input
        type="number"
        className={classes.input}
        value={productAmount}
        onChange={onInputChange}
      />

      <FontAwesomeIcon
        icon={faAngleRight}
        onClick={onIncreaseCount}
        className={classes.arrowRight}
      />
    </div>
  );
}
