import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from '@/app/components/Button'
import styles from './WhichDayStyles'

const WhichDay = ({day,Increase ,Decrease}) => {


  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Which day are you planning?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button ButtonName={"+"} onPress={Increase} theme={"Day"}/>
        <Text style={styles.dayText}>{day}</Text>
        <Button ButtonName={"-"} onPress={Decrease} theme={"Day"}/>
      </View>
    </View>
  );
};

export default WhichDay;

