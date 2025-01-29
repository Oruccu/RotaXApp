import { StyleSheet } from 'react-native';
import Color from '../../styles/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
  mapButton: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: Color.Primary, // Color.js dosyasından Primary rengi alır
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  mapButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  planListTitle: {
    fontSize: 20,
    marginTop: 20,
    color: Color.IconColor,
    textAlign: 'center',
  },
  locationItem: {
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  locationDayText: {
    fontWeight: 'bold',
  },
});
