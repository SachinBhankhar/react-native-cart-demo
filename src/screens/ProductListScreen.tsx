import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductList from '../components/ProductList';
import { ROUTES } from '../navigation/routes';
import { globalStyles } from '../styles/globalStyles';
import { images } from '../constants/images';

const ProductListScreen = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <>
                    <TouchableOpacity
                        style={styles.cartButton}
                        onPress={() => navigation.navigate(ROUTES.CART)}
                    >
                        <Image
                            source={images.CART}
                            style={globalStyles.icon}
                        />
                    </TouchableOpacity>
                    <View style={{ width: 10 }} />
                    <TouchableOpacity
                        style={styles.cartButton}
                        onPress={() => navigation.navigate(ROUTES.SAVE_FOR_LATER)}
                    >
                        <Image
                            source={images.SAVE_FOR_LATER}
                            style={globalStyles.icon}
                        />
                    </TouchableOpacity>
                </>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ProductList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cartButton: {
        marginRight: 10,
    },
});

export default ProductListScreen;
