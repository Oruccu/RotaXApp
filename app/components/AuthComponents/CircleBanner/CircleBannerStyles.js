import { StyleSheet } from "react-native";
import { LightModeColors } from "../../../styles/Color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
      },
      circle1: {
        width: 310,
        height: 310,
        borderRadius: 200, 
        backgroundColor: LightModeColors.Secondary,
        position: 'absolute',
        top: -50,
        right: -60,  
        zIndex: 1,
      },
      circle2: {
        width: 280,
        height: 280,
        borderRadius: 150,
        backgroundColor: LightModeColors.Primary,
        position: 'absolute',
        top: -20,
        right: -60,
        zIndex: 2,
        justifyContent: 'center', 
        alignItems: 'center',     
      },

      circle2Text: {
        color: '#fff',         
        fontSize: 30,
        fontWeight: 'condensed',
      },
});

export default styles