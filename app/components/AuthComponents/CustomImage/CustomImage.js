import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './ImageStyles'

const CustomImage = () => {
  return (
    <View style={styles.container}>
    <Image
      source={require('./../../../assets/image/test.jpg')} 
      style={styles.image}
    />

  </View>
  )
}

export default CustomImage