import React from 'react'
import { KeyboardAvoidingView, 
	Text,
	TextInput, 
	TouchableOpacity,
	View
	 } from 'react-native'
import { styles }  from "./styles";
import { addDeck, fetchDecks,clear } from "../utils/storage";
import { connect } from "react-redux"
import { addNewQuestion } from "../actions/index"



class AddCard extends React.Component {
  
	state = {
		question: "",
		answer:""
	}

	static navigationOptions = { title: 'New Card', };

	press = () => {
		let title = this.props.navigation.state.params.key
		let question = {question:this.state.question,
			answer:this.state.answer}
		let originaldeck = this.props.decks.decks.filter((item) => item.title == title )[0]
		let allQuestion = originaldeck.questions
		let deck = {
			[title]:
			{
				questions: allQuestion.concat([question])
			}
		}
		addDeck(deck).then(() => {
			this.props.dispatch(addNewQuestion(title,question))
		}).then(() => this.props.navigation.navigate(
		          'Details',{key:title}
		        )
		)
		
	}

	render() {
		return (
		    <KeyboardAvoidingView style={[styles.addViewContainer]}
		    behavior='padding'>
		       <TextInput
		          placeholder="Type the question"
		          onChangeText={(question) => this.setState({...this.state,question})}
		        />
		        <TextInput
		          placeholder="Type the answer"
		          onChangeText={(answer) => this.setState({...this.state,answer})}
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

export default connect(mapStateToProps)(AddCard)