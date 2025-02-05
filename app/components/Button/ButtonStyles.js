import Color from "@/app/styles/Color";
import { StyleSheet } from "react-native";
import { LightModeColors } from "../../styles/Color";

export default {
  Intro: StyleSheet.create({
    container: {
      margin: 2,
      backgroundColor: LightModeColors.Primary,
      borderRadius: 25,
    },
    button: {
      padding: 12,
      fontSize: 15,
      color: 'white',
      width: 250,
      textAlign: 'center'
    },
  }),
  ForgotPass: StyleSheet.create({
    container: {
      margin: 2,
      alignItems: 'flex-end'
    },
    button: {
      padding: 12,
      fontSize: 13,
      color: LightModeColors.IconColor,
    },
  }),
  Auth: StyleSheet.create({
    container: {
      marginLeft: 20,
      width: 100,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: LightModeColors.Primary,
    },
    button: {
      padding: 12,
      fontSize: 13,
      color: 'white',
    },
  }),
  Day: StyleSheet.create({
    container: {
      margin: 2,
      backgroundColor: Color.IconColor,
      borderRadius: 2,
    },
    button: {
      padding: 8,
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold'
    },
  }),
  Settings: StyleSheet.create({
    container: {
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderRadius: 15,
      borderColor: Color.IconColor
    },
    button: {
      color: Color.IconColor
    }
  }),

};
