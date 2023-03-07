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
import NewCard from "./Pages/NewCard";
import Camera from "./components/QrCode/Camera";
import MyQrCode from "./Pages/MyQrCode";
import { ActivityIndicator, View } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./config/firebase";
import React, { createContext } from "react";
import { db } from "./config/firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import BiometricAuthService from "./Services/BiometricAuthService";
import Congrats from "./Pages/Congrats";

const LoggedInStackNavigator = createNativeStackNavigator();
const LoginStackNavigator = createNativeStackNavigator();
const SignUpStackNavigator = createNativeStackNavigator();
export const AppContext = createContext();

export function Router() {

  const Loader = () => (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator
        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
        color="#005CEE"
        size="large"
      />
    </View>
  );
  const [stack, setStack] = React.useState(Loader);
  const auth = getAuth(app);
  const [user, setUser] = React.useState({});

  const [isAuthed, AuthComponent] = BiometricAuthService();
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const uid = firebaseUser.uid;
        const profile = await getDoc(doc(db, "users", uid));
        if (profile.exists()) {
          setUser((prevState) => ({
            ...prevState,
            ["profile"]: profile.data(),
            ["userRef"]: profile,
            user: firebaseUser,
          }));
          console.log("UserInfos :", profile.data());
          setStack(AuthComponent);
        } else {
          console.log("This user needs to SingUP");
          setStack(Loader)
          setTimeout(()=>setStack(<SignUpStack />),1000)
          
          setUser((prevState) => ({
            ...prevState,
            user: firebaseUser,
          }));
          onSnapshot(doc(db, "users", uid), (profile) => {
            console.log("Current data: ", profile.data());
            setUser((prevState) => ({
              ...prevState,
              ["profile"]: profile.data(),
              ["userRef"]: profile,
            }));
            if (profile.data()){

              setStack(Loader);
              setTimeout(()=>setStack(Congrats),1000)
              setTimeout(() => {
                setStack(LoggedInStack);
              }, 4000);
            }
          });
        }
      } else {
        console.log("No user is logged in");
        setStack(Loader)
        setTimeout(() => setStack(LoginStack),1000)
      }
    });

    return () => unsubscribe();
  }, []);
  React.useEffect(() => {
    if (isAuthed) {
      setStack(Loader);
      setTimeout(() => setStack(LoggedInStack), 1000);
    }
  }, [isAuthed]);

  // empty dependency array ensures function is only called once on mount

  return (
    <>
      <AppContext.Provider value={user}>
        <NavigationContainer>
          {stack}
          {/* {stack === undefined ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator
                style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                color="#005CEE"
                size="large"
              />
            </View>
          ) : (
            <>
              {stack === "SignUp" ? (
                <SignUpStack></SignUpStack>
              ) : (
                <>{stack === "LoggedIn" ? <LoggedInStack /> : <LoginStack />}</>
              )}
            </>
          )} */}
        </NavigationContainer>
      </AppContext.Provider>
    </>
  );
}
function LoginStack() {
  return (
    <>
      <LoginStackNavigator.Navigator initialRouteName="Welcome">
        <LoginStackNavigator.Screen
          name="Welcome"
          options={{
            headerShown: false,
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          component={Welcome}
        />
        <LoginStackNavigator.Screen
          name="Verification"
          options={{
            headerShown: false,
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          component={Verification}
        />

        <LoginStackNavigator.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
        />
      </LoginStackNavigator.Navigator>
    </>
  );
}
function LoggedInStack() {
  return (
    <>
      <LoggedInStackNavigator.Navigator initialRouteName="Home">
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
          name="Camera"
          options={{
            headerShown: false,
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          component={Camera}
        />

        <LoginStackNavigator.Screen
          name="MyQrCode"
          options={{
            headerShown: false,
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          component={MyQrCode}
        />

        <LoginStackNavigator.Screen
          name="CardCenter"
          component={CardCenter}
          options={{
            headerShown: false,
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
        />

        <LoginStackNavigator.Screen
          options={{
            headerShown: false,
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          name="InOut"
          component={InOut}
        />
        <LoginStackNavigator.Screen
          options={{
            headerShown: false,
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          name="Profile"
          component={Profile}
        />
        <LoginStackNavigator.Screen
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
    </>
  );
}

function SignUpStack() {
  return (
    <>
      <SignUpStackNavigator.Navigator initialRouteName="Personalnfos">
        <SignUpStackNavigator.Screen
          name="Personalnfos"
          component={Personalnfos}
          options={{
            headerShown: false,
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
        />
        <LoggedInStackNavigator.Screen
          name="Congrats"
          options={{
            headerShown: false,
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          component={Congrats}
        />
        <LoggedInStackNavigator.Screen
          name="NewCard"
          options={{
            headerShown: false,
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
          component={NewCard}
        />
      </SignUpStackNavigator.Navigator>
    </>
  );
}
