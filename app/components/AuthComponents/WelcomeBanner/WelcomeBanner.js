import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import styles from './WelcomeBannerStyles';
const WelcomeBanner = () => {
    const [fontsLoaded] = useFonts({
        'Quicksand': require('@/app/assets/fonts/Quicksand-VariableFont_wght.ttf'),
      });
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome to{"\n"}The Voyager's Hub
            </Text>
        </View>
    );
}

export default WelcomeBanner