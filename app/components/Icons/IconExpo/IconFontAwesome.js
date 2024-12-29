import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

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