import { View, Text } from "react-native";
import React from "react";
import Box from "./src/components/Box";
import GetBalance from "./src/components/GetBalance";
import Web3Context from "./src/web3Components/Web3Context";

const App = () => {
  return (
    <View>
      <Text>App mm</Text>
      <Box />
      <GetBalance />
      <Web3Context />
    </View>
  );
};

export default App;
