import React from 'react';
import { View,Text,StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Decklist from './components/deckList';
import AddDeck from './components/addDeck';
import { Constants } from 'expo';
import {
  StackNavigator,
} from 'react-navigation';

const MainNav = StackNavigator({
  Home: { screen: Decklist },
  AddDeck: { screen: AddDeck },
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
