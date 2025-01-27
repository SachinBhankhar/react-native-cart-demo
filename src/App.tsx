import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { CartProvider } from './context/CartContext';
import Toast from 'react-native-toast-message';

const App = () => {
    return (
        <CartProvider>
            <AppNavigator />
            <Toast />
        </CartProvider>
    );
};

export default App;
