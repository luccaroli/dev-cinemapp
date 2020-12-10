import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    marginTop: 30,
    padding: 10
  },

  cardImage: {
    width: "100%", 
    height: "70%",
    borderRadius: 20,
    marginTop: 10
  },

  cardTitle: {
    color: '#fff',
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 16,
    width: Dimensions.get('window').width / 2,
    textAlign: 'center'
  },

  cardButtonFavorite: {
    backgroundColor: "#7159c1",
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginTop: 10
  },

  cardButtonUnFavorite: {
    backgroundColor: "red",
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginTop: 10
  }
})

export default styles