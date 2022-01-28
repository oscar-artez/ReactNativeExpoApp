import React, {useState} from 'react'
import { H2 } from '../atoms/Titles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { IptNip } from '../molecules/Inputs';
import { Subtitle } from '../atoms/P';
import { Continuar } from '../molecules/Buttons';
import {Text,StyleSheet, Alert} from 'react-native';
import {TextLink} from '../../components/Styles';
import { StatusBar, ScrollView } from 'react-native';

import axios from 'axios';
import { AceptoBuro } from '../atoms/TextosGrandes';
const UltimoPasoNip = ({route,navigation}) => {
  const {Email}=route.params
  // let Email = '';
  const [errorNip,setErrorNip] = useState(null);
  const [nip, setNip] =useState('');
  const [loadingI, setLoadingI] = useState(false);

  var valores;
  
 let ValorPrueba = {usuario:{
    Email:Email}}
 ;

  const validateNip = (newtext) =>{
      let isValid = true;
        setErrorNip(null);
        if(newtext === null || newtext === ''){
          setErrorNip('Por favor ingresa su Nip para continuar con su solicitud');
          isValid = false
        }else if(newtext.length <5){
          setErrorNip('Por favor ingresa un Nip no mayor a 5 digitos ni menor a 5 digitos');
          isValid = false
        }
        return isValid
      }


      const onChange =(val) =>{
         setNip({Nip:val});
         if(val == ''){
           setErrorNip('');
         }
      }

    const handleChange =(nip ) =>{

      if (!validateNip(nip)){
        return;
      }{
      // valores = nip;
      
     setNip(nip);

      const url ='http://example.com/example/example/example/exampleFunction';
      axios
      .post(url, nip)
      .then((response)=> {
         const result = response.data;
         const {message, status, data} = result;
         if(result.respuesta === 'Su petición no fue preaprobada'){
          Alert.alert('Example','Lo sentimos, por el momento no podemos otorgarte un crédito, en un plazo de 3 meses puedes volver a solicitarlo',  [
            {
              text: "Entendido",
            },
          ],);
          navigation.popToTop();
         }else if(result.respuesta === 'Nip incorrecto o ya utilizado'){
          Alert.alert('Example',result.respuesta,  [
            {
              text: "Entendido",
            },
          ],);
         }
         else{
          setLoadingI(true);
          setTimeout(() => {
             setLoadingI(false);
             
             navigation.navigate('Example',{
              Email
             })
          }, 1500);

         }
  
      })
      .catch(error =>{
        Alert.alert('Example','El NIP no existe',  [
          {
            text: "Entendido",
          },
        ],);
      })
  
    }
  }

  const reenvioNip =()=>{
    const url ='http://example.com/example/example/example/exampleFunction';
    axios
    .post(url, ValorPrueba)
    .then((response)=> {
      
      Alert.alert('Example','Se ha enviado de nuevo tu NIP al correo con el que te registraste, recuerda revisar tu bandeja de SPAM',  [
        {
          text: "Entendido",
        },
      ],);
    })
    .catch(error =>{console.log(error)})
  }


    return (
        <KeyboardAwareScrollView style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", padding:15}}>
        <StatusBar/>
        <H2 h2='Último paso'/>
        <Subtitle Text={'Al ingresar el NIP que te enviamos a tu correo electrónico, autorizas la Consulta de tu Historial crediticio a favor de Peer 2 Peer*. \nNo olvides revisar tu bandeja de SPAM'}/>
        <IptNip 
        onChangeText={(e) => onChange(e)}
        errorMessage={errorNip}
        value={nip}
        />
        <Continuar
        onPress={() => handleChange(nip)}  
        loading={loadingI}
        loadingStyle={{color:'#ffffff'}}
        />
        <TextLink>
        <Text style={styles.P}
    onPress={()=>reenvioNip()}
        >
        Enviar de nuevo el NIP
      </Text >
   
      </TextLink>
      <ScrollView 
             style={{flexGrow:1,height:'20%'}}>
             <AceptoBuro
                            />
              </ScrollView> 
    </KeyboardAwareScrollView>
    )

}

const styles = StyleSheet.create({
    P: {color: '#ffffff', fontSize:15,marginBottom:'5%'}
  }) 

export default UltimoPasoNip




