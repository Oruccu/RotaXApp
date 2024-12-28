import Color from "@/app/styles/Color";
import { StyleSheet } from "react-native";

export default {
  Auth: StyleSheet.create({
    // Add your Auth-specific styles here
  }),
  Day: StyleSheet.create({
    container: {
      margin: 2,
      backgroundColor: Color.IconColor, 
      borderRadius:2,
    },
    button: {
      padding: 8,
      fontSize:15,
      color:'white',
      fontWeight:'bold'
    },
  }),
  Settings: StyleSheet.create({
    container:{
      margin:10,
      borderWidth:1,
      padding:10,
      borderRadius:15,
      borderColor:Color.IconColor
    },
    button:{
      color:Color.IconColor
    }
  }),
  
};
