import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        padding: 10, 
    },
    searchContainer: {
        flex: 1,  
    },
    innerContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    searchIcon:{
        marginRight:10,
        marginLeft:10
    }
});

export default styles