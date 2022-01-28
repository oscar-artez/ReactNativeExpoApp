import React from 'react'
import { H2 } from '../atoms/Titles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { IptNip } from '../molecules/Inputs';
import { Subtitle } from '../atoms/P';
import { Continuar } from '../molecules/Buttons';
import {Text,StyleSheet} from 'react-native';
import {TextLink} from '../../components/Styles';
import { StatusBar } from 'react-native';

const UltimoPasoOtro = () => {
    return (
        <KeyboardAwareScrollView style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", padding:15}}>
        <StatusBar/>
        <H2 h2='Último paso'/>
        <Subtitle Text={'Se ha enviado otro código, favor de ingresalro.'}/>
        <IptNip />
        <Continuar/>
        <TextLink>
        <Text style={styles.P}
  
        >
        Enviar de nuevo el NIP
      </Text >
      </TextLink>
    </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    P: {color: '#ffffff', fontSize:15, marginTop:25}
  }) 

export default UltimoPasoOtro
