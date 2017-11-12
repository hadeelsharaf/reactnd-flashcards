import React from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { styles }  from "./styles";




export default class DeckCard extends React.Component {

  state = {
    bounceValue: new Animated.Value(1),
   }
  
  press = (key) => {
    let {navigate}=this.props.navigation
    let {bounceValue} = this.state
    Animated.sequence([
          Animated.timing(bounceValue, { duration: 300, toValue: 1.06}),
          Animated.spring(bounceValue, { toValue: 1, friction: 4})
        ]).start()
    navigate('Details', { key } )
  }

  render() {
    let {bounceValue} = this.state
    let deck = this.props.deck
    let key= deck.key
    let count = this.props.deck.questions?this.props.deck.questions.length:0
    return (
          <TouchableOpacity 
          onPress={()=> this.press(key)}
          style={[styles.addNewContainer,{margin:25}]}>
            <Animated.Text
             style={[styles.title, 
              {textAlign:"center",
             transform: [{scale: bounceValue}]}]}> { deck.title } 
             </Animated.Text>
            <Text style={{ textAlign:"center"}}> Questions : {count} </Text>
          </TouchableOpacity>
    )
  }
}


