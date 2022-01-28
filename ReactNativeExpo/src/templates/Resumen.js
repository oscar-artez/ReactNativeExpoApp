import React,{useState, useEffect} from 'react'
import { StatusBar, ScrollView, View,Text, Alert} from 'react-native';
import { TituloMenuB2_1 } from '../atoms/Titles';
import { Subtitle2_1,Subtitle4 } from '../atoms/P';
import { Tab,TabView } from 'react-native-elements';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { ListItem,} from 'react-native-elements'
import axios from 'axios';
import { color } from 'react-native-elements/dist/helpers';


const Resumen = ({route}) => {
const {DatosInicio} = route.params;
  let Datos = {TokenT:DatosInicio.Token};
  
let item;
    const [index, setIndex] = useState(0);
    const [DatosRes, setDatosRes] = useState([]);
    const [DatosEdo,setDatosEdo] = useState([ ]);
    const [FechaEdo, setFechaEdo] = useState('*');
    const [MontoEdo, setMontoEdo] = useState('*');
    const [idSTP, setIdSTP] = useState('*');
    const [DatosAbono, setDatosAbono] = useState([ ]);
    let  Concepto = [];
    const [Concepto1, setConcepto1] = useState('');
    let list =[]; 
    let list2 = [];
    let ArrayAbono = []
    const cambioMenu = ()=>{
        if(index === 0){
            setIndex(1)
        }else{
            setIndex(0)
        }
  
        
    }

    useEffect(() => {
      InfoCliente();
      EdoCuenta();
      EdoCuentaAbono();
      // CambioConcepto();

    }, [])

  
    

const [itemch, setItemchi] = useState('');

      const InfoCliente = async () => {
            const url ='http://example.com/example/example/example/exampleFunction';
            axios
            .post(url, Datos)
            .then((response)=> {
               const result = response.data;
               const {message, status, data} = result;
                setDatosRes(result.Resumen);
  
            })
            .catch(error =>{
              console.log(error);
            })
        };
        const EdoCuenta = async () => {
            const url ='http://example.com/example/example/example/exampleFunction';
            axios
            .post(url, Datos)
            .then((response)=> {
               const result = response.data;
               const {message, status, data} = result;

                  // setDatosEdo(result.EstadoCuenta); 
                    
                    if(result.EstadoCuenta === undefined){
                      Alert.alert('Example','No tienes movimientos de retiros para mostrar en tu estado de cuenta',  [
                        {
                          text: 'Entendido',
                        },
                      ],);
                    }else{
                      setDatosEdo(result.EstadoCuenta.reverse());    
                    }

                  

            })
            .catch(error =>{
              console.log(error);
            })
        };

        const EdoCuentaAbono = async () => {
          const url ='http://example.com/example/example/example/exampleFunction';
          axios
          .post(url, Datos)
          .then((response)=> {
             const result = response.data;
             const {message, status, data} = result;
              // setDatosAbono(result.Abonos);    
                if(result.Abonos === undefined){
                  Alert.alert('Example','No tienes movimientos de Abonos para mostrar en tu estado de cuenta',  [
                    {
                      text: 'Entendido',
                    },
                  ],);
                }else{
                  setDatosAbono(result.Abonos.reverse());  
                }
            
            
          })
          .catch(error =>{
            console.log(error);
          })
      };

      ArrayAbono = DatosAbono.concat(DatosEdo);
      // ArrayAbono = ArrayAbono


    return (
        <View style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", paddingHorizontal:15, paddingVertical:0,height:'100%'}}>
        <StatusBar/>
        <TituloMenuB2_1 TituloB2={'ESTADO DE \nCUENTA'}/>
     <View style={{width:'100%',backgroundColor:'#ffffff', borderRadius:15, marginBottom:'5%', marginTop:'2%', height:'50%'}}> 
        
      <Tab value={index} onChange={() => cambioMenu()} 
      indicatorStyle={{ backgroundColor:'#3AC0F2'}
                      }
      >
            <Tab.Item
            containerStyle={{backgroundColor:'#fff'}}
           titleStyle={{color:'#6a6a6a', backgroundColor:'#fff'}}  
            title="MOVIMIENTOS" />
            <Tab.Item title="RESUMEN"
            containerStyle={{backgroundColor:'#fff'}}
            titleStyle={{color:'#6a6a6a', backgroundColor:'#fff'}}   />
        </Tab>
        <TabView
           titleStyle={{color:'#6a6a6a', backgroundColor:'#fff'}}  
           containerStyle={{backgroundColor:'#fff'}}
           
        value={index} >
            <TabView.Item style={{ backgroundColor:'#fff', width: '80%', height:'100%'}}>

              <ScrollView
              style={{flexGrow:1,}}
              >
             {
       DatosEdo.map((l, i) => (
       
             <ListItem key={i} bottomDivider 
             containerStyle={{flex:1, flexDirection:'column', alignItems:'flex-start'}}

             >
               <ListItem.Content
               style={{marginBottom:'5%' }}
               >
                   <View style={{backgroundColor:'#fff',flex:1, flexDirection:'row',width:'43%', justifyContent:'space-between', height:'100%', }}>
                   <ListItem.Title>{ l.id_Stp_retiro} </ListItem.Title>
                   <ListItem.Title>{'Monto: ' + '$ ' + l.Capital}</ListItem.Title>
                   </View>
                   <ListItem.Title>{'Fecha: '+ l.Fecha}</ListItem.Title>
    
               </ListItem.Content>
               {/* <ListItem.Content>
                   <View style={{backgroundColor:'#fff',flex:1, flexDirection:'row',width:'43%', justifyContent:'space-between', height:'100%' }}>
                   <ListItem.Title>{'Pago: ' + '$ ' + l.Monto}</ListItem.Title>
                   </View>
                   <ListItem.Title>{'Fecha: '+ l.Fechaora}</ListItem.Title>
    
               </ListItem.Content> */}
             </ListItem>
           ))
          
              }
              {
                 DatosAbono.map((h, j) => (
                        
                  <ListItem key={j} bottomDivider>
                    <ListItem.Content>
                        <View style={{backgroundColor:'#fff',flex:1, flexDirection:'row',width:'43%', justifyContent:'space-between', height:'100%' }}>
                        <ListItem.Title>{'Tu pago: ' + '$ ' + h.Monto}</ListItem.Title>
                        </View>
                        <ListItem.Title>{'Fecha: '+ h.Date}</ListItem.Title>
         
                    </ListItem.Content>
                  </ListItem>
                ))
              }
            </ScrollView>
            </TabView.Item>
            <TabView.Item
             style={{backgroundColor:'#fff',width: '90%',borderRadius:20,height:'100%'}}>
            <View style={{width: '100%', flex:1,}}>
            <View
            style={{flex:1,  flexDirection:'row', borderBottomWidth:1, width:'100%',  }}
            // width: '50%', height:100,paddingVertical:10, paddingHorizontal:30, flex:1, flexDirection:'row',paddingVertical:10, paddingHorizontal:30,
            >
            <Subtitle2_1 Text={'Monto retirado'}
            />
            <Subtitle4 Text={'$ '+ DatosRes.map(a => a.capital)}
            />
            </View>
            <View
            style={{flex:1,  flexDirection:'row', borderBottomWidth:1, width:'100%',   }}
            // width: '50%', height:100,paddingVertical:10, paddingHorizontal:30, flex:1, flexDirection:'row',paddingVertical:10, paddingHorizontal:30,
            >
            <Subtitle2_1 Text={'Comisión'}
            />
            <Subtitle4 Text={'$ '+ DatosRes.map(a => a.Minimo)}
            />
            </View>
            <View
            style={{flex:1,  flexDirection:'row', borderBottomWidth:1,  width:'100%',  }}
            // width: '50%', height:100,paddingVertical:10, paddingHorizontal:30, flex:1, flexDirection:'row',paddingVertical:10, paddingHorizontal:30,
            >
          <Subtitle2_1 Text={'Retiros del día'}
            />
        <Subtitle4 Text={DatosRes.map(a => a.numeroRetiros)}
            />
            </View>
            <View
            style={{flex:1,  flexDirection:'row', borderBottomWidth:1, width:'100%',  }}
            // width: '50%', height:100,paddingVertical:10, paddingHorizontal:30, flex:1, flexDirection:'row',paddingVertical:10, paddingHorizontal:30,
            >
              <Subtitle2_1 Text={'Total retiros del día'}
            />
                 <Subtitle4 Text={DatosRes.map(a => a.totalRetiros)}
            />
            </View>
            </View>
  </TabView.Item>
</TabView>

        </View> 
    </View>
    )
}

export default Resumen
