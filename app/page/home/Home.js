import {  SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '@/app/components/RotaXHome/SearchBar'
import Category from '@/app/components/RotaXHome/Category'
import styles from './HomeStyles'
import Title from '@/app/components/Title'
import { seedTripsToFirestore } from '@/app/config/seedRotaX.js';
import Button from '@/app/components/Button'
const Home = () => {
    const handleSeed = async () => {
      await seedTripsToFirestore();
    };
  return (
    <SafeAreaView>
      <Title title={"ROTAX"} />
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <Category icon={"beach"} categoryName={"Beach"}/>
    </SafeAreaView>
  )
}

export default Home

