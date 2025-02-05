import { StyleSheet } from "react-native";
import { LightModeColors } from "../../../styles/Color";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    circleContainer: {
        flex: 1
    },
    welcomeContainer: {
        alignSelf: 'flex-start',
        marginTop: 50,
        padding: 10,
        textAlign:'left'
    },
    innerContainer: {
        flex: 1,
        marginBottom:50,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    IconContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',

    },
    signUpButton:{
        flex:1,
        alignItems:'flex-end',
        marginRight:20,
        justifyContent:'flex-start'
    }

});

export default styles