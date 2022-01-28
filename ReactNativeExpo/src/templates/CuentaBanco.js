import React,{useState,useRef} from 'react'
import { KeyboardAwareScrollView, Alert } from 'react-native-keyboard-aware-scroll-view'
import { H2Form } from '../atoms/Titles'
import { Subtitle } from '../atoms/P'
import {IpRedSocial,IptCuentaBancaria, IptTelefono} from '../molecules/Inputs'
import { Continuar } from '../molecules/Buttons'
import {Picker} from '@react-native-picker/picker';
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import RNPickerSelect from  'react-native-picker-select';
import { StatusBar } from 'react-native';


const isValidObjField = (obj) =>{
  

  const isBelowThreshold = (currentValue) => currentValue != '' ;
  return Object.values(obj).every(isBelowThreshold)

}

const CuentaBanco = ({route,navigation}) => {
  const {datosUsuario, datosDireccion} = route.params;
  const [MsgError, setError] = useState('');
  const [MsgCLabe, setMsgClabe] = useState('');
    const [MsgErrorTel, setMsgErrorTel] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();
  const [datosBanco, setDatosBanco] = useState({
    Ocupacion:"",
    RedSocial:"",
    CuentaBancaria:"",
    NombreBanco:"",
    Telefono:"",
})
const {Ocupacion, RedSocial,CuentaBancaria,NombreBanco, Telefono} = datosBanco;


const onChange =(value, fieldname) =>{
setDatosBanco({...datosBanco, [fieldname]:value})
// setUserInfo({...usuario, Fecha:valorFecha2});
}

const validateCampos = () =>{
  if(Ocupacion === '' || Telefono === '' || CuentaBancaria === '' || NombreBanco === '' || RedSocial === ''){
    setError('Estos campos son obligatorios');
    setMsgErrorTel('Estos campos son obligatorios');
    setMsgClabe('Estos campos son obligatorios');
 }else if(Telefono.length != 10){
  setMsgErrorTel('El número de telefónico debe ser de 10 digitos');
 }else if(CuentaBancaria.length != 18){
  setMsgClabe('Tu clabe bancaria debe ser de 18 digitos');
 }
else{
  setError('');
  setMsgErrorTel('');
  setMsgClabe('');
   let datosBancos = datosBanco;
    navigation.navigate('RegistroCorreo', {
      datosBancos,datosUsuario,datosDireccion
    }
      )

  }
 }
  return (
      <KeyboardAwareScrollView style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", paddingHorizontal:15}}>
          <StatusBar/>
          <H2Form h2='Cuéntanos más de ti'/>
          <Subtitle Text={'Datos indispensables.'}/>
          <View  style={{textAlign:'center',marginLeft:10,backgroundColor:"#ffffff",width:"95%",padding:10,paddingHorizontal:30, paddingVertical:10,borderRadius:15,fontSize: 30,height:50,color:'#6a6a6a',borderBottomWidth:0,marginBottom:25,}}>
         <RNPickerSelect
         style={{placeholder:{fontSize:18},inputIOS:{fontSize:18},inputAndroid:{fontSize:18,color:"black"}}}
         placeholder={{
            label: 'Escoge tu ocupación:',
          }}
         onValueChange={(value) => onChange(value, 'Ocupacion')}
         items={[
          { label:"Estudiante" , value:"Estudiante"},
          { label:"Empleado" , value:"Empleado"},
          { label:"Trabajador Independiente" , value:"Trabajador Independiente"},
          { label:"Desempleado" , value:"Desempleado"},
        ]}
         />
         </View>
         <View>
      <Text
      style={{color:'red',marginTop:-15, paddingHorizontal:15, fontSize:18, marginBottom:5}}
      >{MsgError}</Text>
      </View>
          {/* <IpOcupacion/> */}

          <IpRedSocial
            onChangeText={(value) => onChange(value, 'RedSocial')}
            errorMessage={MsgError}
          />
          <IptTelefono
          onChangeText={(value) => onChange(value, 'Telefono')}
          errorMessage={MsgErrorTel}
          />
          <IptCuentaBancaria
           onChangeText={(value) => onChange(value, 'CuentaBancaria')}
           errorMessage={MsgCLabe}
          />
          <View  style={{textAlign:'center',marginLeft:10,backgroundColor:"#ffffff",width:"95%",padding:10,paddingHorizontal:30,borderRadius:15,fontSize: 18,height:50,color:'#6a6a6a',borderBottomWidth:0,marginBottom:25,}}>
          <RNPickerSelect 
          style={{placeholder:{fontSize:18},inputIOS:{fontSize:18},inputAndroid:{fontSize:18,color:"black"}}}
           placeholder={{
              label: 'Escoge tu banco:',
            }}
           onValueChange={(value) => onChange(value, 'NombreBanco')}
          items={[
            { label:"BANXICO" , value:"BANXICO"},
            { label:"BANCOMEXT" , value:"BANCOMEXT"},
            { label:"BANOBRAS" , value:"BANOBRAS"},
            { label:"BANJERCITO" , value:"BANJERCITO"},
            { label:"NAFIN" , value:"NAFIN"},
            { label:"BANSEFI" , value:"BANSEFI"},
            { label:"HIPOTECARIA FED" , value:"HIPOTECARIA FED"},
            { label:"BANAMEX" , value:"BANAMEX"},
            { label:"BBVA BANCOMER" , value:"BBVA BANCOMER"},
            { label:"SANTANDER" , value:"santander"},
            { label:"HSBC" , value:"HSBC"},
            { label:"BAJIO" , value:"bajio"},
            { label:"INBURSA" , value:"INBURSA"},
            { label:"MIFEL" , value:"MIFEL"},
            { label:"SCOTIABANK" , value:"SCOTIABANK"},
            { label:"INVEX" , value:"INVEX"},
            { label:"BANSI" , value:"BANSI"},
            { label:"AFIRME" , value:"AFIRME"},
            { label:"BANORTE" , value:"BANORTE"},
            { label:"ACCENDO BANCO" , value:"ACCENDO BANCO"},
            { label:"AMERICAN EXPRES" , value:"AMERICAN EXPRES"},
            { label:"BANK OF AMERICA" , value:"BANK OF AMERICA"},
            { label:"MUFG" , value:"MUFG"},
            { label:"JP MORGAN" , value:"JP MORGAN"},
            { label:"BMONEX" , value:"BMONEX"},
            { label:"VE POR MAS" , value:"VE POR MAS"},
            { label:"DEUTSCHE" , value:"DEUTSCHE"},
            { label:"CREDIT SUISSE" , value:"CREDIT SUISSE"},
            { label:"AZTECA" , value:"AZTECA"},
            { label:"AUTOFIN" , value:"AUTOFIN"},
            { label:"BARCLAYS" , value:"BARCLAYS"},
            { label:"COMPARTAMOS" , value:"COMPARTAMOS"},
            { label:"MULTIVA BANCO" , value:"MULTIVA BANCO"},
            { label:"ACTINVER" , value:"ACTINVER"},
            { label:"INTERCAM BANCO" , value:"INTERCAM BANCO"},
            { label:"BANCOPPEL" , value:"BANCOPPEL"},
            { label:"ABC CAPITAL" , value:"ABC CAPITAL"},
            { label:"CONSUBANCO" , value:"CONSUBANCO"},
            { label:"VOLKSWAGEN" , value:"VOLKSWAGEN"},
            { label:"CIBANCO" , value:"CIBANCO"},
            { label:"BBASE" , value:"BBASE"},
            { label:"BANKAOOL" , value:"BANKAOOL"},
            { label:"PAGATODO" , value:"PAGATODO"},
            { label:"INMOBILIARIO" , value:"INMOBILIARIO"},
            { label:"DONDE" , value:"DONDE"},
            { label:"BANCREA" , value:"BANCREA"},
            { label:"BANCO FINTERRA" , value:"BANCO FINTERRA"},
            { label:"ICBC" , value:"ICBC"},
            { label:"SABADELL" , value:"SABADELL"},
            { label:"SHINHAN" , value:"SHINHAN"},
            { label:"MIZUHO BANK" , value:"MIZUHO BANK"},
            { label:"BANCO S3" , value:"BANCO S3"},
            { label:"MONEXCB" , value:"MONEXCB"},
            { label:"GBM" , value:"GBM"},
            { label:"MASARI" , value:"MASARI"},
            { label:"VALUE" , value:"VALUE"},
            { label:"ESTRUCTURADORES" , value:"ESTRUCTURADORES"},
            { label:"VECTOR" , value:"VECTOR"},
            { label:"MULTIVA CBOLSA" , value:"MULTIVA CBOLSA"},
            { label:"FINAMEX" , value:"FINAMEX"},
            { label:"VALMEX" , value:"VALMEX"},
            { label:"PROFUTURO" , value:"PROFUTURO"},
            { label:"CB INTERCAM" , value:"CB INTERCAM"},
            { label:"CI BOLSA" , value:"CI BOLSA"},
            { label:"FINCOMUN" , value:"FINCOMUN"},
            { label:"HDI SEGUROS" , value:"HDI SEGUROS"},
            { label:"AKALA" , value:"AKALA"},
            { label:"EVERCORE" , value:"EVERCORE"},
            { label:"CREDICAPITAL" , value:"CREDICAPITAL"},
            { label:"UNAGRA" , value:"UNAGRA"},
            { label:"LIBERTAD" , value:"LIBERTAD"},
            { label:"CAJA POP MEXICA" , value:"CAJA POP MEXICA"},
            { label:"CRISTOBAL COLON" , value:"CRISTOBAL COLON"},
            { label:"CAJA TELEFONIST" , value:"CAJA TELEFONIST"},
            { label:"TRANSFER" , value:"TRANSFER"},
            { label:"FONDO (FIRA)" , value:"FONDO (FIRA)"},
            { label:"INVERCAP" , value:"INVERCAP"},
            { label:"FOMPED" , value:"FOMPED"},
            { label:"CLS" , value:"CLS"},
            { label:"INDEVAL" , value:"INDEVAL"},
            { label:"CoDi Valida" , value:"CoDi Valida"},
            { label:"SANTANDER2" , value:"SANTANDER2"},
          ]}
      />
      </View>
      <View>
      <Text
      style={{color:'red',marginTop:-15, paddingHorizontal:15, fontSize:12, marginBottom:5}}
      >{MsgError}</Text>
      </View>
          <Continuar
          onPress={()=> validateCampos()}
          />
      </KeyboardAwareScrollView>
  )
}


export default CuentaBanco
