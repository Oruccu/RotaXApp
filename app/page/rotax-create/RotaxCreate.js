import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';
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

  function Increase() {
    setDay(day + 1); // Correct way to update state
  }

  function Decrease() {
    if (day > 1) {
      setDay(day - 1);
    }
  }
  function hangleTouchMaps() { }

  function addVacation() {
    const newVacation = {
      id: vacations.length + 1,
      vacationDay: `Plan Day ${day} of vacation`,
    };
    setVacations([...vacations, newVacation]);
    setDay(day + 1); 
  }
  return (
    <SafeAreaView style={[
      styles.container,
      { backgroundColor: mode === 'dark' ? DarkModeColors.Background : LightModeColors.Background },
    ]}>
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
      />
      <TouchableOpacity onPress={addVacation}>
        <View style={styles.plusContainer}>
          <IconAntDesing iconName={"pluscircleo"} color={Color.Primary} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RotaxCreate;
