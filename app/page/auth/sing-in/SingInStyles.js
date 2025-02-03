import { StyleSheet } from "react-native";
import { LightModeColors } from "../../../styles/Color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },

    circle1: {
        width: 300,
        height: 300,
        borderRadius: 150,
        backgroundColor: LightModeColors.IconColor,
        position: 'absolute',
        top: -30,
        right: -70,
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
    },
});

export default styles