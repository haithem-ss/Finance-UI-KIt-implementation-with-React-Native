import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import NavBar from "../components/NavBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import StorageService from "../Services/StorageService";
import React from "react";
import { AppContext } from "../Routes";
import { authService } from "../Services/AuthService";
export default function ({ route,navigation }) {
  const {email, adresse, fullName, dob, gender}=route.params;
  const data = React.useContext(AppContext);
  const [selectedCard, selectCardComonent] = CreditCardPicker();
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
            title="Customize Your Card"
            icon={<Entypo name="dots-three-vertical" size={18} color="black" />}
          />
          <View style={{ marginHorizontal: 20 }}>
            <CardType type="Black Card" />
            {selectCardComonent}
            <Text
              style={{
                color: "#5B667A",
                fontSize: 16,
                fontWeight: "400",
                fontFamily: "Medium",
                textAlign: "center",
              }}
            >
              {selectedCard.name}
            </Text>
            <View
              style={{
                marginVertical: 20,
              }}
            >
              <CustomInput
                label="Your Card's Number"
                value={selectedCard.cardNumber}
              />
              <CustomInput label="Your Card's Expiry Date" value="04/25" />
              <CustomInput
                label="Your Card's ATM Withdraw Limit"
                value={
                  selectedCard.ATHWithdrawLimit.toLocaleString("en-US") + " DZD"
                }
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            console.log("Issue Card");
            console.log(data)
            authService.createUserProfile(data.user.uid,email, adresse, fullName, dob, gender,selectedCard);
          }}
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
            Issue Card
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const CardType = () => (
  <View
    style={{
      marginVertical: 20,
    }}
  >
    <Text
      style={{
        color: "#717E95",
        fontFamily: "Medium",
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: 37.5,
        lineHeight: 20,
      }}
    >
      Select the style of card that you wish to issue
    </Text>
  </View>
);

const CustomInput = ({ label, value }) => (
  <View
    style={{
      marginVertical: 10,
    }}
  >
    <Text
      style={{
        color: "#5B667A",
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Medium",
      }}
    >
      {label}
    </Text>
    <TextInput
      style={{
        borderBottomColor: "#BAC3D2",
        borderBottomWidth: 1,
        height: 45,
        fontFamily: "Medium",
      }}
      readOnly={true}
      editable={false}
      value={value}
    />
  </View>
);

function CreditCardPicker() {
  const cardNumber = () => {
    let number = "";
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        number += Math.round(Math.random() * 9);
      }
      number += " ";
    }
    return number;
  };
  const [cardNum] = React.useState(cardNumber());
  const availableCreditCards = [
    {
      type: "Basic",
      name: "STREAM Basic Card",
      ATHWithdrawLimit: 20000,
      color: "grey",
      cardNumber: cardNum,
      owner: "SAIDA Haithem",
      expDate: "05/29",
    },
    {
      type: "Premium",
      name: "STREAM Premium Blue Card",
      ATHWithdrawLimit: 50000,
      color: "#005CEE",
      cardNumber: cardNum,
      owner: "SAIDA Haithem",
      expDate: "05/29",
    },
    {
      type: "Black",
      name: "STREAM Black Card",
      ATHWithdrawLimit: 100000,
      color: "black",
      cardNumber: cardNum,
      owner: "SAIDA Haithem",
      expDate: "05/29",
    },
  ];
  const [value, setValue] = React.useState(availableCreditCards[0]);
  const isCarousel = React.useRef(null);
  return [
    value,
    <View
      style={{
        height: 250,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Carousel
        layout="default"
        ref={isCarousel}
        data={availableCreditCards}
        renderItem={creditCard}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={320}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(e) => setValue(availableCreditCards[e])}
      />
    </View>,
  ];
}

const creditCard = ({ item }) => {
  const CreditCard = StyleSheet.create({
    container: {
      height: 200,
      width: 320,
      backgroundColor: item.color,
      color: "white",
      borderRadius: 12,
      padding: 24,
    },
    TopSection: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flex: 1,
    },
    MiddleSectionText: {
      color: "white",
      fontSize: 16,
      fontFamily: "Medium",
    },
    MiddleSection: {
      justifyContent: "flex-start",
      flex: 1.2,
    },
    BottomSection: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    BottomSectionInfos: {
      color: "white",
      fontSize: 11,
      fontFamily: "Medium",
    },
  });
  return (
    <View
      style={{
        marginTop: 80,
        flex: 0.4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={CreditCard.container}>
        <View style={CreditCard.TopSection}>
          <Image source={require("../assets/Ship.png")} />
          <Image source={require("../assets/CardLogo.png")} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={CreditCard.MiddleSection}>
            <Text style={CreditCard.MiddleSectionText}>{item.cardNumber}</Text>
          </View>
          <View style={CreditCard.BottomSection}>
            <View>
              <Text style={CreditCard.BottomSectionInfos}>{item.owner}</Text>
              <Text style={CreditCard.BottomSectionInfos}>{item.expDate}</Text>
            </View>
            <Image source={require("../assets/Visa.png")} />
          </View>
        </View>
      </View>
    </View>
  );
};
