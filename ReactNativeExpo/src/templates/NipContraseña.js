import React, {useState} from 'react';
import { H2 } from '../atoms/Titles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { IptNip } from '../molecules/Inputs';
import { EnviarCorreo } from '../molecules/Buttons';
import { StatusBar } from 'react-native';


const NipContraseña = ({route,navigation}) => {
    const [errorNip,setErrorNip] = useState(null);
    const [nip, setNip] =useState('');
    const [loadingI, setLoadingI] = useState(false);
    const [usuario, setUsuario] = useState(null);
    const {email} = route.params;

    var valores;
    
   
    const validateNip = (newtext) =>{
        let isValid = true;
          setErrorNip(null);
          if(newtext === null || newtext === ''){
            setErrorNip('Por favor ingresa su Nip para continuar con su solicitud');
            isValid = false
          }else if(newtext.lenght <6|| newtext.lenght >6 ){
            setErrorNip('Por favor ingresa un Nip no mayor a 6 digitos ni menor a 5 digitos');
            isValid = false
          }
          return isValid
        }


        const onChange =(nip) =>{
          // setErrorEmail('Por favor, ingrese un correo válido');

           setNip(nip);

           if(nip == ''){
             setErrorNip('');
           }
        }


        // navigation.navigate('ContraseniaContrasenia')
        const sendNip = () => {
          if (!validateNip(nip)){
            return;
          }{
         navigation.navigate('ContraseniaContrasenia', {
          nip,
          email
        })
        }
      }


        
    return (
        
        <KeyboardAwareScrollView style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", padding:15}}>
            <StatusBar/>
            <H2 h2='Recuperar contraseña'/>
            <IptNip
            onChangeText={(e) => onChange(e)}
            errorMessage={errorNip}
            value={nip}
            />
            <EnviarCorreo
            onPress={() => sendNip(usuario)}  
            loading={loadingI}
            loadingStyle={{color:'#ffffff'}}
            />
        </KeyboardAwareScrollView>

    )
}

export default NipContraseña;
