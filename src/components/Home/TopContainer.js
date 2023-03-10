import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ModalComponent from "../QrCode/Modal";
import React from "react";
export default function ({ navigation ,balence}) {

  return (
    <View style={styles.container}>
      <View style={styles.infosWrapper}>
        <View style={styles.infos}>
          <Text style={styles.mainText}>{balence.toLocaleString("en-US")} DZD</Text>
          <Text style={styles.subText}>Active balence</Text>
        </View>
        <View style={styles.InfosIcons}>
          <FontAwesome name="bell-o" size={20} color="white" />
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={require("../../assets/profile.png")}
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Icons.IconsWrapper}>
        <Item
          icon={<Feather name="send" size={30} color="white" />}
          text="Send"
          navigation={navigation}
          link="Send"
        />
        <Item
          icon={<MaterialIcons name="move-to-inbox" size={30} color="white" />}
          text="Request"
          link="Request"
          navigation={navigation}
        />
        <Item
          icon={<MaterialIcons name="compare-arrows" size={30} color="white" />}
          text="In & Out"
          navigation={navigation}
          link="InOut"
        />
      <ModalComponent navigation={navigation}  />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005CEE",
    alignItems: "center",
    justifyContent: "center",
  },
  infosWrapper: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  infos: {
    flex: 1,
    color: "white",
    fontFamily:"Medium"
  },
  mainText: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    fontFamily:"Medium"

  },
  subText: {
    color: "#9ec1f9",
    fontFamily:"Medium"
  },
  InfosIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
const Icons = StyleSheet.create({
  IconsWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    aspectRatio: 1,
    flex: 1,
    alignItems: "center",
  },
  container: {
    backgroundColor: "#2F75FD",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    flex: 1,
  },
  text: {
    color: "white",
    fontWeight: "500",
    marginTop: 4,
    fontFamily:"Medium"
  },
  icon: {
    color: "white",
  },
});

const Item = ({ icon, text, navigation, link = null }) => (
  <View style={Icons.wrapper}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        if (link != null) navigation.navigate(link);
      }}
      style={Icons.container}
    >
      {icon}
    </TouchableOpacity>
    <Text style={Icons.text}>{text}</Text>
  </View>
);
