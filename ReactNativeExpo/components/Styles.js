import styled from 'styled-components';
import{TextInput, TouchableOpacity, View, Text} from 'react-native';
import { Bienvenido } from '../src/atoms/Titles';


export const StyledTextinput = styled.TextInput`
background-color:#ffffff;
padding:15px;
padding-right: 55px;
padding-left: 55px;
border-radius:15px; 
font-size: 13px;
height:50px
margin-vertical:3px;
margin-top:10px;
margin-bottom:20px;
color:#6a6a6a;

`;
export const StyledTextinputPass = styled.TextInput`
background-color:#ffffff;
padding:15px;
padding-right: 55px;
padding-left: 55px;
border-radius:15px;
borderBottomWidth:1px;
font-size: 13px;
height:50px
margin-vertical:3px;
margin-bottom:10px;
color:#6a6a6a;

`;

export const StyledLabelInput = styled.Text`
    color: #ffffff;
    font-size:13px;
    text-align: left;
    marginTop: 20px;
    marginBottom: 20px;


`;

export const LeftIcon = styled.View`
left:15px;
top:20px;
position: absolute;
z-index: 1;
`;
export const LeftIcon2 = styled.View`
left:15px;
top:70px;
position: absolute;
z-index: 1;
`;
export const RigthIcon = styled.TouchableOpacity`
right:15px;
top:20px;
position: absolute;
z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
padding: 10px;
margin-top:20px;
background-color: #3AC0F2;
justify-content:center;
align-items:center;
border-radius:15px;
margin-vertical:5px;
height:50px;


`;

export const StyledButtonDown = styled.TouchableOpacity`
padding: 10px;
margin-top:250px;
background-color: #3AC0F2;
justify-content:center;
align-items:center;
border-radius:15px;
margin-vertical:5px;
height:50px;


`;


export const ButtonText = styled.Text`
color:#ffffff;
font-size:16px;
`;

export const StyledFormArea = styled.View` 
width:100%

`;

export const ExtraText  = styled.Text` 
justify-content:center;
align.content:center;
color:#6a6a6a;
font-size:15px;

`;
export const ExtraView = styled.View` 
justify-content:center;
flex-direction:row;
align-items:center;
padding:50px;

`;

export const TextLink = styled.TouchableOpacity` 
justify-content:center;
align-items:center;
margin-top:25px;

`;
export const TextLinkContent = styled.Text` 
color: #ffffff;
font-size:15px;

`;
export const MsgBox = styled.Text` 
text-align:center;
font-size:13px;
color: ${props => (props.type == 'SUCCESS' ? 'green' : 'red')};
`;

export const Line = styled.View` 
height: 1px;
width: 100%;
background-color: #6a6a6a6a;
margin-vertical:10px;
`;


export const Colors ={
    primary:"#ffffff",
    secondary:"#6a6a6a"
};

