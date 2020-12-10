import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  searchBarContainer: {
    paddingHorizontal: 15,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  searchBar: {
    width: Dimensions.get('window').width / 1.4
  },

  searchBarButton: {
    flex: 1,
    backgroundColor: '#7159c1',
    height: 50,
    borderRadius: 8,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center'
    
  },

  searchBarButtonText: {
    color: '#fff',
    fontFamily: 'Ubuntu_500Medium'
  },

  
  
})

export default styles