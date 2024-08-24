import { FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

const icons = [
  'home', 'person', 'search', 'settings', 'star', 'favorite', 
  'info', 'phone', 'email', 'camera', 'map', 'lock'
];

export default function SearchPage() {

  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({ item }) => (
    // onPress={() => console.log("Logging",item)}
      <TouchableOpacity style={styles.iconContainer} onPress={() => console.log("Logging",item)}>
        <MaterialIcons name={item} size={20} color="black" />
      </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <FlatList
        data={icons}
        renderItem={renderItem}
        keyExtractor={item => item}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  grid: {
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
});
