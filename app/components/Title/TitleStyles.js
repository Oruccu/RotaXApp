import Color from "@/app/styles/Color";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        height: 50,
    },
    text: {
        fontSize: 32,
        color: Color.Primary,
        fontWeight: 'condensed',

    }
});

export default styles