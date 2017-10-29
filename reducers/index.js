import { GET_DECKS, GET_DECK } from '../actions'


function decks (state = {}, action) {
  switch (action.type) {
    case GET_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case GET_DECK :
      return {
        ...state,
        ...action.deck
      }
    default :
      return state
  }
}

export default decks