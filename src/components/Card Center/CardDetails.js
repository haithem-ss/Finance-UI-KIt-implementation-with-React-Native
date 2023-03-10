import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

export default function ({cardData}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: "white" }}>
      <Item title="Active Balence" amount={cardData.balence.toLocaleString("en-US")} menu={false} />
      <Item title="Single Purchase Limit" amount={cardData.cards.ATHWithdrawLimit.toLocaleString("en-US")} menu={true} />
      <Item title="ATM Withdrawn Limit" amount={cardData.cards.ATHWithdrawLimit.toLocaleString("en-US")} menu={true} />
      <ActionItem action="Change PIN" icon={<MaterialIcons name="security" size={24} color="#005CEE" />}/>
      <ActionItem action="Block Card" icon={<Entypo name="block" size={24} color="#005CEE" />}/>
      <ActionItem action="Change Limit" icon={<AntDesign name="creditcard" size={24} color="#005CEE" />}/>

    </ScrollView>
  );
}

const ItemStyle = StyleSheet.create({
  mainText: {
    color: "#717E95",
    fontFamily: "Medium",
    fontSize: 16,
    marginBottom: 8,
  },
  subText: {
    fontFamily: "Bold",
    fontSize: 16,
    fontWeight: "500",
  },
  container: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F8",
    alignItems: "center",
  },
  Text: {
    color: "#005CEE",
    fontFamily: "Bold",
    marginLeft: 8,
  },
});

const Item = ({ title, amount, menu }) => (
  <View style={ItemStyle.container}>
    <View style={ItemStyle.textWrapper}>
      <Text style={ItemStyle.mainText}>{title}</Text>
      <Text style={ItemStyle.subText}>{amount} DZD</Text>
    </View>
    {!menu ? (
      <>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Feather name="lock" size={20} color="#005CEE" />
          <Text style={ItemStyle.Text}>Show CCV</Text>
        </TouchableOpacity>
      </>
    ) : (
      <TouchableOpacity activeOpacity={0.2}>
        <Entypo name="dots-three-vertical" size={20} color="black" />
      </TouchableOpacity>
    )}
  </View>
);

const ActionItem = ({ icon, action }) => (
  <TouchableOpacity activeOpacity={0.5} style={ActionItemStyle.Item}>
    <View style={ActionItemStyle.Icon}>{icon}</View>
    <Text style={ActionItemStyle.Text}>{action}</Text>
  </TouchableOpacity>
);
const ActionItemStyle = StyleSheet.create({
  Item: {
    justifyContent: "flex-start",
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems:"center",
    padding: 20,
    borderBottomColor: "#EEF2F8",    
  },
  Text: {
    fontSize: 20,
    fontFamily: "Medium",
    marginLeft: 12,

  },
  Icon: {
    aspectRatio: 1,
    backgroundColor: "#EEF2F8",
    alignItems: "center",
    height:44,
    justifyContent:"center",
    borderRadius:8
  },
});
