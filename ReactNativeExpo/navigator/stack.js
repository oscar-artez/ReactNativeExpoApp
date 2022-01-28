import React , {useState, useEffect} from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { H2Nom } from '../src/atoms/Titles';
import  Login from '../src/templates/Login';
// import RecuperacionContraseña from '../pages/RecuperacionContraseña';
import MenuPrincipal from '../src/templates/MenuPrincipal';
import SaldoActual from '../src/templates/SaldoActual';
import PagoSPEI from '../src/templates/PagoSPEI';
import Oxxo from '../src/templates/Oxxo';
import PedirDispo from '../src/templates/PedirDispo';
import RetiroNIP from '../src/templates/RetiroNIP';
import User from '../src/templates/User';
import InvitarAmigo from '../src/templates/InvitarAmigo';
import Nombre from '../src/templates/Nombre'
import Direccion from '../src/templates/Direccion';
import CuentaBanco from '../src/templates/CuentaBanco';
import RegistroCorreo from '../src/templates/RegistroCorreo';
import UltimoPasoNip from '../src/templates/UltimoPasoNip';
import CorreoContraseña from '../src/templates/CorreoContraseña';
import NipContraseña from '../src/templates/NipContraseña';
// import ContraseniaConfirm from '../src/templates/ContraseniaConfirm';
import ContraseniaContrasenia from '../src/templates/ContraseniaRestablecer';
import MatiSdk from '../src/pages/MatiSdk';
import Resumen from '../src/templates/Resumen';
import Notificaciones from '../src/templates/Notificaciones';
import DocumentosImp from '../src/templates/DocumentosImp';
import MatiSdkFunction from '../src/pages/MatiSdkFunction';
import TyC from '../src/templates/TyC';
import Ayuda from '../src/templates/Ayuda';
import {View} from 'react-native'
import LottieView from 'lottie-react-native';

