import React from 'react'
import { H5,H3,H7,TituloMenuA} from '../atoms/Titles'
import { View, StyleSheet, ScrollView } from 'react-native'
import { PText1,PText2 } from '../atoms/P'
import { StatusBar, TouchableHighlight, Alert} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Oxxo = ({route}) => {
  const {RefOxxo} = route.params;

  const copyToClipboard = () => {
    Clipboard.setString(RefOxxo);
    Alert.alert('Example  ','Copiado: ' + RefOxxo ,  [
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
            <View style={{alignItems:'center',alignContent:'center',width:'100%', height:'85%', padding:'5%', backgroundColor:'#ffffff', borderRadius:15}}>
            <H3 h3={'Usa los siguientes datos para pagar con OXXO-PAY'}/>
            <PText1 Text={'Indica la siguiente referencia al cajero de oxxo.'}/>
            <H7 h7={'Normalmente el pago se ve reflejado en unos minutos.'}/>
            <View
            style={{width:'100%',height:'22%'}}
             >
            <PText2 Text={'Referencia Oxxo: \n' + RefOxxo}/>
            <TouchableHighlight
             style={{ position:'absolute', left:'90%' ,paddingVertical:'180%'}}

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
            <View



            style={{height:10 ,borderColor:'red',borderBottomWidth:1, borderStyle:'solid', width:'100%', flexDirection:'column'}}
            >

            </View>
            </View>
        </View>
        </ScrollView>
    )
}



  const styles = StyleSheet.create({
    P1: {width:'100%', color: '#6A6A6A', fontSize:20, marginTop:0, textAlign:'center'}
  })

export default Oxxo
