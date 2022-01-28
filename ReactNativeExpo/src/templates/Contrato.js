import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { H2 } from '../atoms/Titles'
import { Subtitle } from '../atoms/P'
import { AceptaryContinuar } from '../molecules/Buttons'
import { StatusBar, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'

const Contrato = () => {
    return (
        <KeyboardAwareScrollView style={{flex:1,alignContent: "center",  backgroundColor: "#1f1b36", padding:15}}>
        <StatusBar/>
        <H2 h2='Contrato'/>
        <ScrollView 
        style={{ flexGrow: 0.2,  }}>
            <Text 
            style={{backgroundColor:'#fff', width:'100%', padding:20,lineHeight:20,height:2000,borderRadius:15, fontSize:15, textAlign:'justify' }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur mattis turpis, sit amet porta ligula elementum quis. Suspendisse mollis maximus diam, nec lobortis leo varius ut. Nam suscipit vitae mi quis mollis. Sed dapibus eget mauris eget vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam fermentum, nibh sit amet aliquam convallis, sem nisl elementum elit, eu dignissim lacus nunc et velit. Donec varius ultrices lectus, quis consequat turpis luctus sed. In hac habitasse platea dictumst. Praesent eu tortor a augue mollis porta eget quis nisl.

            Donec eleifend lorem vitae viverra blandit. Nulla eu viverra risus, faucibus pretium ante. Pellentesque             maximus nisi eu molestie dictum. Aliquam tincidunt, tortor id luctus maximus, ipsum tellus finibus orci, sit            amet dignissim lacus mauris ullamcorper diam. Maecenas fringilla volutpat sapien id efficitur. Praesent         iaculis ex non nibh viverra, nec rutrum neque finibus. Aenean neque arcu, eleifend eget ligula et, ornare       luctus est. Ut quis purus purus.
            </Text>
        </ScrollView>
        <Subtitle Text={'Te recomendamos leer hasta el final, así podrás revisar el contrato completo y aceptarlo'}/>
        <AceptaryContinuar/>
    </KeyboardAwareScrollView>
    )
}

export default Contrato
