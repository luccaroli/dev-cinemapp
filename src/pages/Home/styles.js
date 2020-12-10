import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#7159c1'
  },

  main: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: '#333'
  },

  titleMain: {
    color: '#fff',
    fontFamily: 'Ubuntu_500Medium',
    marginTop: 50,
    fontSize: 18,
  },

  descriptionMain: {
    color: '#fff',
    opacity: 0.8,
    fontFamily: 'Ubuntu_400Regular',
    marginTop: 20
  },

  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 20,
    backgroundColor: '#7159c1',
    bottom: 28,
    right: 28
  }
})

export default styles