import { FlatList, SafeAreaView, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import styles from './RotaxCreateStyles';
import Title from '@/app/components/Title';
import Input from '@/app/components/Input';
import WhichDay from '@/app/components/RotaXCreate/WhichDay';
import Vacation from '@/app/components/RotaXCreate/Vacation';
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import Color, { DarkModeColors, LightModeColors } from '../../styles/Color';
import IconAntDesing from '@/app/components/Icons/IconExpo/IconAntDesing';
import MapsModal from '@/app/components/Modals/MapsModal';

const RotaxCreate = () => {
  const [rotaX, setRotaX] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [transportation, setTransportation] = useState('');
  const [vacations, setVacations] = useState([{ id: 1, vacationDay: 'Plan Day 1 of vacation' }]);
  const [day, setDay] = useState(1);
  const { t } = useTranslation();
  const mode = useSelector((state) => state.settings?.mode?.toLowerCase()) || 'light';
  const [modalVisible, setModalVisible] = useState(false); // Modal görünürlüğü
  const [selectedLocation, setSelectedLocation] = useState(null); 

  function Increase() {
    setDay(day + 1);
  }

  function Decrease() {
    if (day > 1) {
      setDay(day - 1);
    }
  }
  function hangleTouchMaps() {
    setModalVisible(true); // Modalı aç
  }

  function handleLocationSelect(location) {
    setSelectedLocation(location); // Seçilen konumu kaydet
    setModalVisible(false); // Modalı kapat
  }

  function addVacation() {
    const newVacation = {
      id: vacations.length + 1,
      vacationDay: `Plan Day ${day} of vacation`,
    };
    setVacations([...vacations, newVacation]);
  }

  return (
    <SafeAreaView style={[
      styles.container,
      { backgroundColor: mode === 'dark' ? DarkModeColors.Background : LightModeColors.Background },
    ]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Title title={t("myRotaX")} />
          <Input
            placeholder={t("rotaxNamePlaceholder")}
            theme={"RotaX"}
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
            theme={"RotaX"}
            onChangeText={setAccommodation}
            value={accommodation}
          />
          <Input
            placeholder={t("city")}
            theme={"RotaX"}
            onChangeText={setCity}
            value={city}
          />
          <Input
            placeholder={t("district")}
            theme={"RotaX"}
            onChangeText={setDistrict}
            value={district}
          />
          <FlatList
            data={vacations}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Vacation
                vacationDay={item.vacationDay}
                hangleTouchMaps={hangleTouchMaps}
                transportation={transportation}
              />
            )}
            scrollEnabled={false} 
          />
          <TouchableOpacity onPress={addVacation}>
            <View style={styles.plusContainer}>
              <IconAntDesing iconName={"pluscircleo"} color={Color.Primary} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Modal */}
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
