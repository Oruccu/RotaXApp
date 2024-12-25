import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    padding: 20,

  },
  textContainer:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    color: '#333',
    textAlign: 'left', // Title aligned to the left
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    
  },
  dayText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop:5
  },
  buttonWrapper: {
    flexDirection: 'row', 
    alignItems: 'center', // Ensures buttons and text are vertically centered
  },
});

export default styles;
