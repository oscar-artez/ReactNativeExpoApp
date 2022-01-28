import React, {useState, useEffect} from 'react';
import { InputCorreo } from '../molecules/Inputs';
import { EnviarCorreo } from '../molecules/Buttons';
import { H2 } from '../atoms/Titles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Subtitle } from '../atoms/P';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { Text } from 'react-native-elements';
import { validateEmail } from '../../functions/Functions';
import { StatusBar } from 'react-native';


import axios from 'axios';
import { set, values } from 'lodash';
import { Alert } from 'react-native';

const CorreoContraseña = ({navigation}) => {

  //  useEffect(() => {
  //   .clear();
  //  })

  const [errorEmail,setErrorEmail] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [correo, setCorreo] =useState('');
  const [loadingI, setLoadingI] = useState(false);


  const sendEmail = () => {
    if (!validateData(usuario)){
      return;
    }
    valores = {usuario:{Email:usuario}}
   setCorreo(valores)
    handleCorreo(valores);

  }
  
  const validateData = (newtext) =>{
    
  let isValid = true
    setErrorEmail(null)
   if(!validateEmail(newtext)){
      setErrorEmail('Debes ingresar un correo válido')
      isValid = false
    }
    return isValid
  }

  const handleCorreo =(email) =>{
    const url ='http://example.com/example/example/example/exampleFunction';
    axios
    .post(url, email)
    .then((response)=> {
       const result = response.data;
       const {message, status, data} = result;
       if(response.status == 400){
       }else{
        setLoadingI(true);
        setTimeout(() => {
          navigation.navigate('NipContraseña', {
          email
          })
          setLoadingI(false);
          // setCorreo.clear();  
        }, 1500);
       }

    })
    .catch(error =>{
      Alert.alert('Peer2Peer','El correo no existe',  [
        {
          text: "Entendido",
        },
      ],);
    })

  }

  const handleChange =(val) =>{
    
    sendEmail()

  }

  var valores;

  const onChange =(val) =>{
    // setErrorEmail('Por favor, ingrese un correo válido');
     setUsuario(val);
     if(val == ''){
       setErrorEmail('')
     }
  }


  return (
        <KeyboardAwareScrollView style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", padding:15, flexDirection:'column'}}>
            <StatusBar/>
            <H2 h2='Recuperar contraseña'></H2>
            <Subtitle Text={'Para poder ingresar a Example, proporciona tu correo electrónico y recibirás un código.'}/>
        <InputCorreo  
        onChangeText={(e) => onChange(e)}
        errorMessage={errorEmail}
        value={correo}
        />
        <EnviarCorreo
            onPress={() => handleChange(usuario)}  
            loading={loadingI}
            loadingStyle={{color:'#ffffff'}}
            />
        </KeyboardAwareScrollView>
       
      
  );

}





export default CorreoContraseña;