import { StatusBar, SafeAreaView, View, ActivityIndicator } from 'react-native';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta'

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading'

export default function App() {

  const [isLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if(!isLoaded) return <AppLoading />

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}


