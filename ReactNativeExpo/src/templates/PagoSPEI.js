import React from 'react'
import { H5,H3,TituloMenuA} from '../atoms/Titles'
import {ScrollView, View } from 'react-native'
import { PText1,  PText2, PTextVacio} from '../atoms/P'
import { StatusBar, Alert,TouchableHighlight} from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import * as Clipboard from 'expo-clipboard';

const PagoSPEI = ({route}) => {

    const {Name, Apellido, CuentaCliente} = route.params;
    

    // let   prueba = 'ffff';
    const [copiedText, setCopiedText] = React.useState('');

    const copyToClipboard = () => {
      Clipboard.setString(CuentaCliente);
      Alert.alert('Example','Copiado: ' + CuentaCliente ,  [
        {
          text: 'Entendido',
        },
      ],);


      };
  
    const fetchCopiedText = async () => {
      const text = await Clipboard.getStringAsync();
      setCopiedText(text);
    };
  
    return (
       <ScrollView
       style={{backgroundColor: "#1f1b36", }}
       >
      <View style={{alignContent: "center",   paddingHorizontal:'5%', paddingVertical:'25%', height:'100%'}}>
            <StatusBar/>
            <TituloMenuA            
        TituloA={'SÚPER '}
        
        Linea ={'LÍNEA'}
        Revolvente={'\nREVOLVENTE'}
        p2p={' P2P'}
            >
         </TituloMenuA>
            <View style={{alignItems:'center',alignContent:'center',width:'100%', height:'auto', paddingHorizontal:'5%', backgroundColor:'#ffffff', borderRadius:15}}>
            <H3 h3='Usa los siguientes datos para pagar con SPEI'/>
            <PText1 Text={'Normalmente el pago se ve reflejado en unos minutos.'}/>
            <PText2 Text={'Nombre'}/>
            <View
            style={{borderColor:'red',borderBottomWidth:1, borderStyle:'solid',width:'100%'}}
            >
            <PTextVacio  Text={Name + ' ' + Apellido }/>
            </View>
            
            <PText2 Text={'CLABE'}/>
            <View
            style={{width:'100%',borderColor:'red',borderBottomWidth:1, borderStyle:'solid', height:'11%'}}
             >
            <PTextVacio  Text={CuentaCliente}
            />
            
            <TouchableHighlight
             style={{ position:'absolute', left:'90%' }}

            activeOpacity={0.6}
            underlayColor="transparent"
            onPress={copyToClipboard}
            >
            <Icon
            name='copy-outline'
            type='ionicon'
          />
            </TouchableHighlight>

            </View>
           
            <PText2 Text={'Banco'}/>
            <View
            style={{borderColor:'red',borderBottomWidth:1, borderStyle:'solid', width:'100%'}}
            >
                <PTextVacio  Text={'STP'}/>
             
            </View>
            
            </View>
            
        </View>
      </ScrollView>
    )
}

export default PagoSPEI
