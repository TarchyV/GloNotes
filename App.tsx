import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './topBar';
import HomePage from './homePage';



export default function App() {

  return (
    <View style={styles.container}>
      <TopBar></TopBar>
      <HomePage></HomePage>
    </View>
  );
}
//https://coolors.co/ef6461-e4b363-e8e9eb-e0dfd5-313638
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313638',
    height: '100%'
  },
  
});
