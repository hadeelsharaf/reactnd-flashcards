import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles }  from "./styles";
import { connect } from "react-redux"



class DeckDetail extends React.Component {

  state={
    deck: null
  }

  static navigationOptions = { title: 'Deck Details', };
  
  start = (key) => {
    console.log("here")
    console.log(key)
  }

  add = (key) => {
    this.props.navigation.navigate("AddCard", {key})
  }

  componentDidMount() {
    let key = this.props.navigation.state.params.key
    let decks = this.props.decks.decks.filter(item =>  item.key===key)
    if(decks.length>0)
      this.setState({deck:decks[0]})
  }

  render() {
    let {deck} = this.state
    return (
      <View>
            <Text
             style={[styles.title, 
              {textAlign:"center"}]}> {deck && deck.title } 
             </Text>
            <Text style={{ textAlign:"center"}}> Questions : {deck && deck.questions.length} </Text>
          <TouchableOpacity 
          onPress={()=> this.start(deck.key)} >
          <Text style={[styles.androidBtn]}> Start a Quiz </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=> this.add(deck.key)} >
          <Text style={[styles.androidBtn]}> Create New Question </Text>
          </TouchableOpacity>
      </View>
    )
  }
}


function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckDetail)