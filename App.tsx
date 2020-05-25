import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './topBar';
import HomePage from './homePage';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({uri: 'https://yq42lj36m9.sse.codesandbox.io/'})

const QUERY = gql`
{
  notejay {
    note {
      title
      note
      datetime
    }
  }
}
`


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
