import React from 'react'
import {View} from 'react-native'
import LottieView from 'lottie-react-native';

const Splash = () => {
    return (
        <View 
        style={{flex:1, alignSelf:'auto'}}
        >
        <LottieView
        source={require('../../assets/appanimacion2.json')}
        autoPlay
        loop={false}
      />
      
      </View>
    )
}

export default Splash
