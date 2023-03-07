import * as LocalAuthentication from "expo-local-authentication";

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React, { useState, useRef } from "react";

export default function () {
  const [facialRecognitionAvailable, setFacialRecognitionAvailable] =
    React.useState(false);
  const [fingerprintAvailable, setFingerprintAvailable] = React.useState(false);
  const [irisAvailable, setIrisAvailable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState(false);

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
        setResult(true);
      }
    } catch (error) {}
    setLoading(false);
  };

  React.useEffect(() => {
    checkSupportedAuthentication();
  }, []);

  return [
    result,
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
    </ImageBackground>,
  ];
}

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
