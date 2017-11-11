export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const GET_CARDS = 'GET_CARDS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const SET_SCORE = 'SET_SCORE'

export function getDecks (decks) {
	// decks is a list 
  return {
    type: GET_DECKS,
    decks,
  }
}

export function getDeck (deck) {
  return {
    type: GET_DECK,
    deck,
  }
}

export function addNewDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function addNewQuestion (deck,question) {
  return {
    type: ADD_CARD,
    question,
    deck
  }
}


export function setScore (score) {
  return {
    type: SET_SCORE,
    score
  }
}