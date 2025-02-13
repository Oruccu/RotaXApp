import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const IconAntDesign = ({ iconName, color, onPress, size}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign
        name={iconName}
        color={color}
        size={size}
      />
    </TouchableOpacity>

  )
}

export default IconAntDesign