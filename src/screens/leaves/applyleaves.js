import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Container } from "src/components";
import global from "src/components/global.style";
import { Input, AppButton } from "src/components";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ApplyLeaves(props) {
  const [form, useForm] = useState({
    days: "",
    date: new Date(),
    formatDate: "",
    reasons: "",
    show: false,
    showdate: false
  });

  const setDate = (event, date) => {
    if (date !== undefined) {
      let today = new Date(date);
      let finalDate =
        today.getDate() +
        "-" +
        parseInt(today.getMonth() + 1) +
        "-" +
        today.getFullYear();
      useForm({ ...form, date: date, formatDate: finalDate, showdate: false });
    }
  };

  const pressToSelect = () => {
    useForm({ ...form, showdate: true });
  };
  return (
    <SafeAreaView style={[global.safearea, { backgroundColor: "#fafafa" }]}>
      <Container style={{ width: wp("90%") }}>
        <View style={{ justifyContent: "space-between", height: hp("60%") }}>
          <TouchableOpacity
            onPress={() => pressToSelect()}
            style={[styles.textInput, { height: 50 }]}
          >
            <Text style={{ marginTop: 12 }}>
              Leave Date{": " + form.formatDate}{" "}
            </Text>
          </TouchableOpacity>

          <TextInput
            placeholder="Reason For Leave"
            style={[styles.textInput, { height: 50 }]}
            value={form.reasons}
            onChangeText={text => useForm({ ...form, reasons: text })}
          />
          <TextInput
            placeholder="Reason For Leave"
            style={[
              styles.textInput,
              { paddingTop: 10, textAlignVertical: "top" }
            ]}
            multiline
            numberOfLines={10}
            value={form.reasons}
            onChangeText={text => useForm({ ...form, reasons: text })}
          />
          {form.showdate ? (
            <DateTimePicker
              value={form.date}
              mode="date"
              display="default"
              onChange={(event, date) => setDate(event, date)}
            />
          ) : null}

          <AppButton title="Submit Request" onPress={() => alert("hiiii")} />
        </View>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    left: 0,
    right: 0,
    borderRadius: 30,
    paddingLeft: 30,
    borderColor: "#CFD4D0",
    borderWidth: 1,
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.6
  }
});
