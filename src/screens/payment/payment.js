import React from "react";
import { SafeAreaView, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Container } from "src/components";
import { HeaderRight, HeaderLeft } from "src/components/Header";
import global from "src/components/global.style";

import { Column } from "src/components/table/Column";
import { Row } from "src/components/table/Row";
// import { HomeworkCard } from 'src/components/HomeworkCard';

let Data = [
  {
    id: "1",
    tit: "red",
    title: "English",
    description:
      "Read Julius Caesar Act 1, Scene 2 Read Julius Caesar Act 1, Scene 2 "
  },
  {
    id: "2",
    color: "green",
    title: "Marathi",
    description: "Read Julius Caesar Act 1, Scene 2 "
  },
  {
    id: "3",
    color: "orange",
    title: "Hindi",
    description: "Read Julius Caesar Act 1, Scene 2 "
  }
];
export default function Payment(props) {
  return (
    <SafeAreaView style={[global.safearea, { backgroundColor: "#fafafa" }]}>
      <Container style={{ width: wp("90%") }}>
        <View style={{ elevation: 3, backgroundColor: "white" }}>
          {/* top heading */}
          <Column title1="MONTH" title2="DUE" title3="" />
          <Row title1="JUNE" title2="290/-" onPress={() => alert("COPMPOEN")} />
        </View>
      </Container>
    </SafeAreaView>
  );
}

Payment.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "PAYMENT",
    headerRight: <HeaderRight onPress={() => alert("Left ")} />
  };
};
