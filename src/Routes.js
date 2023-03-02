import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
import Send from "./Pages/Send";
import CardCenter from "./Pages/CardCenter";
import InOut from "./Pages/In&Out";
import Profile from "./Pages/Profile";
import Welcome from "./Pages/Welcome";
import Register from "./Pages/Register";
import Personalnfos from "./Pages/Personalnfos";
import Verification from "./Pages/Verification";
import Login from "./Pages/Login";

const LoggedInStackNavigator = createNativeStackNavigator();
const AuthStackNavigator = createNativeStackNavigator();
export function Router() {
  return (
    <>
      <NavigationContainer>

      </NavigationContainer>
    </>
  );
}
export function AuthStack() {
  return <>
          <AuthStackNavigator.Navigator initialRouteName="Welcome">
          <AuthStackNavigator.Screen
            name="Welcome"
            options={{
              headerShown: false,
              presentation: "modal",
              animationTypeForReplace: "push",
              animation: "slide_from_right",
            }}
            component={Welcome}
          />
          <AuthStackNavigator.Screen
            name="Verification"
            options={{
              headerShown: false,
              presentation: "modal",
              animationTypeForReplace: "push",
              animation: "slide_from_right",
            }}
            component={Verification}
          />

          <AuthStackNavigator.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
              presentation: "modal",
              animationTypeForReplace: "push",
              animation: "slide_from_right",
            }}
          />
          <AuthStackNavigator.Screen
            name="Personalnfos"
            component={Personalnfos}
            options={{
              headerShown: false,
              presentation: "modal",
              animationTypeForReplace: "push",
              animation: "slide_from_right",
            }}
          />

        </AuthStackNavigator.Navigator>
  
  </>;
}
export function LoggedInStack() {
    return <>
            <LoggedInStackNavigator.Navigator initialRouteName="Login">
            <LoggedInStackNavigator.Screen
              name="Home"
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              component={Home}
            />
            <LoggedInStackNavigator.Screen
              name="Login"
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              component={Login}
            />


            <LoggedInStackNavigator.Screen
              name="CardCenter"
              component={CardCenter}
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
            />


  
            <LoggedInStackNavigator.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              name="InOut"
              component={InOut}
            />
            <LoggedInStackNavigator.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              name="Profile"
              component={Profile}
            />
            <LoggedInStackNavigator.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              name="Send"
              component={Send}
            />
          </LoggedInStackNavigator.Navigator>
    
    </>;
  }