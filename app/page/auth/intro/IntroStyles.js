import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      boldText: {
        fontSize: 22,
        fontWeight: 'condensedBold',
        textAlign: 'center',
        marginBottom:5,
      },
      subtitleText: {
        fontSize: 22,
        fontWeight: 'condensedBold',
        textAlign: 'center', 
        marginBottom:30,
      },
      mainText: {
        fontSize: 24,
        fontFamily: 'MoonDance-Regular', 
        textAlign: 'center',
        marginBottom: 10,
      },
});

export default styles