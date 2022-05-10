export enum CartActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

interface CartState {
  items: [];
  totalAmount: number;
}

type CartAction =
  | { type: CartActionType.ADD; item: object }
  | { type: CartActionType.REMOVE; id: number };

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case CartActionType.ADD:
      return state;

    case CartActionType.REMOVE:
      return state;

    default:
      throw new Error();
  }
}
