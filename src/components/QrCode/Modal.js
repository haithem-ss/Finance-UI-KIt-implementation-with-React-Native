import * as React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export default function ModalComponent({ navigation }) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <View style={Icons.wrapper}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          handleModal();
        }}
        style={Icons.container}
      >
        <Modal
          isVisible={isModalVisible}
          animationIn="zoomIn"
          animationOut="zoomOut"
          useNativeDriver={true}
        >
          <View
            style={{
              flex: 0.35,
              backgroundColor: "white",
              borderRadius: 16,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginBottom: 20,
                color: "#717E95",
                fontSize: 20,
                fontFamily: "Medium",
              }}
            >
              What do you want to do ?
            </Text>
            <ActionItem
              action="Scan a QR code"
              link="Camera"
              navigation={navigation}
              icon={<AntDesign name="scan1" size={20} color="#005CEE" />}
            />
            <View style={{ height: 1, backgroundColor: "#EEF2F8" }}></View>
            <ActionItem
              action="Generate a QR code"
              icon={<FontAwesome name="qrcode" size={24} color="#005CEE" />}
              navigation={navigation}
              link="MyQrCode"
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#EEF2F8",
                borderRadius: 16,
                width: "90%",
                marginHorizontal: "5%",
              }}
              onPress={handleModal}
            >
              <Text
                style={{
                  color: "#005CEE",
                  fontFamily: "Medium",
                  fontSize: 16,
                  textAlign: "center",
                  padding: 13,
                }}
              >
                Dismiss
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <FontAwesome name="qrcode" size={30} color="white" />
      </TouchableOpacity>
      <Text style={Icons.text}>QR Code</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
const ActionItem = ({ icon, action, link, navigation }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={ActionItemStyle.Item}
    onPress={() => navigation.navigate(link, { navigation })}
  >
    <View style={ActionItemStyle.Icon}>{icon}</View>
    <Text style={ActionItemStyle.Text}>{action}</Text>
  </TouchableOpacity>
);
const ActionItemStyle = StyleSheet.create({
  Item: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderBottomColor: "#EEF2F8",
  },
  Text: {
    fontSize: 16,
    fontFamily: "Medium",
    marginLeft: 10,
  },
  Icon: {
    aspectRatio: 1,
    backgroundColor: "#EEF2F8",
    alignItems: "center",
    height: 35,
    justifyContent: "center",
    borderRadius: 8,
  },
});

const Icons = StyleSheet.create({
  IconsWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    aspectRatio: 1,
    flex: 1,
    alignItems: "center",
  },
  container: {
    backgroundColor: "#2F75FD",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    flex: 1,
  },
  text: {
    color: "white",
    fontWeight: "500",
    marginTop: 4,
  },
  icon: {
    color: "white",
  },
});
export function ConfirmationModal({ navigation,data ,visibility,handleClose}) {
  const parsedData=JSON.parse(data)
  return (
    <View style={Icons.wrapper}>
        <Modal
          isVisible={visibility}
          animationIn="zoomIn"
          animationOut="zoomOut"
          useNativeDriver={true}
        >
          <View
            style={{
              paddingVertical:25,
              backgroundColor: "white",
              borderRadius: 16,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginBottom: 20,
                color: "#717E95",
                fontSize: 20,
                fontFamily: "Medium",
              }}
            >
              Do You Want To Send Money To {parsedData?.fullName}
            </Text>

            <TouchableOpacity
            onPress={()=>{
              navigation.navigate("SendWithQrCode",{parsedData})
            }}
              style={{
                backgroundColor: "#EEF2F8",
                borderRadius: 16,
                width: "90%",
                marginHorizontal: "5%",
              }}
            >
              <Text
                style={{
                  color: "#005CEE",
                  fontFamily: "Medium",
                  fontSize: 16,
                  textAlign: "center",
                  padding: 13,
                }}
              >
                Yes, I Want To
              </Text>
            </TouchableOpacity>
            <View style={{
              marginVertical:10
            }}></View>
            <TouchableOpacity
            onPress={handleClose}
              style={{
                backgroundColor: "#EEF2F8",
                borderRadius: 16,
                width: "90%",
                marginHorizontal: "5%",
              }}
            >
              <Text
                style={{
                  color: "#005CEE",
                  fontFamily: "Medium",
                  fontSize: 16,
                  textAlign: "center",
                  padding: 13,
                }}
              >
                No, Try Again
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <FontAwesome name="qrcode" size={30} color="white" />
    </View>
  );
}
