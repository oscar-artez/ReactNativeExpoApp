import Icon from 'react-native-vector-icons/FontAwesome';  
import React from 'react';
import { StyleSheet } from 'react-native';
   
   export const IconEye = (props) => {

    const [visible, setVisibility] = React.useState(false);
    const icon = !visible ? 'eye-slash' : 'eye';

       return (
        <Icon
        name={icon}
        color={'#9e9e9e'}
        onPress={() => setVisibility(!visible)}
        style={[styles.icons]}
      /> 
       )
   }
        const styles = StyleSheet.create({

            icons: {
              backgroundColor: '#e3e3e3',
              textAlign: 'center',
              textAlignVertical: 'center',
              width:25,
              height:25,
            
            },
          });