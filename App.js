import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './public/Layout/Header/header';
import Products from './public/Components/Products/Products';
 
export default function App() {
  return (
    <View style={styles.container}> 
      <Products />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
