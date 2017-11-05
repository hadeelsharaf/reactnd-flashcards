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

    static navigationOptions = { title: 'All', };


    componentDidMount() {
        fetchDecks().then((data)=> this.setState({
          decks: data
        }))
    }

    render() {
        let dummyData=[{key:'a'}, {key:'b'}]
        const {navigate} = this.props.navigation;
        let render_dom = dummyData?
            (<FlatList 
             data={dummyData} 
             renderItem={({item}) => <DeckCard/>}/>): 
             (
              <View style={styles.container}>
                <Text> Nothing here yet </Text>
                <TouchableOpacity onPress = {() => navigate('AddDeck')}>
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