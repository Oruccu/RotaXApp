import React, { useRef, useState } from 'react';
import { Modal, View, TextInput, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import styles from './MapsModalStyles';

const MapsModal = ({ modalVisible, closeModal, handleLocationSelect, selectedLocation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [markerCoordinate, setMarkerCoordinate] = useState(
    selectedLocation
      ? { latitude: selectedLocation.latitude, longitude: selectedLocation.longitude }
      : null
  );

  const mapRef = useRef(null);

  const handleAddressSearch = async () => {
    try {
      const url = 'https://nominatim.openstreetmap.org/search';
      const response = await axios.get(url, {
        params: {
          q: searchQuery,
          format: 'json',
          limit: 1,
          addressdetails: 1,
        },
      });

      if (response.data && response.data.length > 0) {
        const { lat, lon, display_name } = response.data[0];

        setCurrentAddress(display_name);

        const latitude = parseFloat(lat);
        const longitude = parseFloat(lon);
        setMarkerCoordinate({ latitude, longitude });

        mapRef.current?.animateToRegion(
          {
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
          1000
        );
      } else {
        console.log('No results found from Nominatim.');
      }
    } catch (error) {
      console.error('Error fetching location from OSM Nominatim:', error);
    }
  };

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarkerCoordinate({ latitude, longitude });

    mapRef.current?.animateToRegion(
      {
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      600
    );
  };

  const onConfirmLocation = () => {
    if (!markerCoordinate) {
      return;
    }

    handleLocationSelect({
      latitude: markerCoordinate.latitude,
      longitude: markerCoordinate.longitude,
      address: currentAddress || 'Selected location address',
    });

    setSearchQuery('');
    setCurrentAddress('');
    setMarkerCoordinate(null);
  };

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={handleMapPress}
          >
            {markerCoordinate && <Marker coordinate={markerCoordinate} />}
          </MapView>

          <TextInput
            style={styles.searchBar}
            placeholder="Search for a location..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleAddressSearch}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirmLocation}>
              <Text style={styles.buttonText}>Select Location</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
};

export default MapsModal;
