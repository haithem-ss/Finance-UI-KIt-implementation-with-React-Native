import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import NavBar from "../NavBar";
import { Feather } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import {ConfirmationModal} from "./Modal"

export default function ({ route,navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [visibility,setVisibility]=React.useState(false)
  const [data,setDate]=useState("{}")
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    console.log(data)
    console.log(visibility)
    setDate(data)
    setScanned(true);
    setVisibility(true)
    // alert(`${data}`);
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={styles.container}>
          <NavBar
            title="QR code scanner"
            icon={<Feather name="help-circle" size={24} color="black" />}
            navigation={navigation}
          />
          <Text
            style={{
              color: "#717E95",
              fontFamily: "Medium",
              fontSize: 16,
              textAlign: "center",
              marginVertical: 40,
            }}
          >
            Please Scan The QR Code of the recepient
          </Text>
            <ConfirmationModal 
            navigation={navigation}
            data={data} 
            visibility={visibility}
            handleClose={
              ()=>setVisibility(false)
            }
            />  
          <View style={{}}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{
                width: "100%",
                height: 600,
              }}
            />
            {scanned && (
              <Button
                title={"Tap to Scan Again"}
                onPress={() => setScanned(false)}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
