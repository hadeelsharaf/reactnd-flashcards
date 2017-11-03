import React from 'react'
import { FlatList, 
  View, 
  TouchableOpacity, 
  Text } from 'react-native'
import DeckCard from './deck'
import { fetchDecks } from '../utils/storage'
import { styles }  from "./styles"



class DeckList extends React.Component {

    state = {
      decks : []
    }

    press = () => {
        console.log("pressed")
        /*this.props.navigation.navigate(
                  'EntryDetail',
                  { entryId: key }
                )*/
      }

    componentDidMount() {
        fetchDecks().then((data)=> this.setState({
          decks: data
        }))
    }

    render() {
        let render_dom = this.state.decks?
            (<FlatList 
             data={this.state.decks} 
             renderItem={({item}) => <DeckCard/>}/>): 
             (
              <View style={styles.container}>
                <Text> Nothing here yet </Text>
                <TouchableOpacity onPress = {this.press}>
                  <Text style={styles.androidBtn}> Start Adding </Text>
                </TouchableOpacity>
              </View>
            )



        return  render_dom 
    }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default DeckList