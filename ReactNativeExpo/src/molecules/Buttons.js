import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import React from 'react'



export const LoginButton = (props) =>{
      const { loadingStyle,loading, onPress, title = 'Save' } = props;
       return ( 

<Button
  title="Iniciar sesión "
  buttonStyle = {{borderRadius:10,marginBottom:20,backgroundColor:"#3AC0F2"}}
  onPress={onPress}
  loading={loading}
  loadingStyle = {loadingStyle}
/>
      )

}
export const RegistroLinea = (props) =>{
      const {loadingStyle,loading, onPress, title = 'Save' } = props;
      return ( 

<Button
onPress={onPress}
 title="¿No tienes cuenta? Solicitala aquí"
 buttonStyle = {{borderRadius:10,backgroundColor:"#3AC0F2"}}
 loading={loading}
 loadingStyle = {loadingStyle}
/>
     )
   
}
export const EnviarCorreo = (props) =>{
 const {loadingStyle,loading, onPress} = props;
 
return ( 

<Button
onPress={onPress}
 title="Enviar"
 buttonStyle = {{borderRadius:10, alignItems:'flex-end',backgroundColor:"#3AC0F2"}}
 loading={loading}
 loadingStyle = {loadingStyle}
/>
     )
   
}
export const Continuar = (props) =>{
      const {loadingStyle,loading, onPress} = props;
      return ( 

<Button
onPress={onPress}
loading={loading}
loadingStyle = {loadingStyle}
 title="Continuar"
 buttonStyle = {{borderRadius:10, alignItems:'flex-end',backgroundColor:"#3AC0F2",marginBottom:'.5%'}}
//  style={{}}

 
/>
     )
   
}

export const AceptaryContinuar = (props) =>{
      const {loadingStyle,loading, onPress, title = 'Save' } = props;

      return ( 

<Button
 title="Aceptar y Continuar"
 buttonStyle = {{borderRadius:10, alignItems:'flex-end',backgroundColor:"#3AC0F2"}}
 loading={loading}
 onPress={onPress}
 loadingStyle = {loadingStyle}
 
/>
     )
   
}

export const Registrarme = (props) =>{
const {loadingStyle,loading, onPress, title = 'Save' } = props;
      return ( 

<Button
 title="Registrarme"
 buttonStyle = {{borderRadius:10, alignItems:'flex-end',backgroundColor:"#3AC0F2"}}
 loading={loading}
 onPress={onPress}
 loadingStyle = {loadingStyle}
 
/>
     )
   
}

export const Cerrar= (props) =>{
      const {loadingStyle,loading, onPress} = props;
      return ( 

<Button
 title="Cerrar sesión"
 buttonStyle = {{borderRadius:10, alignItems:'center',backgroundColor:"#3AC0F2", paddingHorizontal:'10%'}}
style={{width:'100%'}}
onPress={onPress}
loading={loading}
loadingStyle = {loadingStyle}
 
/>
     )
   
}
export const Cerrar2= (props) =>{
      const {loadingStyle,loading, onPress} = props;
      return ( 

<Button
 title="Cerrar sesión"
 buttonStyle = {{borderRadius:10, alignItems:'center',backgroundColor:"#3AC0F2", paddingHorizontal:'10%', marginTop:'10%'}}
style={{width:'100%'}}
onPress={onPress}
loading={loading}
loadingStyle = {loadingStyle}
 
/>
     )
   
}
export const Validar = (props) =>{
      const {loadingStyle,loading, onPress} = props;
      return ( 

<Button
onPress={onPress}
loading={loading}
loadingStyle = {loadingStyle}
 title="Validar"
 buttonStyle = {{textAlign:'center',backgroundColor:"#3AC0F2",width:"100%",padding:10,paddingHorizontal:50,borderRadius:15,fontSize: 13,height:50,color:'#6a6a6a',borderBottomWidth:0,}}
style={{paddingHorizontal:10}}
/>
     )
   
}
export const GenerarRfc = (props) =>{
      const {loadingStyle,loading, onPress} = props;
      return ( 

<Button
onPress={onPress}
loading={loading}
loadingStyle = {loadingStyle}
 title="Generar RFC"
 buttonStyle = {{textAlign:'center',backgroundColor:"#3AC0F2",width:"50%",paddingHorizontal:20,borderRadius:15,fontSize: 13,height:40,color:'#6a6a6a',borderBottomWidth:0, marginTop:0, marginBottom:Platform.OS === 'ios' ? -5 : 10, marginLeft: Platform.OS === 'ios' ? -5 : 11,}}
style={{paddingHorizontal:15, paddingVertical:20, alignSelf:'center'}}
/>
     )
   
}
export const GenerarFecha = (props) =>{
      const {loadingStyle,loading, onPress} = props;
      return ( 

<Button
onPress={onPress}
loading={loading}
loadingStyle = {loadingStyle}
 title="Escoge tu fecha  de nacimiento"
buttonStyle = {{textAlign:'center',backgroundColor:"#3AC0F2",paddingHorizontal:5,borderRadius:15,fontSize:3,color:'#6a6a6a',borderBottomWidth:0, marginTop:'4%', marginLeft:'4%', width: Platform.OS === 'ios' ? '65%' : "65%",}}
style={{backgroundColor:'#6a6a',  height: Platform.OS === 'ios' ? 100 : "60%"}}
/>

     )

}

