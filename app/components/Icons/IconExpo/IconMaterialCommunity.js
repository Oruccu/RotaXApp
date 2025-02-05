import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const IconMaterialCommunity = ({ iconName, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name={iconName}
        color={color}
        size={55}
      />
    </TouchableOpacity>
  )
}

export default IconMaterialCommunity