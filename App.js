import React from 'react';
import { View,Text,StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckDetail from './components/details';
import Decklist from './components/deckList';
import AddDeck from './components/addDeck';
import AddCard from './components/addCard';
import { Constants } from 'expo';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

const Tabs = TabNavigator({
  Home: { screen: Decklist },
  AddDeck: { screen: AddDeck },
}, {
  navigationOptions: {
    header: null
}});

const MainNav = StackNavigator({
  Tabs:  {screen: Tabs },
  Details : {screen: DeckDetail },
  AddCard : {screen: AddCard },
});



export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
           <View style={{ height: Constants.statusBarHeight }}>
              <StatusBar translucent barStyle='dark-content' />
          </View>
          <MainNav />
        </View>
      </Provider>
    )
  }
}
