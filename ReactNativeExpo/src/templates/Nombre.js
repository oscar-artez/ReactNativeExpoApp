import React, {useState} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { H2Nom,H4 } from '../atoms/Titles';
import { Subtitle } from '../atoms/P';
import { IptSegundoNombre, IptApellidoPaterno,IptApellidoMaterno,IptRfc,IptNombre, IptFecha, IptTelefono } from '../molecules/Inputs';
import { Continuar,GenerarRfc,GenerarFecha} from '../molecules/Buttons';
import { reemplazoAcentos, calculaRFC, quitaArticulos,esVocal } from '../../functions/Functions';
import { StatusBar, TouchableHighlight, View, StyleSheet, Alert, Text} from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { set } from 'lodash';
import axios from 'axios';
import { ScrollView } from 'react-native';


const isValidObjField = (obj) =>{
  

  const isBelowThreshold = (currentValue) => currentValue != '' ;
  return Object.values(obj).every(isBelowThreshold)

}


const Nombre = ({navigation}) => {

  const [MsgError, setError] = useState('');
  const [usuario, setUserInfo] = useState({

        Nombre: "",
        Segundo_Nombre: " ",
        ApellidoP: "",
        ApellidoM: "",
        Rfc:'',
        Fecha:  '' ,

})
const {Nombre,Segundo_Nombre, ApellidoP, ApellidoM, Rfc, Fecha} = usuario;

 let valorFecha = '5'
  
   const [valorFecha2, setValorFecha2] = useState('Año/Mes/Día');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
   const [date, setDate] =useState('Año/Mes/Día');
   const showDatePicker = () => {
     setDatePickerVisibility(true);
   };
   const hideDatePicker = () => {
       setDatePickerVisibility(false);
     };

 const handleConfirm = (datev) => {
 var falFecha = moment(datev).format('YYYY-MM-DD')
  valorFecha = falFecha;
  setFechar(valorFecha);
  setValorFecha2(valorFecha);
  setUserInfo({...usuario, Fecha:valorFecha});
  setNombrer(Nombre + ' ' + Segundo_Nombre);
  setApellido_paternor(ApellidoP);
  setApellido_maternor(ApellidoM);
   hideDatePicker();
   
   return valorFecha;
 };




const [nombrer, setNombrer] = useState('');
const [fechar, setFechar] = useState('');
const [apellido_paternor,setApellido_paternor] = useState('');
const [apellido_maternor, setApellido_maternor] = useState('');



const calcularRFC = () =>{

  axios.request(options).then(function (response) {
    if(Nombre === '' || Fecha === '', ApellidoP === '' || ApellidoM === '' ){
      Alert.alert('example','Debes llenar los campos anteriores para que podamos generar tu RFC' ,  [
        {
          text: 'Entendido',
        },
      ],);
    } else{+
      setUserInfo({...usuario, Rfc:response.data.response.data.rfc});
      setRfc2(response.data.response.data.rfc);
    }


  }).catch(function (error) {
    //  console.error(error);
  });  


}

const [Rfc2, setRfc2]= useState('');


var options = {
  method: 'GET',
  url: 'http://example.com/example/example/example/exampleFunction',
  params: {
    nombre: Nombre + ' ' +Segundo_Nombre,
    fecha: Fecha,
    apellido_paterno: ApellidoP,
    apellido_materno: ApellidoM
  },
  headers: {
    'x-rapidapi-key': 'keyexample',
    'x-rapidapi-host': 'keyexample'
  }
};

const [validador, setValidador]=useState(0);
  const validateCampos = (val) =>{
      if(Nombre === ''  || ApellidoP === '' ||  ApellidoM === '' || Fecha === '' || Rfc === ''){
        setError('Estos campos son obligatorios');
     }
     else if(Rfc != '' && validador === 0){
      setError('');
      Alert.alert('example','Siempre verifica que tus datos estén correctos antes de continuar, si el RFC que te mostramos es diferente puedes modificarlo y después dar en continuar.',  [
        {
          text: 'Entendido',
        },
      ],);
      setValidador(1);
     }

    else{
      let datosUsuario = usuario;
       navigation.navigate('Direccion', {
        datosUsuario
         })
      
      }
     }

     const onChangeF =(value, fieldname) =>{
      setUserInfo({...usuario, [fieldname]:reemplazoAcentos(value.toUpperCase())})
      }
        const onChange =(value, fieldname) =>{
          setUserInfo({...usuario, [fieldname]:reemplazoAcentos(value.toUpperCase())})
          }
    return (
        <KeyboardAwareScrollView style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", padding:15, height:'100%'}}>
           <ScrollView>
           <StatusBar/>
            <H2Nom h2='Cuéntanos más de ti'
            />
            <Subtitle Text={'Datos indispensables.'}/>
            <IptNombre
            errorMessage={MsgError}
             onChangeText={(value) => onChange(value, 'Nombre')}
             value={Nombre}
            />
            <IptSegundoNombre
            onChangeText={(value) => onChange(value,'Segundo_Nombre')}
            value={Segundo_Nombre}
            />
            <IptApellidoPaterno
            errorMessage={MsgError}
            onChangeText={(value) => onChange(value, 'ApellidoP')}
            value={ApellidoP}
            />
            <IptApellidoMaterno
            errorMessage={MsgError}
            onChangeText={(value) => onChange(value, 'ApellidoM')}
            value={ApellidoM}
            />
            <H4 h4='Fecha de nacimiento'/>
            <TouchableHighlight
             style={{ padding:10,paddingHorizontal:'5%',width:'95%',justifyContent:'space-around', alignContent:'center', backgroundColor:'#FFFFFF',borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',marginBottom:'5%', marginLeft:'3%'}}
             underlayColor={'transparent'}
             onPress={showDatePicker}
                             >
               <Text
              style={{textAlign:'center', color:'#6a6a6a', fontSize:13}}
               >
               {valorFecha2}
                 </Text>
                
          </TouchableHighlight>
       <DateTimePickerModal
     isVisible={isDatePickerVisible}
     mode="date"
      minimumDate={new Date(moment().subtract('150', 'years').format('YYYY/MM/DD'))}
      maximumDate={new Date(moment().subtract('18', 'years').format('YYYY/MM/DD'))}
     onConfirm={handleConfirm}
     onCancel={hideDatePicker}
     
     pickerContainerStyleIOS={{backgroundColor:'#817878'}}
    isDarkModeEnabled={true}
      />

    
       <IptRfc
            onChangeText={(value)=> onChange(value, 'Rfc')}
            defaultValue={Rfc2}
            errorMessage={MsgError}
            />
            <GenerarRfc
            onPress={() =>  calcularRFC()}
            
            />
            <Continuar
            onPress={() => validateCampos(valorFecha2)}
            />
                       </ScrollView>
        </KeyboardAwareScrollView>
    )
}

const styles =StyleSheet.create({
  containerStyle:{
   textAlign:'center',

   paddingHorizontal:20,
   backgroundColor:'#ffffff',
   justifyContent:'center',
   borderRadius:15,
   fontSize: 15,
   height:50,
   width:'100%'
  },
  icons: {
   textAlign: 'center',
   textAlignVertical: 'center',
   height:'20px',

 },


 })
export default Nombre
