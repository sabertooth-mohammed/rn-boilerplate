import { StyleSheet } from "react-native";
import { material } from "react-native-typography";
import { color } from "src/config/color";

export default StyleSheet.create({
  wrapperBackground: {backgroundColor: color.primary,height: 100,position: "relative"},
  titleWrapper: {flex: 1,alignItems: "center",justifyContent: "flex-end"},
  imageWrapper: { position: "absolute", alignSelf: "center", marginTop: 30 },
  title: { ...material.display2, color: "black",textTransform:'uppercase' },
  subtitle: { ...material.subheading }
});
