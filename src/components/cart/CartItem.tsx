import { ProductItem } from '@/types/productItem.interface';
import { useInputAmount } from '@/hooks/useInputAmount';
import ProductInputAmount from '@/components/inputs/ProductInputAmount';
import classes from '@/components/cart/CartItem.module.scss';

interface CartItemProps {
  item: ProductItem;
}

export default function CartItem({ item }: CartItemProps) {
  const { title, price, image, amount } = item;

  const {
    productAmount,
    handleChange,
    increaseCountHandler,
    decreaseCountHandler,
  } = useInputAmount(item);

  return (
    <>
      <div className={classes.cartItem}>
        <img src={image} alt="product" className={classes.img} />
        <p className={classes.productTitle}></p>
        <div className={classes.productAmount}>
          <ProductInputAmount
            productAmount={productAmount}
            onInputChange={handleChange}
            onDecreaseCount={() => decreaseCountHandler(item)}
            onIncreaseCount={() => increaseCountHandler(item)}
          />
        </div>
        <p className={classes.productPrice}>{`${price} $ x ${amount}`}</p>
      </div>
      <p className={classes.productTitle}>{title}</p>
    </>
  );
}
