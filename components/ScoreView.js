import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { connect } from "react-redux"
import { setLocalNotification, clearLocalNotification } from '../utils/helper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  text: {
    textAlign: 'center',
    fontSize: 65,
    backgroundColor: 'transparent',
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'transparent',
    textAlign:"center",
    color:"red"
  },
  androidBtn: {
      margin: 5,
      color:"white",
      padding: 10,
      borderRadius: 2,
      textAlign:'center',
      fontSize:20,
      backgroundColor: "#1A237E"
  },
  btnContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  homeBtn: {
      color:"white",
      textAlign:'center',
      margin: 5,
      padding: 5,
      fontSize:18,
      backgroundColor: "#1A237E"
  }
})

class LastScore extends React.Component {
  // TODO fix home style

  static navigationOptions = ({navigation}) => ({ title: "Score", 
    headerLeft: <Text style={styles.homeBtn} 
                    onPress={()=> navigation.navigate("Home")}> Home</Text>
    }
    )

  back= () => {
    let key = this.props.navigation.state.params.key
    console.log(key)
    this.props.navigation.navigate("Details", {key})
  }
  restart= () => {
    let key = this.props.navigation.state.params.key
    console.log(key)
    this.props.navigation.navigate("Quiz", {key}) 
  }

  componentDidMount() {
     clearLocalNotification().then(setLocalNotification)
  }
  
  render() {
    let perc = this.props.decks.score
    return (
      <View style={styles.card}>
            <Text
             style={[styles.text]}> {perc.toFixed(2)}% </Text>
             
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={this.restart}>
              <Text style={[styles.androidBtn,{backgroundColor: 'green'}]} > Restart </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.back}>
              <Text style={[styles.androidBtn,{backgroundColor: 'red'}]}> Back To Deck </Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}


function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(LastScore)