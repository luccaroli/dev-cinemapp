import React, { useState } from 'react';
import { Text, View, ScrollView, Alert, Keyboard, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Movie from '../../components/Movie'
import { useNavigation } from '@react-navigation/native'

import api from '../../service/api'

import styles from './styles';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState('')
  const [movies, setMovies] = useState([])
  const [favorites, setFavorites] = useState([])

  const onChangeSearch = movie => setSearchMovie(movie)

  const navigation = useNavigation()

  // carregar favoritos
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(res => {
      if (res) {
        const favoritedMovies = JSON.parse(res)
        const favoritedMoviesIds = favoritedMovies.map((movie)=> {
          
          return movie.imdbID
        })

        setFavorites(favoritedMoviesIds) 
      }
    })
  }

  async function getMovie() {
    loadFavorites()

    try {

      if (!searchMovie) {
        return Alert.alert('Procure um filme')
      }

      const { data } = await api.get(`?apikey=925eba28&type=movie&s=${searchMovie.toLowerCase().replace(' ', '%20')}`)
      if (data.Search) {
        setMovies(data.Search)
      } else {
        return Alert.alert('Nenhum resultado encontrado')
      }

    } catch (error) {
      console.log(error)
    }
  }

  // navegação 
  function handleNavigateToFavorites() {
    navigation.navigate('FavoriteMovies')
  }

  function navigateGoBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <RectButton onPress={navigateGoBack}>
          <Feather name="arrow-left" size={28} color="#7159c1" />
        </RectButton> 
        <RectButton onPress={handleNavigateToFavorites}>
          <MaterialCommunityIcons name="heart" size={28} color="red" />
        </RectButton>
      </View>

      <View style={styles.searchBarContainer}>
        <Searchbar 
          placeholder="Procure o filme..."
          onChangeText={onChangeSearch}
          value={searchMovie}
          style={styles.searchBar}
          returnKeyLabel="buscar"
          keyboardAppearance="dark"
          returnKeyType="search"
          onSubmitEditing={() => {
            getMovie()
            Keyboard.dismiss()
          }}
        />

        <RectButton style={styles.searchBarButton} onPress={() => {
          getMovie()
          Keyboard.dismiss()
        }}>
          <Text style={styles.searchBarButtonText}>Buscar</Text>
        </RectButton>
      </View>

    <ScrollView 
      horizontal
    >
      {
        movies.length !== 0 
      ? movies.map(movie => {
          return (
            <Movie 
              key={movie.imdbID}
              movie={movie}
              favorited={favorites.includes(movie.imdbID)}
            />

          )
        })
      : (
        <View style={{ flex: 1, marginLeft: Dimensions.get('window').width / 4, justifyContent: 'center' }}>
          <Text 
            style={{ 
              color: '#fff',
              fontFamily: 'Ubuntu_500Medium',
              textAlign: 'center'
             }}
            >
              Pesquise por um filme ou busque{'\n'}nos seus favoritos 😍</Text> 
        </View>
      )
      }
      
    </ScrollView>
     
    </View>
  )
}
export default Movies;