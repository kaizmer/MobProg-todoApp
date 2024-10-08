import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../styles/styles';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <View style={styles.searchContainer}>
    <TextInput
      style={styles.searchInput}
      value={searchTerm}
      onChangeText={setSearchTerm}
      placeholder="Search"
      placeholderTextColor="#888"
    />
  </View>
);

export default SearchBar;
