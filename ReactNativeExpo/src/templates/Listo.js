import React from 'react'
import { H2 } from '../atoms/Titles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Subtitle } from '../atoms/P';
import { Continuar } from '../molecules/Buttons';
import { H3 } from '../atoms/Titles';
import { StatusBar } from 'react-native';

const Listo = () => {
    return (
        <KeyboardAwareScrollView style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", padding:15}}>
        <StatusBar/>
        <H2 h2='¡Listo!'/>
        <H3 h3='Tu registro ha finalizado.'/>
        <Subtitle Text={'Ahora vamos a verificar tu información y te respondemos en menos de 5 días hábiles. \n \nEl siguiente paso será crear una contraseña para que puedas iniciar sesión.'}/>
        <Continuar/>
    </KeyboardAwareScrollView>
    )
}

export default Listo
