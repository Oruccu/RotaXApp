import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { db } from '@/app/config/firebase';
import { collection, addDoc } from 'firebase/firestore';

import styles from './RotaxCreateStyles';

import Title from '@/app/components/Title';
import Input from '@/app/components/Input';
import WhichDay from '@/app/components/RotaXCreate/WhichDay';
import MapsModal from '@/app/components/Modals/MapsModal';

import { DarkModeColors, LightModeColors } from '../../styles/Color';

const RotaxCreate = () => {
  const { t } = useTranslation();
  const mode = useSelector((state) => state.settings?.mode?.toLowerCase()) || 'light';
  const [rotaX, setRotaX] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');

  const [day, setDay] = useState(1);
  const [vacations, setVacations] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const Increase = () => setDay(day + 1);
  const Decrease = () => day > 1 && setDay(day - 1);

  const handleTouchMaps = () => {
    setModalVisible(true);
  };

  const handleLocationSelect = (location) => {
    setVacations((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        day: day,
        placeName: location.address,
        location: location,
      },
    ]);
    setSelectedLocation(location);
    setModalVisible(false);
  };

  const handleSaveToFirebase = async () => {
    try {
      const payload = {
        rotaXName: rotaX || '',
        accommodation: accommodation || '',
        city: city || '',
        district: district || '',
        vacationPlan: vacations || [],
        createdAt: new Date(),
      };

      const docRef = await addDoc(collection(db, 'rotaxPlans'), payload);
      console.log('Document added. ID:', docRef.id);
      alert('Data saved successfully!');
      setRotaX('');
      setAccommodation('');
      setCity('');
      setDistrict('');
      setDay(1);
      setVacations([]);
      setSelectedLocation(null);

    } catch (error) {
      console.error('Error occurred while adding data to Firestore:', error);
      alert('Failed to save data.');
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            mode === 'dark'
              ? DarkModeColors.Background
              : LightModeColors.Background,
        },
      ]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.innerContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Title title={t('myRotaX')} />

          <Input
            placeholder={t('rotaxNamePlaceholder')}
            theme="RotaX"
            onChangeText={setRotaX}
            value={rotaX}
          />

          <WhichDay
            day={day}
            Increase={Increase}
            Decrease={Decrease}
            t={t}
          />

          <Input
            placeholder={t('accommodation')}
            theme="RotaX"
            onChangeText={setAccommodation}
            value={accommodation}
          />

          <Input
            placeholder={t('placeName')}
            theme="RotaX"
            onChangeText={setCity}
            value={city}
          />

          <Input
            placeholder={t('district')}
            theme="RotaX"
            onChangeText={setDistrict}
            value={district}
          />

          <TouchableOpacity style={styles.mapButton} onPress={handleTouchMaps}>
            <Text style={styles.mapButtonText}>
              {t('selectLocationOnMap') || 'Select Location on Map'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.planListTitle}>
            {t('planList') || 'Plan List:'}
          </Text>

          {vacations.map((item) => (
            <View key={item.id} style={styles.locationItem}>
              <Text style={styles.locationDayText}>
                {item.day}. Day
              </Text>
              <Text>Place: {item.placeName}</Text>
              <Text>
                Location: {item.location?.latitude?.toFixed(5)}, {item.location?.longitude?.toFixed(5)}
              </Text>
            </View>
          ))}

          {vacations.length > 0 && (
            <TouchableOpacity
              onPress={handleSaveToFirebase}
              style={styles.mapButton}
            >
              <Text style={styles.mapButtonText}>
                {t('save') || 'Save'}
              </Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </KeyboardAvoidingView>

      <MapsModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        handleLocationSelect={handleLocationSelect}
        selectedLocation={selectedLocation}
      />
    </SafeAreaView>
  );
};

export default RotaxCreate;
