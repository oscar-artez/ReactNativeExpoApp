import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';  
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { View,Button,Text,TouchableHighlight,StyleSheet } from 'react-native';
import moment from 'moment';




import React, {useState} from 'react'


export const InputCorreo = (props) =>{

       return ( 
       <Input
       autoCompleteType='email'
       importantForAutofill='auto'
       inputContainerStyle={{width:'100%',backgroundColor:'#ffffff', paddingLeft:20,paddingRight:40,borderRadius:10,fontSize: 13,height:50,color:'#6a6a6a'}}
       containerStyle={{marginBottom:5, paddingHorizontal:0}} 
       autoCorrect={false}
       placeholder='Correo Electrónico'
       clearButtonMode = 'always' 
       keyboardAppearance = 'dark'
       autoCapitalize = 'none'
       errorMessage={props.errorMessage}
       onChangeText={props.onChangeText}
        inputStyle={{paddingLeft:0, textAlign:'center' }}
        leftIcon={{ type:'ionicon', name: 'mail-outline', color:'#6a6a6a'}}
        keyboardType='email-address'
            ></Input>
      )
    
}
export const IptPassword = (props) =>{

  const [visible, setVisibility] = useState(false);
  const icon = !visible ? 'eye-off-outline' : 'eye-outline';
  const [secureval, setSecureval] = useState(true);
  const changeTextEntry = (val) =>{
   if(val == true ){
     setVisibility(!visible);
     setSecureval(false);
   }else{
     setVisibility(false);
     setSecureval(true);
   }
  }

    return ( 
    <Input

    autoCompleteType={'password'}
    errorMessage={props.errorMessage}
    // autoCapitalize = 'none'
    
    onChangeText={props.onChangeText}
    inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:20,borderRadius:15,fontSize: 13,height:50,marginVertical:0,marginBottom:0,color:'#6a6a6a'}}
    inputStyle={{paddingHorizontal:25, textAlign:'center'}} 
    containerStyle={{paddingHorizontal:0}}
    keyboardAppearance = 'dark'
    placeholder='Contraseña'
    leftIcon={{ type:'ionicon', name: 'lock-closed-outline', color:'#6a6a6a'}}
    rightIcon={ <Icon
      name={icon}
      color={'#9e9e9e'}
      onPress={() => changeTextEntry(secureval)}
      style={{fontSize:25}}
      /> }
    secureTextEntry={secureval}
    />
   )
 
}
export const IptNip= (props) =>{
  return ( 
  <Input
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,marginVertical:3,marginBottom:10,color:'#6a6a6a'}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder={'NIP'}
  errorMessage={props.errorMessage}
  onChangeText={props.onChangeText}
  keyboardType={'numeric'}
 />
 )

}

export const IptNipDispo= (props) =>{
  return ( 
  <Input
  inputContainerStyle={{textAlign:'center',padding:10, paddingHorizontal:10,fontSize: 13,height:50,marginBottom:'15%',marginTop:'25%',color:'#6a6a6a',borderBottomColor:'#E84041'}}
  inputStyle={{textAlign:'center'}} 
  placeholder={'NIP'}
  errorMessage={props.errorMessage}
  onChangeText={props.onChangeText}
  keyboardType={'numeric'}
  maxLength={6}
 />
 )

}
export const IptRetiro= (props) =>{
  return ( 
  <Input
  inputContainerStyle={{textAlign:'center',padding:'10%', paddingHorizontal:'15%',height:'10%',color:'#6a6a6a',borderBottomColor:'#E84041'}}
  inputStyle={{textAlign:'center',fontSize: 25}} 
  placeholder={'Monto a retirar'}
  errorMessage={props.errorMessage}
  errorStyle={{marginBottom:'5%'}}
  onChangeText={props.onChangeText}
  keyboardType={'numeric'}
  caretHidden={true}
 />
 )

}

export const IptContrasenia = (props) =>{

     const [visible, setVisibility] = useState(false);
      const icon = !visible ? 'eye-off-outline' : 'eye-outline';

      const [secureval, setSecureval] = useState(true);
      const changeTextEntry = (val) =>{
        if(val == true ){
          setVisibility(!visible);
          setSecureval(false);
        }else{
          setVisibility(false);
          setSecureval(true);
        }
        
       }
      
  return ( 
  <Input
  errorStyle={{marginTop:-5, marginBottom:10}}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:20,borderRadius:15,fontSize: 13,height:50,marginVertical:3,marginBottom:10,color:'#6a6a6a'}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Contraseña'
  leftIcon={ {type:'ionicon', name: 'lock-closed-outline', color:'#6a6a6a', size:20 }}
   rightIcon={ <Icon
    name={icon}
   color={'#9e9e9e'}
   onPress={() => changeTextEntry(secureval)}
    style={{fontSize:25}}
     /> }
     errorMessage={props.errorMessage}
     onChangeText={props.onChangeText}
  
     secureTextEntry={secureval}
 />
 )

}


