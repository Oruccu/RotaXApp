import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from '@/app/components/Button'
import  getStyles  from "./WhichDayStyles";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';

const WhichDay = ({day,Increase ,Decrease}) => {
const { t } = useTranslation();
const mode = useSelector((state) => state.settings?.mode?.toLowerCase()) || "light";
  const styles = getStyles(mode);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{t("whichDay")}</Text>
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

