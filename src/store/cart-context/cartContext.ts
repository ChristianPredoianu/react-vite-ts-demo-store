import { createContext } from 'react';
import { CartContext } from '@/store/cart-context/types/cartContext.interface';

const CartContext = createContext<CartContext>({
  cartItems: [],
  totalAmount: 0,
  addToCart: (product) => {},
  removeFromCart: (id) => {},
});

export default CartContext;
