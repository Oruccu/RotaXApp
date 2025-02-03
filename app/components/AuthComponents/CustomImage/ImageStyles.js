import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
      image: {
        width: width, 
        height: height / 1.7,
      },
});

export default styles