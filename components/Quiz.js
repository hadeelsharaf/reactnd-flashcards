import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from "react-redux"
import { questionsByTitle } from "../utils/helper"
import { setLastScore } from "../utils/storage";
import { setScore } from "../actions/index"


class Quiz extends Component {
  state = {
      cards: null,
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0,
      showAnswer:false,
      score:0,
      ready:false
    }

  static navigationOptions = { header: null, }

  scorePoint=() => {
    this.setState({...this.state,
      score:this.state.score+1,
      })
    this.swiper.swipeLeft()
  }

  nextCard=()=> {
   this.swiper.swipeLeft() 
  }

  componentDidMount() {
    let key = this.props.navigation.state.params.key
    let questions = questionsByTitle(this.props.decks.decks, key)
    
    this.setState({
      ...this.state,
      cards:questions,
      ready:true
    })
  }

  moveToScoreView = () => {
    let {score, cards} = this.state
    let perc = score / cards.length * 100
    setLastScore(perc).then(()=> {
      this.props.dispatch(setScore(perc))
    }).then(()=> {
      let key = this.props.navigation.state.params.key
      this.props.navigation.navigate('Score', {key})
    })
  }

  onSwipedAllCards = () => {
    this.setState({
      ...this.state,
      swipedAllCards: true,
      ready:false
    })
    this.moveToScoreView()
  }

  onSwiped = () => {
    let {cardIndex,cards} = this.state
    let nextIndx =cardIndex +1
    if(nextIndx < cards.length){
      this.setState({
        ...this.state,
        cardIndex: nextIndx,
        showAnswer:false
      })
    } else {
      this.onSwipedAllCards()
    } 
  }

  answerState = ()=>{
    let showAnswerState = this.state.showAnswer
    this.setState({
      ...this.state,
      showAnswer:!showAnswerState
    })
  }

  renderCard = card => {
    let {swipedAllCards,showAnswer} = this.state
    if (swipedAllCards){
      this.onSwipedAllCards()
    }
    let cardView = (
      <View style={styles.card}>
            <Text
             style={[styles.text]}> {card.question} </Text>
             <TouchableOpacity onPress={this.answerState}>
              <Text style={styles.textBtn}> {showAnswer? `Hide `:`Show `}Answer </Text>
              <Text style={[styles.textBtn,{color:"blue"}]}> {showAnswer && card.answer} </Text>
             </TouchableOpacity>
          <View style={styles.btnContainer}>
            <TouchableOpacity  onPress={this.scorePoint}>
              <Text style={[styles.androidBtn,{backgroundColor: 'green'}]} > Correct </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.nextCard}>
              <Text style={[styles.androidBtn,{backgroundColor: 'red'}]}> InCorrect </Text>
            </TouchableOpacity>
          </View>
      </View>
    )
    return cardView 
  };

  


  render () {
    let {cards, swipedAllCards,ready} = this.state

    return (
       <View style={styles.container}>
        {cards && ready && <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={()=>  null}
          onSwiped={()=>  null}
          onSwipedLeft={this.onSwiped}
          onSwipedRight={()=>  null}
          onSwipedTop={()=>  null}
          onSwipedBottom={()=>  null}
          animateCardOpacity
        >
          <Text > Question : {this.state.cardIndex+1} / {this.state.cards.length}</Text>
        </Swiper>}
      </View>
    )
  }
}

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
      fontSize:15,
      backgroundColor: "#1A237E"
  },
  btnContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  }
})

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz)