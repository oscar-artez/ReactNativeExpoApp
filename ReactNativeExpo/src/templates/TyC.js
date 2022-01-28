import React, {useState} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Tyc,TituloDocumento } from '../atoms/Titles'
import { Subtitle1 } from '../atoms/P'
import { AceptaryContinuar } from '../molecules/Buttons'
import { StatusBar, Text, View, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { CheckBox } from 'react-native-elements'
import axios from 'axios'
import { ContratoTexto,TyCTexto } from '../atoms/TextosGrandes'



const TyC = ({route, navigation}) => {
     const {datosBancos,datosUsuario,datosDireccion, Email,datosCorreo} = route.params;
    const [Checkbox, setCheckbox] = useState(false);
    const [loadingI, setLoadingI] = useState(false);
     var valoresPrueba = {
         "usuario":Object.assign(datosBancos,datosCorreo,datosDireccion,datosUsuario)
          }

    const onChange = () =>{
        if(Checkbox === false){
            setCheckbox(true)
        }else{
            setCheckbox(false)
        }
    }

    const validateCampos = () =>{
        if(Checkbox === false){
            Alert.alert('Example','Para poder continuar con el proceso debes aceptar los términos y condiciones',  [
                {
                  text: 'Entendido',
                },
              ],);
        }else{
                 const url ='http://example.com/example/example/example/exampleFunction';
             axios
             .post(url, valoresPrueba)
             .then((response)=> {
                const result = response.data;
                  setLoadingI(true)
              if(result.respuesta === 'Correo o RFC registrado previamente'){
                Alert.alert('Example',result.respuesta,  [
                    {
                      text: 'Entendido',
                    },
                  ],);
                navigation.popToTop();
              }else{
                   Alert.alert('Example',result.respuesta,  [
                        {
                          text: 'Entendido',
                        },
                      ],);
                  navigation.navigate('UltimoPasoNip',{  
                   Email
                  })
                   setLoadingI(false)
                }
                   })
                   
             .catch(error =>{console.log(error);})
                
                
                
           }
        }
    
    return (
        <View style={{flex:1,alignContent: "center", height:'100%', backgroundColor: "#1f1b36", padding:15}}>
        <StatusBar/>
        <Tyc h2='Contrato, Términos y Condiciones'/>
        <TituloDocumento
            h2='Términos y condiciones'
            />
        <ScrollView
             style={{flexGrow:.5,height:900,marginBottom:0}}
            >
            <TyCTexto/>
            </ScrollView>
            <TituloDocumento
            h2='Contrato'
            />
        <ScrollView 
             style={{flexGrow:.5,height:800, marginBottom:5}}>
             <ContratoTexto
                            />
              </ScrollView> 
        <Subtitle1 Text={'Te recomendamos leer hasta el final, así podrás revisar nuestros terminos y condiciones y el contrato del servicio.'}/>
        <CheckBox
            containerStyle={{backgroundColor:'transparent',borderColor:'transparent'}}
            textStyle={{color:'#fff'}}
              title='Acepto términos y condiciones, asimismo, acepto el contrato del servicio. '
              checked={Checkbox}
              onPress={() => onChange()}
            />
        <AceptaryContinuar
        onPress={()=>validateCampos()}
        loading={loadingI}
        loadingStyle={{color:'#ffffff'}}
        />
    </View>
    )
}

export default TyC
