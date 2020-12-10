import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes'
import { useFonts } from 'expo-font'
import { Ubuntu_700Bold, Ubuntu_400Regular, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu'
import Reactotron, { asyncStorage } from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

console.tron = Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  // Your real ip address 👇
  .configure({ host: '192.168.0.163', port: 9090 })
  .useReactNative()
  .use(asyncStorage({ ignore: ['secret'] }))
  .connect()

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold, 
    Ubuntu_400Regular, 
    Ubuntu_500Medium
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}

