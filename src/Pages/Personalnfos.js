import NavBar from "../components/NavBar";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState, useRef } from "react";
import RNPickerSelect from "react-native-picker-select";

export default function ({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <NavBar
        title=""
        icon={<Ionicons name="help-circle-outline" size={24} color="black" />}
        navigation={navigation}
      />
      <Header />
      <View
        style={{
          flex: 2,
          width: "80%",
        }}
      >
        <CustomInput label="Full Name" placeholder={"SAIDA Haithem"} />
        <CustomInput
          label="PLace Of Birth"
          placeholder={"Constantine, Algeria"}
        />
        <CustomInput label="Date Of Birth" placeholder={"05-05-2002"} />
        <CustomPicker label="Gender" placeholder={"Male"} />
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate("Verification")}
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          backgroundColor: "#005CEE",
          borderRadius: 12,
          boxShadow: " 0px 4px 16px #75AFFF",
          shadowColor: "#75AFFF",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          elevation: 20,
          marginBottom: 26,
        }}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "Medium",
            fontSize: 18,
            marginVertical: 18.5,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const Header = () => (
  <View style={HeaderStyle.container}>
    <Text style={HeaderStyle.title}>Personal Information</Text>
    <Text style={HeaderStyle.text}>
      Personal information is used for registration and validation Stream
    </Text>
  </View>
);
const HeaderStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#293345",
    fontFamily: "Medium",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 11,
  },
  text: {
    color: "#717E95",
    fontFamily: "Medium",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 37.5,
    lineHeight: 20,
  },
});

const CustomInput = ({ placeholder, type, label }) => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView style={{ marginVertical: 12 }}>
      <Text
        style={{
          color: "#5B667A",
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        {label}
      </Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        cursorColor="black "
        placeholder={placeholder}
        keyboardType={type}
        style={{
          borderBottomColor: "#BAC3D2",
          borderBottomWidth: 1,
          height: 45,
          fontFamily: "Medium",
        }}
      />
    </SafeAreaView>
  );
};
const CustomPicker = ({ placeholder, type, label }) => {
  const [text, onChangeText] = React.useState("");

  return (
    <>
      <Text
        style={{
          color: "#5B667A",
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        {label}
      </Text>
      <RNPickerSelect
        style={{
          fontFamily: "Medium",
          padding: 20,
        }}
        itemStyle={{
          backgroundColor: "#ddd",
        }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
        ]}
        useNativeAndroidPickerStyle={false}
        placeholder={{
          label: "Select Gender",
          style: {
            fontFamily: "Medium",
          },
        }}
        touchableWrapperProps={{
          margin: 20,
        }}
      />
    </>
  );
};


