import { View, Text } from 'react-native'
import React from 'react'
import styles from './CircleBannerStyles'
const CircleBanner = ({CircleBannerTitle}) => {
  return (
    <View style={styles.container}>
    <View style={styles.circle1} />
    <View style={styles.circle2}>
      <Text style={styles.circle2Text}>{CircleBannerTitle}</Text>
    </View>
  </View>
  )
}

export default CircleBanner