export const PedirDisponible= (props) =>{
      const {loadingStyle,loading, onPress} = props;
      return ( 
            
<Button
onPress={onPress}
loading={loading}
loadingStyle = {loadingStyle}
 title="Pedir disponible"
 buttonStyle = {{borderRadius:10,backgroundColor:"#3AC0F2", width:'60%', height:70, alignSelf:'center'}}
 titleStyle={{fontSize:14}}
 
/>
     )
   
}
export const PedirDisponible2= (props) =>{

      const {loadingStyle,loading, onPress} = props;
      return ( 

<Button
onPress={onPress}
loading={loading}
loadingStyle = {loadingStyle}
 title="Pedir disponible"
 buttonStyle = {{borderRadius:10, alignItems:'center',backgroundColor:"#3AC0F2", width:'100%', height:40}}

 
/>
     )
   
}
export const Pagar= (props) =>{
      const {loadingStyle,loading, onPress} = props;
      return ( 

<Button
onPress={onPress}
loading={loading}
loadingStyle = {loadingStyle}
 title="Pagar"
 buttonStyle = {{borderRadius:10,backgroundColor:"#E84041", width:'65%', height:70, alignSelf:'center' }}
 titleStyle={{fontSize:14}}
/>
     )
}
export const EstadoCuenta= (props) =>{
      const {loadingStyle,loading, onPress} = props;
      return (
<Button
onPress={onPress}
loading={loading}
loadingStyle = {loadingStyle}
 title="Estado de cuenta"
 buttonStyle = {{borderRadius:10,backgroundColor:"#3AC0F2", width:'60%', height:70, alignSelf:'center', }}
 titleStyle={{fontSize:14}}
 
/>
     )
   
}
export const InvitarAmigos= (props) =>{
      const {loadingStyle,loading, onPress} = props;
      return ( 

<Button
 title="Invita a tus amigos"
 buttonStyle = {{borderRadius:10,backgroundColor:"#3AC0F2", width:'100%', height:50, marginBottom:50}}
 onPress={onPress}
loading={loading}
loadingStyle = {loadingStyle}
 
/>
     )
   
}

export const ComparteCodigo= (props) =>{
      const {loadingStyle,loading, onPress} = props;
      return ( 

<Button
 title="Comparte tu código"
 buttonStyle = {{borderRadius:10,backgroundColor:"#3AC0F2" ,paddingHorizontal:60, height:40, marginBottom:'20%', marginTop:'15%'}}
 style={{textAlign:'center',width:'100%',paddingHorizontal:30}}
 onPress={onPress}
/>
     )
   
}
export const FinalizarRegistro= (props) =>{
      const {loadingStyle,loading, onPress} = props;
      return ( 

<Button
 title="Finalizar Registro"
 buttonStyle = {{borderRadius:10,backgroundColor:"#3AC0F2" ,paddingHorizontal:60, height:40, marginBottom:'5%', marginTop:'5%'}}
 style={{textAlign:'center',width:'100%',paddingHorizontal:30}}
 onPress={onPress}
/>
     )
   
}