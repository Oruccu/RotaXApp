import { SafeAreaView, View, Text } from 'react-native'
import React, { useState } from 'react'
import Input from "@/app/components/Input"
import IconImage from "@/app/components/Icons/IconImage"
import IconAntDesign from "@/app/components/Icons/IconExpo/IconAntDesign.js"
import styles from './SearchBarStyles'
import Color from '@/app/styles/Color'
const SearchBar = () => {
  const [search, setSearch] = useState();
  
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Input 
        placeholder="Rotax Search" 
        onChangeText={setSearch} 
        value={search} 
        theme={"RotaX"} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.searchIcon}>
          <IconAntDesign 
          iconName="search1" 
          color={Color.IconColor} 
          size={30}/>
        </View>
        <View style={styles.bellIcon}>
          <IconAntDesign 
          iconName="bells" 
          color={Color.IconColor} 
          size={30}/>
        </View>
      </View>
    </View>
  )
}

export default SearchBar