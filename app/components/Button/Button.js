import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './ButtonStyles'
const Button = ({ ButtonName, onPress , theme}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles[theme].container}>
        <Text style={styles[theme].button}>{ButtonName}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button