import React from 'react'
import { StatusBar, Text , View} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { TituloDocumento, Tyc } from '../atoms/Titles'
import { Linking } from 'react-native'
import { AvisoPrivTexto, ContratoTexto, TyCTexto } from '../atoms/TextosGrandes'



const DocumentosImp = () => {

    return (
      <ScrollView >
        <View style={{flex:1,alignContent: "center", height:'10%', backgroundColor: "#1f1b36", padding:15}}>
            <StatusBar/>
            <Tyc h2='Documentación'/>
                      <TituloDocumento
            h2='Términos y condiciones'
            />
            <ScrollView
             style={{flexGrow:.5,height:500,backgroundColor:'#6a6a6a'}}
            >
            <TyCTexto/>
            </ScrollView>

           <TituloDocumento
            h2='Aviso de privacidad'
            onPress={()=> Linking.openURL('http://example.com/example/example/example/examplepdf')}
            />
             <ScrollView 
             style={{flexGrow:.5,height:500,backgroundColor:'#6a6a6a'}}>
            <AvisoPrivTexto/>
        </ScrollView>

            <TituloDocumento
            onPress={()=> Linking.openURL('http://example.com/example/example/example/examplepdf')}
            h2='Contrato'
             /> 

          <ScrollView 
             style={{flexGrow:.5,height:500,backgroundColor:'#6a6a6a', marginBottom:40 }}>
             <ContratoTexto
              
              />
              </ScrollView> 

             
        </View>
        </ScrollView>
    )
}


export default DocumentosImp
