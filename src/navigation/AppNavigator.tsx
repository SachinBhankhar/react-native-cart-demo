import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductListScreen from '../screens/ProductListScreen';
import CartScreen from '../screens/CartScreen';
import SaveForLaterScreen from '../screens/SaveForLaterScreen';
import { ROUTES } from './routes';
import { savedForLater, cart, products } from '../../app.json';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ROUTES.PRODUCT_LIST} component={ProductListScreen} options={{ title: products }} />
                <Stack.Screen name={ROUTES.CART} component={CartScreen} options={{ title: cart }} />
                <Stack.Screen name={ROUTES.SAVE_FOR_LATER} component={SaveForLaterScreen} options={{ title: savedForLater }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
