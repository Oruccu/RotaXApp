import { View, Text } from 'react-native'
import React from 'react'
import styles from './TitleStyles';

const Title = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Title