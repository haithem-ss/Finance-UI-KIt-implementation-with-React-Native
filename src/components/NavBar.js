import { View, TouchableOpacity, StyleSheet, Text, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import React from "react";
import { authService } from "../Services/AuthService";
export default NavBar = ({
  title,
  icon,
  navigation,
  color = "white",
  alert = false,
  alertText,
}) => (
  <>
    <View style={[NavBarStyle.container, { backgroundColor: color }]}>
      <AntDesign
        name="arrowleft"
        size={24}
        color="black"
        onPress={() => navigation.goBack(null)}
      />

      <Text style={NavBarStyle.text}>{title}</Text>
      {title === "Card Center" ? (
        <>
          <CustomMenu icon={icon} navigation={navigation} />
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (alert)
              Alert.alert(
                "Create an account",
                "Create a STREAM account by enterning your personal informations",
                [
                  {
                    text: "OK",
                    style: "cancel",
                  },
                ],
                {
                  cancelable: true,
                }
              );
            if (title === "Profile") authService.logout();
          }}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  </>
);

const NavBarStyle = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 17.5,
    position: "relative",
    top: 0,
  },
  text: {
    fontSize: 20,
    color: "black",
    fontFamily: "Bold",
    flex: 1,
    textAlign: "center",
  },
});

const CustomMenu = ({ icon, navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  return (
    <>
      <TouchableOpacity onPress={showMenu}>{icon}</TouchableOpacity>
      <Menu
        use
        TransitionProps={{
          timeout: 0,
        }}
        visible={visible}
        onRequestClose={hideMenu}
        style={{ width: 200 }}
      >
        <MenuItem onPress={() => navigation.navigate("NewCard")}>
          Issue New Card
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Report A probleme</MenuItem>
      </Menu>
    </>
  );
};
