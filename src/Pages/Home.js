import TopContainer from "../components/Home/TopContainer";
import { ImageBackground } from "react-native";
import InfosContainer from "../components/Home/InfosContainer";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { AppContext } from "../Routes";
export default function ({ navigation }) {
  const data = React.useContext(AppContext);
  const UserData = {
    balence: data.profile.balence,
    uid: data.user.uid,
    balence: data.profile.balence,
    cards: data.profile.cards,
    transactions: data.profile.transactions,
  };
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#005CEE",
          }}
        >
          <ImageBackground
            source={require("../assets/Background2.png")}
            resizeMode="cover"
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
            imageStyle={{
              resizeMode: "cover",
              top: 0,
              position: "absolute",
            }}
          >
            <TopContainer navigation={navigation} balence={UserData.balence} />
            <InfosContainer navigation={navigation} data={UserData}  />
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
