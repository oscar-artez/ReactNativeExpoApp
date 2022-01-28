import React, {useState, useEffect,useCallback}from 'react'
import { StatusBar, ScrollView, Text, StyleSheet,View,TouchableHighlight, Modal, Alert} from 'react-native';
import { TituloMenuA, H2Nombre, H8, H9,H10,Tyc,H2Nom} from '../atoms/Titles';
import { PedirDisponible, Pagar, EstadoCuenta,InvitarAmigos,Cerrar,Cerrar2} from '../molecules/Buttons';
import { PTextM,DiasFalt, PTextVacio} from '../atoms/P';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { capitalizeFirstLetter } from '../../functions/Functions';
import axios from 'axios';
import moment from 'moment';
import Tooltip from 'react-native-walkthrough-tooltip'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { set } from 'lodash';
import {Restart} from 'fiction-expo-restart';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import HyperLink from 'react-native-hyperlink';
import { RefreshControl } from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const MenuPrincipal = ({route, navigation}) => { 

    const {DatosInicio} = route.params;
    const [IdUser,setIdUser] = useState([]);
    const [Nombre, setNombre] = useState('');
   const [Deuda, setDeuda] = useState('');
   const [FechaLimite, setFechalimite] = useState('');
   const [PagoMinimo, setPagoMinimo] = useState('');
    const [Name, setName]=useState('');
    const [Apellido, setApellido]=useState('');
    const [CuentaCliente, setCuentaCliente]=useState('');
    const [RefOxxo, setRefOxxo] = useState('');
    const [LimiteDisponible, setLimiteDisponible] = useState('');
    const[Email, setEmail] = useState('');
    const[Score, setScore] = useState('');
    const [CodInv, setCodInv] = useState('');
    const [CodUsado, setCodUsado] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const [faltanDias, setFaltanDias]= useState('');
    // const [pruebadato, setPruebaDato] = useState({Deuda:'prueba'});
    const [Dias, setDias] = useState('');
    const [showTip, setTip] = useState(false);
    const [MsgTool, setMsgTool] = useState('');
    const [Visible1, setVisible1] =useState(false);
    const [Visible2, setVisible2] =useState(false);
    const [Documentos, setDocumentos] = useState('');
    const [Balance, setBalance] = useState('');
    const [Identiti, setIdentiti] =useState('');
    const [refreshing, setRefreshing] = React.useState(false);
    var now;
    var end;
    var start; 
    var distance;
    var Identiti2;
    let Iniciales;

     useEffect(() => {
      InfoCliente(DatosInicio);
      ValDocs();
       setInterval(() => {
        InfoCliente(DatosInicio);
        ValDocs();

       }, 8000);
   

        //  CierreAutomatico();
         },[]);

           const onRefresh = useCallback(() => {
          
            setRefreshing(true);
            InfoCliente(DatosInicio);
            showRemaining();
             wait(2000).then(() => setRefreshing(false));
           }, []);


         let Nom = Nombre;
         Nom = capitalizeFirstLetter(Nom);
        const InfoCliente = async () => {
            const rawResponse = await fetch('http://example.com/example/example/example/exampleFunction', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(DatosInicio)
            });
            const content = await rawResponse.json();
            setIdUser(content);
          
                 setNombre(JSON.stringify(content.Name))
                 setEmail(content.Email)
                     // setIdUser(result);
                   setNombre(capitalizeFirstLetter(JSON.stringify(content.Name)));
                  setDeuda(content.Deuda);
                  setName(content.Name);
                   setApellido(content.Last_Name_F);
                   setCuentaCliente(content.CuentaCliente);
                   setRefOxxo(content.ReferenciaOxxo);
                   setLimiteDisponible(content.LimiteDisponible);
                   setEmail(content.Email);
                   setScore(content.ScoreBuroCredito)
                   setCodInv(content.CodigoInvitacion);
                   setCodUsado(content.Veces_Cod_Usado);
                   setIdUsuario(content.id_user);
                   setFechalimite(content.FechaLimite);
                   setIdentiti(content.Identiti);
                   setBalance(content.BalanceCuenta)
                   var FechaN = content.FechaLimite;
                 setPagoMinimo(content.PagoMinimo);
   

                 now = moment().format('DD-MM-YYYY');
                 end = moment(now, "DD-MM-YYYY");
                 start = moment(content.FechaLimite, "DD-MM-YYYY");
                 distance = parseInt(moment.duration(start.diff(end)).asDays());

                 if((content.FechaLimite == '30-11--0001' ) ){
                   setFaltanDias('');
                 }
                 if(parseInt(distance) === 0) {
                  setFaltanDias('Hoy es tu último día de pago');

                  }if( parseInt(distance) === 1){
                    setFaltanDias("Falta " + parseInt(distance) + " día para tu fecha límite de pago");

                  }if(parseInt(distance) >1){
                  setFaltanDias("Faltan " + parseInt(distance) + " días para tu fecha límite de pago");

                 }if ( parseInt(distance) >=0 && content.FechaLimite == '30-11--0001' ) {
                 setFaltanDias('Tienes un saldo vencido, por favor haz tu pago a la brevedad');
                 }

                           };



          const ValDocs = async () => {
            const rawResponse = await fetch('http://example.com/example/example/example/exampleFunction', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(DatosInicio)
            });
            const content = await rawResponse.json();

      
            if ((content.BalanceCuenta === null && content.Identiti === null) ||( content.BalanceCuenta === "" && content.Identiti === "") ||( content.BalanceCuenta === undefined && content.Identiti === "")||( content.BalanceCuenta === undefined && content.Identiti === null)){
                Identiti2 =0;
                toogleVisible(Identiti2);
                return false;
                
         }
         if((content.Identiti != null && content.BalanceCuenta === null) || (content.Identiti != "" && content.BalanceCuenta === "") ||( content.BalanceCuenta === undefined && content.Identiti != "")||( content.BalanceCuenta === undefined && content.Identiti != null)){
          Identiti2 =2;
          toogleVisible(Identiti2);
          return false;
     
         }
         if((content.Identiti != null && content.BalanceCuenta != null) || (content.Identiti != "" && content.BalanceCuenta != "") ||( content.BalanceCuenta != undefined && content.Identiti != "")||( content.BalanceCuenta != undefined && content.Identiti != null)){
          Identiti2 =1;
          toogleVisible(Identiti2);
          return false;
         }

          };

        
        // }
  
          const toogleVisible = (val) =>{
            if (val === 0 || val == '0'){
              setVisible1(true);
              setVisible2(false);
              return false;
            }else if (val === 2 || val == '2'){
              setVisible1(false);
              setVisible2(true);
            }else{
              setVisible1(false);
              setVisible2(false);
            }

          }
          
          Iniciales = Nombre.substr(0,1) + Apellido.substr(0,1);
      
          // console.log(start);
          // console.log(FechaLimite);
           
         const showRemaining = () =>{
        
            }
        //      }
            //  console.log(faltanDias)
              const cambioTool1 = () =>{
                setTip(true);
                setMsgTool('Es la cantidad total de tu deuda, correspondiente al capital retirado más el pago mínimo.')
              }
              
              const cambioTool2 = () =>{
                setTip(true);
                setMsgTool('Es la cantidad que tienes disponible de tu línea de crédito para retirar.')
              }
              
              const cambioTool3 = () =>{
                setTip(true);
                setMsgTool('Es el monto que deberás pagar antes de tu fecha límite de pago para conservar al corriente tu crédito (Comisión).')
              }

              const CerrarSesion = () =>{
                Alert.alert('Example','Tu sesión se ha cerrado exitosamente' ,  [
                  {
                    text: 'Entendido',
                  },
                ],);
                setTimeout(() => {
                  Restart()
                }, 2000);
              }

    const urlMati ="http://example.com/example/example/example/exampleFunction";
    return (    
        <ScrollView 
         style={{  backgroundColor: "#1f1b36", paddingHorizontal:'5%', paddingTop:'5%'}}
        // contentContainerStyle={{flexGrow: 1,}}
        // scrollToOverflowEnabled={true}
        refreshControl={
          <RefreshControl
          progressBackgroundColor ={'#3AC0F2'}
          tintColor={'#3AC0F2'}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        >
          
         <StatusBar/>
         <View 
         style={{flex:1, flexDirection:'row', width:'100%', alignContent:'center', alignItems:'center',}}
         >
         <TituloMenuA            
        TituloA={'SÚPER '}
        
        Linea ={'LÍNEA'}
        Revolvente={'\nREVOLVENTE'}
        p2p={' P2P'}
            >
         </TituloMenuA>
            <Avatar
              size="medium"
              rounded
              title={Iniciales}
              titleStyle={{color:'#6a6a6a', fontFamily:'LeagueSpartan-Bold', fontSize:20,}}
              onPress={() => navigation.navigate('User',{
                Iniciales,Name, Apellido,Email,idUsuario,Score,CodUsado,CodInv
            })}
              activeOpacity={1}
              overlayContainerStyle={{backgroundColor: '#fff'}}
            />
         </View>

         <H2Nombre h2={'Hola, ' +Nom}/>
         <View style={{alignItems:'center',alignContent:'center',width:'100%', height:'43%', padding:'5%', backgroundColor:'#ffffff', borderRadius:15, marginBottom:'5%'}}>
            <View style={{width:'100%',flex:1,flexDirection:'row', justifyContent:'space-between', alignSelf:'baseline'}}>
              <H8 h8={'Saldo actual'}/>
              
              <TouchableHighlight 
              style={{position:'absolute', left:'67%', top:'30%'}}
                onPress={() => cambioTool1()}
                activeOpacity={0.6}
            underlayColor="transparent"
                >
                    <Icon
               name="information-circle-outline"
               type='ionicon'
               color='transparent'
               iconStyle={{color:'#6a6a6a',fontSize:25,paddingTop:'4%'}}
               />
                  </TouchableHighlight>
            </View>
            <Tooltip
                   isVisible={showTip}
                  content={<Text>{MsgTool}</Text>}
                  placement="center"
                  onClose={() => setTip(false)}
          
                  // displayInsets=	{{ top: -300, bottom: 24, left: 24, right: 24 }}
                >
                </Tooltip>
              
            <PTextM
              Text={'$ ' + IdUser.Deuda}
              />
            <View style={{width:'100%',flex:1,flexDirection:'row', justifyContent:'space-between', alignSelf:'baseline'}}>
            <H9
            h9={'Línea disponible'}
            />
             <TouchableHighlight 
              style={{width:'30%',position:'absolute', left:'43%', top:'19%'}}
                onPress={() => cambioTool2()}
                activeOpacity={0.6}
            underlayColor="transparent"
                >
                    <Icon
               name="information-circle-outline"
               type='ionicon'
               color='transparent'
               iconStyle={{color:'#6a6a6a',fontSize:25,paddingTop:'4%'}}
               />
                  </TouchableHighlight>
            </View>
            <PTextM Text={'$ ' + IdUser.LimiteDisponible}/>
            <View style={{width:'100%',flex:1,flexDirection:'row', justifyContent:'space-between', alignSelf:'baseline'}}>
            <H10 h9={'Pago mínimo'}/>
            <TouchableHighlight 
              style={{width:'30%',position:'absolute', left:'33%', top:'18%'}}
                onPress={() => cambioTool3()}
                activeOpacity={0.6}
            underlayColor="transparent"
            
                >
                    <Icon
               name="information-circle-outline"
               type='ionicon'
               color='transparent'
               iconStyle={{color:'#6a6a6a',fontSize:25,paddingTop:'4%'}}
               />
                  </TouchableHighlight>
                  
            </View>
           
            <PTextM Text={'$ ' + IdUser.PagoMinimo}/>
            <DiasFalt
            Text={faltanDias}
            
            />


        </View>
        <View style={{width:'100%', flex:1, flexDirection:'row', borderRadius:15, justifyContent:'space-evenly', alignSelf:'center', marginBottom:'5%'}}>
        <PedirDisponible
          onPress={ ()=>navigation.navigate('PedirDispo',{
             DatosInicio,LimiteDisponible,Name, Email, CodInv
         })
         }
        />
        <Pagar
        onPress={ ()=>navigation.navigate('SaldoActual',{
            Deuda,FechaLimite,PagoMinimo,Name, Apellido, CuentaCliente,RefOxxo,LimiteDisponible
        })
        }
        />
        <EstadoCuenta
               onPress={() => navigation.navigate('Resumen',{
                DatosInicio
            })}
        
        />
        </View>
        <InvitarAmigos
        onPress={() => navigation.navigate('InvitarAmigo',{
            CodInv
        })}
        
        CodInv
        />

         <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={Visible1}
     >
        <View style={styles.centeredView}>
          <View  style={{alignItems:'center',alignContent:'center',width:300, height:'55%', padding:15, backgroundColor:'#ffffff', borderRadius:15, marginBottom:'10%', }}>
 <H2Nom
            h2={'¡Ya casi es tuya!'}
            />
            <Text
            style={{fontWeight:'bold', marginTop:20, textAlign:'center', marginBottom:20}}
            >
           Ahora que ya iniciaste sesión por primera vez, te pedimos que nos ayudes con tu proceso subiendo la documentación que se te pide para validar tu identidad.
              </Text>
              <View
    style={{borderRadius:10,backgroundColor:"#3AC0F2", width:'100%', height:50, alignSelf:'center',justifyContent:'center', alignItems:'center'}}
    >
    <HyperLink linkDefault={true}
      linkStyle={{textAlign:'center', color:'#fff', fontSize:15,}}
      linkText={'Click aquí para verificar tu identidad'}
      >
        <Text
              >
       {urlMati}
        </Text>
      </HyperLink>
    </View>
    <Cerrar2

onPress={()=>CerrarSesion()}
/>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={Visible2}
     >
        <View style={styles.centeredView}>
          <View  style={{alignItems:'center',alignContent:'center',width:300, height:'50%', padding:15, backgroundColor:'#ffffff', borderRadius:15, marginBottom:'10%', }}>
          <Text
style={{fontFamily:'LeagueSpartan-Bold', width:'100%', fontSize: 23, color: "#E84041", paddingTop:5,textAlign:'center',marginVertical:0}}
            >
              Necesitamos verificar tu identidad
              </Text>
            <Text
            style={{fontWeight:'bold', marginTop:20, textAlign:'center'}}
            >
            Estamos verificando tu documentación, recibirás un correo notificandote cuando tu línea de crédito esté lista para utilizarse.
              </Text>
              <Text
              style={{fontWeight:'bold', marginTop:20,textAlign:'center',marginBottom:20}}
              >
              Normalmente recibirás una respuesta antes de 72 horas hábiles.
              </Text>
              <Cerrar

onPress={()=>CerrarSesion()}
/>
          </View>
        </View>
      </Modal>
    </View>
        
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    baseText: {
        color:'#fff'
    },
    innerText: {
      color: 'red'
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    openButton: {
      backgroundColor: '#F194FF',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    }
  });

export default MenuPrincipal
