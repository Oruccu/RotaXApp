import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import IconImage from '@/app/components/Icons/IconImage'
import styles from './CategoryStyles'

const categories = [
  { id: '1', name: 'Beach', icon: "beach" },
  { id: '2', name: 'Mountain', icon: "mountain" },
  { id: '3', name: 'Desert', icon: "desert" },
  { id: '4', name: 'Camping', icon: "camping" },
  { id: '5', name: 'City', icon: "city" },
  { id: '6', name: 'Historical', icon: "historical" },
  { id: '7', name: 'Adventure', icon: "advanture" },
  { id: '8', name: 'Snowman', icon: "snowman" },
]
const Category = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.container}>
        <IconImage icon={item.icon} theme="Category" />1
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default Category