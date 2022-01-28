import React, {useState} from 'react'
import { StatusBar, ScrollView, View, Alert} from 'react-native';
import { PedirDisponible2 } from '../molecules/Buttons';
import { IptRetiro } from '../molecules/Inputs';
import { TituloMenuB } from '../atoms/Titles';
import { PTextR,PTextCom } from '../atoms/P';
import axios from 'axios';
import moment from 'moment';

const PedirDispo = ({route, navigation}) => {

    const {DatosInicio,LimiteDisponible, Name, Email} = route.params;
      let LimiteDispo = LimiteDisponible;
    
    const [Disponible, setDisponible] = useState('$ ' + LimiteDispo + ' Disponible');
    const [MontoRetiro, setMonto] = useState('');
    const [Comision, setComision] = useState('');
    const [DisplayCom, setDisplayCom] = useState('none');
    const [MsgError, setMsgError] = useState('')
    
   
    // 
        let TokenT = {
            TokenT: DatosInicio.Token,

        }

    const EnviarDatos = () => {
        let horaAct = new Date();
        let horas = horaAct.getHours().toString();
        let minutos = horaAct.getMinutes().toString();
        let diaFin = horaAct.getDay();

          if (horas.length === 1){
          horas = '0'+ horaAct.getHours().toString();
          }else{
            horaAct.getMinutes();
          }

          if (minutos.length === 1){
          minutos = '0'+ horaAct.getMinutes().toString();
          }else{
            horaAct.getMinutes().toString();
          }
          let horasActual = horas + minutos;
           let horaInicio = ('0800');
           let horaFinal = ('1800');
        

        if( parseFloat(MontoRetiro) > parseFloat(LimiteDisponible) ){
             setMsgError("Debes ingresar una cantidad no mayor a tu límite disponible para continuar con tu petición");
            return false;
            }else if(diaFin === 6 || diaFin === 0){
             setMsgError("Lo sentimos, por el momento solo puedes hacer retiros de Lunes a Viernes de 8:00 am a 6:00 pm.");
           return false;
            }else if(parseInt(horasActual) > parseInt(horaFinal)){
             setMsgError("Lo sentimos, el horario de retiro en nuestra plataforma es de 8:00 am a 6:00 PM. Intenta nuevamente dentro del horario permitido");
           return false;
            }else if( parseInt(horasActual) < parseInt(horaInicio)){
             setMsgError("Lo sentimos, el horario de retiro en nuestra plataforma es de 8:00 am a 6:00 PM. Intenta nuevamente dentro del horario permitido");
            return false;
            }
            else if(MontoRetiro === "" || parseFloat(MontoRetiro) <= 0){
             setMsgError("Debes ingresar un monto mayor a cero para poder continuar con tu petición");           
            return false;
            }else if(isNaN(MontoRetiro)){
              setMsgError("Debes ingresar solo números, sin espacios. ");
              return false;
            }
             else {
                LimiteDispo = parseFloat(LimiteDispo);
            
            const url ='http://example.com/example/example/example/exampleFunction';
                    axios
                .post(url, TokenT)
                .then((response)=> {  
                   const result = response.data;
                   const {message, status, data} = result;
                    navigation.navigate('RetiroNIP',{
                        DatosInicio,MontoRetiro
                    })
                 })
                .catch(error =>{console.log(error);})
     }
    }


    const onChange =(val) =>{
     setMonto(val);
      let DisponibleFinal = LimiteDispo - val;
      let comision = (val *.20) * 1.16;
      DisponibleFinal = DisponibleFinal.toFixed(2);
      if(val === ''){
         setDisponible('$ ' + LimiteDispo + ' Disponible');
         setDisplayCom('none');
         setMsgError('')

      }
      else if(DisponibleFinal < 0){
         setDisponible('No tienes suficiente línea disponible');
      }else{
         setDisponible('$ ' + DisponibleFinal + ' Disponible')
         setMonto(val);
         setComision(comision.toFixed(2)); 
         setDisplayCom('flex');
        //  console.log(val)

      }
  }


    return (
        <ScrollView style={{position:'relative',flex:1,alignContent: "center",  backgroundColor: "#1f1b36", paddingHorizontal:'5%',height:'100%'}}>
        <StatusBar/>
        <TituloMenuB TituloB={'PEDIR \nDISPONIBLE'}/>
        <View style={{alignItems:'center',alignContent:'center',width:'100%', height:'100%', padding:'5%', backgroundColor:'#ffffff', borderRadius:15, marginBottom:'10%', marginTop:'5%', flex:1, paddingTop:'10%'}}>
        <PTextCom 
        style={{height:'35%',textAlign:'center',width:'80%',color: '#6A6A6A',fontSize:15,display:DisplayCom}}
        Text={'Retirando $ '+ MontoRetiro + ' pagarías aproximadamente $ '+ Comision +' de comisión'}/>
        <IptRetiro
        onChangeText={(e) => onChange(e)}
        errorMessage = {MsgError}
        value={MontoRetiro}
        />
        <PTextR Text={Disponible}/>
        </View>
        <PedirDisponible2
        onPress={()=>EnviarDatos()}
        />
    </ScrollView>
    )
}


export default PedirDispo
