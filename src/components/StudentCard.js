import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import PropTypes from "prop-types";
import { material } from "react-native-typography";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { color } from "src/config/color";

export function StudentCard(props) {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: wp("40%"),
          height: hp("30%")
        }}
      >
        <Image
          style={{ width: 130, height: 130, borderRadius: 80 }}
          resizeMethod="auto"
          source={{ uri: "https://i.picsum.photos/id/1/2000/2000.jpg" }}
        />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subheading}>{props.section}</Text>
      </View>
    </TouchableOpacity>
  );
}

StudentCard.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
StudentCard.defaultProps = {
  title: "Test"
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.secondary,
    padding: 15,
    borderRadius: 40
  },
  title: {
    ...material.title,
    fontWeight: "800",
    textAlign: "center"
  },
  subheading: {
    ...material.body1,
    textAlign: "center"
  }
});
