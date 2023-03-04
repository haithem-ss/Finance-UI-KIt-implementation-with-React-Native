import NavBar from "../components/NavBar";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState, useRef } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { authService } from "../Services/AuthService.js";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView as Wrapper } from "react-native-safe-area-context";

export default function ({ route, navigation }) {
  const { code } = route.params;
  const [verificationCode, VerificationSectionElements] = VerificationSection();
  return (
    <SafeAreaProvider>
      <Wrapper
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <NavBar
            title=""
            icon={
              <Ionicons name="help-circle-outline" size={24} color="black" />
            }
            navigation={navigation}
            alert={true}
            alertText="Use your phone number to sing in"
          />
          <Header />
          <View
            style={{
              flex: 4,
              width: "80%",
            }}
          >
            {VerificationSectionElements}
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              authService.verifyCode(navigation, code, verificationCode);
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
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </Wrapper>
    </SafeAreaProvider>
  );
}
const Header = () => (
  <View style={HeaderStyle.container}>
    <Text style={HeaderStyle.title}>Verification</Text>
    <Text style={HeaderStyle.text}>
      Verify the handphone number by entering the verification code
    </Text>
  </View>
);
const HeaderStyle = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    justifyContent: "center",
    marginTop: 45,
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
  Cta: {
    color: "#005CEE",
    fontFamily: "Bold",
    fontSize: 16,
  },
});

const CELL_COUNT = 6;

const VerificationInput = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return [
    value,
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View style={styles.input}>
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>,
  ];
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    fontFamily: "Medium",
    borderWidth: 1,
    borderColor: "#EEF2F8",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 42,
    marginBottom:20

  },
  cell: {
    fontFamily: "Medium",
    textAlign: "center",
    padding: 10,
  },root:{
    width:"100%"
  }
});

const VerificationSection = () => {
  const [verificationCode, verificationInput] = VerificationInput();
  return [
    verificationCode,
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={HeaderStyle.container2}>
        {verificationInput}
        <Text style={HeaderStyle.text}>Didn't recive verification code? </Text>
        <Text style={HeaderStyle.Cta}>Resend Code </Text>
      </View>
    </View>,
  ];
};
