import { AsyncStorage } from 'react-native'
import { timeToString } from "./helper";

const DECK_STORAGE_KEY = 'NDCARDS:DECKS'
const USER_STORAGE_KEY = 'NDCARDS:USERSCORES'

export function fetchDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function addDeck(deck) {
	return AsyncStorage.mergeItem(DECK_STORAGE_KEY,JSON.stringify(deck))
}

export function clear() {
	return AsyncStorage.clear()
}

export function setLastScore(score) {
	let lastScore = { [timeToString()] : score}
	return AsyncStorage.mergeItem(USER_STORAGE_KEY,JSON.stringify(lastScore))
}