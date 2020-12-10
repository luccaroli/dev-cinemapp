import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Movie from '../../components/Movie'

import styles from './styles';

const FavoriteMovies = () => {
  const [favorites, setFavorites] = useState([])
  const navigation = useNavigation()
  
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(res => {
      if (res) {
        const favoritedTeachers = JSON.parse(res)
        setFavorites(favoritedTeachers) 
      }
    })
  }
  
  useEffect(() => {
    loadFavorites()
  }, [])

  function navigateGoBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton onPress={navigateGoBack}>
          <Feather name="arrow-left" size={28} color="#7159c1" />
        </RectButton> 
      </View>

      <ScrollView 
        horizontal 
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {favorites.map(movies => {
          return (
            <Movie 
              key={movies.imdbID}
              movie={movies}
              favorited={true}
            />
          )
        })}
      </ScrollView>

    </View>
  )
}

export default FavoriteMovies;