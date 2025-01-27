import React from 'react';
import { View, Text, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { ADD_TO_CART, TOGGLE_SAVE_FOR_LATER } from '../context/actionTypes';
import { products } from '../data/products';
import { addToCart } from '../../app.json';
import { Product } from '../context/types';
import { globalStyles } from '../styles/globalStyles';
import { useCart } from '../context/CartContext';
import Toast from 'react-native-toast-message';
import { hasBeenAddedToCart, success } from '../../app.json';
import { images } from '../constants/images';

const ProductList = () => {
    const { state, dispatch } = useCart();

    const handleAddToCart = (item: Product) => {
        dispatch({ type: ADD_TO_CART, product: item });
        Toast.show({
            type: 'success',
            text1: success,
            text2: `${item.name} ${hasBeenAddedToCart}`,
            visibilityTime: 2000,
        });
    };

    const renderItem = ({ item }: { item: Product }) => {
        const isSaved = !!state.savedForLater.find(product => product.id === item.id);
        return (

            <View style={globalStyles.product}>
                <Image source={{ uri: item.image }} style={globalStyles.productImage} />
                <View style={globalStyles.productDetails}>
                    <View style={globalStyles.row}>
                        <Text style={globalStyles.productName}>{item.name}</Text>
                        <View style={{ flex: 1 }} />
                        <TouchableOpacity
                            style={globalStyles.cartButton}
                            onPress={() => dispatch({ type: TOGGLE_SAVE_FOR_LATER, productId: item.id })}
                        >
                            <Image
                                source={isSaved ?
                                    images.FAVORITE_FILLED : images.FAVORITE_OUTLINE}
                                style={globalStyles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={globalStyles.productPrice}>${item.price.toFixed(2)}</Text>
                    <Button
                        color={globalStyles.button.color}
                        title={addToCart}
                        onPress={() => handleAddToCart(item)} />
                </View>
            </View>
        );
    };

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={globalStyles.productList}
            />
        </View>
    );
};

export default ProductList;
