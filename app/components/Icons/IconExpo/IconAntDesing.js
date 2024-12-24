import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const IconAntDesing = ({ iconName, color }) => {
  return (
    <AntDesign
      name={iconName}
      color={color}
      size={30}
    />

  )
}

export default IconAntDesing