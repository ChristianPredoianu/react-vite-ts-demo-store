import React, { useReducer } from 'react';
import CartContext from './cartContext';
import { CartActionType, cartReducer } from './cartReducer';

interface DefaultCartState {
  items: [];
  totalAmount: number;
}

let defaultCartState: DefaultCartState = {
  items: [],
  totalAmount: 0,
};

interface CartProviderProps {
  children: React.ReactNode;
}

function CartProvider({ children }: CartProviderProps) {
  const [cart, cartDispatch] = useReducer(cartReducer, defaultCartState);

  function addProductToCartHandler(item: object) {
    cartDispatch({ type: CartActionType.ADD, item });
  }

  function removeProductFromCartHandler(id: number) {
    cartDispatch({ type: CartActionType.REMOVE, id });
  }

  const cartContext = {
    cartItems: cart.items,
    totalAmount: cart.totalAmount,
    addToCart: addProductToCartHandler,
    removeFromCart: removeProductFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
