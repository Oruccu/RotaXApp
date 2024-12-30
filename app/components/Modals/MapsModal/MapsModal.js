import React from 'react';
import { Modal, View, TextInput, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './MapsModalStyles';

const MapsModal = ({ modalVisible, closeModal, handleLocationSelect, selectedLocation }) => {
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {selectedLocation && <Marker coordinate={selectedLocation} />}
          </MapView>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for a location..."
            onSubmitEditing={(event) => {
              // Google Places API integration can go here
            }}
          />
          <TouchableOpacity style={styles.confirmButton} onPress={() => handleLocationSelect(selectedLocation)}>
            <Text style={styles.buttonText}>Select Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MapsModal;
