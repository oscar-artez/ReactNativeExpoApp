// import React, {useState} from 'react';
// import { Modal,StyleSheet,Text,TouchableHighlight,View, Platform } from 'react-native';
// // import  DateTimePicker  from '@react-native-community/datetimepicker';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import moment from 'moment';


// const CustomDatePicker = (props) =>{
//     const { textStyle} = props;
//     const [date, setDate] =useState(moment());
//     const [show, setShow] =useState(true);
//     const hideDatePicker = () => {
//         setDatePickerVisibility(false);
//       };
//       const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//     const onChange =(e,selectedDate) =>{
//         setDate(moment(selectedDate));
//     }
    

//     return (
//        <TouchableHighlight
//        activeOpacity={0}
//        onPress={()=> setShow(true)}>
//            <View>
//            <Text style={textStyle} >{date.format('MMMM Do, YYYY')}</Text>
//         <Modal
//          transparent={true}
//          animationType='slide'
//          visible={show}
//          supportedOrientations={['portrait']}
//          onRequestClose={()=>setShow(false)}>
//         <View style={{flex:1}}>
//                <TouchableHighlight
//                style={{
//                 flex:1,
//                 alignItems:'flex-end',
//                 flexDirection:'row',
                
//                }}
//                activeOpacity={1}
//                visible={show}
//                onPress={() => setShow(false)}>
//                 <TouchableHighlight
//                 underlayColor={'#ffffff'}
//                 style={{
//                     flex:1,
//                     borderTopColor:'#E9E9E9',
//                     borderTopWidth:1,
//                 }}
//                 onPress={()=>console.log('datepicker clicked')}>
//                 <View style={{
//                     backgroundColor:'#ffffff',
//                     height:256,
//                     overflow:'hidden',
//                 }}>
//                   <View>
//       {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//     </View>
//   );

//                     <TouchableHighlight
//                     underlayColor={'transparent'}
//                     onPress={() => console.log('cancelado')}
//                     style={[styles.btnText, styles.btnCancel]}
//                     >
//                         <Text>
//                             Cancel
//                         </Text>
//                         </TouchableHighlight>
//                         <TouchableHighlight
//                     underlayColor={'transparent'}
//                     onPress={() => console.log('aceptado')}
//                     style={[styles.btnText, styles.btnDone]}
//                     >
//                         <Text>
//                             Done
//                         </Text>

//                     </TouchableHighlight>
//                 </View>
//                     </TouchableHighlight>
//                </TouchableHighlight>
//            </View>
//         </Modal>
//            </View>
          
//        </TouchableHighlight>
//     )


// }

// CustomDatePicker.defaultProps ={
// textStyle:{},
// };
// const styles =StyleSheet.create({
//     btnText:{
//         position:'absolute',
//         top:0,
//         height:42,
//         paddingHorizontal:28,
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'center',
//     },
//     btnCancel:{
//         left:0,
//     },
//     btnDone:{
//         right:0,
//     },
// })

// export default CustomDatePicker;