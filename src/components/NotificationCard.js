import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import PropTypes from "prop-types";
import { material } from "react-native-typography";
import { TouchableOpacity } from "react-native-gesture-handler";

export function NotificationCard(props) {
  return (
    <View style={styles.cardWrapper}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../assets/img/bg.jpg")}
          style={{ width: "100%", height: 60 }}
        />
      </View>
      <View style={{ flex: 3, marginLeft: 20 }}>
        <Text style={{ ...material.title, fontSize: 18 }}>{props.name}</Text>
        <Text style={{ ...material.subheading }}>{props.description} </Text>
      </View>
      <View style={{ alignItems: "flex-end", flex: 1 }}>
        {props.new ? (
          <View style={styles.badge}>
            <Text style={{ ...material.captionWhite }}>NEW</Text>
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
}

NotificationCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};
NotificationCard.defaultProps = {
  name: "TEST TITLE",
  description: "TEST DESCRIPTION TEST DESCRIPTION"
};

const styles = StyleSheet.create({
  cardWrapper: {
    overflow: "hidden",
    marginBottom: 20,
    padding: 15,
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
  },
  badge: {
    borderRadius: 20,
    padding: 3,
    width: 50,
    backgroundColor: "orange",
    alignItems: "center"
  }
});
