import { useReducer, useEffect } from 'react';
import CartContext from '@/store/cart-context/cartContext';
import { cartReducer } from '@/store/cart-context/cartReducer';
import { CartActionType } from '@/store/cart-context/types/cartReducer.interface';
import { DefaultCartState } from '@/store/cart-context/types/cartProvider.interface';
import { ProductItem } from '@/types/productItem.interface';

const defaultCartState: DefaultCartState = {
  items: [],
  totalAmount: 0,
};

interface CartProviderProps {
  children: React.ReactNode;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, cartDispatch] = useReducer(cartReducer, defaultCartState);

  useEffect(() => {
    if (typeof localStorage.getItem('cart') === 'string') {
      cartDispatch({
        type: CartActionType.UPDATE_STATE,
        value: JSON.parse(localStorage.getItem('cart') || ''),
      });
    }
  }, []);

  useEffect(() => {
    if (cart !== defaultCartState) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  function addProductToCartHandler(item: ProductItem) {
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
