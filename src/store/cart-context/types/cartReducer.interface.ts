import { ProductItem } from '@/types/productItem.interface';

export enum CartActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export interface CartState {
  items: ProductItem[];
  totalAmount: number;
}

export type CartAction =
  | { type: CartActionType.ADD; item: ProductItem }
  | { type: CartActionType.REMOVE; id: number };
