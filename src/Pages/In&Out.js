import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";
import { AntDesign } from "@expo/vector-icons";
export default function ({ navigation }) {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <NavBar
        title="In & Out"
        icon={<AntDesign name="filter" size={24} color="black" />}
        navigation={navigation}
      />
      <Amount amount={"2,489,325,479"} />
      <History />
    </View>
  );
}

const Amount = ({ amount, navigation }) => (
  <View style={AmoutStyle.container}>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={AmoutStyle.subText}>Active Balence</Text>
      <Text style={AmoutStyle.mainText}>{amount} DZD</Text>
    </View>
  </View>
);
const AmoutStyle = StyleSheet.create({
  container: {
    flex: 1.22,
    backgroundColor: "white",
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

const History = () => (
  <View style={HistoryStyle.container}>
    <ScrollView>
      <HistoryDate date="April 2022" />
      <InOutItem otherParty="Anna" amount={-1500} date="25 Mars 2032" />
      <InOutItem otherParty="Anna" amount={+85000} date="25 Mars 2032" />
      <InOutItem otherParty="Anna" amount={-1500} date="25 Mars 2032" />
      <HistoryDate date="Mai 2022" />
      <InOutItem otherParty="Anna" amount={-1500} date="25 Mars 2032" />
      <InOutItem otherParty="Anna" amount={-1500} date="25 Mars 2032" />

      <HistoryDate date="June 2022" />
      <InOutItem otherParty="Anna" amount={-1500} date="25 Mars 2032" />
      <InOutItem otherParty="Anna" amount={-1500} date="25 Mars 2032" />
      <InOutItem otherParty="Anna" amount={-1500} date="25 Mars 2032" />
    </ScrollView>
  </View>
);
const HistoryDate = ({ date }) => (
  <View style={HistoryStyle.date}>
    <Text style={HistoryStyle.dateText}>{date}</Text>
  </View>
);

const HistoryStyle = StyleSheet.create({
  container: {
    flex: 6,
    borderTopWidth: 1,
    borderTopColor: "#F7F9FC",
  },
  date: {
    margin: 20,
    
  },
  dateText: {
    color: "#717E95",
    fontSize: 16,
    fontFamily: "Medium",
  },
});

const InOutItem = ({ otherParty, date, amount }) => (
  <TouchableOpacity activeOpacity={0.6} style={section.creditCardItem}>
    <View style={section.icon}>
      <Text style={{ color: "#005CEE", fontSize: 20 }}>
        {otherParty.charAt(0).toUpperCase()}
      </Text>
    </View>
    <View style={section.creditCardInfos}>
      <Text style={section.creditCardType}>{otherParty}</Text>
      <Text style={section.creditCardNumber}>{date}</Text>
    </View>
    {amount > 0 && (
      <Text style={section.creditCardBalencePostive}>{amount} DZD</Text>
    )}
    {amount <= 0 && (
      <Text style={section.creditCardBalenceNegative}>{amount} DZD</Text>
    )}
  </TouchableOpacity>
);

const section = StyleSheet.create({
  arrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Medium",

  },
  content: {
    borderRadius: 20,
    backgroundColor: "white",
    marginTop: 20,
  },
  creditCardItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    fontFamily: "Medium",

  },
  icon: {
    borderRadius: 10,
    aspectRatio: 1,
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEF2F8",
  },
  creditCardType: {
    fontSize: 15,
    fontFamily: "Medium",
  
},
  creditCardNumber: {
    color: "#94A0B4",
    fontSize: 10,
    fontFamily: "Medium",

  },
  creditCardBalencePostive: {
    color: "#19B832",
    fontWeight: "600",
    fontFamily: "Medium",

  },
  creditCardBalenceNegative: {
    color: "red",
    fontFamily: "Medium",

    fontWeight: "600",
  },
  creditCardInfos: {
    flex: 1,
    marginLeft: 20,
    fontFamily: "Medium",

  },
});
