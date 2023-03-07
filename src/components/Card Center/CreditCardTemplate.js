import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import React from "react";

export default function () {

  
  const isCarousel = React.useRef(null);

  return (
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
        data={[{
            type:"Black"
        },
    {
        type:"Blue"
    }]}
        renderItem={creditCard}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={320}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
}

const creditCard = ({ item, index }) => (
  <View
    style={{
      marginTop: 80,
      flex: 0.4,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
    }}
  >

    <View style={[CreditCard.container,item.type==="Blue"? {backgroundColor:"#005CEE"}:{}]}>
      <View style={CreditCard.TopSection}>
        <Image source={require("../../assets/Ship.png")} />
        <Image source={require("../../assets/CardLogo.png")} />
      </View>
      <View style={{ flex: 1 }}>
        <View style={CreditCard.MiddleSection}>
          <Text style={CreditCard.MiddleSectionText}>5678 8759 6589 6254</Text>
        </View>
        <View style={CreditCard.BottomSection}>
          <View>
            <Text style={CreditCard.BottomSectionInfos}>SAIDA haithem</Text>
            <Text style={CreditCard.BottomSectionInfos}>05/05/24</Text>
          </View>
          <Image source={require("../../assets/Visa.png")} />
        </View>
      </View>
    </View>
  </View>
);
const CreditCard = StyleSheet.create({
  container: {
    height: 200,
    width: 320,
    backgroundColor: "black",
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
