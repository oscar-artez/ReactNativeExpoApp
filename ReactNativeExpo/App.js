import  React, {useEffect, useState}from 'react'; 
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as Facebook from 'expo-facebook';

const fetchFont = () =>{
  return Font.loadAsync({
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.otf'),
  });
};

import AppStack from './navigator/stack';
import Resumen from './src/templates/Resumen';
import UltimoPasoNip from './src/templates/UltimoPasoNip';
import Splash from './src/templates/Splash';
const App = ({navigation}) => {


  
  const [fontsLoaded, setfontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading startAsync={fetchFont}
    onError={()=>console.log('error')}
    onFinish={() =>{
      setfontsLoaded(true);
    }}
    />

  }else{
    
     return (
        <AppStack/>
       
  );
}
};


export default App; 