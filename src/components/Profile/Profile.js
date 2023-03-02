import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function ({ navigation }) {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <Title title="Personal information" />
        <View
          style={{
            height: 1,
            backgroundColor: "#F7F9FC",
            marginHorizontal: 20,
          }}
        ></View>
        <Item title="Account Number" value="202034038896" />
        <View
          style={{
            height: 1,
            backgroundColor: "#F7F9FC",
            marginHorizontal: 20,
          }}
        ></View>
        <Item title="Phone Number" value="+21 35 41 01 89 63" />
        <View
          style={{
            height: 1,
            backgroundColor: "#F7F9FC",
            marginHorizontal: 20,
          }}
        ></View>
        <Item title="Email" value="h_saida@estin.dz" />
        <View
          style={{
            height: 1,
            backgroundColor: "#F7F9FC",
            marginHorizontal: 20,
          }}
        ></View>
        <Title title="Personal information" />
        <View
          style={{
            height: 1,
            backgroundColor: "#F7F9FC",
            marginHorizontal: 20,
          }}
        ></View>
        <Item title="KTP" value="332425110288XXXX" />
        <View
          style={{
            height: 1,
            backgroundColor: "#F7F9FC",
            marginHorizontal: 20,
          }}
        ></View>
        <Item title="Adresse" value="Constantine, Algeria" />
        <View
          style={{
            height: 1,
            backgroundColor: "#F7F9FC",
            marginHorizontal: 20,
          }}
        ></View>
        <Title title="Device information" />
        <View
          style={{
            height: 1,
            backgroundColor: "#F7F9FC",
            marginHorizontal: 20,
          }}
        ></View>
        <Item title="Primary Device" value="Condor P6 Pro" />
        <View
          style={{
            height: 1,
            backgroundColor: "#F7F9FC",
            marginHorizontal: 20,
          }}
        ></View>
        <Item title="App Version" value="2.25.0(152)" />
        <View
          style={{
            height: 1,
            backgroundColor: "#F7F9FC",
            marginHorizontal: 20,
          }}
        ></View>
      </ScrollView>
    </View>
  );
}
const Title = ({ title }) => (
  <View style={Profile.titleContainer}>
    <Text style={Profile.title}>{title}</Text>
  </View>
);

const Item = ({ title, value }) => (
  <View style={Profile.itemContainer}>
    <Text style={Profile.itemTitle}>{title}</Text>
    <Text style={Profile.itemValue}>{value}</Text>
  </View>
);

const Profile = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: "Medium",
    color: "#94A0B4",
  },
  titleContainer: {
    margin: 20,
  },
  itemContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTitle: {
    color: "#5B667A",
    fontFamily: "Medium",
    fontSize: 16,
  },
  itemValue: {
    color: "#000000",
    fontFamily: "Medium",
    fontSize: 16,
  },
});
