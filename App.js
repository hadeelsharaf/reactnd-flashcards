import React from 'react';
import { View,Text,StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckDetail from './components/details';
import Decklist from './components/DeckList';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';
import Quiz from './components/quiz';
import LastScore from "./components/ScoreView";
import { Constants } from 'expo';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';
import { setLocalNotification } from './utils/helper'

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
  Quiz: {screen: Quiz},
  Score: {screen:LastScore}
});



export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
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
