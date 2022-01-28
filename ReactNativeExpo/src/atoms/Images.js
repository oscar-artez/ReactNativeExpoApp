import huellaimg from '../../assets/huella.png';
import React from 'react';

import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import appimg from '../../assets/app.png';
import descuentoimg from '../../assets/descuento.png';

// Standard Image

export const Huella = () =>{
    return ( 
      <Image
      source = {huellaimg}
      style= {{width: 64, height: 65, resizeMode:'contain', marginTop:25, marginBottom:20}}
      />
   )
 
}
export const App = () =>{
   return ( 
     <Image
     source = {appimg}
     style= {{width: 500, height: 220, resizeMode:'contain', marginTop:0, marginBottom:25}}
     />
  )

}
export const Descuento = () =>{
   return ( 
     <Image
     source = {descuentoimg}
     style= {{width: 500, height: 140, resizeMode:'contain', marginTop:0, marginBottom:0}}
     />
  )

}

