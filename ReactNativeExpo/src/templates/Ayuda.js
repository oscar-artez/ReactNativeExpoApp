import React, { useState } from 'react'
import * as RNZendesk from "rn-zendesk";
import HyperLink from 'react-native-hyperlink';
import { View, Text } from 'react-native';
import { Tyc } from '../atoms/Titles';
import { Subtitle } from '../atoms/P';
import { ListItem, Icon } from 'react-native-elements';



const Ayuda = () => {
    const urlWeb = 'https://example.com.mx';
    const urlZend = 'http://example.com/example/example/example/exampleFunction';
const [Expanded, setExpanded] = useState(false);
const [Expanded2, setExpanded2] = useState(false);
const [Expanded3, setExpanded3] = useState(false);
const [Expanded4, setExpanded4] = useState(false);
const [Expanded5, setExpanded5] = useState(false);
const [Expanded6, setExpanded6] = useState(false);

      const list = [
        {
          subtitle:'La comisión se calcula con base al monto promedio diario utilizado, y esta corresponde al 20% del mismo + IVA. Al ser una comisión variable por el cálculo del monto promedio diario utilizado, puedes calcular tus pagos como a ti te convenga y utilizar tu línea de crédito de acuerdo a tus capacidades de pago, ya que tu comisión y pago mínimo varía dependiendo del día dentro del periodo en el que te encuentres.' 
        },
      ]
      const list2 = [
        {
          subtitle:'Al ser una línea de crédito en efectivo, se te deposita el monto que decidas retirar en tu cuenta bancaria favorita, donde podrás gastarlo con tu tarjeta de débito o retirarlo en los cajeros de tu banco.' 
        },
      ]
      const list3 = [
        {
          subtitle:'Si no se realiza por lo menos el pago mínimo dentro del periodo de 21 días después de la disposición de efectivo, se te cobrará una penalización por falta de pago y este atraso podría perjudicar tu historial crediticio.' 
        },
      ]
      const list4 = [
        {
          subtitle:'Al ser una línea revolvente no hay una regla de plazos establecida, puedes disponer de efectivo y realizar tus pagos cualquier día dentro de nuestros horarios de operación. Para esto, únicamente ponemos una fecha límite de pago la cual corresponde a los 21 días posteriores a la fecha de tu primera disposición de efectivo cuando tu saldo se encuentra en CERO. En esta fecha solo es obligatorio cubrir el pago mínimo y con esto renuevas el plazo a otros 21 días.' 
        },
      ]
       const list5 = [
        {
          subtitle:'Nuestro horario hábil de operación es de 8 a.m. a 6 p.m. de lunes a viernes.' 
        },
      ]
      const list6 = [
        {
          subtitle:'Nosotros no cobramos intereses por el crédito que utilizas, únicamente se cobra una comisión por disposición de efectivo y uso de plataforma tecnológica, que se carga por periodo dependiendo del monto promedio diario utilizado de tu línea de crédito. Esta comisión la puedes cubrir realizando solo el pago mínimo y te da la posibilidad de renovar un nuevo plazo. Puedes hacerlo todas las veces que quieras.' 
        },
      ]
    return (
    <View style={{flex:1,alignContent: "center", height:'100%', backgroundColor: "#1f1b36", padding:10  }}>
        <Tyc
        h2={'Preguntas frecuentes'}
        />

<View style={{width:'100%'}}>
<ListItem.Accordion
  content={
    <>
      <ListItem.Content>
        <ListItem.Title>¿Cómo se calcula la comisión?</ListItem.Title>
      </ListItem.Content>
      
    </>
  }
  isExpanded={Expanded}
  onPress={() => {
    setExpanded(!Expanded);
  }}
>
  {list.map((l, i) => (
    <ListItem key={i} bottomDivider>
      <ListItem.Content>
        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  ))}
</ListItem.Accordion>
</View>
<View style={{width:'100%'}}>
<ListItem.Accordion
  content={
    <>
      <ListItem.Content>
        <ListItem.Title>¿Cómo puedo gastar el dinero de mi línea de crédito?</ListItem.Title>
      </ListItem.Content>
      
    </>
  }
  isExpanded={Expanded2}
  onPress={() => {
    setExpanded2(!Expanded2);
  }}
>
  {list2.map((l, i) => (
    <ListItem key={i} bottomDivider>
      <ListItem.Content>
        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  ))}
</ListItem.Accordion>
</View>
<View style={{width:'100%'}}>
<ListItem.Accordion
  content={
    <>
      <ListItem.Content>
        <ListItem.Title>¿Cuáles son los plazos de pago?</ListItem.Title>
      </ListItem.Content>
      
    </>
  }
  isExpanded={Expanded3}
  onPress={() => {
    setExpanded3(!Expanded3);
  }}
>
  {list3.map((l, i) => (
    <ListItem key={i} bottomDivider>
      <ListItem.Content>
        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  ))}
</ListItem.Accordion>
</View>
<View style={{width:'100%'}}>
<ListItem.Accordion
  content={
    <>
      <ListItem.Content>
        <ListItem.Title>¿Qué pasa si no hago mi pago mínimo dentro del periodo de 21 días?</ListItem.Title>
      </ListItem.Content>
      
    </>
  }
  isExpanded={Expanded4}
  onPress={() => {
    setExpanded4(!Expanded4);
  }}
>
  {list4.map((l, i) => (
    <ListItem key={i} bottomDivider>
      <ListItem.Content>
        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  ))}
</ListItem.Accordion>
</View>
<View style={{width:'100%'}}>
<ListItem.Accordion
  content={
    <>
      <ListItem.Content>
        <ListItem.Title>¿Cuál es el horario de operación?</ListItem.Title>
      </ListItem.Content>
      
    </>
  }
  isExpanded={Expanded5}
  onPress={() => {
    setExpanded5(!Expanded5);
  }}
>
  {list5.map((l, i) => (
    <ListItem key={i} bottomDivider>
      <ListItem.Content>
        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  ))}
</ListItem.Accordion>
</View>
<View style={{width:'100%'}}>
<ListItem.Accordion
  content={
    <>
      <ListItem.Content>
        <ListItem.Title>¿Cobran intereses por usar una línea de crédito?</ListItem.Title>
      </ListItem.Content>
      
    </>
  }
  isExpanded={Expanded6}
  onPress={() => {
    setExpanded6(!Expanded6);
  }}
>
  {list6.map((l, i) => (
    <ListItem key={i} bottomDivider>
      <ListItem.Content>
        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  ))}
</ListItem.Accordion>
</View>

<View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', marginTop:'20%'}}>
<View
    style={{borderRadius:10,backgroundColor:"#3AC0F2", width:'40%', height:50, alignSelf:'center',justifyContent:'center', alignItems:'center',}}
    >
    <HyperLink linkDefault={true}
      linkStyle={{textAlign:'center', color:'#fff', fontSize:15}}
      linkText={'Visita nuestro \n     sitio Web'}
      >
        <Text
              >
       {urlWeb}
        </Text>
      </HyperLink>
    </View>
    <View
    style={{borderRadius:10,backgroundColor:"#3AC0F2", width:'40%', height:50, alignSelf:'center',justifyContent:'center', alignItems:'center'}}
    >
    <HyperLink linkDefault={true}
      linkStyle={{textAlign:'center', color:'#fff', fontSize:15}}
      linkText={'Chat'}
      >
        <Text
              >
       {urlZend}
        </Text>
      </HyperLink>
    </View>
</View>

    </View>
    )
}

export default Ayuda
