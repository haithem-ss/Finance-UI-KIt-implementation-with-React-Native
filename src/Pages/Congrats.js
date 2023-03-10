import { Text, TouchableOpacity, Image, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
export default function ({ route, navigation }) {
  const { message } = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Congratulations!
            </Text>
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 18,
                textAlign: "center",
                marginVertical: 40,
                marginHorizontal:20
              }}
            >
              {message}
            </Text>
            <Image source={require("../assets/Succes.png")} />
          </View>
          <TouchableOpacity
          onPress={()=> navigation.navigate("Home")}
            activeOpacity={0.6}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              marginHorizontal: "5%",
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
              Great, Let's Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
