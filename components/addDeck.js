import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles }  from "./styles";




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


