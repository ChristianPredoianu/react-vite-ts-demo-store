import { useState, ChangeEvent } from 'react';

export function useInputAmount() {
  const [productAmount, setProductAmount] = useState(1);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '') setProductAmount(1);
    setProductAmount(+e.target.value);
  }

  function increaseCountHandler() {
    setProductAmount((prevState) => (prevState += 1));
  }

  function decreaseCountHandler() {
    if (productAmount >= 2) setProductAmount((prevState) => (prevState -= 1));
  }
  return {
    productAmount,
    handleChange,
    increaseCountHandler,
    decreaseCountHandler,
  };
}
