import { StyleSheet } from 'react-native';

const MapsModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5, 
  },
  map: {
    flex: 1,
  },
  searchBar: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    zIndex: 2, 
  },
  currentAddress: {
    position: 'absolute',
    top: 60,
    left: 10,
    right: 10,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    zIndex: 2,
  },
  confirmButton: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5,
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MapsModalStyles;
