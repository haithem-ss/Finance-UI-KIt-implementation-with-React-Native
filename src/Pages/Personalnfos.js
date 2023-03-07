import NavBar from "../components/NavBar";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";
import RNPickerSelect from "react-native-picker-select";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView as Wrapper } from "react-native-safe-area-context";

export default function ({ navigation }) {
  const [email, EmailInput] = CustomInput({
    label: "Email",
    placeholder: "h_saida@estin.dz",
    type: "email-address",
    inputMode: "email",
  });
  const [adresse, AdresseInput] = CustomInput({
    label: "Current Adresse",
    placeholder: "Constantine, Algeria",
    inputMode: "email",
  });
  const [fullName, FullNameInput] = CustomInput({
    label: "Full Name",
    placeholder: "SAIDA Haithem",
  });
  const [dob, DobInput] = CustomInput({
    label: "Date Of Birth",
    placeholder: "05-05-2002",
    type: "number-pad",
  });
  const [gender, GenderInput] = CustomPicker({
    label: "Date Of Birth",
    placeholder: "05-05-2002",
  });
  const validateData = () => {
    if (!(email && adresse && fullName && dob && gender)) {
      Alert.alert(
        "Create an account",
        "Please fill all the information in the form",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ],
        {
          cancelable: true,
        }
      );
    } else {
      navigation.navigate("NewCard",{email, adresse, fullName, dob, gender})
      // authService.createUserProfile(email, adresse, fullName, dob, gender);
    }
  };
  return (
    <SafeAreaProvider>
      <Wrapper
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
          >
            <NavBar
              title=""
              icon={
                <Ionicons name="help-circle-outline" size={24} color="black" />
              }
              navigation={navigation}
            />
            <Header />
            <View
              style={{
                flex: 2,
                width: "80%",
              }}
            >
              <View
                style={{
                  marginVertical: 25,
                }}
              >
                {EmailInput}
                {FullNameInput}
                {DobInput}
                {AdresseInput}
                {GenderInput}
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={validateData}
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
        </ScrollView>
      </Wrapper>
    </SafeAreaProvider>
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

const CustomInput = ({ placeholder, type, label, inputMode = "text" }) => {
  const [text, onChangeText] = React.useState("");
  return [
    text,
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
        inputMode={inputMode}
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
    </SafeAreaView>,
  ];
};
const CustomPicker = ({ placeholder, type, label }) => {
  const [text, onChangeText] = React.useState("");

  return [
    text,
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
        onValueChange={(value) => onChangeText(value)}
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
    </>,
  ];
};
