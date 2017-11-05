import React from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles }  from "./styles";




export default class AddDeck extends React.Component {
  
	state = {
		title: ""
	}

	static navigationOptions = { title: 'New Deck', };

	press = () => {
		console.log("pressed")
		console.log(this.state.title)
		/*this.props.navigation.navigate(
		          'EntryDetail',
		          { entryId: key }
		        )*/
	}

	render() {
		return (
		    <KeyboardAvoidingView 
		    behavior='padding'>
		      <Text > Add Title </Text>
		       <TextInput
		          placeholder="Type the name"
		          style = {{ padding:5}}
		          onChangeText={(title) => this.setState({title})}
		        />
		      <TouchableOpacity onPress = {this.press}>
		      <Text style={styles.androidBtn}> Save </Text>
		      </TouchableOpacity>
		    </KeyboardAvoidingView>
		)
	}
}


