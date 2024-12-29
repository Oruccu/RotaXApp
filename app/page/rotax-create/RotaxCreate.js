import { SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import styles from './RotaxCreateStyles';
import Title from '@/app/components/Title';
import Input from '@/app/components/Input';
import WhichDay from '@/app/components/RotaXCreate/WhichDay';
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import { DarkModeColors, LightModeColors } from '../../styles/Color';

const RotaxCreate = () => {
  const [rotaX, setRotaX] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [accommodation, setAccommodation] = useState('');
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

  return (
    <SafeAreaView style={[
      styles.container,
      { backgroundColor: mode === 'dark' ? DarkModeColors.Background : LightModeColors.Background  },
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
    </SafeAreaView>
  );
};

export default RotaxCreate;
