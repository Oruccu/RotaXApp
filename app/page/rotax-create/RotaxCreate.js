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
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';

// Güncellenmiş styles dosyası
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

  const hangleTouchMaps = () => {
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
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          
          <Title title={t("myRotaX")} />

          <Input
            placeholder={t("rotaxNamePlaceholder")}
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
            placeholder={t("accommodation")}
            theme="RotaX"
            onChangeText={setAccommodation}
            value={accommodation}
          />

          <Input
            placeholder={t("placeName")}
            theme="RotaX"
            onChangeText={setCity}
            value={city}
          />

          <Input
            placeholder={t("district")}
            theme="RotaX"
            onChangeText={setDistrict}
            value={district}
          />

          <TouchableOpacity style={styles.mapButton} onPress={hangleTouchMaps}>
            <Text style={styles.mapButtonText}>
              {t("selectLocationOnMap") || 'Select Location on Map'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.planListTitle}>
            {t("planList") || 'Plan List:'}
          </Text>

          {vacations.map((item) => (
            <View key={item.id} style={styles.locationItem}>
              <Text style={styles.locationDayText}>
                {item.day}. Gün
              </Text>
              <Text>Yer: {item.placeName}</Text>
              <Text>
                Konum: {item.location?.latitude?.toFixed(5)}, {item.location?.longitude?.toFixed(5)}
              </Text>
            </View>
          ))}

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
