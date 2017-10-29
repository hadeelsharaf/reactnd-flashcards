import React from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import DeckCard from './deck'



export default class DeckList extends React.Component {
  render() {
    return (
        <FlatList 
         data={[{key: 'a'}, {key: 'b'}]} 
         renderItem={({item}) => <DeckCard/>}/>
    )
  }
}


