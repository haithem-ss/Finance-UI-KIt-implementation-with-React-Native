import { ImageBackground, TouchableOpacity, Text } from "react-native";
export default function ({ navigation }) {
  return (
    <>
      <ImageBackground
        source={require("../assets/Splash.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
        }}
        imageStyle={{
          resizeMode: "cover",
          top: 0,
          position: "absolute",
        }}
      >
        <TouchableOpacity
        activeOpacity={0.6}
        onPress={()=> navigation.navigate("Register")}
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            backgroundColor: "#005CEE",
            borderRadius:12,
            boxShadow:" 0px 4px 16px #75AFFF",
            shadowColor:"#75AFFF",
            shadowOffset:{
                width: 0, height: 4
            },
            elevation: 20,
            marginBottom:26
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
            Continue
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}
