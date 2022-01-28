import axios from "axios";
import moment from 'moment';
import { useState } from "react";
const urlCor ='http://example.com/example/example/example/exampleFunction';



export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    return re.test(email);
  }

//  export function reemplazoAcentos(acento){

// return acento.replace('Á','A').replace('É','E').replace('Í','I').replace('Ó','O').replace('Ú','U').replace('Ñ','N').replace('ñ','n');
//   // //  }
   
//  }
 export const reemplazoAcentos = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

export const quitaArticulos = (palabra) =>{

  return palabra.replace("DEL ", "").replace("LAS ", "").replace("DE ",
      "").replace("LA ", "").replace("Y ", "").replace("A ", "").replace("del ", "").replace("las ", "").replace("de ",
      "").replace("la ", "").replace("y ", "").replace("a ", "");
}
export const esVocal = (letra) =>{
   if (letra == 'A' || letra == 'E'  ||  letra == 'I' ||  letra == 'O' ||  letra == 'U' ||  letra == 'a' || letra == 'e' ||  letra == 'i' ||  letra == 'o' ||  letra == 'u' ){
      return true;
       }
    
   else
     return false;
 }

 export   function capitalizeFirstLetter (string){
  return string
  .toLowerCase()
  .replace(/\w/, firstLetter => firstLetter.toUpperCase())
  .replace(/['"]+/g, '');
}

export function calcularEdad(fechaNacimiento) {
  // let fechaNacimiento = document.getElementById("date").value;
  var hoy = new Date();
  var cumpleanos = new Date(fechaNacimiento);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth(); 
if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
}
  return edad;

}

 export const DatosToken = (valores) =>{
  const url ='http://example.com/example/example/example/exampleFunction';
  axios
  .post(url, valores)
  .then((response)=> {
     const result = response.data;
  })
  .catch(error =>{
    console.log('no funciona');
  })
 }