import React, {useState} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { H2Form } from '../atoms/Titles'
import { Subtitle } from '../atoms/P'
import { IptDireccion,IptNumeroExterior,IptNumeroInteriror,IptColonia,IptCP,IptEstado,IptCiudad,IptMunicipio } from '../molecules/Inputs'
import { Continuar,Validar } from '../molecules/Buttons'
import { View } from 'react-native'
import { Alert } from 'react-native'
import { reemplazoAcentos } from '../../functions/Functions'
import axios from 'axios'
import RNPickerSelect from 'react-native-picker-select';
// import { Picker } from '@react-native-picker/picker'
import { StatusBar } from 'react-native';


const Direccion = ({route, navigation}) => {
  const [direccion, setDireccion] = useState({
    Calle: "",
    NumeroE: "",
    NumeroI: "",
    Colonia: "",
    Cp: "",
    Estado: "",
    Ciudad: "",
    Municipio: "",

})
const {datosUsuario} = route.params;
const [MsgError, setError] = useState('');
const {Calle, NumeroE,NumeroI,Colonia,Cp,Estado,Ciudad,Municipio} = direccion;

    let valor = {
        label: 'Escoge tu colonia:', value:''
      };
    const [colonias, setColonias]= useState([{
      label: 'Escoge tu colonia:', value:''
    }]);
    const [valCol, setValCol] = useState({
        label: 'Escoge tu colonia:', value:''
      });

       const onChangeCol = () => {
        setDireccion({...direccion, Colonia:valCol.value})
        }

 let valorFecha = '5'

const  get =  (term) => {
    let url = `http://example.com/example/example/example/exampleFunction`;
  axios.get(url)
    .then(respuesta =>{
    let infoCodigo = respuesta.data.response;
    setDireccion({...direccion, Municipio:reemplazoAcentos(infoCodigo.municipio.toUpperCase()), Ciudad:reemplazoAcentos(infoCodigo.ciudad.toUpperCase()), Estado:reemplazoAcentos(infoCodigo.estado.toUpperCase())})
            var coloniass=[];
       Object.entries(infoCodigo.asentamiento).forEach(([key, value]) => {
         let colonia ={ label: 'Escoge tu colonia:', value:'',label: value, value: reemplazoAcentos(value.toUpperCase())};
         
        coloniass.push(colonia);
        
    });
    setColonias(coloniass);
    Alert.alert('Example','No olvides seleccionar tu colonia :)',  [
        {
          text: 'Entendido',
        },
      ],);
    
    })
    
    .catch(error =>Alert.alert('Example','Ingresa un código postal valido',  [
      {
        text: 'Entendido',
      },
    ],));

}

     const onChange =(value, fieldname) =>{
       setDireccion({...direccion, [fieldname]:reemplazoAcentos(value.toUpperCase())})
       
       // setUserInfo({...usuario, Fecha:valorFecha2});
       }
       const onChangef =(value, fieldname) =>{
        setDireccion({...direccion, [fieldname]:value.trim()})
        
        // setUserInfo({...usuario, Fecha:valorFecha2});
        }

 const onChangee =(value, fieldname) =>{
  setDireccion({...direccion, [fieldname]:value})

    // valor = value;
 } 
 
 
 const [validador, setValidador]=useState(0);
  const validateCampos = () =>{
    if(Calle === ''  || Ciudad === '' ||  Colonia === '' || Cp === '' || Estado === '' || Municipio === '' || NumeroE === ''){
      setError('Estos campos son obligatorios');
   }
  else{

    let datosDireccion = direccion;
     navigation.navigate('CuentaBanco', {
      datosDireccion,
      datosUsuario
       

       })

    }
   }
 
    // const { usuario} = route.params;
    return (
        <KeyboardAwareScrollView style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", paddingHorizontal:15}}>
            <StatusBar/>
            <H2Form h2='Cuéntanos más de ti'/>
            <Subtitle Text={'Escribe tu dirección.'}/>
            <IptDireccion
            errorMessage={MsgError}
            onChangeText={(value) => onChange(value, 'Calle')}
            value={Calle}
            />
            <View style={{width:"50%",flex:1,flexDirection:"row",}}>
            <IptNumeroExterior
                errorMessage={MsgError}
                onChangeText={(value) => onChange(value, 'NumeroE')}
                value={NumeroE}
            />
            <IptNumeroInteriror
                // errorMessage={MsgError}
                onChangeText={(value) => onChange(value, 'NumeroI')}
                value={NumeroI}
            />
            </View>
            <View style={{width:"50%",flex:1,flexDirection:"row",}}>
            <IptCP
                errorMessage={MsgError}
                onChangeText={(value) => onChangef(value, 'Cp')}
                value={Cp}
            />
            <Validar
            onPress={() => get(Cp)}
            />
            </View>
            <View
style={{textAlign:'center',marginLeft:10,backgroundColor:"#ffffff",width:"95%",padding:10,paddingHorizontal:30,borderRadius:15,fontSize: 30,height:50,color:'#6a6a6a',borderBottomWidth:0,marginBottom:25,}}            > 
        <RNPickerSelect
            style={{placeholder:{fontSize:18},inputIOS:{fontSize:18},inputAndroid:{fontSize:18,color:"black"}}}
            //  placeholder={valCol}
             onValueChange={(value) => onChangee(value, 'Colonia')}
            items={colonias}
             value={Colonia}
        />
       </View> 
            <IptEstado
                errorMessage={MsgError}
                // onChangeText={(value) => onChange(value, 'Estado')}
                defaultValue={Estado}
            />
            <IptCiudad
                errorMessage={MsgError}
                // onChangeText={(value) => onChange(value, 'Ciudad')}
                defaultValue={Ciudad}
            />
            <IptMunicipio
                errorMessage={MsgError}
                // onChangeText={(value) => onChange(value, 'Municipio')}
                defaultValue={Municipio}
            />
            <Continuar
            onPress={()=>validateCampos()}
            />
        </KeyboardAwareScrollView>
    )
}

export default Direccion
