import { Text, TouchableOpacity, Image, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
export default function ({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={{ flex:1 , backgroundColor: "white" }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{
                fontFamily:"Medium",
                fontSize:20, 
                textAlign:"center",
            }}>
              Congratulations!
            </Text>
            <Text style={{
                fontFamily:"Medium",
                fontSize:18, 
                textAlign:"center",
                marginVertical:40
            }}>
               Your Card is Issued: Enjoy the Benefits
              of Our Credit Card with Ease.
            </Text>
            <Image  source={require("../assets/Succes.png")} />
          </View>
          <TouchableOpacity
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
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
