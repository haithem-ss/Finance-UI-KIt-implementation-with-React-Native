import { useFonts } from "expo-font";

import { Router } from "./src/Routes";
export default function App() {
  const [fontsLoaded] = useFonts({
    Bold: require("./src/assets/fonts/CeraProBold.otf"),
    Medium: require("./src/assets/fonts/CeraProMedium.otf"),
    Light: require("./src/assets/fonts/CeraProLight.otf"),
  });
  return (
    <>
      <Router />
     
    </>
  );
}
