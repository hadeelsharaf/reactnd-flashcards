import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    alignItems: 'center',
    },
  androidBtn: {
      margin: 5,
      backgroundColor: "#1A237E",
      color:"white",
      padding: 10,
      borderRadius: 2,
      textAlign:'center',
      fontSize: 20,
  },
  btnContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  addViewContainer:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  }

})

export const quizStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  text: {
    textAlign: 'center',
    fontSize: 65,
    backgroundColor: 'transparent',
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'transparent',
    textAlign:"center",
    color:"red"
  },
  androidBtn: {
      margin: 5,
      color:"white",
      padding: 10,
      borderRadius: 2,
      textAlign:'center',
      fontSize:15,
      backgroundColor: "#1A237E"
  },
  btnContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  }
})