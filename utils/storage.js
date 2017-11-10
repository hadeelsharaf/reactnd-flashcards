import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'NDCARDS:DECKS'

export function fetchDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function addDeck(deck) {
	return AsyncStorage.mergeItem(DECK_STORAGE_KEY,JSON.stringify(deck))
}

export function clear() {
	return AsyncStorage.clear()
}