import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View, Platform, Image } from 'react-native'
import React from 'react'
import Title from '@/app/components/Title';
import { DarkModeColors, LightModeColors } from '../../styles/Color';
import { useSelector } from 'react-redux';
import styles from './RotaxStyles';
const RotaxUser = () => {

  const mode = useSelector((state) => state.settings?.mode?.toLowerCase()) || 'light';

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
      ]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.innerContainer}>

        <Title title={"RotaX"} />
        <View>
          <Image />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RotaxUser

