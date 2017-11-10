import { GET_DECKS, GET_DECK, ADD_DECK, ADD_CARD } from '../actions'


let initialState = {
  decks:[]
}

function decks (state=initialState , action) {
  console.log(action.type)
  switch (action.type) {
    case GET_DECKS :
      let st =  {
        ...state,
        decks:action.decks,
      }
      console.log(st)
      return st
    case ADD_DECK :
      return {
        ...state,
        decks:state.decks.concat([action.deck])
      }
    case ADD_CARD :
      // use map
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