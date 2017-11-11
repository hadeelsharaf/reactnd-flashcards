import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'


export function decksToArray(data) {
    let parsedData = JSON.parse(data);
    
    let decks = Object.keys(parsedData).map((item)=> {
      return { ...parsedData[item], key:item}
    })
    return decks
}


export function questionsByTitle(data,title) {
    let deck = data.filter(item =>  item.title===title)[0]
    return deck.questions
}

export function timeToString (time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}



function createNotification () {
  return {
    title: 'Study today',
    body: "👋 Hi, Try to answer some questions.",
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}


const NOTIFICATION_KEY = 'NDCARDS:NOTIFICATIONS'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}


export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate()+1)
              tomorrow.setHours(10)
              tomorrow.setMinutes(0))

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}