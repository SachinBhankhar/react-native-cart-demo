import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { MOVE_TO_CART } from '../context/actionTypes';
import { Product } from '../context/types';
import { moveToCart } from "../../app.json";
import { globalStyles } from '../styles/globalStyles';
import { useCart } from '../context/CartContext';

const SaveForLaterList = () => {
    const { state, dispatch } = useCart();

    const renderItem = ({ item }: { item: Product }) => (
        <View style={globalStyles.product}>
            <Image source={{ uri: item.image }} style={globalStyles.productImage} />
            <View style={globalStyles.productDetails}>
                <Text style={globalStyles.productName}>{item.name}</Text>
                <Text style={globalStyles.productPrice}>${item.price.toFixed(2)}</Text>
                <TouchableOpacity style={globalStyles.button} onPress={() => dispatch({ type: MOVE_TO_CART, productId: item.id })}>
                    <Text style={globalStyles.buttonText}>{moveToCart}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <FlatList
            data={state.savedForLater}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.savedList}
        />
    );
};

const styles = StyleSheet.create({
    savedList: {
        paddingBottom: 20,
    },
});

export default SaveForLaterList;
