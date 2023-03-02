import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import NavBar from "../components/NavBar";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F7F9FC" }}>
      <Amount navigation={navigation} amount={"2,485"} />
      <View style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
        <Contact />
        <View
          style={{ height: 1, backgroundColor: "white", marginHorizontal: 20 }}
        ></View>
        <Category />
      </View>
      <Numpad />
    </View>
  );
}

const Amount = ({ amount, navigation }) => (
  <View style={AmoutStyle.container}>
    <ImageBackground
      source={require("../assets/Background.png")}
      resizeMode="cover"
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <NavBar
        title="Send"
        icon={
          <AntDesign name="filter" size={24} color="rgba(52, 52, 52, alpha)" />
        }
        navigation={navigation}
        color="rgba(52, 52, 52, alpha)"
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={AmoutStyle.subText}>Amount</Text>
        <Text style={AmoutStyle.mainText}>{amount} DZD</Text>
      </View>
    </ImageBackground>
  </View>
);
const AmoutStyle = StyleSheet.create({
  container: {
    flex: 1.22,
    backgroundColor: "#F7F9FC",
    justifyContent: "center",
    alignItems: "center",
  },
  subText: {
    color: "#5B667A",
    fontFamily: "Medium",
    fontSize: 16,
  },
  mainText: {
    color: "black",
    fontFamily: "Bold",
    fontSize: 24,
  },
});

const Contact = () => (
  <View style={ContactStyle.container}>
    <Image
      style={ContactStyle.image}
      source={require("../assets/profile.png")}
    ></Image>
    <View style={{ flex: 1, justifyContent: "center", marginLeft: 20 }}>
      <Text style={ContactStyle.subText}>SAIDA Haithem</Text>
    </View>
    <TouchableOpacity style={ContactStyle.button}>
      <Entypo name="plus" size={24} color="#717E95" />
    </TouchableOpacity>
  </View>
);
const ContactStyle = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    margin: 20,
  },
  subText: {
    color: "black",
    fontFamily: "Medium",
    fontSize: 16,
    textAlign: "left",
  },
  mainText: {
    color: "#94A0B4",
    marginBottom: 4,
    fontFamily: "Medium",
    fontSize: 12,
  },
  button: {
    backgroundColor: "white",
    aspectRatio: 1,
    borderRadius: 8,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    aspectRatio: 1,
  },
});
const Category = () => (
  <View style={ContactStyle.container}>
    <View style={ContactStyle.button}>
      <MaterialIcons name="category" size={24} color="#005CEE" />
    </View>
    <View style={{ flex: 1, justifyContent: "center", marginLeft: 20 }}>
      <Text style={ContactStyle.mainText}>Category</Text>
      <Text style={ContactStyle.subText}>Food</Text>
    </View>
    <TouchableOpacity style={ContactStyle.button}>
      <MaterialIcons name="keyboard-arrow-down" size={28} color="#717E95" />
    </TouchableOpacity>
  </View>
);
const Numpad = () => (
  <View style={NumpadStyle.container}>
    <View style={NumpadStyle.row}>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={NumpadStyle.number}>1 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={NumpadStyle.number}>2 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={NumpadStyle.number}>3 </Text>
      </TouchableOpacity>
    </View>
    <View style={NumpadStyle.row}>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={NumpadStyle.number}>4 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={NumpadStyle.number}>5 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={NumpadStyle.number}>6 </Text>
      </TouchableOpacity>
    </View>
    <View style={NumpadStyle.row}>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={NumpadStyle.number}>7 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={NumpadStyle.number}>8 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={NumpadStyle.number}>9</Text>
      </TouchableOpacity>
    </View>
    <View style={NumpadStyle.row}>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Entypo name="fingerprint" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={NumpadStyle.number}>0 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={NumpadStyle.number}>
          <View>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={NumpadStyle.button}>
      <Text style={NumpadStyle.buttonText}>Send</Text>
    </TouchableOpacity>
  </View>
);
const NumpadStyle = StyleSheet.create({
  container: {
    flex: 2,
    paddingVertical: 28.5,
  },
  number: {
    fontSize: 36,
    width: 36,
  },
  row: {
    paddingHorizontal: 64,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 35,
  },
  button: {
    backgroundColor: "#005CEE",
    borderRadius: 8,
    height: 60,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "Medium",
    fontSize: 18,
  },
});
