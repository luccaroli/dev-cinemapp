import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import peopleImg from '../../assets/people.png'

const Home = () => {
  const navigation = useNavigation()

  function handleNavigateToMovies() {
    navigation.navigate('Movies')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={peopleImg} />
      </View>
      <View style={styles.main}>
        <Text style={styles.titleMain}>Seja bem vindo ao DEV-CINEMAPP</Text>
        <Text
          style={styles.descriptionMain}
        >
          Pesquise pelo seu filme e salve ele{'\n'}como seu favorito 💘
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={handleNavigateToMovies}
      >
        <Feather name="arrow-right" size={20} color="#333" />
      </TouchableOpacity>
    </View>
  )
}

export default Home;