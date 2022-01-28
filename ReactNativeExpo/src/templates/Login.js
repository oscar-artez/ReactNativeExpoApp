import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Alert, StatusBar} from 'react-native';
import {TextLink} from '../../components/Styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { H1 } from '../atoms/Titles';
import { InputCorreo, IptPassword} from '../molecules/Inputs';
import { LoginButton,RegistroLinea } from '../molecules/Buttons';
import { validateEmail, DatosToken} from '../../functions/Functions';
import { ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as SecureStore from 'expo-secure-store';
import * as Facebook from 'expo-facebook';
import * as WebBrowser from 'expo-web-browser';
import HyperLink from 'react-native-hyperlink';
//API cliente
import axios from 'axios';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Login = ({route,navigation}) => {
  const [visible, setVisible] = useState(false);
    const [datosCorreo, setDatosCorreo] = useState({
      Email: "",
      Password: "",
  })

    const url2 = 'https://example.com.mx/';
    const [name, setName] = useState(null);
    const {Email, Password} = datosCorreo;
    const [errorEmail,setErrorEmail] = useState(null);
    const [errorPass,setErrorPass] = useState(null);
    const [loadingI, setLoadingI] = useState(false);
    const [loadingInd, setLoadingInd] = useState(false);
    const [showInd, setShowInd] = useState('none');
    const [Tokenn, setTokken] = useState('');
    const [result, setResult] = useState(null);
    let ValsToken = {
      Token:Tokenn,
      Correo: Email,
    }
    

  useEffect(() => {
    registerForPushNotificationsAsync();
    // load();
  }, [])



 const registerForPushNotificationsAsync = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Error al obtener el token para las notificaciones, por favor activalas.');
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
   setTokken(token);
  } else {
    alert('Necesitas de un dispositivo para poder recibir notificaciones');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  };
    const onChange =(value, fieldname) =>{
      setDatosCorreo({...datosCorreo, [fieldname]:value})
      // setUserInfo({...usuario, Fecha:valorFecha2});
      } 
  
    const validateData = (newtext, newtext2) =>{
      let isValid = true
        setErrorEmail(null)
       if(newtext === '' || newtext2 === ''){
        setErrorEmail('Todos los campos son obligatorios')
        setErrorPass('Todos los campos son obligatorios')
        isValid = false
      }else if(!validateEmail(newtext)){
        setErrorEmail('Debes ingresar un correo válido')
        setErrorPass('')
        isValid = false
      }
        return isValid
      }
      const validateCampos = (val1, val2) =>{
        if(!validateData(val1,val2)){
          return;
        }else {
          setErrorPass('')
  
          let ValoresF = {
            "Email": Email,
            "Password":Password
        }
   
        DatosToken(ValsToken);
       
        const url ='http://example.com/example/example/example/exampleFunction';
        setShowInd('flex');
        setLoadingInd(true);
      axios
    .post(url, ValoresF)
    .then((response)=> {  
       const result = response.data;
       const {message, status, data} = result;
       console.log(result.respuesta);
       if(result.respuesta == "DatosIncorrectos"){
        setLoadingInd(false);
        setShowInd('none');
            Alert.alert('Example','Datos Incorrectos, intentalo de nuevo' ,  [
                {
                  text: 'Entendido',
                },
              ],);
              return false;
          
       }else if(result.respuesta == "NoAprobado"){
        setLoadingInd(false);
        Alert.alert('Example','No cuenta con un credito aprobado, no puede iniciar sesion',  [
          {
            text: 'Entendido',
          },
        ],);
       }else{
        //  save(Email);
        setLoadingI(true)
          setLoadingInd(false);
      let DatosInicio = {Token:result.Token};

        navigation.navigate('MenuPrincipal',{  
                  DatosInicio
                 })
          setLoadingI(false)
          setShowInd('none');
       }
    })
    .catch(error =>{console.log(error);})
     }
  }

  // const toggleOverlay = () => {
  //   setVisible(!visible);
  // };

    return (
        
        <KeyboardAwareScrollView style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", padding:15}}>
                <View>
           <ActivityIndicator size="large" color="#3ac0f2" 
          style={{ display:showInd, position:'absolute',alignSelf:'center', top:300, zIndex:1, opacity:0.9, borderRadius:10,transform: [{ scale:3}]}}
          animating={loadingInd}
         
           /> 
          </View>
         <StatusBar/>
         <View style={{flex:1,flexDirection:'column',width:'100%', padding:15, alignItems:'center',}}>
          <H1 h1='Bienvenido'/>
          {/* <Text>
           {name}
            </Text> */}
            <Icon
                    name="finger-print-outline"
                    type='ionicon'
                    color='transparent'
                    iconStyle={{color:'#e84041',fontSize:80,paddingTop:'4%'}}
            >

            </Icon>
          </View>
  
              <InputCorreo
                onChangeText={(value) => onChange(value, 'Email')}
                value={Email}
                errorMessage={errorEmail}
              />
              <IptPassword
                  onChangeText={(value) => onChange(value, 'Password')}
                  value={Password}
                  errorMessage={errorPass}
              />
              <LoginButton
              onPress={() => validateCampos(Email,Password)}
              loading={loadingI}
          loadingStyle={{color:'#ffffff'}}
              />
              <RegistroLinea
            onPress={() => navigation.navigate('Nombre'
            )}
              /> 
                    {/* <View
      style={{borderRadius:10,backgroundColor:"#3AC0F2", width:'100%', height:50, alignSelf:'center',justifyContent:'center', alignItems:'center'}}
      > 
    <HyperLink linkDefault={true}
        linkStyle={{textAlign:'center', color:'#fff', fontSize:15, fontWeight:'bold'}}
        linkText={'¿No tienes cuenta? Solicitala aquí'}
        > 
        <Text
                >
        {url2}
          </Text>
        </HyperLink>
      </View> */}
          <TextLink>
          <Text style={styles.P}
            onPress={() => navigation.navigate('CorreoContraseña', 
            datosCorreo
            )}

          >
          ¿Olvidaste tu contraseña?
        </Text >
        </TextLink>

          </KeyboardAwareScrollView>
    
    );
  
  }
  
     const styles = StyleSheet.create({
       P: {color: '#ffffff', fontSize:15, marginTop:40}
     })
  
  export default Login;