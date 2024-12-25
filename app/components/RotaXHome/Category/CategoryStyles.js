import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 10,
    },
    itemContainer: {
        alignItems: 'center',
        marginHorizontal: 10, // Her kategori arasına boşluk
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    name: {
        fontSize: 14,
        color: '#333',
    },
});

export default styles