import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";

import { Container, AppButton } from "src/components/index";
import global from "src/components/global.style";
import { Background, StudentCard } from "src/components";

function SelectStudent(props) {
  const selecteStudent = () => {
    props.navigation.navigate("Dashboard");
  };
  return (
    <View style={global.safearea}>
      <StatusBar barStyle="dark-content" />
      <Background>
        {/* <View style={global.wrapper}></View> */}

        <Container style={{ flex: 3, width: wp("90%"), paddingTop: 50 }}>
          <ScrollView contentContainerStyle={{ flex: 1, alignSelf: "center" }}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignSelf: "center"
              }}
            >
              <StudentCard
                title="test student"
                section="4/A"
                onPress={() => alert("hiii")}
              />
              <StudentCard
                title="test student"
                section="4/A"
                onPress={() => alert("hiii")}
              />
              <StudentCard
                title="test student"
                section="4/A"
                onPress={() => alert("hiii")}
              />
              <StudentCard
                title="test student"
                section="4/A"
                onPress={() => alert("hiii")}
              />
            </View>
          </ScrollView>
        </Container>

        <View
          style={[
            global.wrapper,
            { alignSelf: "center", justifyContent: "center", width: wp("90%") }
          ]}
        >
          <AppButton title="Continue" onPress={() => selecteStudent()} />
        </View>
      </Background>
    </View>
  );
}

export default SelectStudent;
