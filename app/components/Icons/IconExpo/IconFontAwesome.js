import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const IconFontAwesome = ({ iconName, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome
        name={iconName}
        color={color}
        size={55}
      />
    </TouchableOpacity>
  )
}

export default IconFontAwesome