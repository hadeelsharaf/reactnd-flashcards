import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    alignItems: 'center',
    },
  androidBtn: {
      margin: 5,
      backgroundColor: "#1A237E",
      color:"white",
      padding: 10,
      borderRadius: 2,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
})


export default class DeckCard extends React.Component {
  
  press = () => {
    console.log("pressed")
    /*this.props.navigation.navigate(
              'EntryDetail',
              { entryId: key }
            )*/
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}> title </Text>
          <Text > count </Text>
          <TouchableOpacity onPress = {this.press}>
          <Text style={styles.androidBtn}> View details </Text>
          </TouchableOpacity>
        </View>
    )
  }
}


