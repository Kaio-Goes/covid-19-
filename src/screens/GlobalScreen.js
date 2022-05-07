import React from 'react';
import {View, Image,StyleSheet, Text} from 'react-native';

const GlobalScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Global Screen</Text>
        </View>
    );
};

export default GlobalScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})