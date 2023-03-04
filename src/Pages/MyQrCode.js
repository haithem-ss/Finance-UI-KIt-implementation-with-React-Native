import { View, StyleSheet, Image, Text,TouchableOpacity } from "react-native";
import React from "react";
import { AppContext } from "../Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../components/NavBar";
import { Feather } from "@expo/vector-icons";

export default function App({ navigation }) {
  const data = React.useContext(AppContext);
  const user = data.user;
  const QrCode = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${user.uid}`;
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={styles.container}>
          <NavBar
            title="QR code scanner"
            icon={<Feather name="help-circle" size={24} color="black" />}
            navigation={navigation}
          />
          <Text style={styles.text}>
            Here is your QR code, use it to receive payements
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              borderColor: "black",
            }}
          >
            <Image
              source={{ uri: QrCode }}
              style={{ width: 300, height: 300 }}
            />
           
          </View>
          <TouchableOpacity
          activeOpacity={0.3}
              style={{
                backgroundColor: "#EEF2F8",
                borderRadius: 16,
                width: "90%",
                marginHorizontal:"5%",
                marginBottom:20
              }}
            >
              <Text
                style={{
                  color: "#005CEE",
                  fontFamily: "Medium",
                  fontSize: 18,
                  textAlign: "center",
                  padding: 15,
                }}
              >
                Download QR Code
              </Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    fontFamily: "Medium",
    paddingHorizontal: 20,
    textAlign: "center",
    paddingVertical: 25,
    lineHeight: 25,
  },
});
