import { ChangeEvent } from 'react';
import { ProductItem } from '@/types/productItem.interface';
import ProductInputAmount from '@/components/inputs/ProductInputAmount';
import classes from '@/components/cart/CartItem.module.scss';

interface CartItemProps {
  item: ProductItem;
  productAmount: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  increaseCountHandler: () => void;
  decreaseCountHandler: () => void;
}

export default function CartItem({
  item,
  productAmount,
  handleChange,
  increaseCountHandler,
  decreaseCountHandler,
}: CartItemProps) {
  const { id, title, price, image, amount } = item;

  return (
    <div className={classes.cartItem}>
      <img src={image} alt="product" className={classes.img} />

      <p className={classes.productTitle}></p>
      <div className={classes.productAmount}>
        <ProductInputAmount
          productAmount={productAmount}
          onInputChange={handleChange}
          onDecreaseCount={decreaseCountHandler}
          onIncreaseCount={increaseCountHandler}
        />
      </div>
      <p className={classes.productPrice}>{price}</p>
    </div>
  );
}
