import { SafeAreaView, View, Text } from 'react-native'
import React, { useState } from 'react'
import Input from "@/app/components/Input"
import IconImage from "@/app/components/Icons/IconImage"
import IconAntDesing from "@/app/components/Icons/IconExpo/IconAntDesing"
import styles from './SearchBarStyles'
import Color from '@/app/styles/Color'
const SearchBar = () => {
  const [search, setSearch] = useState();
  
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Input placeholder="Rotax Search" onChangeText={setSearch} value={search} theme={"Auth"} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.searchIcon}>
          <IconAntDesing iconName="search1" color={Color.IconColor} />
        </View>
        <View style={styles.bellIcon}>
          <IconAntDesing iconName="bells" color={Color.IconColor} />
        </View>
      </View>
    </View>
  )
}

export default SearchBar