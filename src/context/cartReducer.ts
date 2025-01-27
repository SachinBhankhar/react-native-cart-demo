import { ADD_TO_CART, REMOVE_FROM_CART, MOVE_TO_CART, UPDATE_QUANTITY, TOGGLE_SAVE_FOR_LATER } from './actionTypes';
import { CartState, Action } from '../context/types';
import { Product } from './types';
import { products } from '../data/products';

const initialState: CartState = {
    items: [],
    savedForLater: [],
};

const cartReducer = (state: CartState, action: Action): CartState => {
    switch (action.type) {
        case ADD_TO_CART:
            return addToCart(state, action.product);
        case REMOVE_FROM_CART:
            return removeFromCart(state, action.productId);
        case MOVE_TO_CART:
            return moveToCart(state, action.productId);
        case UPDATE_QUANTITY:
            return updateQuantity(state, action.productId, action.quantity);
        case TOGGLE_SAVE_FOR_LATER:
            return toggleSaveForLater(state, action.productId);
        default:
            return state;
    }
};

const addToCart = (state: CartState, product: Product): CartState => {
    const exists = state.items.find(item => item.id === product.id);
    if (exists) {
        return {
            ...state,
            items: state.items.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
        };
    } else {
        return {
            ...state,
            items: [...state.items, { ...product, quantity: 1 }],
        };
    }
};

const removeFromCart = (state: CartState, productId: number): CartState => {
    return {
        ...state,
        items: state.items.filter(item => item.id !== productId),
    };
};


const moveToCart = (state: CartState, productId: number): CartState => {
    const itemToMove = state.savedForLater.find(item => item.id === productId);
    const alreadyExistsInCart = state.items.find(item => item.id === productId);

    if (alreadyExistsInCart) {
        return {
            ...state,
            savedForLater: state.savedForLater.filter(item => item.id !== productId),
            items: state.items.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            ),
        }
    }

    if (itemToMove) {
        return {
            ...state,
            savedForLater: state.savedForLater.filter(item => item.id !== productId),
            items: [...state.items, { ...itemToMove, quantity: 1 }],
        };
    }
    return state;
};

const updateQuantity = (state: CartState, productId: number, quantity: number): CartState => {
    return {
        ...state,
        items: state.items.map(item =>
            item.id === productId ? { ...item, quantity } : item
        ),
    };
};

const toggleSaveForLater = (state: CartState, productId: number): CartState => {
    const isSaved = state.savedForLater.find(item => item.id === productId);

    if (isSaved) {
        return {
            ...state,
            savedForLater: state.savedForLater.filter(item => item.id !== productId),
        };
    } else {
        const productToSave = products.find(item => item.id === productId);
        return {
            ...state,
            savedForLater: productToSave ? [...state.savedForLater, productToSave] : [...state.savedForLater],
        };
    }
};

export { initialState, cartReducer };
