import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import PropTypes from "prop-types";
import { material } from "react-native-typography";
import { TouchableOpacity } from "react-native-gesture-handler";

export function CircularCard(props) {
  return (
    <TouchableOpacity style={styles.cardWrapper}>
      <View style={styles.header}>
        <View style={styles.numberSection}>
          <Text style={{ ...material.headline, fontWeight: "bold" }}>
            {props.id}
          </Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ ...material.titleWhite }}>{props.title}</Text>
          <Text style={styles.title}>{props.description}</Text>
        </View>
      </View>
      <View>
        <Image
          source={require("../assets/img/bg.jpg")}
          style={{ width: "100%", overflow: "hidden", height: 200 }}
          resizeMode="cover"
        />
      </View>
      <View style={{ backgroundColor: "#02a8f4", padding: 15 }}>
        <Text style={styles.title}>{props.date}</Text>
      </View>
    </TouchableOpacity>
  );
}

CircularCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string
};

CircularCard.defaultProps = {
  id: 1,
  title: "TEST TITLE",
  description: "TEST DESCRIPTION TEST DESCRIPTION",
  date: "6 Dec 2019"
};

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 20,
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.6
  },
  header: { padding: 15, backgroundColor: "#02a8f4", flexDirection: "row" },
  numberSection: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    height: 50,
    width: 50,
    backgroundColor: "white"
  },
  title: { ...material.subheadingWhite }
});
