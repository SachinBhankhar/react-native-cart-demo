import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { REMOVE_FROM_CART, UPDATE_QUANTITY } from '../context/actionTypes';
import { CartItem as CartItemType } from '../context/types';
import { globalStyles } from '../styles/globalStyles';
import { useCart } from '../context/CartContext';
import { images } from '../constants/images';

interface CartItemProps {
    item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { dispatch } = useCart();

    const increaseQuantity = () => {
        dispatch({ type: UPDATE_QUANTITY, productId: item.id, quantity: item.quantity + 1 });
    };

    const decreaseQuantity = () => {
        if (item.quantity > 1) {
            dispatch({ type: UPDATE_QUANTITY, productId: item.id, quantity: item.quantity - 1 });
        }
    };

    return (
        <View style={globalStyles.product}>
            <Image source={{ uri: item.image }} style={globalStyles.productImage} />
            <View style={globalStyles.productDetails}>
                <View style={globalStyles.row}>
                    <Text style={globalStyles.productName}>{item.name}</Text>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity
                        style={globalStyles.icon}
                        onPress={() => dispatch({ type: REMOVE_FROM_CART, productId: item.id })}
                    >
                        <Image
                            source={images.DELETE}
                            style={globalStyles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={globalStyles.productPrice}>${item.price.toFixed(2)}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        borderRadius: 4,
        marginHorizontal: 8,
    },
    quantityButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CartItem;
