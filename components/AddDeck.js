import React from 'react'
import { KeyboardAvoidingView, 
	Text,
	TextInput, 
	TouchableOpacity,
	View
	 } from 'react-native'
import { styles }  from "./styles";
import { addDeck, fetchDecks } from "../utils/storage";
import { decksToArray } from "../utils/helper";
import { connect } from "react-redux"
import { addNewDeck, getDecks } from "../actions/index"



class AddDeck extends React.Component {
  
	state = {
		title: ""
	}

	static navigationOptions = { title: 'New Deck', };

	press = () => {
		let deck = {
			[this.state.title]:
			{
				title:this.state.title,
				key:this.state.title,
				questions:[]
			}
		}
		addDeck(deck).then(() => {
			this.props.dispatch(addNewDeck(deck[this.state.title]))
		}
		).then(()=> this.props.navigation.navigate(
		          'Details',{key:this.state.title}
		        ))
		
	}

	render() {
		return (
		    <KeyboardAvoidingView style={[styles.addViewContainer]}
		    behavior='padding'>
		       <TextInput
		          placeholder="Type the name"
		          onChangeText={(title) => this.setState({title})}
		        />
		      <TouchableOpacity onPress = {this.press}>
		      <Text style={styles.androidBtn}> Save </Text>
		      </TouchableOpacity>
		    </KeyboardAvoidingView>
		)
	}
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(AddDeck)