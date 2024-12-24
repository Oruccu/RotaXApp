import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import styles from './IconStyles'
const IconFontAwesome = ({iconName , color}) => {
  return (
    <FontAwesome
      name={iconName}
      color={color}
      size={38}

    />
  )
}

export default IconFontAwesome