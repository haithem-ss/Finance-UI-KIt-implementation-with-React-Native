import NavBar from "../components/NavBar";
import { Ionicons } from "@expo/vector-icons";
import { authService } from "../Services/AuthService";
import { FirebaseRecaptchaVerifierModal,FirebaseRecaptchaBanner } from "expo-firebase-recaptcha";
import {firebaseConfig} from "../config/firebase"
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView as Wrapper}  from "react-native-safe-area-context";
export default function ({ navigation }) {
  const [value, setValue] = useState("");
  const recaptchaVerifier = React.useRef(null);
  const [formattedValue, setFormattedValue] = useState("");

  const phoneInput = useRef(null);
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaProvider>
    <Wrapper
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        androidHardwareAccelerationDisabled
        // attemptInvisibleVerification={true} 
      />
      <NavBar
        title=""
        icon={<Ionicons name="help-circle-outline" size={24} color="black" />}
        navigation={navigation}
        alert={true}
        alertText="Use your phone number to sing in"
      />
      <Header />
      <View
        style={{
          flex: 2,
        }}
      >
       
        <SafeAreaView style={{ marginTop: 24 }}>
          <Text
            style={{
              color: "#5B667A",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Phone Number
          </Text>
          <PhoneInput
            placeholder="XX XX XX XX"
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DZ"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            containerStyle={{
              borderBottomColor: "#BAC3D2",
              borderBottomWidth: 1,
            }}
            textInputStyle={{}}
            textContainerStyle={{
              backgroundColor: "white",
            }}
          />
        </SafeAreaView>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => 
          {
            console.log(formattedValue)
            authService.signIn(formattedValue,recaptchaVerifier,navigation)
          }}
        
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
          Send Verification Code
        </Text>
      </TouchableOpacity>
    </View>
    
    </Wrapper>
    </SafeAreaProvider>
  );
}
const Header = () => (
  <View style={HeaderStyle.container}>
    <Text style={HeaderStyle.title}>Register</Text>
    <Text style={HeaderStyle.text}>
      Choose your country code and enter your phone number
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
  },
});
