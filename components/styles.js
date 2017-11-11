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

