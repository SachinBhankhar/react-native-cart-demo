import React from 'react';
import { View, StyleSheet } from 'react-native';
import SaveForLaterList from '../components/SaveForLaterList';

const SaveForLaterScreen = () => {
    return (
        <View style={styles.container}>
            <SaveForLaterList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default SaveForLaterScreen;
