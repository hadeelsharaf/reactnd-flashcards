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
          <TouchableOpacity style={styles.container} onPress = {this.press}>
          <Text style={styles.title}> title </Text>
          <Text > count </Text>
          </TouchableOpacity>
        </View>
    )
  }
}


