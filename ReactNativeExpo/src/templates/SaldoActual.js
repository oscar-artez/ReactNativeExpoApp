import React, {useEffect, useState}from 'react'
import { H5,H33,H6,TituloMenuA } from '../atoms/Titles'
import { View, StyleSheet, ScrollView } from 'react-native'
import { PText1_1, PTextSaldo, Warning} from '../atoms/P'
import { TextLink } from '../../components/Styles'
import { Text } from 'react-native-elements'
import { PTextFecha,PTextPago } from '../atoms/P'
import { StatusBar } from 'react-native';

const SaldoActual = ({route, navigation}) => {

    const{Deuda,FechaLimite,PagoMinimo, Name, Apellido, CuentaCliente, RefOxxo,LimiteDisponible} = route.params;
    
    let FechaF=FechaLimite
    if(FechaF == '30-11--0001'){
        FechaF=''
    }else{
        FechaF=FechaLimite
    }

    return (
        <ScrollView
       style={{backgroundColor: "#1f1b36", }}
       >
      <View style={{alignContent: "center",   paddingHorizontal:'5%', paddingVertical:'18%', height:'100%'}}>
            <StatusBar/>
            <TituloMenuA            
        TituloA={'SÚPER '}
        
        Linea ={'LÍNEA'}
        Revolvente={'\nREVOLVENTE'}
        p2p={' P2P'}
            >
         </TituloMenuA>
            <View style={{alignItems:'center',alignContent:'center',width:'100%', height:'85%', padding:15, backgroundColor:'#ffffff', borderRadius:15, paddingTop:5, paddingBottom:25}}>
            <H33 h3='Saldo actual'/>
            <PTextSaldo  Text={'$ ' + Deuda}/>
            <View style={{flex:1, flexDirection:'row', width:'100%', marginBottom:'-5%'}}>
                <H6 h6={'Fecha límite  \nde pago'}/>
                <PTextFecha Text={FechaF}/>
            </View>
            <View style={{flex:1, flexDirection:'row', width:'100%', height:'10%',marginBottom:'-4%'}}>
                <H6 h6='Pago mínimo'/>
                <PTextPago Text={'$ ' + PagoMinimo}/>
            </View>
            <TextLink style={{width:'100%'}}>
            <Text style={styles.P}
                onPress={() => navigation.navigate('PagoSPEI',{
                    Name, Apellido, CuentaCliente
                })}
            >
            Vía SPEI
            </Text >
            </TextLink>
            <TextLink style={{width:'100%'}}>
            <Text style={styles.P1}
                onPress={() => navigation.navigate('Oxxo', {
                    RefOxxo,LimiteDisponible
                })}
            >
            Pago en OXXO
            </Text >
            </TextLink>
            <PText1_1 Text={'Recuerda que si  solo haces tu pago mínimo automáticamente renuevas un nuevo periodo de 21 días.'}/>
            <Warning Text={'Realiza tu pago en una sola exhibición.'}/>
     
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    P: {width:'100%', color: '#3AC0F2', fontSize:20, marginTop:'-5%', textAlign:'left', paddingBottom:'5%'},
    P1: {width:'100%', color: '#3AC0F2', fontSize:20, marginTop:'-5%', textAlign:'left', paddingBottom:'5%'}
  })


export default SaldoActual
