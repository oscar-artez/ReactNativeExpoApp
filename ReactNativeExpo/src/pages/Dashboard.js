import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MenuPrincipal from '../templates/MenuPrincipal';
import PagoSPEI from '../templates/PagoSPEI';
import SaldoActual from '../templates/SaldoActual';

const Stack =createStackNavigator();

const Dashboard = ({route,navigation}) => {
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
                name="SaldoActual" 
                component={SaldoActual}
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

export default Dashboard;
