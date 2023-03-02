import NavBar from "../components/NavBar";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
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
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#005CEE",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#005CEE",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Header />
          <View
            style={{
              flex: 4,
              width: "80%",
            }}
          >
            <VerificationSection navigation={navigation}/>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
    marginTop:10
  },
});

const CELL_COUNT = 6;

const VerificationInput = ({navigation}) => {
  const [value, setValue] = useState("");
  React.useEffect(()=>{
    if (value.length===CELL_COUNT){
      navigation.navigate("Home")
    }
  },[value])
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
    color:"white"
  }
});

const VerificationSection = ({navigation}) => (
  <View
    style={{
      flex: 1,
    }}
  >
    <VerificationInput navigation={navigation}/>
    <View style={HeaderStyle.container2}>
      <Text style={HeaderStyle.text}>Didn't recive verification code? </Text>
      <Text style={HeaderStyle.Cta}>Resend Code </Text>
    </View>
  </View>
);
