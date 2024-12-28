import Color from "@/app/styles/Color";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      },
      line: {
        height: 1,
        backgroundColor: Color.Secondary, 
        marginTop: 5, 
        width: '100%', 
      },
      languageContainer:{
        flexDirection:'row',
        marginLeft:20
      },
      languageText:{
        fontSize:18,
        marginLeft:20,
        color:Color.Primary,
        marginTop:20,
      },
      modeContainer:{
        flexDirection:'row',
        marginLeft:20
      },
      mode:{
        fontSize:18,
        marginLeft:20,
        color:Color.Primary,
        marginTop:20,
      }
});

export default styles