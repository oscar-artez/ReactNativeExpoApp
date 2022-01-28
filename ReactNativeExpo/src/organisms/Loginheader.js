import React from 'react'
import { H1 } from '../atoms/Titles';
import { Huella } from '../atoms/Images';
import {View} from 'react-native';
import { ContainerBlock } from '../Containers';



export const Loginheader = (props) => {
    return (
        <View style={{flex:1,flexDirection:'column',width:'100%', padding:15, alignItems:'center'}}>
        <H1 h1='Bienvenido'/>
        <Huella/>
        </View>
      
    );
}
export default Loginheader;