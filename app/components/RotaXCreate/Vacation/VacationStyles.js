import { StyleSheet } from "react-native";
import Color, { DarkModeColors, LightModeColors } from "@/app/styles/Color";

// Default export
const getStyles = (mode) =>
  StyleSheet.create({
    container:{
      backgroundColor: Color.TextColor,
      borderWidth:2,
      margin:20,
      borderColor:DarkModeColors.IconColor,
      borderRadius:20
    },
    innerContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      margin: 10,
      alignItems:'center',
      marginBottom:0,
    },
    text:{
      color:mode === "dark" ? DarkModeColors.TextColor : LightModeColors.TextColor,
      fontSize:17,
      marginLeft:15,
    },
    transportation:{
      marginBottom:10,
      
    }
  });

export default getStyles;
