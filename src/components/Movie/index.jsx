import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

import background from '../../assets/background.jpg'

import styles from './styles'

const Movie = ({ movie, favorited, ...rest }) => {
  const [isFavorited, setIsFavorited] = useState(favorited)


  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites')
    
    let favoritesArray = []

    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((movieItem) => {
        return movieItem.imdbID === movie.imdbID
        // console.tron.log(movieItem.Title)
      })
      
      favoritesArray.splice(favoriteIndex, 1)

      setIsFavorited(false)

    } else {
      favoritesArray.push(movie)

      setIsFavorited(true)
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))

  }

  return (
    <View style={styles.cardContainer} {...rest}>
      <Text style={styles.cardTitle} numberOfLines={1}>
        {movie.Title}
      </Text>
      <Image 
        style={styles.cardImage}
        source={movie.Poster === 'N/A' ? background : { uri: movie.Poster }}
      />
      <RectButton 
        onPress={handleToggleFavorite}
        style={[!isFavorited ? styles.cardButtonFavorite : styles.cardButtonUnFavorite]}
      >
        {
          !isFavorited
          ? <MaterialCommunityIcons name="heart-off" size={24} color="#fff" />
          : <MaterialCommunityIcons name="heart" size={24} color="#fff" />
        }
        
      </RectButton>
    </View>
  )
}

export default Movie;