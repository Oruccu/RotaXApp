import { StyleSheet } from "react-native";
import { LightModeColors } from "../../../styles/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circleContainer: {
    height: 200,
  },
  welcomeContainer: {
    alignSelf: 'flex-start',
    marginTop: 10,
    padding: 10,
    textAlign: 'left',
  },
  innerContainer: {
    flex: 1,
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
    marginBottom: 20,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 2,
  },
  signUpButton: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 4,
    marginLeft:20,
  },
});

export default styles;
