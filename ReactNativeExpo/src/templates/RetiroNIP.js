import React, {useState} from 'react'
import { StatusBar, ScrollView,Text, View, StyleSheet,ActivityIndicator, Alert } from 'react-native';
import { PedirDisponible2 } from '../molecules/Buttons';
import { PTextNip } from '../atoms/P';
import {TextLink} from '../../components/Styles';
import { IptNipDispo } from '../molecules/Inputs';
import axios from 'axios';


const RetiroNIP = ({route, navigation}) => {
    const {MontoRetiro,DatosInicio}= route.params
    const[TokenT, setTokenT] = useState('');
    const [loadingInd, setLoadingInd] = useState(false);
    const [showInd, setShowInd] = useState('none');
    // const[valores, setValores] =useState('none');

    

    const onChange = (val) =>{
          setTokenT(val);

         }

         let valores = {
          Token:DatosInicio.Token,
          TokenT:TokenT,
          MontoRetiro:MontoRetiro
   
      }

        const envioNip = () =>{
        const url ='http://example.com/example/example/example/exampleFunction';
        setShowInd('flex');
        setLoadingInd(true);
            axios
            .post(url, valores)
            .then((response)=> {  
               const result = response.data;
               const {message, status, data} = result;
                setLoadingInd(false);
                setShowInd('none');
                  let validacion = result.EstadoTransaccion;
                  if(validacion === 'OperacionExitosa'){
                    Alert.alert('Example','¡¡Transacción exitosa!! Revisa tu cuenta bancaria, tu folio de retiro es: ' + result.IformacionTransaccion,  [
                      {
                        text: 'Entendido',
                      },
                  ],);
                    navigation.navigate('MenuPrincipal');
                  }else{
                    Alert.alert('Example',result.IformacionTransaccion,  [
                      {
                        text: 'Entendido',
                      },
                  ],);
                  
                  }


                 
        
             })
            .catch(error =>console.log(error))
           }
    return (
        <ScrollView style={{position:'relative',flex:1,alignContent: "center",  backgroundColor: "#1f1b36", paddingHorizontal:15, paddingVertical:0,height:'100%'}}>
            <StatusBar/>
            <View style={{alignItems:'center',alignContent:'center',width:'100%', height:'100%', padding:15, backgroundColor:'#ffffff', borderRadius:15, marginBottom:15, marginTop:'50%', flex:1}}>
            <ActivityIndicator size="large" color="#3ac0f2"
              style={{ display:showInd, position:'absolute',alignSelf:'center', top:150, zIndex:1, opacity:0.9, borderRadius:10,transform: [{ scale:3}]}}
              animating={loadingInd}
            />
            <PTextNip Text={'Coloca el NIP que te enviamos a tu correo electrónico.'}/>
            <IptNipDispo
             onChangeText={(value) => onChange(value)}
             value={TokenT}

            />
            </View>
            <PedirDisponible2
            onPress={() => envioNip()}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    P: {color: '#6A6A6A', fontSize:15, marginTop:40,marginBottom:30}
  })

export default RetiroNIP