export const IptCorreo2 = (props) =>{
return ( 
<Input
errorStyle={{marginTop:-5, marginBottom:10}}
errorMessage={props.errorMessage}
onChangeText={props.onChangeText}
inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:20,borderRadius:15,fontSize: 13,height:50,marginVertical:3,marginBottom:10,color:'#6a6a6a'}}
inputStyle={{paddingHorizontal:20}} 
placeholder='Correo electrónico'
leftIcon={{ type:'ionicon', name: 'mail-outline', color:'#6a6a6a'}}
        keyboardType='email-address'
/>
)

}

export const IptCodigo = (props) =>{
  return ( 
  <Input
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:20,borderRadius:15,fontSize: 13,height:50,marginVertical:3,marginBottom:10,color:'#6a6a6a'}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Código de invitación (opcional)'
  leftIcon={{ type:'ionicon', name: 'gift-outline', color:'#6a6a6a'}}
  onChangeText={props.onChangeText}
  />
  )
  
  }

export const IptConfirmarContrasenia = (props) =>{
   const [visible, setVisibility] = useState(false);
   const icon = !visible ? 'eye-off-outline' : 'eye-outline';
   const [secureval, setSecureval] = useState(true);
   const changeTextEntry = (val) =>{
    if(val == true ){
      setVisibility(!visible);
      setSecureval(false);
    }else{
      setVisibility(false);
      setSecureval(true);
    }
   }
  return ( 
  <Input
  errorStyle={{marginTop:-5, marginBottom:10}}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:20,borderRadius:15,fontSize: 13,height:50,marginVertical:3,marginBottom:10,color:'#6a6a6a'}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Confirmar contraseña'
  leftIcon={{ type:'ionicon', name: 'lock-closed-outline', color:'#6a6a6a',size:20}}
   rightIcon={ <Icon
     name={icon}
     color={'#9e9e9e'}
     onPress={() => changeTextEntry(secureval)}
     style={{fontSize:25}}
     /> }
     errorMessage={props.errorMessage}
    onChangeText={props.onChangeText}
  
     secureTextEntry={secureval}
 />
 )

}

export const IptNombre = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',padding:10,backgroundColor:'#ffffff', paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a', borderBottomWidth:0}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Nombre'
 />
 )

}
export const IptSegundoNombre = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Segundo Nombre'


 />
 )

}

export const IptApellidoPaterno = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Apellido Paterno'

 />
 )

}
export const IptApellidoMaterno = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:2, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0,marginBottom:-20}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Apellido Materno'
  errorStyle={{marginTop:22}}

 />
 )

}

export const IptTelefono = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Número Telefónico'
  keyboardType='number-pad'
  maxLength={10}

 />
 )

}


export const IpOcupacion = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Ocupación'

 />
 )

}

export const IpRedSocial = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Ingreso mensual'
  keyboardType='number-pad'

 />
 )

}

export const IptRfc = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0, marginBottom: Platform.OS === 'ios' ? -25 : -10,}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='RFC'
  defaultValue={props.defaultValue}

 />
 )

}

export const IptCuentaBancaria = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Clabe interbancaria'
  keyboardType='number-pad'
  maxLength={18}

 />
 )

}

export const IptDireccion = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Calle'
 />
 )

}

export const IptNumeroExterior = (props) =>{
  return ( 
  <Input
  style={{textAlign:'center'}}
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',width:"100%",padding:2,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  placeholder='Núm. Ext.'

 />
 )

}

export const IptNumeroInteriror = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  style={{textAlign:'center'}}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',width:"100%",padding:2,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  placeholder='Núm. Int.'

 />
 )

}

export const IptCP = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  style={{textAlign:'center'}}
  inputContainerStyle={{marginRight:30,textAlign:'center',backgroundColor:'#ffffff',width:"100%",padding:2,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
   inputStyle={{paddingHorizontal:20}} 
  placeholder='C.P.'
  keyboardType='number-pad'
  maxLength={5}

 />
 )

}

export const IptColonia = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Colonia'

 />
 )

}
export const IptEstado = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  inputStyle={{paddingHorizontal:20}}  
  placeholder='Estado'
  defaultValue={props.defaultValue}

 />
 )

}

export const IptCiudad = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Ciudad'
 defaultValue={props.defaultValue}

 />
 )

}

export const IptMunicipio = (props) =>{
  return ( 
  <Input
  onChangeText={props.onChangeText}
  errorMessage={props.errorMessage}
  inputContainerStyle={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
  inputStyle={{paddingHorizontal:20}} 
  placeholder='Municipio'
  defaultValue={props.defaultValue}

 />
 )

}

export const IptFecha = (props) =>{

  return (
          <Input
          inputContainerStyle={{ zIndex:99 ,textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:10,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0}}
          inputStyle={{textAlign:'center',color:'#000',width:'30%',height:'100%',}}
          errorStyle={{marginLeft:'20%'}}
           errorMessage={props.errorMessage}
        onChangeText={props.onChangeText}
        disabled={true}
         placeholder={props.placeholder}
         value={props.value}
         />
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