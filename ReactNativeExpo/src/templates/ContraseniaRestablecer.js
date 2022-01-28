import React, {useState} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Tyc } from '../atoms/Titles';
import { Subtitle } from '../atoms/P';
import { IptContrasenia, IptConfirmarContrasenia } from '../molecules/Inputs';
import { EnviarCorreo } from '../molecules/Buttons';
import { Alert } from 'react-native';
import { StatusBar } from 'react-native';
import axios from 'axios';


const ContraseniaContrasenia = ({route, navigation}) => {
    const [errorPass,setErrorPass] = useState(null);
    const [errorPass2,setErrorPass2] = useState(null);
    const [contrasenia1, setContrasenia1] = useState(null);
    const [loadingI, setLoadingI] = useState(false);
    const { nip, email } = route.params;
    const [contrasenia2, setContrasenia2] = useState(null);
    const url ='http://example.com/example/example/example/exampleFunction';

    const validatePassword = (val1,val2)=>{
        var isValid = false;
        if(val1 === null && val2 === null || val1 === '' && val2 === ''){
        setErrorPass('Todos los campos son obligatorios');
        setErrorPass2('Todos los campos son obligatorios');
        isValid = false;
        }
        else if(val1.length <8 && val2 === null || val1.length <8 && val2.length < 8 ){
            setErrorPass('Tu contraseña debe contener como mínimo 8 caracteres, una mayúscula, una minúscula, y/o un caracter especial');
            setErrorPass2('Tu contraseña debe contener como mínimo 8 caracteres, una mayúscula, una minúscula, y/o un caracter especial');
            isValid = false;
        }
         else if(val1 != val2){
            setErrorPass('Tus contraseñas no coinciden');
            setErrorPass2('Tus contraseñas no coinciden');
            isValid = false;
        }
        else if(val1 === val2){
            setErrorPass('');
             setErrorPass2('');
            isValid = true;
            return isValid;
        }
    }

    let valores = {
        usuario:{
        nip:nip,
        contrasenia:contrasenia2,
        Email:email.usuario.Email}
    }

        const sendContrasenia = () => {
            if (!validatePassword(contrasenia1,contrasenia2)){
              return false;
            }
            else{
                axios
            .post(url, valores)
            .then((response)=> {
               const result = response.data;
               const {message, status, data} = result;
               if(result.respuesta === 'True'){
                setLoadingI(true)
                setTimeout(() => {
                Alert.alert('Example','Tu contraseña se ha restablecido correctamente',  [
                    {
                      text: 'Entendido',
                    },
                  ],);
                  navigation.popToTop();
                  setLoadingI(false)
                }, 3000);
                //  console.log(response.status, response.data);
               }
                else{
                  console.log(result);
                    Alert.alert('Example','El Nip es incorrecto, por favor verificalo',  [
                        {
                          text: 'Entendido',
                        },
                      ],);
                }
              
            })
            
            .catch(error =>{
                     Alert.alert('Example','El Nip es incorrecto, por favor verificalo',  [
                         {
                           text: 'Entendido',
                         },
                       ],);
                    console.log(error);
              
              
            })
        
        }
    
          }
       
          const onChange =(val) =>{
            // setErrorEmail('Por favor, ingrese un correo válido');
             setContrasenia1(val);
             if(val == ''){
                setErrorPass('');
             }
          }  
            const onChange2 =(val) =>{
            // setErrorEmail('Por favor, ingrese un correo válido');
             setContrasenia2(val);
             if(val == ''){
                setErrorPass2('');
             }
          }
    
    return (
        <KeyboardAwareScrollView style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", padding:15, flexDirection:'column'}}>
            <StatusBar/>
            <Tyc h2='Recuperar contraseña'/>
            <Subtitle Text={'Restablecer contraseña.'}/>
        <IptContrasenia
        errorMessage={errorPass}
        onChangeText={(e) => onChange(e)}
        value={contrasenia1}
        />
        <IptConfirmarContrasenia
         onChangeText={(e) => onChange2(e)}
         value={contrasenia2}
         errorMessage={errorPass2}
        />
        <EnviarCorreo
         onPress={()=>sendContrasenia()}
         loading={loadingI}
         loadingStyle={{color:'#ffffff'}}
        />

        </KeyboardAwareScrollView>
    )
}

export default ContraseniaContrasenia
