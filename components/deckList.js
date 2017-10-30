import React from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import DeckCard from './deck'
import { fetchDecks } from '../utils/storage'



class DeckList extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props;
        fetchDecks().then((data)=> console.log(data))
    }

    render() {
        return (
            <FlatList 
             data={[{key: 'a'}, {key: 'b'}]} 
             renderItem={({item}) => <DeckCard/>}/>
        )
    }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)