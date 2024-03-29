import NavBar from "../components/NavBar";
import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

export default function ({ navigation }) {
  const [facialRecognitionAvailable, setFacialRecognitionAvailable] =
    React.useState(false);
  const [fingerprintAvailable, setFingerprintAvailable] = React.useState(false);
  const [irisAvailable, setIrisAvailable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const checkSupportedAuthentication = async () => {
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (types && types.length) {
      setFacialRecognitionAvailable(
        types.includes(
          LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
        )
      );
      setFingerprintAvailable(
        types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)
      );
      setIrisAvailable(
        types.includes(LocalAuthentication.AuthenticationType.IRIS)
      );
    }
  };
  const authenticate = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const results = await LocalAuthentication.authenticateAsync({
        promptMessage: "Login With Biometrics",
        cancelLabel: "Cancel",
        disableDeviceFallback: false,
        requireConfirmation: true,
      });
      if (results.success) {
        navigation.navigate("Home")
      } 
    } catch (error) {
      
    }
    setLoading(false);
  };

  React.useEffect(() => {
    checkSupportedAuthentication();
  }, []);


  return (
    <ImageBackground
      source={require("../assets/Splash.png")}
      resizeMode="cover"
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
      }}
      imageStyle={{
        resizeMode: "cover",
        top: 0,
        position: "absolute",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={authenticate}
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
          Authentificate
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const Header = () => (
  <View style={HeaderStyle.container}>
    <Text style={HeaderStyle.title}>Verification</Text>
    <Text style={HeaderStyle.text}>
      Verify the handphone number by entering the verification code{" "}
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
    color: "white",
    fontFamily: "Medium",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 11,
  },
  text: {
    color: "white",
    fontFamily: "Medium",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 37.5,
    lineHeight: 20,
  },
  Cta: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 16,
    marginTop: 10,
  },
});

const CELL_COUNT = 6;

const VerificationInput = ({ navigation }) => {
  const [value, setValue] = useState("");
  React.useEffect(() => {
    if (value.length === CELL_COUNT) {
      navigation.navigate("Home");
    }
  }, [value]);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    fontFamily: "Medium",
    borderWidth: 1,
    borderColor: "white",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 42,
  },
  cell: {
    fontFamily: "Medium",
    textAlign: "center",
    padding: 10,
    color: "white",
  },
});

const VerificationSection = ({ navigation }) => (
  <View
    style={{
      flex: 1,
    }}
  >
    <VerificationInput navigation={navigation} />
    <View style={HeaderStyle.container2}>
      <Text style={HeaderStyle.text}>Didn't recive verification code? </Text>
      <Text style={HeaderStyle.Cta}>Resend Code </Text>
    </View>
  </View>
);
