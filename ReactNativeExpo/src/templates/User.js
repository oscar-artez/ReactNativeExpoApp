import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { Avatar } from "react-native-elements";
import { PText3, PText3_1, PText4, PText4_1, PText5, PText6, PText7, PText8 } from '../atoms/P';
import { Cerrar } from '../molecules/Buttons';
import { ListItem, Icon } from 'react-native-elements';
import { StatusBar,ScrollView, Alert } from 'react-native';
import {Restart} from 'fiction-expo-restart';


const User = ({route, navigation}) => {



  const {Iniciales,Name, Apellido,Email,idUsuario,Score,CodUsado,CodInv} = route.params;
  const [estadoBuro, setEstadoBuro]  = useState('');
  const [colorBuro, setColorBuro]  = useState('');
 
  useEffect(() => {
    valoracionScore()

  }, [])

    function valoracionScore(){
      if(Score === '-9' ){
        setEstadoBuro('Historial Nuevo');
        setColorBuro('#3ac0f2');
        return false;
      }else if(Score === '-8' ){
        setEstadoBuro('Poco historial');
        setColorBuro('#F38926');
        return false;
      }else if(parseInt(Score) <=632 || Score === '-6' || Score === '-1'  ||  Score === '-5'  ||  Score === '-7'  ){
        setEstadoBuro('Negativo');
        setColorBuro('#F32626');
        return false;
      }else if(parseInt(Score) === 633 || parseInt(Score) <= 650 ){
        setEstadoBuro('Regular / Bueno');
        setColorBuro('#F3E526');
        return false;
      }else if(parseInt(Score) >=651 ){
        setEstadoBuro ('Bueno');
        setColorBuro('#2CC00F');
        return false;
      }
  
   }




   const nextMenu = (val) =>{
     if(val === 0){
      navigation.navigate('Ayuda');

            } else if(val === 1){
          navigation.navigate('Notificaciones',{
            Email
          });
        }else if(val === 2){
      navigation.navigate('DocumentosImp');
        }
      }

      const CerrarSesion = () =>{
        Alert.alert('Example','Tu sesión se ha cerrado exitosamente' ,  [
          {
            text: 'Entendido',
          },
        ],);
        setTimeout(() => {
          Restart()
        }, 500);
      }

    return (
        <ScrollView style={{position:'relative',flex:1,alignContent: "center",  backgroundColor: "#1f1b36", paddingHorizontal:'5%', paddingTop:'5%', height:'100%'}}>
         <StatusBar/>
         <Avatar
  size="large"
  rounded
  title={Iniciales}
  activeOpacity={0.7}
  overlayContainerStyle={{width:130,backgroundColor:'#ffffff',height:130,borderRadius:100}}
  containerStyle={{width:'100%',alignItems:'center',height:130,marginTop:'10%', marginBottom:5}}
  titleStyle={{color:'#585858', fontFamily:'LeagueSpartan-Bold'}}
/>
<View style={{flex:1,flexDirection:'row',  width:'100%',justifyContent:'space-evenly', marginBottom:'10%', height:'100%',marginTop:'5%'}} >
<View style={{flex:1,flexDirection:'column', width:'45%', marginBottom:'-10%', height:'100%'}}>
<PText3 Text={Name +' '+ Apellido}/>
<PText3_1 Text={Email}/>
<PText5 Text={'ID Usuario: ' + (idUsuario)}/>
<PText3_1 Text={'Tu score crediticio es:'}/> 
<PText7 Text={Score + ' '}
Buro={estadoBuro}
style1={{fontFamily:'LeagueSpartan-Bold',textAlign:'left',color:colorBuro,fontSize:12,}}

>

</PText7>
</View>

<View style={{flex:1,flexDirection:'column'}}>
<PText4 Text={'Usa este código para \ninvitar a tus amigos:'}/>
<PText6 Text={CodInv}/>
<PText4_1 Text={'Utilizaste:'}/>
<PText4_1 Text={CodUsado+'/5'}/>
</View>

</View>

<View style={{alignItems:'center',alignContent:'center',width:'100%', borderRadius:15, backgroundColor:'#fff',paddingVertical:'5%'}}>
<View style={{width:'100%', marginBottom:'10%'}}>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider style={{width:'100%'}}>
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron
        size={35}
        // key={i}
        onPress={()=> nextMenu(i)}
        />
      </ListItem>
    ))
  }
</View>

<Cerrar

onPress={()=>CerrarSesion()}
/>

  </View>  


</ScrollView>
    )
}



const list = [
    {
      title: 'Ayuda'
    },
    {
        title: 'Configurar notificaciones'
    },
    {
        title: 'Términos y condiciones'
    },
  ]
export default User
