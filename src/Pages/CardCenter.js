import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Tab from "../components/Card Center/Tab";
import CreditCardTemplate from "../components/Card Center/CreditCardTemplate";
import NavBar from "../components/NavBar";
export default function ({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <NavBar navigation={navigation} title="Card Center" icon={<Entypo name="dots-three-vertical" size={18} color="black" />}/>
      <CreditCardTemplate />
      <Tab />
    </View>
  );
}
