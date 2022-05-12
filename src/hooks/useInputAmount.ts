import { useState, ChangeEvent, useContext } from 'react';
import cartContext from '@/store/cart-context/cartContext';
import { ProductItem } from '@/types/productItem.interface';

export function useInputAmount(item: ProductItem) {
  const [productAmount, setProductAmount] = useState(item.amount);

  const cartCtx = useContext(cartContext);
  const { addToCart, removeFromCart } = cartCtx;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '') setProductAmount(1);
    setProductAmount(+e.target.value);
  }

  function increaseCountHandler(item: ProductItem) {
    setProductAmount((prevState) => (prevState += 1));
    addToCart({ ...item, amount: 1 });
  }

  function decreaseCountHandler(item: ProductItem) {
    if (productAmount >= 2) setProductAmount((prevState) => (prevState -= 1));
    if (productAmount > 0) removeFromCart(item.id);
  }

  return {
    productAmount,
    handleChange,
    increaseCountHandler,
    decreaseCountHandler,
  };
}
