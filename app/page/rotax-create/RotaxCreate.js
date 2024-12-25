import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import styles from './RotaxCreateStyles';
import Title from '@/app/components/Title';
import Input from '@/app/components/Input';
import WhichDay from '@/app/components/RotaXCreate/WhichDay'
const RotaxCreate = () => {
  const [rotaX, setRotaX] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [day, setDay] = useState(1);

  function Increase() {
    setDay(day + 1); // Correct way to update state
  }

  function Decrease() {
    if (day > 1) {
      setDay(day - 1);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title title={"My RotaX"} />
      <Input
        placeholder={"RotaX Name Exp. Italy Traveler"}
        theme={"RotaX"}
        onChangeText={setRotaX}
        value={rotaX}
      />
      <WhichDay day={day} Increase={Increase} Decrease={Decrease} />
      <Input
        placeholder={"Accommodation"}
        theme={"RotaX"}
        onChangeText={setAccommodation}
        value={accommodation}
      />
      <Input
        placeholder={"City"}
        theme={"RotaX"}
        onChangeText={setCity}
        value={city}
      />
      <Input
        placeholder={"District"}
        theme={"RotaX"}
        onChangeText={setDistrict}
        value={district}
      />

    </SafeAreaView>
  );
};

export default RotaxCreate;

