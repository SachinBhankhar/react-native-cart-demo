import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    MOVE_TO_CART,
    UPDATE_QUANTITY,
    TOGGLE_SAVE_FOR_LATER
} from "./actionTypes";

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    savedForLater: Product[];
}

export type Action =
    { type: typeof ADD_TO_CART; product: Product }
    | { type: typeof REMOVE_FROM_CART; productId: number }
    | { type: typeof MOVE_TO_CART; productId: number }
    | { type: typeof UPDATE_QUANTITY; productId: number; quantity: number }
    | { type: typeof TOGGLE_SAVE_FOR_LATER; productId: number };


