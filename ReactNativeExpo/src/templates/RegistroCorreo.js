import React, {useState} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { H2 } from '../atoms/Titles';
import { Subtitle } from '../atoms/P';
import { IptContrasenia,IptCorreo2,IptCodigo } from '../molecules/Inputs';
import { IptConfirmarContrasenia } from '../molecules/Inputs';
import { Registrarme } from '../molecules/Buttons';
import { IconEye } from '../atoms/Icon';
import { validateEmail } from '../../functions/Functions';
import axios from 'axios';
import { StatusBar } from 'react-native';

const RegistroCorreo = ({route, navigation}) => {

    const [MsgError, setError] = useState('');
    const [datosCorreo, setDatosCorreo] = useState({
        Email: "",
        Contrasenia: "",
        CodigoInvitacion:""
  })
  const {Email, Contrasenia,CodigoInvitacion} = datosCorreo;
  const [errorEmail,setErrorEmail] = useState(null);
    const [errorPass,setErrorPass] = useState(null);
    const [errorPass2,setErrorPass2] = useState(null);
    const [contrasenia1, setContrasenia1] = useState('');
    const [loadingI, setLoadingI] = useState(false);
    const [contrasenia2, setContrasenia2] = useState(null);
    
    const onChange =(value, fieldname) =>{
        setDatosCorreo({...datosCorreo, [fieldname]:value})
        // setUserInfo({...usuario, Fecha:valorFecha2});
        }
        const {datosBancos, datosUsuario , datosDireccion} = route.params;

        const validateData = (newtext) =>{
            let isValid = true
              setErrorEmail(null)
             if(!validateEmail(newtext)){
                setErrorEmail('Debes ingresar un correo válido')
                isValid = false
              }
              return isValid
            }
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
     const onChange1 =(val) =>{
         // setErrorEmail('Por favor, ingrese un correo válido');
          setContrasenia1(val);
          if(val == ''){
             setErrorPass('');
          }
       }  
      

        //  var valoresPrueba = {
        //   "usuario":Object.assign(datosBancos,datosCorreo,datosDireccion,datosUsuario)
        //    }

          const validateCampos = () =>{
              if(validatePassword(contrasenia1,Contrasenia) && validateData(Email)){
                navigation.navigate('TyC',{  
                    Email,datosBancos,datosCorreo,datosDireccion,datosUsuario
                   })
              }else{
                  return false;
              }
          
           }

      
    return (
        <KeyboardAwareScrollView style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", padding:15, flexDirection:'column'}}>
            <StatusBar/>
            <H2 h2='Cuéntanos más de ti'></H2>
            <Subtitle Text={'Datos indispensables.'}/>
            <IptCorreo2
             onChangeText={(value) => onChange(value, 'Email')}
            value={Email}
            errorMessage={errorEmail}
            />
        <IptContrasenia
        errorMessage={errorPass}
        onChangeText={(value) => onChange1(value)}
        value={contrasenia1}
        // rightIcon={IconEye}
        />
        
        <IptConfirmarContrasenia
        onChangeText={(value) => onChange(value, 'Contrasenia')}
         value={Contrasenia}
        errorMessage={errorPass2}
        />
        <IptCodigo
        onChangeText={(value) => onChange(value, 'CodigoInvitacion')}
        // value={CodigoInvitacion}
        />
        <Registrarme
        onPress={()=>validateCampos()}
     
        />
        </KeyboardAwareScrollView>
    )
}

export default RegistroCorreo
