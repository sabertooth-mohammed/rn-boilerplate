import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { material } from "react-native-typography";
import { TouchableOpacity } from "react-native-gesture-handler";

export function HomeworkCard(props) {
  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={() => alert("Hiii")}>
      <View style={{ width: 15, backgroundColor: props.color }} />
      <View style={styles.textContainer}>
        <Text style={{ ...material.headline }}>{props.title}</Text>
        <Text style={{ ...material.subheading }}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

HomeworkCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string
};
HomeworkCard.defaultProps = {
  title: "TEST TITLE",
  description: "TEST DESCRIPTION TEST DESCRIPTION",
  color: "blue"
};

const styles = StyleSheet.create({
  cardWrapper: {
    overflow: "hidden",
    marginBottom: 20,
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.6
  },
  textContainer: {
    padding: 20,
    justifyContent: "center",
    overflow: "hidden",
    flexShrink: 1
  }
});
