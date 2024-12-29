import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const IconMaterialCommunity = ({iconName, color}) => {
  return (
    <MaterialCommunityIcons
      name={iconName}
      color={color}
      size={38}
    />
  )
}

export default IconMaterialCommunity