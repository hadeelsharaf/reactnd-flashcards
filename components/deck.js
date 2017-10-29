import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    alignItems: 'center',
    },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
})


export default class DeckCard extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}> title </Text>
          <Text > count </Text>
          <Text > tttt </Text>
        </View>
    )
  }
}


