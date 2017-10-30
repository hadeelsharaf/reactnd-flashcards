import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'NDCARDS:DECKS'

export function fetchDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}