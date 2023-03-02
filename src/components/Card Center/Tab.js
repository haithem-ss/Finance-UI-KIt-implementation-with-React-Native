import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Text } from "react-native";
import CardDetails from "./CardDetails";
const FirstRoute = () => (
  <CardDetails/>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
const renderTabBar = (props) => (
  <TabBar
    {...props}
    pressColor={"white"}
    indicatorStyle={{ backgroundColor: "#005CEE", color: "black",height:3,borderRadius:200}}
    style={{ backgroundColor: "white", color: "black",borderColor:"#EEF2F8",borderWidth:1,borderBottomWidth:0}}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{
          color: "black",
          fontFamily: "Medium",
          fontWeight: "500",
          fontSize: 16,
          padding:14
        }}
      >
        {route.title}
      </Text>
    )}
  />
);

export default function () {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Card Details" },
    { key: "second", title: "Transactions" },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
