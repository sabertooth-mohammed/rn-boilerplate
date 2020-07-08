import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { material } from "react-native-typography";
import { TouchableOpacity } from "react-native-gesture-handler";

export function HomeCard(props) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => props.onPress()}>
      <React.Fragment>
        <Image source={props.image} style={{ height: 60, width: 60 }} />
        <Text style={{ ...material.body2 }}>{props.title}</Text>
      </React.Fragment>
    </TouchableOpacity>
  );
}

HomeCard.defaultProps = {
  title: "Title",
  image: "login.png",
  onPress: () => alert("Pressed")
};

HomeCard.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired
};

// height:hp('15%'),
// width:wp('27%'),

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    height: hp("18%"),
    width: wp("29%"),
    backgroundColor: "#ffffff",
    borderRadius: 5,
    elevation: 4,
    //ios propertuies
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.6
  }
});
