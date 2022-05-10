import { createContext } from 'react';

interface cartContext {
  cartItems: [];
  totalAmount: number;
  addToCart: (product: object) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<cartContext>({
  cartItems: [],
  totalAmount: 0,
  addToCart: (product) => {},
  removeFromCart: (id) => {},
});

export default CartContext;
