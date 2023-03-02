import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";


export default NavBar = ({title,icon,navigation,color="white"}) => (
    <View style={[NavBarStyle.container,{backgroundColor:color}]}>
      <AntDesign name="arrowleft" size={24} color="black" onPress={()=>navigation.goBack(null)} />
      <Text style={NavBarStyle.text}>{title}</Text>
      {icon}
    </View>
  );
  
  const NavBarStyle = StyleSheet.create({
    container: {
      justifyContent: "space-between",
      width:"100%",
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 24,
      paddingVertical: 17.5,
      position:"relative",
      top:0
    },
    text: {
      fontSize: 20,
      color: "black",
      fontFamily: "Bold",
    },
  });