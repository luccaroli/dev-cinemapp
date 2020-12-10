import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import Movies from '../pages/Movies'
import FavoriteMovies from '../pages/FavoriteMovies'

const { Navigator, Screen } = createStackNavigator()

const routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Movies" component={Movies} />
        <Screen name="FavoriteMovies" component={FavoriteMovies} />
      </Navigator>
    </NavigationContainer>
  )
}

export default routes