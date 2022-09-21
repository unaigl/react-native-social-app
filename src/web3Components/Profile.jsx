import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

function Profile() {
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()

    if (isConnected)
        return (
            <View>
                Connected to {address}
                <Button style={styles.button} onPress={() => disconnect()}>Disconnect</Button>
            </View>
        )
    return <Button style={styles.button} onPress={() => connect()}>Connect Wallet</Button>
}

const styles = StyleSheet.create({
    button: {
        height: '100px',
        backgroundColor: '#ddd'
    }
})

export default Profile