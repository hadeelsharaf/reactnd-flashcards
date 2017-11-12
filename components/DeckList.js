import React from 'react'
import { FlatList, 
  View, 
  TouchableOpacity, 
  Text } from 'react-native'
import DeckCard from './Deck'
import { fetchDecks,clear } from '../utils/storage'
import { styles }  from "./styles"
import { connect } from "react-redux"
import { getDecks } from "../actions/index"
import { decksToArray } from "../utils/helper";



class DeckList extends React.Component {

    state = {
      ready:null
    }

    fetchAll = () => {
      fetchDecks().then((data)=> {
          if(data){
            let decks = decksToArray(data)
            this.props.dispatch(getDecks(decks))
            
          }
        }
      ).then(()=> this.setState({ready:true}))
    }

    componentDidMount() {
        this.fetchAll()
    }

    render() {
        let {navigate}=this.props.navigation
        let ready = this.state.ready
        let decks = ready?this.props.decks.decks:[] ;
        let render_dom = decks.length > 0 ?
            (
              <View style={styles.container}>
              <FlatList 
               data={decks} 
               renderItem={({item}) => <DeckCard deck={item} navigation={this.props.navigation} />}/>
             </View>
             ): 
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

export default connect(mapStateToProps)(DeckList)