import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
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
        padding: 10,
    },
    productImage: {
        width: 100,
        height: 'auto',
        borderRadius: 8,
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
    icon: {
        width: 24,
        height: 24,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});
