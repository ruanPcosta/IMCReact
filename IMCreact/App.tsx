/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, TextInput, Text, Switch, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';


export default function App() {

const [alturaR, setAltR] = useState ('');
const [pesoR, setPesoR] = useState ('');
const [sexoR, setSexoR] = useState (false);
const switchzin = () => setSexoR((estadoAnterior) => !estadoAnterior);
const calc = () => {
  const altura = parseFloat (alturaR) /100;
  const peso = parseFloat (pesoR);

   const imc = peso / (altura * altura)

 if (sexoR) {
    if (imc < 20.7)
    return Alert.alert('Voce está abaixo do peso', `Seu IMC é ${imc.toFixed(2)} e é considerado abaixo do ideal`);

    if(imc >= 20.7 && imc <= 26.4 )

    return Alert.alert ('Voce está normal', `Seu IMC é ${imc.toFixed(2)} e é considerado normal`);

    if(imc > 26.4 && imc <= 27.8)

    return Alert.alert ('Voce está um pouco acima do peso', `Seu IMC é ${imc.toFixed(2)} e é considerado um pouco acima do ideal `);

    if(imc > 27.8 && imc <= 31.1)

    return Alert.alert ('Voce está acima do peso', `Seu IMC é ${imc.toFixed(2)} e é considerado acima do ideaal`);

    if(imc > 31.1)

    return Alert.alert ('Voce está obeso', `Seu IMC é ${imc.toFixed(2)} e é considerado muito acima do ideal`);
   
}else{

  if(imc < 19.1)

  return Alert.alert ('Voce está abaixo do peso', `Seu IMC é ${imc.toFixed(2)} e é considerado abaixo do ideal`);

  if(imc >= 19.1 && imc <= 25.8)

  return Alert.alert ('Voce está normal', `Seu IMC é ${imc.toFixed(2)} e é considerado normal`);

  if(imc > 25.8 && imc < 27.3)

  return Alert.alert('Voce está um pouco acima do peso', `Seu IMC é ${imc.toFixed(2)} e é considerado um pouco acima do ideal`);

  if(imc > 27.3 && imc <= 32.3)

  return Alert.alert('Voce está acima do peso', `Seu IMC é ${imc.toFixed(2)} e é considerado acima do ideal`);

  if (imc > 32.3)

  return Alert.alert ('Voce está obesa', `Seu IMC é ${imc.toFixed(2)} e é considerado muito acima do ideal`);




}



  };

return (

<View style = {estilos.cont}>
<Text style= {estilos.botaoTxt}> Calculadora de IMC do ruanzin </Text>


<View style = {estilos.grupoR}>
<Text style={estilos.botaoTxt}>Feminino</Text>

<Switch
trackColor={{false: '#fc0fc0', true: '#4169e1'}}
thumbColor={sexoR ? '#4169e1' : '#fc0fc0'}
onValueChange={switchzin}
value = {sexoR} />

<Text style ={estilos.botaoTxt}>Masculino</Text>

</View>



<Text style = {estilos.botaoTxt}>Sua altura</Text>
<TextInput
keyboardType='number-pad' style={estilos.txtInput} value={alturaR} onChangeText={(txt) => setAltR(txt.replace(/\D/g, ''))} />

<Text style = {estilos.botaoTxt}>Seu peso</Text>
<TextInput keyboardType='number-pad'  style={estilos.txtInput} value={pesoR} onChangeText={(txt) => setPesoR(txt.replace(/\D/g, ''))} />

<TouchableOpacity s
onPress={calc}
style = {estilos.botao}>

<Text style = {estilos.botaoTxt}>Calcular o IMC</Text>

</TouchableOpacity>




</View>






)};

const estilos = StyleSheet.create ({

  cont: {

   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center'

},

grupoR: {

flexDirection:  "row",
alignItems: 'center',
justifyContent: 'center'

},

txtInput: {
width: '80%',
height: 60,
backgroundColor: '#fff',
borderRadius: 6,
justifyContent: 'center',
paddingHorizontal: 14,
marginTop: 4,
borderWidth: 1,
borderColor: '#000'



},

botao:{

  color: '#00ffff',
  width: '90%',
  height: 60,
  backgroundColor: '#00ffff',
  borderRadius: 6,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 16,
  elevation: 2,
  borderColor: '#000'

},

botaoTxt: {

color: '#000'
},
   
})

