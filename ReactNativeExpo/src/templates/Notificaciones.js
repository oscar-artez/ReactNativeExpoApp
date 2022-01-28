import React,{useState, useEffect} from 'react'
import { StatusBar, ScrollView, View,} from 'react-native';
import { TituloMenuB2 } from '../atoms/Titles';
import { Subtitle2, Subtitle, Subtitle3 } from '../atoms/P';
import { Switch, ListItem } from 'react-native-elements';
import axios from 'axios';
import { Button } from 'react-native-elements/dist/buttons/Button';

const Notificaciones = ({route}) => {

     useEffect(() => {
         ReqDatosSw()
     }, []);

     const url1 ='http://example.com/example/example/example/exampleFunction'
     const {Email} = route.params;
     const [correoReq, setCorreoReq] = useState({Correo:Email})
    const [contenido, setContenido] =useState({});
    const [ValoresEndPoint, setValoresEndPoint] = useState({
        Retiros1:'',
        Pagos1:'',
        Recordatorios1:'',
        Novedades1:''
    })
    const {Pagos1, Recordatorios1, Retiros1, Novedades1} =ValoresEndPoint;
    const ReqDatosSw =  ()=>{
        const url ='http://example.com/example/example/example/exampleFunction'
        axios
        .post(url,correoReq )
        .then((response)=> {
           const resultado = response.data;
           const {message, status, data} = resultado;
           setValoresEndPoint({...ValoresEndPoint, 
            Retiros1:Boolean(Number(resultado.Retiros)),
            Pagos1:Boolean(Number(resultado.Pagos)),
            Recordatorios1:Boolean(Number(resultado.Recordatorios)), 
            Novedades1 :Boolean(Number(resultado.Novedades))
            })
        })
        .catch(error => console.log(error))
    };


    //  let ValoresF = {
    //      Correo:Email,
    //      Retiros:Retiros1,
    //      Pagos:Pagos1,
    //      Recordatorios:Recordatorios1,
    //      Novedades:Novedades1
    //  }
    //  console.log(ValoresF)

     const onChange1 =() =>{
        if(Retiros1 === true){
            setValoresEndPoint({...ValoresEndPoint,  Retiros1:false})
            
             let valos = {
                Correo:Email,
              Retiros:false,
             Pagos:Pagos1,
             Recordatorios:Recordatorios1,
             Novedades:Novedades1
    }
            axios
            .post(url1,valos )
            .then((response)=> {
              })
              .catch(error => console.log(error))

        }else{
            setValoresEndPoint({...ValoresEndPoint,  Retiros1:true})
           let valos = {
            Correo:Email,
                 Retiros:true,
                Pagos:Pagos1,
                Recordatorios:Recordatorios1,
                Novedades:Novedades1
       }
               axios
               .post(url1,valos )
               .then((response)=> {
                 })
                 .catch(error => console.log(error))
        }
    } 

    const onChange2 =() =>{
        if(Pagos1 === true){
            setValoresEndPoint({...ValoresEndPoint,  Pagos1:false})
            
             let valos = {
                Correo:Email,
              Retiros:Retiros1,
             Pagos:false,
             Recordatorios:Recordatorios1,
             Novedades:Novedades1
    }
            axios
            .post(url1,valos )
            .then((response)=> {
              })
              .catch(error => console.log(error))

        }else{
            setValoresEndPoint({...ValoresEndPoint,  Pagos1:true})
           let valos = {
            Correo:Email,
                 Retiros:Retiros1,
                Pagos:true,
                Recordatorios:Recordatorios1,
                Novedades:Novedades1
       }
               axios
               .post(url1,valos )
               .then((response)=> {
                 })
                 .catch(error => console.log(error))
        }
   } 
   const onChange3 =() =>{
    if(Recordatorios1 === true){
        setValoresEndPoint({...ValoresEndPoint,  Recordatorios1:false})
        
         let valos = {
            Correo:Email,
          Retiros:Retiros1,
         Pagos:Pagos1,
         Recordatorios:false,
         Novedades:Novedades1
}

        axios
        .post(url1,valos )
        .then((response)=> {
          })
          .catch(error => console.log(error))

    }else{
        setValoresEndPoint({...ValoresEndPoint,  Recordatorios1:true})
       let valos = {
        Correo:Email,
             Retiros:Retiros1,
            Pagos:Pagos1,
            Recordatorios:true,
            Novedades:Novedades1
   }
           axios
           .post(url1,valos )
           .then((response)=> {
             })
             .catch(error => console.log(error))
    }
} 

const onChange4=() =>{
    if(Novedades1 === true){
        setValoresEndPoint({...ValoresEndPoint,  Novedades1:false})
        
         let valos = {
            Correo:Email,
          Retiros:Retiros1,
         Pagos:Pagos1,
         Recordatorios:Recordatorios1,
         Novedades:false
}
        axios
        .post(url1,valos )
        .then((response)=> {
          })
          .catch(error => console.log(error))

    }else{
        setValoresEndPoint({...ValoresEndPoint,  Novedades1:true})
       let valos = {
        Correo:Email,
             Retiros:Retiros1,
            Pagos:Pagos1,
            Recordatorios:Recordatorios1,
            Novedades:true
   }
           axios
           .post(url1,valos )
           .then((response)=> {
             })
             .catch(error => console.log(error))
    }
} 

    return (
        <ScrollView style={{position:'relative',flex:1,alignContent: "center",  backgroundColor: "#1f1b36", paddingHorizontal:15, paddingTop:20,height:'100%'}}>
        <StatusBar/>
        <TituloMenuB2 TituloB2={'NOTIFICACIONES'}/>
        <Subtitle Text={'Aquí puedes elegir qué tipos de notificaciones quieres recibir en tu celular.'}/>
        <View style={{alignItems:'center',alignContent:'center',width:'100%', height:'100%', padding:15, backgroundColor:'#ffffff', borderRadius:15, marginBottom:'10%', marginTop:0, flex:1}}>
        <Subtitle2 Text={'Retiros'}
        />
       <View
       style={{flex:1,flexDirection:'row',padding:10, color:'#6a6a6a',borderBottomColor:'#6a6a6a',borderBottomWidth:1,marginBottom:'5%'}}
       >
       <Subtitle3 Text={'Notificaciones sobre tus retiros'}
        />
        <Switch  color="#3AC0F2"
        onValueChange={()=>onChange1()}
        value={Retiros1}
        />
        </View>
        <Subtitle2 Text={'Pagos'}
        />
        <View
       style={{flex:1,flexDirection:'row',padding:10, color:'#6a6a6a',borderBottomColor:'#6a6a6a',borderBottomWidth:1,marginBottom:'5%'}}
       >
       <Subtitle3 Text={'Notificaciones sobre tus pagos'}
            />
        <Switch value={Pagos1} color="#3AC0F2"
        onValueChange={()=>onChange2()}
        />
        </View>
        <Subtitle2 Text={'Recordatorio de pagos'}
        />
        <View
       style={{flex:1,flexDirection:'row',padding:10, color:'#6a6a6a',borderBottomColor:'#6a6a6a',borderBottomWidth:1,marginBottom:'5%'}}
       >
       <Subtitle3 Text={'Notificaciones sobre tus fechas de pago'}
            />
        <Switch value={Recordatorios1} color="#3AC0F2"
        onValueChange={()=>onChange3()}
        />
        </View>
        <Subtitle2 Text={'Novedades en P2P'}
        />
        <View
       style={{flex:1,flexDirection:'row',padding:10, color:'#6a6a6a',borderBottomColor:'#6a6a6a',borderBottomWidth:1,marginBottom:'20%'}}
       >
       <Subtitle3 Text={'Aviso sobre publicidad, novedades, etc.'}
            />
        <Switch value={Novedades1} color="#3AC0F2"
        onValueChange={()=>onChange4()}
        />
        </View>
        </View>
    </ScrollView>
    )
}

export default Notificaciones
