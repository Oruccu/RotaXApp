import { StyleSheet } from "react-native";
import { LightModeColors, DarkModeColors } from "@/app/styles/Color";

const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Background,
    paddingHorizontal: 20,
  },
  line: {
    height: 1,
    backgroundColor: theme.Secondary,
    marginTop: 5,
    width: '100%',
  },
  languageContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  languageText: {
    fontSize: 18,
    marginLeft: 20,
    color: theme.Primary,
    marginTop: 20,
  },
  modeContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  mode: {
    fontSize: 18,
    marginLeft: 20,
    color: theme.Primary,
    marginTop: 20,
  },
});

export default createStyles;
