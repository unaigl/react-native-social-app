import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';

export default function GetBalance() {
    const [gas, setGas] = useState('');
    const getGasPrice = async () => {
        const provider = new ethers.providers.EtherscanProvider();
        try {
            const result = await provider.getGasPrice();
            setGas(result.toString());
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getGasPrice()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Now Gas:{gas}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});