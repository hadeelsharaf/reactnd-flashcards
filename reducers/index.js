import { GET_DECKS, GET_DECK, ADD_DECK, ADD_CARD, SET_SCORE } from '../actions'


let initialState = {
  decks:[],
  score:0
}

function decks (state=initialState , action) {
  console.log(action.type)

  switch (action.type) {
    case SET_SCORE:
     return{
      ...state,
      score:action.score
     }
    case GET_DECKS :
      let st =  {
        ...state,
        decks:action.decks,
      }
      return st
    case ADD_DECK :
      return {
        ...state,
        decks:state.decks.concat([action.deck])
      }

    case ADD_CARD :
      return {
        ...state,
        decks:state.decks.map((item)=>{
          if (item.key===action.deck){
            item.questions=item.questions.concat([action.question])
          }
          return item
        })
      }

    default :
      return state
  }
}

export default decks