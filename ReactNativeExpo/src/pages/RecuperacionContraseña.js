import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CorreoContraseña from '../templates/CorreoContraseña';
import NipContraseña from '../templates/NipContraseña';
import ContraseniaConfirm from '../templates/ContraseniaConfirm';

const Stack =createStackNavigator();

const RecuperacionContraseña = ({navigation}) => {
    return (
        
            <Stack.Navigator
                screenOptions={{
                    headerStyled:{
                        backgroundColor:'transparent'
                        
                    },
                    headerTransparent: true,
                    headerTitle:'',
                    
                }}
                initialRouteName="CorreoContraseña">
                <Stack.Screen 
                name="CorreoContraseña" 
                component={CorreoContraseña}
                  options={{
                      
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                        zIndex:101
            
                  }}
                  }
                />
                    <Stack.Screen 
                    options={{
                        headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                        zIndex:102
            
                  }}}
                name="NipContraseña" 
                 component={NipContraseña}/>
                   <Stack.Screen 
                
                options={{
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                        zIndex:102
            
                  }}}
                name="ContraseniaConfirm" 
                 component={ContraseniaConfirm}/>
            </Stack.Navigator>
        
           
    )
}

export default RecuperacionContraseña;
