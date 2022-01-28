import React from 'react';
import { InputCorreo, IptPassword} from '../molecules/Inputs';
import { LoginButton,RegistroLinea } from '../molecules/Buttons';
import { ContainerBlock } from '../Containers';
import {View} from 'react-native';



const LoginMain = ( {navigation}) => {
    

    return (
        <View>
            <View style={{flex:1,flexDirection:'column',width:'100%', padding:15, alignItems:'center'}}>
        <H1 h1='Bienvenido'/>
        <Huella/>
        </View>
            <InputCorreo/>
            <IptPassword/>
            <LoginButton
            />
            <RegistroLinea
           onPress={() => navigation.navigate('Nombre')}
            />
        </View>
       

    );
}


export default LoginMain;