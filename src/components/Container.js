import React from "react";
import { StyleSheet, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export function Container(props) {
  return <View style={[styles.wrapper, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 20,
    alignSelf: "center",
    width: wp("80%")
  }
});
