import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Button from '@/app/components/Button';
import Title from '@/app/components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, setMode } from '@/app/hooks/settingsSlice';
import { useTranslation } from 'react-i18next';
import createStyles from "./SettingsStyles";
import { LightModeColors, DarkModeColors } from "@/app/styles/Color";

const Settings = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { mode } = useSelector((state) => state.settings);

  // Tema seçimi
  const theme = mode === "Dark" ? DarkModeColors : LightModeColors;

  // Dinamik styles
  const styles = createStyles(theme);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    dispatch(setLanguage(lang));
  };

  const handleModeChange = (mode) => {
    dispatch(setMode(mode));
  };

  return (
    <SafeAreaView style={styles.container}>
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
