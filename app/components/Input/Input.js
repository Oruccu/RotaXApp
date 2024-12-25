import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './InputStyles';
const Input = ({ onChange, placeholder, value, theme }) => {
  return (
    <View style={styles[theme].container}>
      <TextInput
        style={styles[theme].input}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
/>
    </View>
  )
}

export default Input