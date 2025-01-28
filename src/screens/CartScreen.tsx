import React from 'react';
import { View, Text, FlatList, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CartItem from '../components/CartItem';
import { globalStyles } from '../styles/globalStyles';
import { useCart } from '../context/CartContext';

const CartScreen = () => {
    const { state } = useCart();
    const navigation = useNavigation();

    const totalValue = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    React.useLayoutEffect(() => {
        navigation.setOptions({
        });
    }, [navigation]);

    return (
        <View style={globalStyles.container}>
            <Text style={styles.total}>Total: ${totalValue.toFixed(2)}</Text>
            <FlatList
                data={state.items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CartItem item={item} />}
                contentContainerStyle={styles.cartList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    cartList: {
        paddingBottom: 20,
    },
});

export default CartScreen;
