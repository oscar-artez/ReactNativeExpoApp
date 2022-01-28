import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import  Login from '../templates/Login';
import RecuperacionContraseña from '../pages/RecuperacionContraseña';
import MenuPrincipal from '../templates/MenuPrincipal';
import SaldoActual from '../templates/SaldoActual';
import PagoSPEI from '../templates/PagoSPEI';
import Oxxo from '../templates/Oxxo';
import PedirDispo from '../templates/PedirDispo';
import RetiroNIP from '../templates/RetiroNIP';
import User from '../templates/User';
import InvitarAmigo from '../templates/InvitarAmigo';

const Stack =createStackNavigator();

const MainPage = ({route,navigation}) => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyled:{
                backgroundColor:'transparent'
                
            },
            headerTransparent: true,
            headerTitle:'',
            
        }}
        initialRouteName="Login">
        <Stack.Screen 
        name="Login" 
        component={Login}
          options={{      
                          
            headerLeftContainerStyle:{
                paddingLeft:20,
                paddingTop:0,
          }}
          }
        />
         <Stack.Screen 
        name="MenuPrincipal" 
        component={MenuPrincipal}
          options={{      
                          
            headerLeftContainerStyle:{
                paddingLeft:20,
                paddingTop:0,
          }}
          }
        />
           
               <Stack.Screen 
                name="PedirDispo" 
                component={PedirDispo}
                  options={{      
                                  
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                  }}
                  }
                />
                    <Stack.Screen 
                name="RetiroNIP" 
                component={RetiroNIP}
                  options={{      
                                  
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                  }}
                  }
                />
        <Stack.Screen 
                name="SaldoActual" 
                component={SaldoActual}
                  options={{      
                                  
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                  }}
                  }
                />
     <Stack.Screen 
                name="User" 
                component={User}
                  options={{      
                                  
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                  }}
                  }
                />

                     <Stack.Screen 
                name="PagoSPEI" 
                component={PagoSPEI}
                  options={{      
                                  
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                  }}
                  }
                />
                        <Stack.Screen 
                name="Oxxo" 
                component={Oxxo}
                  options={{      
                                  
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                  }}
                  }
                />
                                    <Stack.Screen 
                name="InvitarAmigo" 
                component={InvitarAmigo}
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

export default MainPage
