import React, {useState} from 'react'
import { ScrollView, StatusBar,View, Share} from 'react-native'
import { H5_1, H5_2 } from '../atoms/Titles'
import { Subtitle5, Subtitle6 } from '../atoms/P'
import { Descuento,App } from '../atoms/Images'
import { ComparteCodigo } from '../molecules/Buttons'
import * as Sharing from 'expo-sharing';

const InvitarAmigo = ({route}) => {
    const {CodInv}= route.params;
    const[CodigoInvitacion, setCodigoInvitacion] = useState('Usa este código: ' + CodInv + ' y regístrate en www.example.com.mx y podrás tener una línea de crédito online en minutos.')

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              CodigoInvitacion,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    
    return (
        <ScrollView style={{position:'relative',flex:1,alignContent: "center",  backgroundColor: "#1f1b36", paddingHorizontal:0, paddingVertical:0,height:'100%'}}>
            <StatusBar/>
            <H5_1 h5={'INVITA A UN AMIGO \nY GANA DINERO'}/>
            <Subtitle5 Text={'En Example creemos que la mejor manera de crecer es conectar con nuestra comunidad.'}/>
            <View style={{alignItems:'center',alignContent:'center',width:'100%', height:'100%', padding:15, backgroundColor:'#ffffff', borderRadius:0, marginBottom:'5%', marginTop:0, flex:1, flexDirection:'column'}}>
            <Descuento/>
            <H5_2 Text={'¿Cómo hacerlo válido?'}/>
            <App/>
            <Subtitle6  Text={'1. Entra a tu dashboard principal y da clic en el icono en la parte superior derecha de la pantalla.'} />
            <Subtitle6  Text={'2. Ubica tu código de referido y compártelo con tus amigos por donde tu quieras.'} />
            <Subtitle6  Text={'3. Tu amigo deberá colocar el código de referido al llenar su formulario de registro y para que se aplique tu descuento su crédito tendrá que ser autorizado.'} />
            <Subtitle6  Text={'4. Cuando el crédito de tu amigo sea autorizado, recibirás un correo de notificación y verás este descuento aplicado en tu pago mínimo vigente.'}/>
            <ComparteCodigo
            onPress={onShare}
            />
            </View>
        </ScrollView>
    )
}

export default InvitarAmigo
