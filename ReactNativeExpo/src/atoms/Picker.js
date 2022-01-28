import React, {Component} from 'react'
import { View } from 'react-native'
import { Picker } from '@react-native-picker/picker'


const PickerC = () => {
    return (
       <View
       style={{textAlign:'center',backgroundColor:'#ffffff',padding:10, paddingHorizontal:0,borderRadius:15,fontSize: 13,height:50,marginVertical:3,marginBottom:20,color:'#6a6a6a', marginHorizontal:10, }}
    //    inputStyle={{paddingHorizontal:20}} 
    >
           <Picker>
               <Picker.Item label='Elige un banco' value ='0'></Picker.Item>
               <Picker.Item label='' value =''></Picker.Item>

           </Picker>

       </View>
    )
}

export default PickerC
