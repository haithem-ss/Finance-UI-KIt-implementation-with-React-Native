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
import React from "react";
import VirtualKeyboard from "react-native-virtual-keyboard";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import MoneyServices from "../Services/MoneyServices"
import { AppContext } from "../Routes";

export default function ({ route,navigation }) {
  const {parsedData}=route.params
  const [amount, NumpadComponent] = Numpad();
  const {user,profile,updateState} = React.useContext(AppContext);
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "rgba(52, 52, 52, alpha)",
        }}
      >
        <ImageBackground
          source={require("../assets/Background.png")}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          <View style={{ flex: 0.75 }}>
            <Amount
              navigation={navigation}
              amount={amount.toLocaleString("en-US")}
              balence={profile.balence}
            />
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={[AmoutStyle.subText,{fontSize:20}]}>To</Text>
              <Text style={[AmoutStyle.mainText,{fontSize:24}]}>{parsedData?.fullName}</Text>
            </View>
          </View>
          {/*<View style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
             <Contact /> 
             <View
              style={{
                height: 1,
                backgroundColor: "white",
                marginHorizontal: 20,
              }}
            ></View>
            <Category /> 
          </View>*/}
          {NumpadComponent}
          <ConfirmationButton callback={()=>MoneyServices.createTransaction(user.uid,profile,parsedData,parseInt(amount),profile.balence,updateState)} />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const Amount = ({ amount, navigation,balence }) => (
  <View style={AmoutStyle.container}>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <NavBar
        title="Send With Qr Code"
        icon={
          <AntDesign name="filter" size={24} color="rgba(52, 52, 52, alpha)" />
        }
        navigation={navigation}
        color="rgba(52, 52, 52, alpha)"
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={AmoutStyle.subText}>Amount</Text>
        <Text style={AmoutStyle.mainText}>
        {/* {amount.toLocaleString("en-US")} DZD */}
          {amount <= balence ?<> {amount.toLocaleString("en-US")} DZD</> :<Text>You dont have money</Text>  }
        </Text>
      </View>
    </View>
  </View>
);
const AmoutStyle = StyleSheet.create({
  container: {
    flex: 1.22,
    justifyContent: "center",
    alignItems: "center",
  },
  subText: {
    color: "#5B667A",
    fontFamily: "Medium",
    fontSize: 24,
  },
  mainText: {
    color: "black",
    fontFamily: "Bold",
    fontSize: 32,
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

const Numpad = () => {
  const [amount, setAmount] = React.useState("");
  return [
    amount,
   
    <View
      style={{
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <VirtualKeyboard
        clearOnLongPress={true}
        color="black"
        pressMode="string"
        textStyle={{
          fontFamily: "Medium",
          fontSize: 27,
        }}
        cellStyle={{
          margin: 10,
        }}
        onPress={(val) => setAmount(val)}
      />
    </View>,
  ];
};
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
const ConfirmationButton = ({callback}) => (
  <TouchableOpacity
  onPress={callback}
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
      Transfer Money
    </Text>
  </TouchableOpacity>
);
