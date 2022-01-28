import React from 'react';
import { View} from 'react-native';


export const ContainerBlock = () => {
    return (
    <View style={{width:100, height: 0, padding:15}}>
    </View>
    )
}

export const ContainerWhite = () => {
    return (
    <View style={{position:'absolute',alignItems:'center',alignContent:'center',width:'100%', height:'70%', padding:15, backgroundColor:'#ffffff', borderRadius:15, bottom:0, right:0}}>
    </View>
    )
}
