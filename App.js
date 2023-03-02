import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Pages/Home";
import Send from "./src/Pages/Send";
import CardCenter from "./src/Pages/CardCenter";
import InOut from "./src/Pages/In&Out";
import Profile from "./src/Pages/Profile";
import { useFonts } from "expo-font";
import Welcome from "./src/Pages/Welcome";
import Register from "./src/Pages/Register";
import Personalnfos from "./src/Pages/Personalnfos"
import Verification from "./src/Pages/Verification";
import Login from "./src/Pages/Login"
const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    Bold: require("./src/assets/fonts/CeraProBold.otf"),
    Medium: require("./src/assets/fonts/CeraProMedium.otf"),
    Light: require("./src/assets/fonts/CeraProLight.otf"),
  });
  return (
    <>

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Home"
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              component={Home}
            />
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              component={Login}
            />
                        <Stack.Screen
              name="Welcome"
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              component={Welcome}
            />
                        <Stack.Screen
              name="Verification"
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              component={Verification}
            />
            <Stack.Screen
              name="CardCenter"
              component={CardCenter}
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="Personalnfos"
              component={Personalnfos}
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
            />

            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              name="InOut"
              component={InOut}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              name="Profile"
              component={Profile}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              name="Send"
              component={Send}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}
