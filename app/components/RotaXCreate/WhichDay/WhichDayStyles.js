import { StyleSheet } from "react-native";
import { DarkModeColors, LightModeColors } from "@/app/styles/Color";

export const getStyles = (mode) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: 20,
    },
    textContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 15,
      color: mode === "dark" ? DarkModeColors.TextColor : LightModeColors.TextColor,
      textAlign: "left",
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "center",
    },
    dayText: {
      fontSize: 24,
      fontWeight: "bold",
      marginHorizontal: 10,
      marginTop: 5,
    },
  });
