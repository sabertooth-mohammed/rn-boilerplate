import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { material } from "react-native-typography";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
// import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import { color } from "src/config/color";

export function AppButton(props) {
  return (
    <TouchableOpacity
      // useForeground={true}
      // background={TouchableNativeFeedback.Ripple('#ffe3d1',true)}
      onPress={() => props.onPress()}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
AppButton.defaultProps = {
  title: "Submit"
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.secondary,
    padding: 15,
    borderRadius: 40,
    overflow: "hidden"
  },
  buttonText: {
    ...material.titleWhiteObject,
    fontSize: wp("5%"),
    textTransform: "uppercase",
    textAlign: "center"
  }
});
