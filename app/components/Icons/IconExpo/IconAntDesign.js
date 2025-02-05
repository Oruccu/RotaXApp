import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const IconAntDesign = ({ iconName, color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign
        name={iconName}
        color={color}
        size={55}
      />
    </TouchableOpacity>

  )
}

export default IconAntDesign