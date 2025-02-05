import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import styles from './IntroStyles'
import CustomImage from '@/app/components/AuthComponents/CustomImage'
import Button from '@/app/components/Button'
import { useFonts } from 'expo-font';

export default function Intro({navigation}) {
  const [fontsLoaded] = useFonts({
    'MoonDance-Regular': require('@/app/assets/fonts/MoonDance-Regular.ttf'),
  });
  function goToSingIn(){
    navigation.navigate("signin");
  }
  return (
    <View style={{ flex: 1 }}>
      <CustomImage />
      <View style={styles.container}>
        <Text style={styles.boldText}>
          Discover new horizons,
        </Text>
        <Text style={styles.subtitleText}>
          one journey at a time.
        </Text>
        <Text style={styles.mainText}>
          Your adventure starts here!
        </Text>
      <View style={{ padding: 20}}>
        <Button 
        ButtonName="Start Adventure" 
        onPress={goToSingIn} 
        theme="Intro" />
      </View>
      </View>
    </View>
  )
}

