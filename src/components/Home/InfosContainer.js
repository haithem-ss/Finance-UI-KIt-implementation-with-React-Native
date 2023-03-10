import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Chart from "./Chart";
export default function ({ navigation, data }) {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Section title="Card Center" data={data} navigation={navigation} />
        <Section title="Moneytory" data={data} />
        <Section title="In & Out" data={data} />

        {/* <Chart/> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "70%",
    backgroundColor: "#EEF2F8",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
const Section = ({ title, navigation, data }) => (
  <View style={{ paddingTop: 20 }}>
    <View style={section.arrow}>
      <Text style={section.title}>{title}</Text>
      <MaterialIcons
        name="arrow-forward-ios"
        size={15}
        color="#94A0B4"
        onPress={() => navigation.navigate("CardCenter")}
      />
    </View>
    <View style={section.content}>
      {title == "Card Center" && (
        <>
          <CreditCardItem data={data} />
        </>
      )}
      {title == "In & Out" && (
        <>
          {data.transactions.length === 0 ? (
            <View
              style={{
                padding: 20,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Medium",
                  fontSize: 16,
                }}
              >
                No transactions Available
              </Text>
            </View>
          ) : (
            <>
              {data.transactions.map((transaction) => (
                <InOutItem
                  otherParty={transaction.sender}
                  amount={transaction.amount}
                  date={transaction?.date}
                />
              ))}
            </>
          )}
        </>
      )}
      {title == "Moneytory" && <Expenses />}
    </View>
  </View>
);
const CreditCardItem = ({ data }) => (
  <View style={section.creditCardItem}>
    <View style={section.icon}>
      <FontAwesome name="credit-card" size={24} color="#005CEE" />
    </View>
    <View style={section.creditCardInfos}>
      <Text style={section.creditCardType}>{data.cards.name}</Text>
      <Text style={section.creditCardNumber}>{data.cards.cardNumber}</Text>
    </View>
    <Text style={section.creditCardBalence}>
      {data.balence.toLocaleString("en-US")} DZD
    </Text>
  </View>
);
const Expenses = () => (
  <View style={{ padding: 20 }}>
    <View style={ExpensesStyles.topSection}>
      <View style={ExpensesStyles.textContainer}>
        <Text style={ExpensesStyles.title}>Expenses</Text>
        <Text style={ExpensesStyles.date}>01 Mars - 16 Mars</Text>
        <Text style={ExpensesStyles.price}>2,000 DZD</Text>
      </View>
      <View style={ExpensesStyles.chart}>
        <Image source={require("../../assets/chart.png")} />
      </View>
    </View>
    <View style={{ marginTop: 20 }}>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={ExpensesStyles.expenses}>20% Entertainement</Text>
        <Text style={ExpensesStyles.expenses}>30% Rent</Text>
        <Text style={ExpensesStyles.expenses}>12% Food</Text>
      </ScrollView>
    </View>
  </View>
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
  creditCardBalence: {
    fontFamily: "Medium",
    fontWeight: "600",
  },
  creditCardInfos: {
    flex: 1,
    marginLeft: 20,
    fontFamily: "Medium",
  },
});
const ExpensesStyles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  topSection: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  date: {
    color: "#717E95",
    marginVertical: 7,
  },
  price: {
    fontSize: 20,
    fontWeight: "500",
  },
  expenses: {
    fontSize: 14,
    backgroundColor: "#F86F34",
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 30,
    color: "white",
    marginRight: 10,
  },
});
const InOutItem = ({ otherParty, date, amount }) => (
  <View style={section.creditCardItem}>
    <View style={section.icon}>
      <Text style={{ color: "#005CEE", fontSize: 20, fontFamily: "Medium" }}>
        {otherParty.charAt(0).toUpperCase()}
      </Text>
    </View>
    <View style={section.creditCardInfos}>
      <Text style={section.creditCardType}>{otherParty}</Text>
      <Text style={section.creditCardNumber}>{date}</Text>
    </View>
    {amount >= 0 && (
      <Text style={section.creditCardBalencePostive}> {amount.toLocaleString("en-US")} DZD</Text>
    )}
    {amount <= 0 && (
      <Text style={section.creditCardBalenceNegative}>{amount.toLocaleString("en-US")} DZD</Text>
    )}
  </View>
);
