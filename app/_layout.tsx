import { NavigationIndependentTree } from "@react-navigation/native";
import App from "./index";

export default function RootLayout() {
  return (
    <NavigationIndependentTree>
      <App />
    </NavigationIndependentTree>
  );
}