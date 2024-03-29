import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Tab from "../components/Card Center/Tab";
import CreditCardTemplate from "../components/Card Center/CreditCardTemplate";
import NavBar from "../components/NavBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { AppContext } from "../Routes";
export default function ({ navigation }) {
  const cardData = React.useContext(AppContext).profile.cards;
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <NavBar
            navigation={navigation}
            title="Card Center"
            icon={<Entypo name="dots-three-vertical" size={18} color="black" />}
          />
          <CreditCardTemplate cardData={cardData} />
          <Tab />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
