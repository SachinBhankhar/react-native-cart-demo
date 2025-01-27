import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    row: { flexDirection: 'row' },
    button: {
        color: 'green',
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    productList: {
        paddingBottom: 20,
    },
    product: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        padding: 10,
    },
    productImage: {
        width: 100,
        height: 100,
    },
    productDetails: {
        flex: 1,
        padding: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
        marginVertical: 5,
    },
    cartButton: {
        marginRight: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
});
