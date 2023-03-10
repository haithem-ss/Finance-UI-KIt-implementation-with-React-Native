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
import React from "react";
import VirtualKeyboard from "react-native-virtual-keyboard";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import MoneyServices from "../Services/MoneyServices";
import { AppContext } from "../Routes";

export default function ({ navigation }) {
  const [amount, NumpadComponent] = Numpad();
  const data = React.useContext(AppContext);
  async function handleClick() {
    console.log("Sending Money");
    MoneyServices.requestMoney(data.user, amount, data.updateState);
    navigation.navigate("Congrats", {
      message:
        "Great news, " +
        data.user.fullName +
        "! Your transaction was successful! Funds transferred as instructed. Thanks for banking with us!",
    });
  }
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
            />
            {/* <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={[AmoutStyle.subText, { fontSize: 20 }]}>To</Text>
              <Text style={[AmoutStyle.mainText, { fontSize: 24 }]}>
                SAIDA Haithem
              </Text>
            </View> */}
          </View>
          {NumpadComponent}
          <ConfirmationButton handleClick={() => handleClick()} />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const Amount = ({ amount, navigation }) => (
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
        title="Request money"
        icon={<AntDesign name="filter" size={24} color="white" />}
        navigation={navigation}
        color="rgba(52, 52, 52, alpha)"
      />
      <Header />

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={AmoutStyle.subText}>Amount</Text>
        <Text style={AmoutStyle.mainText}>
          {amount.toLocaleString("en-US")} DZD
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

const Numpad = () => {
  const [amount, setAmount] = React.useState("");
  return [
    amount,
    // <View style={NumpadStyle.container}>
    //   <View style={NumpadStyle.row}>
    //     <TouchableOpacity
    //       style={{
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //       onPress={() => setAmount((exAmount) => exAmount + 1)}
    //     >
    //       <Text style={NumpadStyle.number}>1</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() => setAmount((exAmount) => exAmount + 2)}
    //       style={{
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Text style={NumpadStyle.number}>2</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() => setAmount((exAmount) => exAmount + 3)}
    //       style={{
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Text style={NumpadStyle.number}>3 </Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={NumpadStyle.row}>
    //     <TouchableOpacity
    //       onPress={() => setAmount((exAmount) => exAmount + 4)}
    //       style={{
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Text style={NumpadStyle.number}>4 </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() => setAmount((exAmount) => exAmount + 5)}
    //       style={{
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Text style={NumpadStyle.number}>5 </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() => setAmount((exAmount) => exAmount + 6)}
    //       style={{
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Text style={NumpadStyle.number}>6 </Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={NumpadStyle.row}>
    //     <TouchableOpacity
    //       onPress={() => setAmount((exAmount) => exAmount + 7)}
    //       style={{
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Text style={NumpadStyle.number}>7 </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() => setAmount((exAmount) => exAmount + 8)}
    //       style={{
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Text style={NumpadStyle.number}>8 </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() => setAmount((exAmount) => exAmount + 9)}
    //       style={{
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Text style={NumpadStyle.number}>9</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={NumpadStyle.row}>
    //     <TouchableOpacity
    //       style={{
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <View></View>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() => setAmount((exAmount) => exAmount + 0)}
    //       style={{
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Text style={NumpadStyle.number}>0 </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={{
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <View style={NumpadStyle.number}>
    //         <Ionicons name="backspace-outline" size={24} color="black" />
    //         {/* <Ionicons name="arrow-back" size={24} color="black" /> */}
    //       </View>
    //     </TouchableOpacity>
    //   </View>
    // </View>,
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
const ConfirmationButton = ({ handleClick }) => (
  <TouchableOpacity
    onPress={handleClick}
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
      Request Money
    </Text>
  </TouchableOpacity>
);
const Header = () => (
  <View style={HeaderStyle.container}>
    <Text style={HeaderStyle.title}>Request Money From The Bank</Text>
    <Text style={HeaderStyle.text}>
      Request The Amount Of Money That You Wish
    </Text>
  </View>
);
const HeaderStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#293345",
    fontFamily: "Medium",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 11,
  },
  text: {
    color: "#717E95",
    fontFamily: "Medium",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 37.5,
    lineHeight: 20,
  },
});
