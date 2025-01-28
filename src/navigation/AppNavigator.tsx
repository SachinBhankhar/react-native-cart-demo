import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductListScreen from '../screens/ProductListScreen';
import CartScreen from '../screens/CartScreen';
import SaveForLaterScreen from '../screens/SaveForLaterScreen';
import { RootStackParamList } from './routes';
import { savedForLater, cart, products } from '../../app.json';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='ProductList' component={ProductListScreen} options={{ title: products }} />
                <Stack.Screen name='Cart' component={CartScreen} options={{ title: cart }} />
                <Stack.Screen name='SaveForLater' component={SaveForLaterScreen} options={{ title: savedForLater }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
