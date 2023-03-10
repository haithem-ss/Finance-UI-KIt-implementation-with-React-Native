import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import NavBar from "../components/NavBar";
import { Feather } from "@expo/vector-icons";
import Tab from "../components/Profile/Tab";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Device from "expo-device";
import React from "react";
import { AppContext } from "../Routes";

export default function ({ navigation }) {
  const data = React.useContext(AppContext);
  const UserData = {
    fullName:data.profile.fullName,
    uid: data.user.uid,
    phoneNumber: data.user.phoneNumber,
    email: data.profile.email,
    adresse: data.profile.adresse,
    deviceName: Device.deviceName,
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={{ backgroundColor: "white", flex: 1 }}>
          <NavBar
            title="Profile"
            icon={
              <MaterialCommunityIcons name="logout" size={24} color="black" />
            }
            navigation={navigation}
          />
          <Profile infos={UserData} />
          <Tab />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const Profile = ({infos}) => (
  <View style={ProfileStyle.container}>
    <Image
      style={ProfileStyle.Image}
      source={require("../assets/profile.png")}
    />
    <View style={ProfileStyle.textContainer}>
      <Text style={ProfileStyle.mainText}>{infos.fullName}</Text>
      <Text style={ProfileStyle.subText}>{infos.email}</Text>
    </View>
  </View>
);
const ProfileStyle = StyleSheet.create({
  container: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  mainText: {
    fontSize: 24,
    color: "black",
    fontFamily: "Bold",
  },
  subText: {
    fontSize: 14,
    fontFamily: "Medium",
    color: "#717E95",
    marginTop: 4,
  },
  textContainer: {
    margin: 18,
  },
  Image: {
    height: 88,
    width: 88,
  },
});
