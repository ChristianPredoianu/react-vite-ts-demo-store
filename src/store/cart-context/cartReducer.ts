import {
  CartActionType,
  CartState,
  CartAction,
} from '@/store/cart-context/types/cartReducer.interface';

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case CartActionType.ADD:
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      let updatedItems;

      const existingCartItemIndex: number = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };

        updatedItems = [...state.items];

        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case CartActionType.REMOVE:
      return state;

    default:
      throw new Error();
  }
}
