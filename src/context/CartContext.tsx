import React, { createContext, useReducer, ReactNode, useContext } from 'react';
import { initialState, cartReducer } from './cartReducer';
import { CartState, Action } from './types';

const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
