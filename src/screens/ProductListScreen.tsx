import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductList from '../components/ProductList';
import { globalStyles } from '../styles/globalStyles';
import { images } from '../constants/images';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/routes';

const ProductListScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => navigation.navigate('Cart')}
                    >
                        <Image
                            source={images.CART}
                            style={globalStyles.icon}
                        />
                    </TouchableOpacity>
                    <View style={{ width: 10 }} />
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => navigation.navigate('SaveForLater')}
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
    actionButton: {
        marginRight: 10,
    },
});

export default ProductListScreen;
