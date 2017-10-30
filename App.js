import React from 'react';
import { View,Text,StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Decklist from './components/deckList';
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
           <View style={{ height: Constants.statusBarHeight }}>
              <StatusBar translucent barStyle='dark-content' />
          </View>
          <Decklist />
        </View>
      </Provider>
    )
  }
}
