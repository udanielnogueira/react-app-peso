import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableWithoutFeedbackBase, Alert, TouchableOpacity, RadioButtom, Platform} from 'react-native';

type Props = {};

export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state={altura:0, nome:"", pesoH: 0, pesoM: 0, result: ""}
    this.calcular=this.calcular. bind(this)
  }

  calcular(){
  
    let pH = (72.7*this.state.altura)-58
    let pM = (62.1*this.state.altura)-44.7

    {/*x referencia uma variável do construtor*/}
    let x = this.state
    x.pesoH = pH
    x.pesoM = pM 
    this.setState(x)
  }

  render(){
    return(
      <ImageBackground source={require("./assets/fundo.png")} style={styles.fundo}>
        <View style={styles.container}>

          {/*Logo e título*/}
          <View style={styles.box}>
            <Image source={require("./assets/logo.png")} style={styles.logo}/>
            <Text style={styles.titulo}>Lepeso</Text>
          </View>
          
         
          <View style={styles.principal}>

             {/*Inputs*/}
             <TextInput style={styles.form} placeholder='Nome' textContentType='name'/>
             <TextInput style={styles.form} placeholder='Altura' keyboardType='numeric' onChangeText={(altura)=>{this.setState({altura})}}/>
             
             {/*Botão*/}
             <TouchableOpacity style={styles.bt} onPress={this.calcular}><Text style={styles.btText}>Calcular</Text></TouchableOpacity>
          
            {/*Resultado*/}
            <Text style={styles.pesoIdeal}>Peso Ideal para o homem: {this.state.pesoH.toFixed(1)}</Text>
            <Text style={styles.pesoIdeal}>Peso Ideal para a mulher: {this.state.pesoM.toFixed(1)}</Text>
           
            
          </View>

        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fundo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  box: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    marginBottom: 50,
    justifyContent: 'center',
  },

  logo: {
    width: 50,
    height: 45,
    alignSelf: 'center',
  },

  titulo: {
    fontSize: 40,
    color: '#ffffff',
    fontWeight: '700',
    alignSelf: 'center',
    paddingLeft: 10,
  },

  principal: {
    width: 370,
    height: 420,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    marginBottom: 150,
    borderRadius: 10,
  },

  form: {
    height: 40,
    width: 320,
    padding: 10,
    fontSize: 15,
    color: '#333',
    backgroundColor: 'rgba(250,250,250, 0)',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 1,
    marginTop: 20,
  },

  bt: {
    margin: 30,
    padding: 15,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dc57e6',
    borderRadius: 5,
  },

  btText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 15,
    fontWeight: '500',
  },

  result1: {
    fontSize: 30,
    fontWeight: '700',
  },

  pesoIdeal: {
    fontSize: 17,
    padding: 5,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.5)'
  },

});
