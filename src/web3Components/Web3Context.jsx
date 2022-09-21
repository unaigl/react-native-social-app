import React from 'react'
import { View } from 'react-native'
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import Profile from "./Profile"

const Web3Context = () => {

    const client = createClient({
        autoConnect: true,
        provider: getDefaultProvider(),
    })

    return (
        <View>
            <WagmiConfig client={client}>
                <Profile />
            </WagmiConfig>
        </View>
    )
}

export default Web3Context