//Screens
import Routes from '../stackRoutes';
import Splash from '../src/templates/Splash';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function AppStack({route,navigation}){ 

 const [splash, setSplash] = useState(true);
 useEffect(() => {
   setTimeout(() => {
     setSplash(false);
   }, 5000);
 }, [])
 return splash ?
 ( <View 
   style={{flex:1, alignSelf:'auto'}}
   >
   <LottieView
   source={require('../assets/appanimacion.json')}
   autoPlay
   loop={false}
 />
 </View>
 ) :
   ( 
      <NavigationContainer>
             <Stack.Navigator
            screenOptions={{
              animationEnabled:true,
              headerShown:false,
            headerBackTitleVisible: false,
            headerTitle:'',
            // cardStyle:'card',
            // // stackAnimation:'fade',
            //   stackPresentation:'modal'
            // gestureDirection:'horizontal',
            transitionSpec: {
              open: config,
              close: config,
            },

            
        }}
        // screenOptions={{
        //    stackAnimation:'fade',
        //   // stackPresentation:'modal'
        // }}
        initialRouteName="Login"> 
            {/* <Stack.Screen
             name="MainPage"
              component={Routes.MainPage} 
              options={{
                headerTransparent: 'false',
                title:'',
              }}
          
              />
            <Stack.Screen
             name="RecuperacionContraseña"
              component={Routes.RecuperacionContraseña}
              options={{
                headerTintColor: '#ffffff',
                title:'',
                headerTransparent: 'true',
                
                }}
               />
 
               <Stack.Screen
               name="Formulario"
                component={Routes.Formulario}
                // options={{      
                //   title: <H2Nom h2='Cuéntanos más de ti'
                //   />
                //   ,
                //            headerTitleContainerStyle:{
                //             position:'absolute',
                //             top:20,
                //             paddingTop:20, marginLeft:-30
                //            },
                //   headerLeftContainerStyle:{
                //       paddingLeft:20,
                //       paddingTop:20,
                // }}
                // }
                 />   */}
                 <Stack.Screen 
                 name="Nombre" 
                 component={Nombre}
                 
                 options={{      
                  headerShown:true,
                  headerTransparent:true,
                  // headerStyle:{
                  //   backgroundColor:'transparent',
                  // },
                  headerTintColor:'#fff',
                  headerLeftContainerStyle:{
                  
                    paddingLeft:10,
                    paddingTop:0,
                    zIndex:101,
                    
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
                 name="TyC" 
                 component={TyC}
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
                  headerShown:true,
                  headerTransparent:true,
                  // headerStyle:{
                  //   backgroundColor:'transparent',
                  // },
                  headerTintColor:'#fff',
                  headerLeftContainerStyle:{
                  
                    paddingLeft:10,
                    paddingTop:0,
                    zIndex:101,
                    
                }}
                }
                 />
                  <Stack.Screen 
        name="MatiSdkFunction" 
        component={MatiSdkFunction}
          options={{      
            
            headerLeftContainerStyle:{
                paddingLeft:20,
                paddingTop:0,
          }}
          }
        />
                  <Stack.Screen 
                name="CorreoContraseña" 
                component={CorreoContraseña}
           
                  options={{  
                  
          
                    headerShown:true,
                    headerTransparent:true,
                    // headerStyle:{
                    //   backgroundColor:'transparent',
                    // },
                    headerTintColor:'#fff',
                    headerLeftContainerStyle:{
                    
                      paddingLeft:10,
                      paddingTop:0,
                      zIndex:101
                      
                  }

                }}
                />
                    <Stack.Screen 
                    options={{  
                  
          
                      headerShown:true,
                      headerTransparent:true,
                      // headerStyle:{
                      //   backgroundColor:'transparent',
                      // },
                      headerTintColor:'#fff',
                      headerLeftContainerStyle:{
                      
                        paddingLeft:10,
                        paddingTop:0,
                        zIndex:101
                        
                    }
  
                  }}
                name="NipContraseña" 
                 component={NipContraseña}/>
                   <Stack.Screen 
                
                options={{  
                  
          
                  headerShown:true,
                  headerTransparent:true,
                  // headerStyle:{
                  //   backgroundColor:'transparent',
                  // },
                  headerTintColor:'#fff',
                  headerLeftContainerStyle:{
                  
                    paddingLeft:10,
                    paddingTop:0,
                    zIndex:101
                    
                }

              }}
                name="ContraseniaContrasenia" 
                 component={ContraseniaContrasenia}/>
                 
            
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
                  
          
          headerShown:false,
          headerTransparent:false,
          // headerStyle:{
          //   backgroundColor:'transparent',
          // },

               }}
        />

           
               <Stack.Screen 
                name="PedirDispo" 
                component={PedirDispo}
                  options={{      
                    headerShown:true,
                    headerTransparent:true,
                    // headerStyle:{
                    //   backgroundColor:'transparent',
                    // },
                    headerTintColor:'#fff',
                    headerLeftContainerStyle:{
                    
                      paddingLeft:10,
                      paddingTop:0,
                      zIndex:101,
                      
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
                  options={{    headerShown:true,
                    headerTransparent:true,
                    // headerStyle:{
                    //   backgroundColor:'transparent',
                    // },
                    headerTintColor:'#fff',
                    headerLeftContainerStyle:{
                    
                      paddingLeft:10,
                      paddingTop:0,
                      zIndex:101
                      
                  }}
                  }
                />
                  <Stack.Screen 
                name="Resumen" 
                component={Resumen}
                  options={{    headerShown:true,
                    headerTransparent:true,
                    // headerStyle:{
                    //   backgroundColor:'transparent',
                    // },
                    headerTintColor:'#fff',
                    headerLeftContainerStyle:{
                    
                      paddingLeft:10,
                      paddingTop:0,
                      zIndex:101
                      
                  }}
                  }
                />
     <Stack.Screen 
                name="User" 
                component={User}
                options={{      
                  headerShown:true,
                  headerTransparent:true,
                  // headerStyle:{
                  //   backgroundColor:'transparent',
                  // },
                  headerTintColor:'#fff',
                  headerLeftContainerStyle:{
                  
                    paddingLeft:10,
                    paddingTop:0,
                    zIndex:101,
                    
                }}
                }
                />
                <Stack.Screen 
                name="Notificaciones" 
                component={Notificaciones}
                options={{      
                  headerShown:true,
                  headerTransparent:true,
                  // headerStyle:{
                  //   backgroundColor:'transparent',
                  // },
                  headerTintColor:'#fff',
                  headerLeftContainerStyle:{
                  
                    paddingLeft:10,
                    paddingTop:0,
                    zIndex:101,
                    
                }}
                }
                />
                <Stack.Screen 
                name="Ayuda" 
                component={Ayuda}
                options={{      
                  headerShown:true,
                  headerTransparent:true,
                  // headerStyle:{
                  //   backgroundColor:'transparent',
                  // },
                  headerTintColor:'#fff',
                  headerLeftContainerStyle:{
                  
                    paddingLeft:10,
                    paddingTop:0,
                    zIndex:101,
                    
                }}
                }
                />
                 <Stack.Screen 
                name="DocumentosImp" 
                component={DocumentosImp}
                options={{      
                  headerShown:true,
                  headerTransparent:true,
                  // headerStyle:{
                  //   backgroundColor:'transparent',
                  // },
                  headerTintColor:'#fff',
                  headerLeftContainerStyle:{
                  
                    paddingLeft:10,
                    paddingTop:0,
                    zIndex:101,
                    
                }}
                }
                />

                     <Stack.Screen 
                name="PagoSPEI" 
                component={PagoSPEI}
                options={{      
                  headerShown:true,
                  headerTransparent:true,
                   headerStyle:{
                     backgroundColor:'transparent',
                   },
                  headerTintColor:'#fff',
                  headerLeftContainerStyle:{
                  
                    paddingLeft:'25%',
                    paddingTop:'13%',
                    
                    
                }}
                }
                />
                        <Stack.Screen 
                name="Oxxo" 
                component={Oxxo}
                options={{      
                  headerShown:true,
                  headerTransparent:true,
                  // headerStyle:{
                  //   backgroundColor:'transparent',
                  // },
                  headerTintColor:'#fff',
                  headerLeftContainerStyle:{
                  
                    paddingLeft:10,
                    paddingTop:0,
                    zIndex:101,
                    
                }}
                }
                />
                                    <Stack.Screen 
                name="InvitarAmigo" 
                component={InvitarAmigo}
                options={{      
                  headerShown:true,
                  headerTransparent:true,
                  // headerStyle:{
                  //   backgroundColor:'transparent',
                  // },
                  headerTintColor:'#fff',
                  headerLeftContainerStyle:{
                  
                    paddingLeft:10,
                    paddingTop:0,
                    zIndex:101,
                    
                }}
                }
                />
                                           <Stack.Screen 
                name="MatiSdk" 
                component={MatiSdk}
                  options={{      
                                  
                    headerLeftContainerStyle:{
                        paddingLeft:20,
                        paddingTop:0,
                  }}
                  }
                />
        
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}

export default AppStack;