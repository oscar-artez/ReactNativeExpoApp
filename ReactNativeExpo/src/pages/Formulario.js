import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Nombre from '../templates/Nombre'
import Direccion from '../templates/Direccion';
import CuentaBanco from '../templates/CuentaBanco';
import RegistroCorreo from '../templates/RegistroCorreo';
import UltimoPasoNip from '../templates/UltimoPasoNip';
import { H2Nom } from '../atoms/Titles';


const Stack =createStackNavigator();

const Formulario = ({navigation}) => {
    return (
        
            <Stack.Navigator
                screenOptions={{
                    headerStyled:{
                        backgroundColor:'transparent'
                        
                    },
                    headerTransparent: true,
                    // headerTitle: <H2Nom h2='Cuéntanos más de ti'
                    // />,
                    
                }}
                initialRouteName="Nombre">
                <Stack.Screen 
                name="Nombre" 
                component={Nombre}
                  options={{      
                    title: <H2Nom h2='Cuéntanos más de ti'
                    />
                    ,
                             headerTitleContainerStyle:{
                              position:'absolute',
                              top:20,
                              paddingTop:20, marginLeft:-30
                             },
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:20,
                  }}
                  }
                />
                 <Stack.Screen 
                name="Direccion" 
                component={Direccion}
                  options={{      
                                  
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                  }}
                  }
                />
                <Stack.Screen 
                name="CuentaBanco" 
                component={CuentaBanco}
                  options={{      
                                  
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                  }}
                  }
                />
                <Stack.Screen 
                name="RegistroCorreo" 
                component={RegistroCorreo}
                  options={{           
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                  }}
                  }
                />
                <Stack.Screen 
                name="UltimoPasoNip" 
                component={UltimoPasoNip}
                  options={{           
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                  }}
                  }
                />
              
            </Stack.Navigator>
        
           
    )
}

export default Formulario;
