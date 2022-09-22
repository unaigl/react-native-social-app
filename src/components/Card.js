import React from "react";
import { StyleSheet, View } from "react-native";
import ParallexSwiper from "./parallexSwiper/ParallexSwiper";
import data from "./data";

export default class Card extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ParallexSwiper data={data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
