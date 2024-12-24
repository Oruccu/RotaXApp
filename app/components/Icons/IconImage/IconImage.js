import { View, Text, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import iconMapping from './iconMapping';
import styles from './IconImageStyles'

const IconImage = ({icon, theme}) => {
  return (
    <View>
      <Image source={iconMapping[icon]} style={styles[theme].icon}/>
    </View>
  )
}

export default IconImage