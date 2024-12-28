import { SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import Button from '@/app/components/Button';
import Title from '@/app/components/Title';
import styles from './SettingsStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, setMode } from '@/app/hooks/settingsSlice.js';
import { useTranslation } from 'react-i18next';


const Settings = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { language, mode } = useSelector((state) => state.settings);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); 
    dispatch(setLanguage(lang)); 
  };

  const handleModeChange = (mode) => {
    dispatch(setMode(mode));
  };

  return (
    <SafeAreaView>
      <Title title={"RotaX"} />
      <View style={styles.line} />

      <Text style={styles.languageText}>{t("language")}</Text>
      <View style={styles.languageContainer}>
        <Button
          ButtonName={t("turkish")}
          theme={"Settings"}
          onPress={() => handleLanguageChange('tr')} // 'tr' kodu
        />
        <Button
          ButtonName={t("english")}
          theme={"Settings"}
          onPress={() => handleLanguageChange('en')} // 'en' kodu
        />
        <Button
          ButtonName={t("german")}
          theme={"Settings"}
          onPress={() => handleLanguageChange('de')} // 'de' kodu
        />
      </View>

      <Text style={styles.mode}>{t("mode")}</Text>
      <View style={styles.modeContainer}>
        <Button
          ButtonName={t("dark")}
          theme={"Settings"}
          onPress={() => handleModeChange('Dark')}
        />
        <Button
          ButtonName={t("light")}
          theme={"Settings"}
          onPress={() => handleModeChange('Light')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
